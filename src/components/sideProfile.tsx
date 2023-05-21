/** @format */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logoutUser } from "../features/auth/authSlice";
import { getUserProfile } from "../features/userFeatures/userSlice";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SearchForm from "./searchForm";
export interface SideProfileProps {}

export default function SideProfile() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userProfile = useAppSelector((data) => data.user.userProfile.user);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  const MySwal = withReactContent(Swal);

  const showSwalWithLink = (page: string) => {
    MySwal.fire({
      title: "Are you sure log out?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want log out!",
      preConfirm: () => {
        function handleLogout() {
          dispatch(logoutUser());
          navigate(`${page}`);
        }
        handleLogout();
      },
    });
  };

  return (
    <div className="h-full w-1/4 hidden lg:block fixed z-20 overflow-y-auto  top-0 right-0 border-l-gray1 border-l-[1px]">
      <div className="h-full flex flex-col px-6 items-start justify-start  w-full ">
        <SearchForm />

        <div>
          <img
            className="rounded-full mb-4"
            src={`${userProfile?.image}`}
            alt=""
            width="130px"
          />
          <h1 className=" font-medium text-3xl mb-6">{userProfile?.username}</h1>
          <div className=" font-helvetica mb-6 pb-4 border-b-gray3 border-b-[1px]">
            <h3 className=" text-md  font-semibold mb-2">About you</h3>
            <ul className="text-blue-gray-700">
              <li className="mb-2">
                <i className="fa-solid fa-user mb"></i> &nbsp;{" "}
                {userProfile?.username}
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-envelope"></i> &nbsp;
                {userProfile?.email}
              </li>
              <li className="mb-2">
                <i className="fa-solid fa-circle-info"></i> &nbsp;{" "}
                {userProfile?.bio}
              </li>
            </ul>
          </div>
          <button
            className="font-helvetica text-black border-[1px] px-6 py-3 bg-white rounded-full hover:bg-black hover:text-white"
            onClick={() => showSwalWithLink("/login")}
          >
            Sign Out &nbsp; <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
