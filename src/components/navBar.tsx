/** @format */

import { Avatar, Tooltip } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
export interface NavbarProps {}

export default function NavBar(NavbarProps: NavbarProps) {
  const userProfile:any = useAppSelector((data) => data.user.userProfile.user);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  // useEffect(() => {
  //   dispatch(userProfile);
  // }, []);

  return (
    <div>
      <div className="h-screen  w-20 flex flex-col items-center fixed z-50 top-0 left-0 border-r-[1px] border-r-gray1 introResponse ">
        <div className="h-full flex flex-col items-start mt-6 justify-start space-x-0.5 w-full ">
          <div className=" flex pl-5 w-full justify-start items-center h-1/6">
            <Link to="/home">
              <svg viewBox="0 0 1043.63 592.71" className="h-6 text-logo">
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                  </g>
                </g>
              </svg>
            </Link>
          </div>

          <nav>
            <div></div>
            <Tooltip content="Home" placement="right">
              <NavLink
                className="flex pl-6 w-full text-iconNav justify-start items-center h-16 py-4"
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "black" : "",
                  };
                }}
                to={`/home`}
              >
                <svg
                  className="h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Home"
                >
                  <path
                    className="hidden test1"
                    d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    className="test"
                    d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </NavLink>
            </Tooltip>
            <Tooltip content="Notification" placement="right">
              <NavLink
                className="flex pl-6 w-full text-iconNav justify-start items-center h-16 py-4 group relative text-blue-500 underline duration-300"
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "black" : "",
                  };
                }}
                to={`/notification`}
              >
                <svg className="h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor"></path>
                  <path
                    d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                    stroke="currentColor"
                  ></path>
                  <path
                    className="hidden test1"
                    d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </NavLink>
            </Tooltip>

            <Tooltip content="Lists" placement="right">
              <NavLink
                className="flex pl-6 w-full text-iconNav justify-start items-center h-16 py-4 "
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "black" : "",
                  };
                }}
                to={`/list`}
              >
                <svg className="h-6 " viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
                    stroke="currentColor"
                    strokeLinecap="round"
                  ></path>
                  <path
                    className="hidden test1"
                    d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
                    fill="currentColor"
                    stroke="currentColor"
                  ></path>
                  <path
                    d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
                    stroke="currentColor"
                  ></path>
                </svg>
              </NavLink>
            </Tooltip>

            <Tooltip content="Stories" placement="right">
              <NavLink
                className="flex pl-6 w-full justify-start text-iconNav items-center h-16 py-4  "
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "black" : "",
                  };
                }}
                to={`/stories`}
              >
                <svg className="h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    className="hidden test1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 2.75c0-.41.34-.75.75-.75h14.5c.41 0 .75.34.75.75v18.5c0 .41-.34.75-.75.75H4.75a.75.75 0 0 1-.75-.75V2.75zM7 8.5c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 7c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM7 12c0-.28.22-.5.5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 7 12z"
                    fill="currentColor"
                  ></path>
                  <path
                    className="test"
                    d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                    stroke="currentColor"
                  ></path>
                  <path
                    className="test"
                    d="M8 8.5h8M8 15.5h5M8 12h8"
                    stroke="currentColor"
                  ></path>
                </svg>
              </NavLink>
            </Tooltip>
            <div className="text-borderLogo navbar-line flex justify-center items-center mx-5"></div>
            <NavLink
              className="flex pl-6 w-full justify-start text-iconNav items-center h-16 py-4 group relative text-blue-500 underline duration-300"
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "black" : "",
                };
              }}
              to={`/newPost`}
            >
              <svg className="h-6" viewBox="0 0 24 24" fill="none">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Write"
                >
                  <path
                    d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                    stroke="currentColor"
                  ></path>
                </svg>
              </svg>
            </NavLink>
          </nav>

          <div className="flex w-full justify-start items-center mt-28 mb-8 pl-3">
            <NavLink to={"/profile"}>
              <Avatar
                src={userProfile?.image}
                alt="avatar"
                size="md"
                variant="circular"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="h-14   w-full flex items-center fixed z-100 bottom-0 px-4 left-0 border-t-[1px] border-t-gray1 bg-white sm:hidden ">
        <NavLink
          className="w-1/4 "
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "black" : "",
            };
          }}
          to={`/home`}
        >
          <svg
            className="h-6 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            aria-label="Home"
          >
            <path
              className="hidden test1"
              d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z"
              fill="currentColor"
              stroke="currentColor"
              strokeLinejoin="round"
            ></path>
            <path
              className="test"
              d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
              stroke="currentColor"
            ></path>
            <path
              d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </NavLink>
        <NavLink
          className="w-1/4"
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "black" : "",
            };
          }}
          to={`/notification`}
        >
          <svg className="h-6 mx-auto" viewBox="0 0 24 24" fill="none">
            <path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor"></path>
            <path
              d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
              stroke="currentColor"
            ></path>
            <path
              className="hidden test1"
              d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
              fill="currentColor"
              stroke="currentColor"
              strokeLinejoin="round"
            ></path>
          </svg>
        </NavLink>
        <NavLink
          className="w-1/4"
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "black" : "",
            };
          }}
          to={`/list`}
        >
          <svg className="h-6 mx-auto" viewBox="0 0 24 24" fill="none">
            <path
              d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
              stroke="currentColor"
              strokeLinecap="round"
            ></path>
            <path
              className="hidden test1"
              d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
              fill="currentColor"
              stroke="currentColor"
            ></path>
            <path
              d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
              stroke="currentColor"
            ></path>
          </svg>
        </NavLink>
        <NavLink className="w-1/4 text-center" to={"/profile"}>
          <Avatar
            src={userProfile.image}
            alt="avatar"
            className="w-6 h-6"
            size="md"
            variant="circular"
          />
        </NavLink>
      </div>
      <div className="  fixed z-100 bottom-14 px-2 right-4 sm:hidden ">
        <button>
          <NavLink
            className="p-4 rounded-full bg-black opacity-90"
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "" : "",
              };
            }}
            to={`/newPost`}
          >
            <svg className="h-6" viewBox="0 0 24 24" fill="none">
              <svg
                className="text-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Write"
              >
                <path
                  d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                  fill="currentColor"
                ></path>
                <path
                  d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                  stroke="currentColor"
                ></path>
              </svg>
            </svg>
          </NavLink>
        </button>
      </div>
    </div>
  );
}
