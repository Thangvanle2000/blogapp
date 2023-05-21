/** @format */

import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import DarkMode from "../darkmod/darkMode";
import {
  getArticlesByAuthor,
  getPostDetail,
  getTagArticles,
} from "../features/authorFeatures/articlesSlide";
import { getComment } from "../features/comment/commentSlice";
import { getAuthorProfile } from "../features/userFeatures/userSlice";
import { postType } from "../Types/articlesType";
import SearchForm from "./searchForm";
export interface SideNavProps {}

export default function SideNav(props: SideNavProps) {
  const post = useAppSelector((state) => state.articles.listArticle.articles);
  const tags = useAppSelector((state) => state.articles.tagList.tags);
  const dispatch = useAppDispatch();

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

  return (
    <div className=" w-1/4 h-full   fixed z-20 overflow-y-scroll top-0 right-0 border-l-gray1 side-nav border-l-[1px] ">
      <div className="h-full flex flex-col px-6 items-start justify-start  w-full ">
        <DarkMode />
        <SearchForm />
        <div className="flex mb-6">
          <div className="w-2 h-2 my-auto mr-4 bg-green rounded-full"></div>
          <p>Staff Pinks</p>
        </div>
        <div className="mb-8">
          {post?.map((post, index) => (
            <div key={index} className="mb-4">
              <button onClick={() => handleProfileUser(post.author.username)}>
                <div className="flex mb-1 ">
                  <img
                    src={post?.author.image}
                    width="24px"
                    height="24px"
                    className="rounded-xl"
                    alt=""
                  />
                  <p className="ml-2 text-sm my-auto font-helvetica font-bold">
                    {post?.author.username}
                  </p>
                </div>
              </button>
              <div>
                <p
                  className="font-medium cursor-pointer titleStyle"
                  onClick={() => (navigate("/post"), handlePostUser(post))}
                >
                  {" "}
                  {post?.title}
                </p>
              </div>
            </div>
          ))}
          <Link to="" className="text-[#1A8917] text-xs">
            See the full list
          </Link>
        </div>
        <div className="mb-8 pb-3 border-b-gray1 border-b-[1px] ">
          <div className="flex mx-auto justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png"
              alt=""
              width="50px"
            />
            <p className="my-auto mx-3">+</p>
            <img
              src="https://img.freepik.com/free-icon/twitter_318-674515.jpg"
              alt=""
              className="w-7 h-7 my-auto"
            />
          </div>
          <p className="font-thin font-helvetica mb-3 text-center w-4/5 mx-auto">
            Discover Medium writers you already follow on Twitter.
          </p>

          <button className="mx-14 px-4 py-3 mb-4  hover:bg-black hover:text-white border rounded-full hover:">
            <div className="flex mx-auto">
              <img
                src="https://img.freepik.com/free-icon/twitter_318-674515.jpg"
                alt=""
                className="w-5 h-5 my-auto mr-2"
              />
              <p className="font-helvetica  text-sm  font-thin text-center">
                Connect to Twitter
              </p>
            </div>
          </button>

          <div className="text-center mx-auto pb-8 ">
            <p className=" text-sm text-blue-gray-400 underline underline-offset-1 ">
              Maybe Later
            </p>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="mb-4">Recommend topics</h3>
          <div className="flex flex-wrap">
            {tags?.map((tag, index) => (
              <button
                onClick={() => handleTagArticles(tag)}
                key={index}
                className="px-2 text-sm py-1 bg-gray1 mb-3 mr-3  rounded-full hover:text-white hover:bg-blue-gray-100"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-10">
          <h3 className="mb-4">Reading list</h3>
          <p className="text-sm text-gray2 mb-3">
            Click save on any story to easily add it to your reading list or a
            custom list that you can share.
          </p>
          <div className="text-xs text-gray2 mb-4">
            <Link to="" className="mr-2">
              Helps
            </Link>
            <Link to="" className="mr-2">
              Blogs
            </Link>
            <Link to="" className="mr-2">
              Status
            </Link>
            <Link to="" className="mr-2">
              Privacy
            </Link>
            <Link to="" className="mr-2">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
