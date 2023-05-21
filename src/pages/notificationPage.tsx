/** @format */

import { Link, Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import SideNav from "../components/sideNav";

export interface NotificationProps {}

export default function NotificationPage(props: NotificationProps) {
  return (
    <div className="sm:flex sm:mx-24 mx-4">
      <NavBar />
      <div>
        <div className="sm:w-[1000px]  sm:my-12 sm:px-32">
          <div className="flex justify-between mt-14 mb-7">
            <h2 className=" text-header font-bold font-helvetica">
              Notifications
            </h2>
          </div>
          <div className="flex pb-3 mb-9 border-b-[1px] border-b-gray3">
            <div className="w-[50px] mr-5">
              <Link to="" className=" hover:bg-gray-200 ">
                <span className="text-sm">All</span>
              </Link>
            </div>
            <div className="text-gray2">
              <Link to="" className="  hover:bg-slate-200 ">
                <span className="text-sm">Responses</span>
              </Link>
            </div>

            <Outlet />
          </div>
          <div className="sm:flex justify-between">
            <div className="my-3   hover:bg-slate-200 text-gray2 text-sm">
              You're all caught up.
            </div>
            <div className="my-3   text-green1 hover:text-light-green-800 cursor-pointer  text-sm">
              Your starts
            </div>
          </div>
        </div>
      </div>
      <SideNav />
    </div>
  );
}
