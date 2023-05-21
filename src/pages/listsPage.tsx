/** @format */

import { Link, NavLink, Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import SideNav from "../components/sideNav";

export interface ListPageProps {}

export default function ListPage(props: ListPageProps) {
  const myStyles = {
    color: "#000000",
  };
  return (
    <div className="sm:flex sm:mx-24 mx-4">
      <NavBar />
      <div>
        <div className="sm:w-[1000px]  sm:my-12 sm:px-32">
          <div className="flex justify-between mt-14 mb-7">
            <h2 className=" text-header font-bold font-helvetica">
              Your Lists
            </h2>
            <button className="font-helvetica  px-6 py-1 h-10 text-white rounded-full bg-green1 introResponse">
              New list
            </button>
          </div>
          <div className="flex pb-5 mb-9 border-b-[1px] border-b-gray3">
            <div className="w-[50px] mr-5">
              <NavLink
                to="savePost"
                className="text-blue-gray-300  hover:text-black "
                style={({ isActive }) => (isActive ? myStyles : undefined)}
              >
                <span className="text-sm">Saved</span>
              </NavLink>
            </div>
            <div className="text-gray2">
              <NavLink
                to="likePost"
                className=" text-blue-gray-300 hover:text-black "
                style={({ isActive }) => (isActive ? myStyles : undefined)}
              >
                <span className="text-sm">Like Post</span>
              </NavLink>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
      <SideNav />
    </div>
  );
}
