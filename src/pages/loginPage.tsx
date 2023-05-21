/** @format */

import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "../app/hooks";
import { AppDispatch } from "../app/store";
import LoginView from "../components/loginButton";
import { loginStart } from "../features/auth/authSlice";
import { useFormik } from "formik";
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'
import * as Yup from "yup";
export interface LoginPageProps {}
type FormLogin = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useAppSelector(
    (state) => state.auth.currentUser.isGetSuccess
  );
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormLogin>();
  const navigate = useNavigate();
 
  const submitForm = ({ email, password }: any) => {
    const data: any = {
      user: {
        email: email,
        password: password,
      },
    };
    dispatch(loginStart(data));
    if (loading === true) {
      
      navigate("/home");
      toast.success("Login Success 🥳", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    
    } else {
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .max(18, "Must be 18 characters or less")
        .min(3, "Password must be more 3 characters")
        .required("Password is required"),
    }),
    onSubmit: (values: any) => {
      submitForm(values);
    },
  });
  return (
    <div className="bg-styles  ">
      <div className="container container-full h-full ">
        <div className="sm:flex h-full w-full">
          <div className="sm:w-2/4"></div>
          <div className="sm:w-2/4 flex justify-center  content-center">
            <div className="sm:h-[590px] bg-white w-3/4 mt-16 my-auto py-8 px-2  rounded-lg ">
              <svg
                viewBox="0 0 1043.63 592.71"
                className="h-6 text-logo text-center mx-auto"
              >
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                  </g>
                </g>
              </svg>
              <h2 className="pt-8 text-2xl text-center font-helvetica font-bold">
                Sign in to Medium
              </h2>

              <form
                className="px-8 pt-4 pb-8 mb-4 bg-white rounded"
                onSubmit={formik.handleSubmit}
              >
                <div className="my-5">
                  <label className="block mb-3 text-sm font-bold text-gray-700 font-helvetica">
                    Email Address
                  </label>
                  <Input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    label="Email"
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-sm text-red-500 mb-1">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="my-5">
                  <label className="block mb-3 text-sm font-bold text-gray-700 font-helvetica">
                    Password
                  </label>
                  <Input
                    className="w-full px-3 py-4 mb-5text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    label="Password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-sm text-red-500 mb-1">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="mb-2 text-center">
                  <button
                    className="w-full font-helvetica px-4 py-3 font-bold text-white bg-blue-gray-800 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              <div className="px-5 mb-5 text-center font-helvetica text-sm text-gray-800 font-light">
                <p className="text-gray">
                  {" "}
                  Not a member ?{" "}
                  <Link to="/register" className="text-sm text-black underline">
                    Sign up now
                  </Link>
                </p>
              </div>
              <hr className="sm:mb-6 border-t w-20 flex mx-auto" />

              <div className="text-center introResponse">
                <LoginView />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
