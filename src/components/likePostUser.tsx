/** @format */

import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getArticlesByAuthor,
  getLikeUser,
  getPostDetail,
  getTagArticles,
} from "../features/authorFeatures/articlesSlide";
import { getComment } from "../features/comment/commentSlice";
import { getAuthorProfile } from "../features/userFeatures/userSlice";
import { postType } from "../Types/articlesType";

export interface LikePostUserProps {}

export default function LikePostUser(props: LikePostUserProps) {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.articles.listLikePost.articles);
  const totalPost = useAppSelector(
    (state) => state.articles.listLikePost.articlesCount
  );
  const name = useAppSelector((state) => state.user.userProfile.user.username);

  const navigate = useNavigate();

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

  React.useEffect(() => {
    dispatch(getLikeUser(name));
  }, [dispatch]);

  return (
    <div className="">
      <h1 className="text-xl mb-6">Like Post - ({totalPost})</h1>
      {post.map((post, index) => {
        const date = new Date(post.createdAt).toDateString();
        return (
          <div key={index} className="pb-8 mb-8 border-b-gray1 border-b-[1px]">
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
  );
}
