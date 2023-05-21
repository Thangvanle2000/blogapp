/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "react-loading-skeleton/dist/skeleton.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NavBar from "../components/navBar";
import SideNav from "../components/sideNav";
import StoriesForm from "../components/storiesForm";
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'
import {
  deleteArticles,
  getArticlesByAuthor,
  getPostDetail,
  getTag,
  getTagArticles,
  loading,
} from "../features/authorFeatures/articlesSlide";
import { getComment } from "../features/comment/commentSlice";
import {
  getAuthorProfile,
  getUserProfile,
} from "../features/userFeatures/userSlice";
import { postType } from "../Types/articlesType";

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  const post = useAppSelector((state) => state.articles.listArticle.articles);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userProfile = useAppSelector((data) => data.user.userProfile.user);
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

  function handleDeletePost(post: postType) {
    dispatch(deleteArticles(post));
  }

  function handleTagArticles(tag: string) {
    dispatch(getTagArticles(tag));
    navigate("/tag");
  }

  useEffect(() => {
    dispatch(loading());
    dispatch(getUserProfile());
    dispatch(getTag());
  }, [dispatch]);

  const MySwal = withReactContent(Swal);

  const showSwalWithLink = (slug: any) => {
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
        handleDeletePost(slug);
      },
    });
  };
  const loadingArticles = useAppSelector((state) => state.articles.loading);

  return (
    <>

    <div className="sm:flex sm:mx-24 mx-4">

      <NavBar />
      <div>
        {loadingArticles ? (
          <Spinner animation="border" role="status">
            <div className="h-full w-full">
              <div className="h-full w-full">
                <img
                  src={require("../image/load.gif")}
                  alt="loading..."
                  className="mx-auto"
                />
              </div>
            </div>
          </Spinner>
        ) : (
          <div className="sm:w-[1000px]  sm:my-12 my-6 sm:px-32 overflow-hidden">
            <div className="flex pb-5 mb-9 border-b-[1px] border-b-gray3">
              <div className="mr-9 text-gray2">
                <Link to={`/stories`} className=" bg-white  hover:bg-gray-200 ">
                  <svg width="19" height="19" className=" mt-[0.4px]">
                    <path d="M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z"></path>
                  </svg>
                </Link>
              </div>
              <div className="w-[100px] mr-4">
                <Link to="" className=" hover:bg-gray-200 ">
                  For You
                </Link>
              </div>
              <div className="text-gray2">
                <Link to="" className="  hover:bg-slate-200 ">
                  Following
                </Link>
              </div>
              <Outlet />
            </div>

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
                      src={`${post.author.image} `}
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
                        className="sm:text-2xl max-w-[600px]  sm:max-w-3xl font-medium mb-3 cursor-pointer sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis text-ellip"
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
                              className="cursor-pointer mr-3 font-helvetica text-xs  text-blue-gray-400 hover:text-white px-4 py-1 rounded-2xl bg-gray1 hover:bg-blue-gray-200 introResponse "
                            >
                              {tag}
                            </button>
                          ))}
                          <p className="text-gray my-auto  text-sm">
                            {Math.floor(Math.random() * 8 + 1)} mind read
                          </p>
                        </div>

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
                              onClick={() => showSwalWithLink(post)}
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
              );
            })}
          </div>
        )}
      </div>

      <SideNav />
    </div>
    </>
  );
}
