/** @format */

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import NavBar from "../components/navBar";
import SideProfile from "../components/sideProfile";
import { logoutUser } from "../features/auth/authSlice";
import { updateUserProfile } from "../features/userFeatures/userSlice";
import Swal from "sweetalert2";
import { updateUser } from "../Types/currentUserType";
import withReactContent from "sweetalert2-react-content";

export interface ProfilePageProps {}

type FormData = {
  image: string;
  shortBio: string;
  email: string;
};
export default function ProfilePage(props: ProfilePageProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userProfile = useAppSelector((data) => data.user.userProfile.user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const submitForm = ({ image, email, shortBio }: any) => {
    const data: updateUser = {
      user: {
        email: email,
        bio: shortBio,
        image: image,
      },
    };
    navigate("/home");
    toast.success("Change your profile success ! 🥳", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    });

    dispatch(updateUserProfile(data));
    reset();
  };
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
          localStorage.removeItem('user');
          localStorage.removeItem('access_token');
          localStorage.removeItem('expirationTime');
          
        }
        handleLogout();
      },
    });
  };
  const validateImageUrl = (value:any) => {
    if (!/^https?:\/\/\S+\.(?:jpg|jpeg|gif|png)$/i.test(value)) {
      return "Please enter a valid image URL.";
    }
  };

  return (
    <div>
      <div className="sm:flex sm:mx-24 mx-4">
        <NavBar />
        <div>
          <div className="sm:w-4/5 font-helvetica my-12 sm:px-32">
            <h1 className="text-4xl  mb-10">Setting Profile</h1>
            <div className="border-t-[1px] py-9 ">
              <h2 className="text-2xl mb-5 ">About you</h2>
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8 mb-8">
                  <div className="">
                    <label className="mb-2 text-lg font-md " htmlFor="name">
                      Avatar
                    </label>
                    <input
                      id="image"
                      value={userProfile.image}
                      placeholder="Add link your image avatar"
                      className="w-full my-2 p-1 border-b-[1px] outline-0 border-b-gray3"
                      {...register("image", {
                        required: "Image is required.",
                        validate: validateImageUrl
                      })}
                      
                    />
                    <p className="text-sm text-red-500 mb-1">
                      {errors.image?.message}
                    </p>
                    <p className="text-xs">
                      Your avatar on your Profile page, as your byline, and in
                      your responses.
                    </p>
                  </div>
                  <div className="">
                    <label className="mb-2 text-lg font-md " htmlFor="email">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={userProfile?.email}
                      className="w-full my-2 p-1 border-b-[1px] outline-0 border-b-gray3"
                      placeholder="Add your short bio"
                      {...register("email", { required: "Email is required." })}
                    />
                    <p className="text-sm text-red-500 mb-1">
                      {errors.email?.message}
                    </p>
                    <p className="text-xs">Change your email .</p>
                  </div>
                </div>
                <div className="mb-12">
                  <label className="mb-2 text-lg font-md " htmlFor="shortBio">
                    Short Bio
                  </label>
                  <input
                    id="shortBio"
                    value={userProfile.bio}
                    className="w-full my-2 p-1 border-b-[1px] outline-0 border-b-gray3"
                    placeholder="Add your short bio"
                    {...register("shortBio", { required: "Bio is required." })}
                  />
                  <p className="text-sm text-red-500 mb-1">
                    {errors.shortBio?.message}
                  </p>
                  <p className="text-xs">
                    Your short bio appears on your Profile and next to your
                    stories. Max 160 characters.
                  </p>
                </div>

                <button
                  type="submit"
                  className=" text-black px-8 py-3 rounded-full  hover:bg-black hover:text-white border-[1px] border-black mb-2"
                >
                  Save
                </button>
              </form>
              <button
                className="font-helvetica text-black border-[1px] px-6 py-3 bg-white rounded-full hover:bg-black hover:text-white sm:hidden"
                onClick={() => showSwalWithLink("/login")}
              >
                Sign Out &nbsp;{" "}
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
            </div>
          </div>
        </div>
        <SideProfile />
      </div>
    </div>
  );
}
