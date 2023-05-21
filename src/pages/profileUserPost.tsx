/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NavBar from "../components/navBar";
import SideUserFollow from "../components/sideUser";
import {
  getArticlesByAuthor,
  getPostDetail,
  getTagArticles,
  loading,
} from "../features/authorFeatures/articlesSlide";
import { getComment } from "../features/comment/commentSlice";
import {
  getAuthorProfile,
  getUserProfile,
} from "../features/userFeatures/userSlice";
import { postType } from "../Types/articlesType";

export interface profileUserPost {}

export default function ProfileUserPost(props: profileUserPost) {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector(
    (state) => state.user.authorProfile.profile
  );
  const navigate = useNavigate();
  const post = useAppSelector(
    (state) => state.articles.listArticleByAuthor.articles
  );
  const totalPost = useAppSelector(
    (state) => state.articles.listArticleByAuthor.articlesCount
  );

  function handlePostUser(data: postType) {
    // console.log(data.slug);
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

  useEffect(() => {
    dispatch(loading());
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <div className="sm:flex sm:mx-24 mx-4">
      <NavBar />
      <div>
        <div className="sm:w-[1000px]  sm:my-3 my-6 sm:px-32 overflow-hidden">
          <div>
            <div className="flex justify-between mt-5 mb-7">
              <h2 className=" text-header font-bold font-helvetica">
                {userProfile.username} ({totalPost})
              </h2>
            </div>
            <div className="flex pb-3 mb-9 border-b-[1px] border-b-gray3">
              <div className="w-[50px] mr-5">
                <Link to="" className="bg-white hover:bg-gray-200 ">
                  <span className="text-sm">All</span>
                </Link>
              </div>
              <div className="text-gray2">
                <Link to="" className=" bg-white hover:bg-slate-200 ">
                  <span className="text-sm">Responses</span>
                </Link>
              </div>
            </div>
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
                      onClick={() => (navigate("/post"), handlePostUser(post))}
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
                          {Math.floor(Math.random() * 8 + 1)} mind read &nbsp; ·
                          &nbsp; Selected for you
                        </p>
                      </div>
                      <div>
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
    </div>
  );
}
