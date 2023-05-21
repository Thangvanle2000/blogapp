/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getPostDetail,
  getTagArticles,
} from "../features/authorFeatures/articlesSlide";
import { getComment } from "../features/comment/commentSlice";
import { getAuthorProfile } from "../features/userFeatures/userSlice";
import { postType } from "../Types/articlesType";
import throttle from 'lodash.throttle';
export interface SearchProps {}

export default function SearchForm(props: SearchProps) {
  const tags = useAppSelector((state) => state.articles.tagList.tags);
  const posts = useAppSelector((state) => state.articles.listArticle.articles);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  function handleTagArticles(tag: string) {
    dispatch(getTagArticles(tag));
    navigate("/tag");
  }
  function handlePostUser(data: postType) {
    dispatch(getPostDetail(data.slug));
    dispatch(getComment(data.slug));
    dispatch(getAuthorProfile(data.author.username));
  }

  const [query, setQuery] = useState("");
  const handleChange =throttle((e: any) => {
    const userInput = e.target.value;
    const sanitizedInput = userInput.replace(/[^a-zA-Z0-9\s]/g, '');
    e.preventDefault();
    setQuery(sanitizedInput);
  
  },500);
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event: any) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
    
    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <div>
      <form className="flex items-center mx-auto my-6 ">
        <label className="sr-only">Search</label>
        <div className="relative w-80">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
          <input
            type="search"
            id="simple-search"
            onChange={handleChange}
            onKeyDown={handleClick}
            className="bg-gray-50 border border-gray1  text-sm rounded-full   block w-full pl-10 p-2.5    dark:placeholder-gray-400 "
            placeholder="Search"
          />
        </div>
      </form>

      {isShown && (
        <div
          className={
            "absolute h-[400px] w-[300px] bg-white mx-1 drop-shadow-2xl overflow-x-auto search-blog"
          }
        >
          <div className="my-3">
            <h3 className="text-sm leading-4 uppercase mx-5">Articles</h3>
            <div className="text-borderLogo navbar-line flex justify-center items-center w-64 m-auto my-2"></div>
            {posts
              .filter((post) => {
                if (query === "") return;
                else if (
                  post.title.toLowerCase().includes(query.toLowerCase())
                ) {
                  return post;
                }
              })
              .map((post, index) => (
                <div
                  key={index}
                  className="my-3 flex mx-4 cursor-pointer"
                  onClick={() => (navigate("/post"), handlePostUser(post))}
                >
                  <img
                    src="https://api.realworld.io/images/smiley-cyrus.jpeg"
                    alt=""
                    className="h-6 w-6 rounded-3xl shadow-gray-50"
                  />
                  <div className=" text-sm mx-2 capitalize  mb-3 mr-3 sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis text-ellip ">
                    {post.title}
                  </div>
                </div>
              ))}
          </div>

          <div className="my-3">
            <h3 className="text-sm leading-4 uppercase mx-5">Tags</h3>
            <div className="text-borderLogo navbar-line flex justify-center items-center w-64 m-auto my-2"></div>
            {tags
              .filter((tag) => {
                if (query === "") return;
                else if (tag.toLowerCase().includes(query.toLowerCase())) {
                  return tag;
                }
              })
              .map((tag, index) => (
                <div
                  className="my-3 flex mx-4 cursor-pointer"
                  onClick={() => handleTagArticles(tag)}
                  key={index}
                >
                  <svg width="21" height="21">
                    <path d="M4.66 8.72L3.43 9.95a1.75 1.75 0 0 0 0 2.48l5.14 5.13c.7.7 1.8.69 2.48 0l1.23-1.22 5.35-5.35a2 2 0 0 0 .51-1.36l-.32-4.29a2.42 2.42 0 0 0-2.15-2.14l-4.3-.33c-.43-.03-1.05.2-1.36.51l-.79.8-2.27 2.28-2.28 2.27zm9.83-.98a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"></path>
                  </svg>

                  <div className=" text-sm mx-2 capitalize  mb-3 mr-3 ">
                    {tag}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
