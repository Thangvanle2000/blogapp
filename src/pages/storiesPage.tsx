/** @format */

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NavBar from "../components/navBar";
import SideNav from "../components/sideNav";
import {
  deleteArticles,
  getArticlesByAuthor,
  getPostDetail,
  getTagArticles,
} from "../features/authorFeatures/articlesSlide";
import { getComment } from "../features/comment/commentSlice";
import { getAuthorProfile } from "../features/userFeatures/userSlice";
import { postType } from "../Types/articlesType";
export interface StoriesPageProps {}

export default function StoriesPage(props: StoriesPageProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userProfile = useAppSelector((data) => data.user.userProfile.user);
  const post = useAppSelector(
    (state) => state.articles.listArticleByAuthor.articles
  );
  function handleDeletePost(post: postType) {
    dispatch(deleteArticles(post));
  }
  function handlePostUser(data: postType) {
    dispatch(getPostDetail(data.slug));
    dispatch(getComment(data.slug));
    dispatch(getAuthorProfile(data.author.username));
  }
  function handleTagArticles(tag: string) {
    dispatch(getTagArticles(tag));
    navigate("/tag");
  }

  useEffect(() => {
    dispatch(getArticlesByAuthor(userProfile.username));
    dispatch(getAuthorProfile(userProfile.username));
  }, [dispatch]);

  const MySwal = withReactContent(Swal);

  const showSwalWithLink = (post: postType) => {
    MySwal.fire({
      title: "Are you delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      preConfirm: () => {
        handleDeletePost(post);
      },
    });
  };

  return (
    <div className="flex mx-24">
      <NavBar />
      <div>
        <div className="w-[1000px] my-12 px-32">
          <div className="flex justify-between mt-14 mb-7">
            <h2 className=" text-header font-bold font-helvetica">
              Your Stories
            </h2>
            <Link to="/newPost">
              <button className="font-helvetica text-sm px-6 ml-52 py-1 h-10 text-white rounded-full bg-green1">
                Write a story
              </button>
            </Link>
            <button className="font-helvetica text-sm px-6  py-1 h-10 text-gray rounded-full border">
              Import a story
            </button>
          </div>
          <div className="flex pb-5 mb-9 border-b-[1px] border-b-gray3 m-auto">
            <div className="w-[50px] mr-5">
              <Link to="" className=" bg-white  mr-8">
                <span className="text-sm">Published</span>
              </Link>
              <Link to="" className=" bg-white text-blue-gray-200 mr-8">
                <span className="text-sm">Private</span>
              </Link>
            </div>
          </div>
          {post.length === 0 ? (
            <h1>You haven’t published any public stories yet.</h1>
          ) : (
            <div>
              {post.map((post, index) => {
                const date = new Date(post.createdAt).toDateString();
                return (
                  <div
                    key={index}
                    className="pb-8 mb-8 border-b-gray1 border-b-[1px]"
                  >
                    <button className="flex mb-2">
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
                          className="sm:text-2xl max-w-[600px] font-medium  sm:max-w-3xl  mb-3 cursor-pointer sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis text-ellip"
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
                              {Math.floor(Math.random() * 8 + 1)} mind read
                              &nbsp; · &nbsp; Selected for you
                            </p>
                          </div>
                          <div>
                            <button onClick={() => showSwalWithLink(post)}>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <SideNav />
    </div>
  );
}
