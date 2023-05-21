/** @format */

import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import MyLoader from "../components/myLoader";
import { getTag, loading } from "../features/authorFeatures/articlesSlide";

export interface IntroPageProps {}

export default function IntroPage(props: IntroPageProps) {
  const dispatch = useAppDispatch();
  const post = useAppSelector((state) => state.articles.listArticle.articles);

  useEffect(() => {
    dispatch(loading());
    dispatch(getTag());
  }, [dispatch]);
  const loadingPost = useAppSelector((state) => state.articles.loading);

  return (
    <div>
      <div className="bg-yellow border-b ">
        <div className="">
          <div className="grid h-20 grid-cols-2  mx-auto py-6 border-b-[1px] border-b-[#000000]">
            <div className="block w-40 pl-3 my-auto ">
              <a
                className="ay az ba bb bc bd be bf bg bh bi bj bk bl bm"
                rel="noopener follow"
                href="/"
              >
                <svg viewBox="0 0 3940 610" className="font-normal">
                  <path d="M594.79 308.2c0 163.76-131.85 296.52-294.5 296.52S5.8 472 5.8 308.2 137.65 11.69 300.29 11.69s294.5 132.75 294.5 296.51M917.86 308.2c0 154.16-65.93 279.12-147.25 279.12s-147.25-125-147.25-279.12S689.29 29.08 770.61 29.08s147.25 125 147.25 279.12M1050 308.2c0 138.12-23.19 250.08-51.79 250.08s-51.79-112-51.79-250.08 23.19-250.08 51.8-250.08S1050 170.09 1050 308.2M1862.77 37.4l.82-.18v-6.35h-167.48l-155.51 365.5-155.51-365.5h-180.48v6.35l.81.18c30.57 6.9 46.09 17.19 46.09 54.3v434.45c0 37.11-15.58 47.4-46.15 54.3l-.81.18V587H1327v-6.35l-.81-.18c-30.57-6.9-46.09-17.19-46.09-54.3V116.9L1479.87 587h11.33l205.59-483.21V536.9c-2.62 29.31-18 38.36-45.68 44.61l-.82.19v6.3h213.3v-6.3l-.82-.19c-27.71-6.25-43.46-15.3-46.08-44.61l-.14-445.2h.14c0-37.11 15.52-47.4 46.08-54.3m97.43 287.8c3.49-78.06 31.52-134.4 78.56-135.37 14.51.24 26.68 5 36.14 14.16 20.1 19.51 29.55 60.28 28.09 121.21zm-2.11 22h250v-1.05c-.71-59.69-18-106.12-51.34-138-28.82-27.55-71.49-42.71-116.31-42.71h-1c-23.26 0-51.79 5.64-72.09 15.86-23.11 10.7-43.49 26.7-60.45 47.7-27.3 33.83-43.84 79.55-47.86 130.93-.13 1.54-.24 3.08-.35 4.62s-.18 2.92-.25 4.39a332.64 332.64 0 0 0-.36 21.69C1860.79 507 1923.65 600 2035.3 600c98 0 155.07-71.64 169.3-167.8l-7.19-2.53c-25 51.68-69.9 83-121 79.18-69.76-5.22-123.2-75.95-118.35-161.63m532.69 157.68c-8.2 19.45-25.31 30.15-48.24 30.15s-43.89-15.74-58.78-44.34c-16-30.7-24.42-74.1-24.42-125.51 0-107 33.28-176.21 84.79-176.21 21.57 0 38.55 10.7 46.65 29.37zm165.84 76.28c-30.57-7.23-46.09-18-46.09-57V5.28L2424.77 60v6.7l1.14-.09c25.62-2.07 43 1.47 53.09 10.79 7.9 7.3 11.75 18.5 11.75 34.26v71.14c-18.31-11.69-40.09-17.38-66.52-17.38-53.6 0-102.59 22.57-137.92 63.56-36.83 42.72-56.3 101.1-56.3 168.81C2230 518.72 2289.53 600 2378.13 600c51.83 0 93.53-28.4 112.62-76.3V588h166.65v-6.66zm159.29-505.33c0-37.76-28.47-66.24-66.24-66.24-37.59 0-67 29.1-67 66.24s29.44 66.24 67 66.24c37.77 0 66.24-28.48 66.24-66.24m43.84 505.33c-30.57-7.23-46.09-18-46.09-57h-.13V166.65l-166.66 47.85v6.5l1 .09c36.06 3.21 45.93 15.63 45.93 57.77V588h166.8v-6.66zm427.05 0c-30.57-7.23-46.09-18-46.09-57V166.65L3082 212.92v6.52l.94.1c29.48 3.1 38 16.23 38 58.56v226c-9.83 19.45-28.27 31-50.61 31.78-36.23 0-56.18-24.47-56.18-68.9V166.66l-166.66 47.85V221l1 .09c36.06 3.2 45.94 15.62 45.94 57.77v191.27a214.48 214.48 0 0 0 3.47 39.82l3 13.05c14.11 50.56 51.08 77 109 77 49.06 0 92.06-30.37 111-77.89v66h166.66v-6.66zM3934.2 588v-6.67l-.81-.19c-33.17-7.65-46.09-22.07-46.09-51.43v-243.2c0-75.83-42.59-121.09-113.93-121.09-52 0-95.85 30.05-112.73 76.86-13.41-49.6-52-76.86-109.06-76.86-50.12 0-89.4 26.45-106.25 71.13v-69.87l-166.66 45.89v6.54l1 .09c35.63 3.16 45.93 15.94 45.93 57V588h155.5v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66V255.72c7-16.35 21.11-35.72 49-35.72 34.64 0 52.2 24 52.2 71.28V588h155.54v-6.66l-.82-.2c-26.46-6.22-35-17.56-35-46.66v-248a160.45 160.45 0 0 0-2.2-27.68c7.42-17.77 22.34-38.8 51.37-38.8 35.13 0 52.2 23.31 52.2 71.28V588z"></path>
                </svg>
              </a>
            </div>
            <div className="flex  justify-end">
              <Link to="/home" className="mr-4 my-auto introResponse">
                <p className="text-sm hover:text-white">Our stories</p>
              </Link>
              <Link to="" className="mr-4 my-auto introResponse">
                <span className="text-sm hover:text-white">Membership</span>
              </Link>
              <Link to="" className="mr-4 my-auto introResponse">
                <span className="text-sm hover:text-white">Write</span>
              </Link>
              <Link to="login" className="mr-4 my-auto introResponse">
                <span className="text-sm hover:text-white">Sign in</span>
              </Link>
              <Link to="" className="mr-4 my-auto">
                <p className="text-sm text-white rounded-3xl px-4 py-2 bg-black hover:text-black  hover:bg-white">
                  Get Started
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[550px]  grid  sm:grid-cols-2 max-w-6xl mx-auto">
          <div className="my-auto response-title p-intro">
            <h1 className="sm:text-9xl sm:mb-8 mb-5 response-title text-title text-6xl">
              Stay curious.
            </h1>
            <h4 className="sm:text-xl sm:w-[400px] w-[320px] text-lg font-helvetica mb-8">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h4>
            <Link to="/login" className="">
              <p className="text-xl text-white rounded-3xl px-4 py-2 w-[200px] text-center bg-black hover:text-black  hover:bg-white">
                Get Started
              </p>
            </Link>
          </div>
          <div className="my-auto introResponse">
            <img src={require("../image/bg-1.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="p-intro">
        <div className="max-w-6xl mx-auto py-8 my-2  border-b-[1px]  border-b-gray3 ">
          <h4 className="mb-5">
            <i className="fa-solid fa-arrow-trend-up"></i>
            &ensp; TRENDING ON MEDIUM
          </h4>
          <Link to="/login">
            <div className="grid sm:grid-cols-3 gap-x-6 gap-y-6">
              <div className="flex  gap-x-2 cursor-pointer">
                <div className="block mr-2">
                  <h1 className="font-extrabold text-3xl w-auto text-gray opacity-30 font-helvetica">
                    01
                  </h1>
                </div>
                <div>
                  <div className="flex  mb-2">
                    <img
                      src="https://anhdepfree.com/wp-content/uploads/2020/06/icon-facebook-cute.png"
                      width="24px"
                      height="24px"
                      className="rounded-xl"
                      alt=""
                    />
                    <p className="ml-2 text-base font-helvetica">Daniel</p>
                  </div>
                  <h2 className="text-base font-medium mb-2">
                    How I Earned €150 in 2 Minutes | HTML injection in email
                  </h2>
                  <p className="text-gray text-xs">Sep 3 · 9 mind read</p>
                </div>
              </div>
              <div className="flex  gap-x-2 cursor-pointer">
                <div className="block mr-2">
                  <h1 className="font-extrabold text-3xl w-auto text-gray opacity-30 font-helvetica">
                    02
                  </h1>
                </div>
                <div>
                  <div className="flex  mb-2">
                    <img
                      src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-vui-nhon.jpg"
                      width="24px"
                      height="24px"
                      className="rounded-xl"
                      alt=""
                    />
                    <p className="ml-2 text-base font-helvetica">David Black</p>
                  </div>
                  <h2 className="text-base font-medium mb-2">
                    How I Earned €150 in 2 Minutes | HTML injection in email
                  </h2>
                  <p className="text-gray text-xs">May 2 · 3 mind read</p>
                </div>
              </div>
              <div className="flex  gap-x-2 cursor-pointer">
                <div className="block mr-2">
                  <h1 className="font-extrabold text-3xl w-auto text-gray opacity-30 font-helvetica">
                    03
                  </h1>
                </div>
                <div>
                  <div className="flex  mb-2">
                    <img
                      src="https://anhdepfree.com/wp-content/uploads/2020/06/icon-facebook-cute.png"
                      width="24px"
                      height="24px"
                      className="rounded-xl"
                      alt=""
                    />
                    <p className="ml-2 text-base font-helvetica">Long Vũ</p>
                  </div>
                  <h2 className="text-base font-medium mb-2">
                    Ukraine War, 16 September 2022: East Kharkiv
                  </h2>
                  <p className="text-gray text-xs">Sep 17 · 7 mind read</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="pt-3 sm:hidden">
          <h4 className="text-[14px]  font-medium">
            DISCOVER MORE OF WHAT MATTERS TO YOU
          </h4>
          <div className="flex flex-wrap mt-4 mb-4 pb-3 border-b-[1px]  border-b-gray3 ">
            <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
              Seft
            </div>
            <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
              Not
            </div>
            <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
              Queenly
            </div>
            <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
              Passing
            </div>
            <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
              Passing
            </div>
            <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
              Passing
            </div>
          </div>
        </div>

        <Link to="/login">
          <div className="sm:max-w-6xl flex   mx-auto sm:py-8 pb-2 my-8 ">
            <div className="sm:w-4/6 ">
              {post.map((post, index) => {
                const date = new Date(post.createdAt).toDateString();

                return loadingPost ? (
                  <Spinner animation="border" role="status">
                    <MyLoader />
                  </Spinner>
                ) : (
                  <div key={index} className="mb-7 w-11/12">
                    <div className="flex  mb-2">
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
                    <h2 className="sm:text-2xl max-w-[680px]  sm:max-w-3xl font-medium mb-3 cursor-pointer sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis text-ellip">
                      {post.title}
                    </h2>
                    <h3 className="font-helvetica introResponse text-gray mb-1 cursor-pointer">
                      {post.description}
                    </h3>
                    <div className="flex justify-between ">
                      <div className="flex">
                        <p className="text-gray my-auto font-helvetica text-sm">
                          {date} · 4 mind read &emsp; &emsp;{" "}
                        </p>
                        {post.tagList.map((tag, index) => (
                          <button
                            key={index}
                            className="cursor-pointer mr-3 font-helvetica text-xs  text-blue-gray-400 px-4 py-1 rounded-2xl bg-gray1 introResponse"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                      <button>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z"
                            fill="#292929"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className=" w-2/6 introResponse ml-24">
              <div className="">
                <h4 className="text-[14px] font-medium">
                  DISCOVER MORE OF WHAT MATTERS TO YOU
                </h4>
                <div className="flex flex-wrap mt-4 mb-4 pb-8 border-b-[1px]  border-b-gray3 ">
                  <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
                    Seft
                  </div>
                  <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
                    Not
                  </div>
                  <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
                    Queenly
                  </div>
                  <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
                    Passing
                  </div>
                  <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
                    Passing
                  </div>
                  <div className="px-4 py-2 mx-1 mb-2 cursor-pointer rounded-sm border-[#F2F2f2] text-xs font-thin text-gray border-solid border">
                    Passing
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex flex-wrap  pt-8">
                <div className=" mx-3 mb-2  text-sm font-thin cursor-pointer text-gray">
                  Help
                </div>
                <div className=" mx-3 mb-2  text-sm font-thin cursor-pointer text-gray">
                  Status
                </div>
                <div className=" mx-3 mb-2  text-sm font-thin cursor-pointer text-gray">
                  Writers
                </div>
                <div className=" mx-3 mb-2  text-sm font-thin cursor-pointer text-gray">
                  Blog
                </div>
                <div className=" mx-3 mb-2  text-sm font-thin cursor-pointer text-gray">
                  Careers
                </div>
                <div className=" mx-3 mb-2  text-sm font-thin cursor-pointer text-gray">
                  Privacy
                </div>
                <div className=" mx-3 mb-2  text-sm font-thin cursor-pointer text-gray">
                  Terms
                </div>
                <div className=" mx-3 mb-2  text-sm font-thin cursor-pointer text-gray">
                  About
                </div>
                <div className=" mx-3 mb-2  text-sm font-thin cursor-pointer text-gray">
                  Knowable
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="sm:hidden  text-white bg-black">
        <img
          src=""
          alt=""
          className="w-64"
        />
        <div className="flex py-4 text-sm  px-4 border-b-[#ffffff] border-b-[0.5px]">
          <div className="mr-2">About</div>
          <div className="mr-2">Help</div>
          <div className="mr-2">Terms</div>
          <div className="mr-2">Privacy</div>
        </div>
        <div className=" py-4 text-md px-4">
          <div className="mr-2">Get the Medium App</div>
          <div className="flex my-4">
            <img
              alt="A button that says 'Download on the App Store', and if clicked it will lead you to the iOS App store"
              src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-vui-nhon.jpg"
              width="135"
              height="41"
              loading="lazy"
            />
            <img
              alt="A button that says 'Get it on, Google Play', and if clicked it will lead you to the Google Play store"
              src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-vui-nhon.jpg"
              width="135"
              height="41"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
