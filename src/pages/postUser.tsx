/** @format */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NavBar from "../components/navBar";
import SideUserFollow from "../components/sideUser";
import {
  favoritePost,
  getArticlesByAuthor,
  getPostDetail,
  getTagArticles,
  unFavoritePost,
} from "../features/authorFeatures/articlesSlide";
import {
  deleteComment,
  getComment,
  postComment,
} from "../features/comment/commentSlice";
import { getAuthorProfile } from "../features/userFeatures/userSlice";
import { postType } from "../Types/articlesType";
import { commentDeleteType } from "../Types/commentType";

export interface PostUserProps {}

export default function PostUser(props: PostUserProps) {
  const [open, SetOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();
  const postDetail = useAppSelector(
    (state) => state.articles.postDetail.article
  );

  const [like, setLike] = useState(postDetail.favorited);
  const date = new Date(postDetail.createdAt).toDateString();
  const post = useAppSelector((state) => state.articles.listArticle.articles);
  const comment = useAppSelector((state) => state.comment.listComment);
  const userProfile = useAppSelector((data) => data.user.userProfile.user);

  const onSubmitComment = ({ body }: any) => {
    const slug = postDetail.slug;

    const data: any = {
      slug: slug,
      comment: {
        body: body,
      },
    };
    dispatch(postComment(data));
    reset();
  };

  const navigate = useNavigate();

  function handlePostUser(data: postType) {
    dispatch(getPostDetail(data.slug));
    dispatch(getComment(data.slug));
    dispatch(getAuthorProfile(data.author.username));
  }

  function handleProfileUser(userName: string) {
    dispatch(getArticlesByAuthor(userName));
    dispatch(getAuthorProfile(userName));
    navigate("/profileUserPost");
  }

  function handleTagArticles(tag: string) {
    dispatch(getTagArticles(tag));
    navigate("/tag");
  }

  function handOpenSide() {
    SetOpen(!open);
  }

  function handleFavorite(slug: string) {
    if (like) {
      dispatch(unFavoritePost(slug));
      setLike(!like);
    }
    dispatch(favoritePost(slug));
    setLike(!like);
  }
  const MySwal = withReactContent(Swal);

  const showSwalWithLink = (id: any) => {
    MySwal.fire({
      title: "Are you sure delete comment?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      preConfirm: () => {
        function handleDeleteComment() {
          const slug = postDetail.slug;
          const data: commentDeleteType = {
            slug: slug,
            id: id,
          };
          dispatch(deleteComment(data));
        }
        handleDeleteComment();
      },
    });
  };

  return (
    <div>
      <div className="sm:flex sm:mx-24 mx-4">
        <NavBar />
        <div className="sm:w-[1000px]  sm:my-3 my-6 sm:px-32 overflow-hidden">
          <div>
            <div className="sm:my-6 ">
              <div className="flex sm:pt-6 justify-between mx-auto mb-8">
                <div className="flex ">
                  <button
                    onClick={() =>
                      handleProfileUser(postDetail.author.username)
                    }
                  >
                    <div className="mr-4">
                      <img
                        className="rounded-full"
                        src={`${postDetail.author.image}`}
                        width="48px"
                        height="48px"
                        alt=""
                      />
                    </div>
                  </button>
                  <div>
                    <h4 className="font-helvetica font-medium">
                      {postDetail.author.username}
                    </h4>
                    <p className="text-sm text-gray">
                      {date} &nbsp; · &nbsp;{" "}
                      <span className="font-helvetica"> 6 min read</span>
                    </p>
                  </div>
                </div>
                <div className="my-auto flex text-blue-gray-200">
                  <Link to="" className="mr-3  hover:text-black introResponse">
                    <i className="fa-brands fa-twitter "></i>
                  </Link>
                  <Link to="" className="mr-3  hover:text-black introResponse">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                  <Link to="" className="mr-3  hover:text-black introResponse">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                  <Link
                    to="/editArticle"
                    className="mr-8  hover:text-black introResponse"
                  >
                    <i className="fa-solid fa-gear"></i>
                  </Link>
                  <Link to="" className=" hover:text-black">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                        fill="#000"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="text-xl leading-8 font-normal  tracking-tight">
                <h1 className="font-medium pb-8 text-2xl sm:text-4xl">
                  {postDetail.title}
                </h1>
                <p className="pb-4 text-textPost text-base sm:text-lg">
                  {postDetail.body}
                </p>
              </div>
              <div className="flex mb-2">
                {postDetail?.tagList.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => handleTagArticles(tag)}
                    className="px-2 text-xs text-blue-gray-400  py-1 bg-gray1 mb-3 mr-3  rounded-full"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mb-12 text-gray2">
                <div className="">
                  <div className="flex mx-auto">
                    <button
                      className="flex"
                      onClick={() => handleFavorite(postDetail?.slug)}
                    >
                      {like ? (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.37.83L12 3.28l.63-2.45h-1.26zM15.42 1.84l-1.18-.39-.34 2.5 1.52-2.1zM9.76 1.45l-1.19.4 1.53 2.1-.34-2.5zM20.25 11.84l-2.5-4.4a1.42 1.42 0 0 0-.93-.64.96.96 0 0 0-.75.18c-.25.19-.4.42-.45.7l.05.05 2.35 4.13c1.62 2.95 1.1 5.78-1.52 8.4l-.46.41c1-.13 1.93-.6 2.78-1.45 2.7-2.7 2.51-5.59 1.43-7.38zM12.07 9.01c-.13-.69.08-1.3.57-1.77l-2.06-2.07a1.12 1.12 0 0 0-1.56 0c-.15.15-.22.34-.27.53L12.07 9z"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.74 8.3a1.13 1.13 0 0 0-.73-.5.67.67 0 0 0-.53.13c-.15.12-.59.46-.2 1.3l1.18 2.5a.45.45 0 0 1-.23.76.44.44 0 0 1-.48-.25L7.6 6.11a.82.82 0 1 0-1.15 1.15l3.64 3.64a.45.45 0 1 1-.63.63L5.83 7.9 4.8 6.86a.82.82 0 0 0-1.33.9c.04.1.1.18.18.26l1.02 1.03 3.65 3.64a.44.44 0 0 1-.15.73.44.44 0 0 1-.48-.1L4.05 9.68a.82.82 0 0 0-1.4.57.81.81 0 0 0 .24.58l1.53 1.54 2.3 2.28a.45.45 0 0 1-.64.63L3.8 13a.81.81 0 0 0-1.39.57c0 .22.09.43.24.58l4.4 4.4c2.8 2.8 5.5 4.12 8.68.94 2.27-2.28 2.71-4.6 1.34-7.1l-2.32-4.08z"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          aria-label="clap"
                        >
                          <path d="M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"></path>
                        </svg>
                      )}

                      <p className="my-auto pl-2">
                        {like
                          ? postDetail.favoritesCount + 1
                          : postDetail.favoritesCount}
                      </p>
                    </button>
                    <div className="w-8"></div>
                    <button className="flex" onClick={handOpenSide}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        aria-label="responses"
                      >
                        <path d="M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"></path>
                      </svg>
                      <p className="my-auto pl-2">{comment.comments.length}</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-helvetica my-10">
              <div className="">
                <div className="flex justify-between pb-8">
                  <div>
                    <h3 className="text-xl pb-3">
                      More from {postDetail.author.username}
                    </h3>
                  </div>
                </div>
                <div className="flex border-y-[1px] border-gray3  py-5 my-8 justify-center ">
                  <p className="mr-4 my-auto font-thin">
                    Share your ideas with millions of readers.
                  </p>
                  <button className="bg-black px-4 font-thin text-sm font-helvetica py-3 rounded-full text-white">
                    Write on medium
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" my-12 ">
            {post.map((post, index) => {
              const date = new Date(post.createdAt).toDateString();
              return (
                <div
                  key={index}
                  className="pb-8 mb-8 border-b-gray1 border-b-[1px]"
                >
                  <button
                    className="flex mb-2"
                    onClick={() => handleProfileUser(post.author.username)}
                  >
                    <img
                      src={`${post.author.image}`}
                      width="24px"
                      height="24px"
                      className="rounded-xl"
                      alt=""
                    />
                    <p className="ml-2 text-sm my-auto">
                      <span className="text-gray2">
                        {post.author.username} · {date}
                      </span>
                    </p>
                  </button>

                  <div className="sm:flex">
                    <div className="sm:w-11/12">
                      <h2
                        className="sm:text-2xl  max-w-[600px] font-medium  sm:max-w-3xl  mb-3 cursor-pointer sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis text-ellip"
                        onClick={() => (
                          navigate("/post"), handlePostUser(post)
                        )}
                      >
                        {post.title}
                      </h2>
                      <p className="textPost font-light mb-7 introResponse">
                        {post.description}
                      </p>
                      <div className="flex justify-between ">
                        <div className="flex">
                          {post.tagList.map((tag, index) => (
                            <button
                              key={index}
                              onClick={() => handleTagArticles(tag)}
                              className=" cursor-pointer mr-3 font-helvetica text-xs text-blue-gray-400 px-4 py-1 rounded-2xl bg-gray1 introResponse"
                            >
                              {tag}
                            </button>
                          ))}
                          <p className="text-gray my-auto  text-sm">
                            {Math.floor(Math.random() * 8 + 1)} mind read &nbsp;
                            · &nbsp; Selected for you
                          </p>
                        </div>
                        <div>
                          <div className="">
                            <button className="mr-4">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z"
                                  fill="#000"
                                ></path>
                              </svg>
                            </button>
                            {post.author.username === userProfile.username ? (
                              <button
                                className="py-auto"
                                onClick={() => showSwalWithLink(post.slug)}
                              >
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.25 12h7.5"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <SideUserFollow />

        <div
          className={`${
            open
              ? "w-96  pt-10 apg drop-shadow-xl duration-300 overflow-y-scroll ease-in-out transition  h-full bg-white fixed z-30 top-0 right-0"
              : "hidden"
          }`}
        >
          <div className="px-6 flex justify-between mb-4">
            <h3 className="text-xl">Responsive ({comment.comments.length})</h3>
            <button onClick={handOpenSide}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                className="my-auto"
              >
                <path d="M18.13 6.11l-5.61 5.61-5.6-5.61-.81.8 5.61 5.61-5.61 5.61.8.8 5.61-5.6 5.61 5.6.8-.8-5.6-5.6 5.6-5.62"></path>
              </svg>
            </button>
          </div>
          <div className="pb-8  mb-8 px-6 border-b-gray3 border-b-[1px]">
            <div className="p-4 shadow-lg  rounded-lg">
              <div className="flex mb-3">
                <img
                  className="rounded-full mr-3"
                  src={userProfile.image}
                  alt=""
                  width="36px"
                />
                <p className="my-auto">{userProfile.username}</p>
              </div>
              <form onSubmit={handleSubmit(onSubmitComment)}>
                <textarea
                  rows={4}
                  cols={40}
                  id="body"
                  placeholder="What are your thoughts ?"
                  className="w-full my-2 p-1 outline-0 border-b-gray3"
                  {...register("body")}
                />
                <button
                  type="submit"
                  className="font-helvetica text-white px-6 text-sm py-2 rounded-full bg-[#0f730c] "
                >
                  Response
                </button>
              </form>
            </div>
          </div>
          <div className="px-6">
            {comment.comments.map((comment, index) => {
              const date = new Date(comment.createdAt).toDateString();
              return (
                <div
                  key={index}
                  className="pb-8 border-b-[1px] mt-3 border-b-gray3"
                >
                  <div className="flex mb-3 justify-between">
                    <div className="flex mb-3">
                      <div className="my-auto mr-3">
                        <img
                          className="rounded-full"
                          src={`${comment.author.image}`}
                          alt=""
                          width="36px"
                        />
                      </div>
                      <div className="my-auto">
                        <h3>{comment.author.username}</h3>
                        <p className="text-sm text-gray">{date}</p>
                      </div>
                    </div>
                    {comment.author.username === userProfile.username ? (
                      <button
                        className="justify-end text-blue-gray-200 hover:text-red-500"
                        onClick={() => showSwalWithLink(comment.id)}
                      >
                        <i className="fa-solid fa-trash"> </i>
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <p className="font-helvetica font-extralight mb-2 text-sm text-[#292929]">
                    {comment.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
