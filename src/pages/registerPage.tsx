/** @format */

import { Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAppDispatch } from "../app/hooks";
import { signUpStart } from "../features/auth/authSlice";
import { signUpType } from "../Types/authType";

export interface RegisterProps {}
type FormLogin = {
  email: string;
  password: string;
  username: string;
};

export default function RegisterPage(props: RegisterProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitRegister = ({ username, email, password }: any) => {
    const data: signUpType = {
      user: {
        username: username,
        email: email,
        password: password,
      },
    };
    dispatch(signUpStart(data));
    navigate("/login");
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be more 3 characters")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .max(18, "Must be 18 characters or less")
        .min(3, "Password must be more 3 characters")
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])/,
          " Must Contain One Lowercase Character"
        )
        .matches(
          /^(?=.*[A-Z])/,
          "  Must Contain One Uppercase Character"
        )
        .matches(
          /^(?=.*[0-9])/,
          "  Must Contain One Number Character"
        )
        .matches(
          /^(?=.*[!@#\$%\^&\*])/,
          "  Must Contain  One Special Case Character"
        ),
      confirmPassword: Yup.string()
        .min(3, "Password must be more 3 characters")
        .max(18, "Must be 18 characters or less")
        .required("Password is required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values: any) => {
      submitRegister(values);
    },
  });
  return (
    <div>
      <div className="bg-styles ">
        <div className="container container-full h-full">
          <div className="sm:flex h-full w-full">
            <div className="sm:w-2/4"></div>
            <div className="sm:w-2/4 flex justify-center my-auto content-center bg-black">
              <div className="w-3/4  bg-white py-8 px-2 mt-10 mb-10 rounded-lg">
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
                <h2 className="pt-4 text-2xl text-center font-helvetica font-bold">
                  Register to Medium
                </h2>
                <form
                  className="px-8 bg-white mb-2 rounded"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="my-1">
                    <label className="block mb-3 text-sm font-bold text-gray-700 font-helvetica">
                      Username
                    </label>
                    <Input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="username"
                      label="Username"
                      type="text"
                      name="username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />{" "}
                    {formik.errors.username ? (
                      <div className="text-sm text-red-500 mb-1">
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </div>
                  <div className="my-1">
                    <label className="block mb-3 text-sm font-bold text-gray-700 font-helvetica">
                      Email Address
                    </label>
                    <Input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      label="Email address"
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? (
                      <div className="text-sm text-red-500 mb-1">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="my-1">
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
                      value={formik.values.password}
                    />
                    {formik.errors.password ? (
                      <div className="text-sm text-red-500 mb-1">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div className="my-1">
                    <label className="block mb-3 text-sm font-bold text-gray-700 font-helvetica">
                      Confirm Password
                    </label>
                    <Input
                      className="w-full px-3 py-4 mb-5text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="confirmPassword"
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                    />
                    {formik.errors.confirmPassword ? (
                      <div className="text-sm text-red-500 mb-1">
                        {formik.errors.confirmPassword}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-2 mt-5 text-center">
                    <button
                      className="w-full font-helvetica px-4 py-3 font-bold text-white bg-blue-gray-800 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div>
                  <div className="px-5 mb-5 text-center font-helvetica text-sm text-gray-800 font-light">
                    <p className="text-gray">
                      {" "}
                      Not a member ?{" "}
                      <Link
                        to="/login"
                        className="text-sm text-black underline"
                      >
                        Sign up now
                      </Link>
                    </p>
                  </div>
                  <hr className="mb-6 border-t w-24 flex mx-auto" />
                  <div className="px-8 text-center font-helvetica text-sm text-gray-800 font-light"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
