/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NavBar from "../components/navBar";
import SideNav from "../components/sideNav";
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

export interface TagPage {}

export default function TagsPage(props: TagPage) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const post = useAppSelector(
    (state) => state.articles.listTagArticle.articles
  );

  const totalPost = useAppSelector(
    (state) => state.articles.listTagArticle.articlesCount
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
    // console.log(tag);
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
        <div className="sm:w-[1000px]  sm:my-12 my-6 sm:px-32 overflow-hidden">
          <div>
            <div className="flex justify-between sm:my-6">
              <h2 className=" text-header font-bold font-helvetica">
                ({totalPost})
              </h2>
            </div>
            <div className="flex pb-3 mb-9 border-b-[1px] border-b-gray3">
              <Outlet />
            </div>
            <div className="">
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
                              {Math.floor(Math.random() * 8 + 1)} mind read
                              &nbsp; · &nbsp; Selected for you
                            </p>
                          </div>
                          <div>
                            <button>
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
          </div>
        </div>
      </div>
      <SideNav />
    </div>
  );
}
