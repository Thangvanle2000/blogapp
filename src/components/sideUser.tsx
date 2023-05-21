/** @format */

import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  followAuthor,
  unFollowAuthor,
} from "../features/userFeatures/userSlice";
import SearchForm from "./searchForm";

export interface SideUserFollow {}

export default function SideUserFollow(SideUserFollow: SideUserFollow) {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.articles.listArticle.articles);
  const userProfile = useAppSelector(
    (state) => state.user.authorProfile.profile
  );
  function handleFollow(username: string) {
    if (userProfile) {
      dispatch(unFollowAuthor(username));
    }
    dispatch(followAuthor(username));
  }

  return (
    <div>
      <div className="h-full w-1/4 hidden lg:block fixed z-20 overflow-y-auto  top-0 right-0 border-l-gray1 border-l-[1px]">
        <div className="h-full px-6  flex flex-col items-start justify-start  w-full">
          <SearchForm />
          <div>
            <div>
              <img
                className="rounded-full mb-4"
                src={`${userProfile.image}`}
                alt=""
                width="80px"
              />
              <h2 className="mb-2"> {userProfile.username}</h2>

              <h2 className="mb-4 text-gray2 ">{userProfile.bio}</h2>
              <div className="flex mb-10">
                <button onClick={() => handleFollow(userProfile.username)}>
                  {userProfile.following ? (
                    <div className="px-5 py-3 mr-4 rounded-full font-thin text-sm font-helvetica border hover:text-white hover:bg-[#0f730c] text-[#0f730c]  bg-white border-1-[#0f730c]">
                      Unfollow
                    </div>
                  ) : (
                    <div className="px-5 py-3 mr-4 rounded-full font-thin text-sm font-helvetica text-white bg-[#0f730c]">
                      Follow
                    </div>
                  )}
                </button>
                <button className="px-4 py-3 mr-4 rounded-full font-thin text-sm font-helvetica text-white bg-[#0f730c]">
                  <i className="fa-solid fa-envelope"></i>
                </button>
              </div>
            </div>

            <h3 className="mb-10">More from Medium</h3>
            <div className="mb-8">
              {post.map((post, index) => (
                <div key={index} className="flex mb-7 ">
                  <div className=" flex  ">
                    <div className="w-2/3 mr-4">
                      <div className=" flex mb-2">
                        <img
                          src={`${post.author.image}`}
                          width="24px"
                          height="24px"
                          className="rounded-xl"
                          alt=""
                        />
                        <p className="ml-2 text-base font-helvetica">
                          {post.author.username}
                        </p>
                      </div>

                      <h2 className="text-base  font-medium mb-3  cursor-pointer titleStyle">
                        {post.title}
                      </h2>
                    </div>
                    <div className=" w-2/6  justify-end">
                      <img
                        src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-vui-nhon.jpg"
                        alt=""
                        width="200px"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-xs text-gray2">
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
      </div>
    </div>
  );
}
