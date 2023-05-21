/** @format */

import { Avatar, Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "../app/hooks";
import { AppDispatch } from "../app/store";
import { postArticles } from "../features/authorFeatures/articlesSlide";
import NavBar from "./navBar";
import * as Yup from "yup";
import { useFormik } from "formik";
export interface StoriesFormPage {}

export default function StoriesForm(props: StoriesFormPage) {
  const dispatch = useDispatch<AppDispatch>();
  const userProfile = useAppSelector((data) => data.user.userProfile.user);
  const navigate = useNavigate();

  const [tags, setTags] = useState<string[]>([]);

  const loading = useAppSelector((state) => state.articles.loading);
  const submitStories = ({ title, description, body }: any) => {
    const data: any = {
      article: {
        title: title,
        description: description,
        body: body,
        tagList: tags,
      },
    };

    dispatch(postArticles(data));
    if (loading !== true) {
      navigate("/home");
      toast.success("Create Articles Success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    } else {
      toast.success("Create Articles Fail", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
  };
  const removeTagData = (indexToRemove: number) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTagData = (event: any) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      body: "",
      tagList: [""],
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required("Title is required")
        .max(128, "Title must be 128 or less")
        .min(3, "Title must be more than 3 characters"),
      description: Yup.string()
        .max(18, "Description must be 18 characters or less")
        .min(3, "Description must be more than 3 characters")
        .required("Description is required"),
      body: Yup.string().required("Body is required"),
    }),
    onSubmit: (values: any) => {
      submitStories(values);
    },
  });
  return (
    <div>
      <div className="sm:flex sm:mx-24 mx-4">
        <NavBar />
      </div>
      <div className="flex justify-center text-center items-center sm:my-3 my-6 sm:px-32 overflow-hidden">
        <div className="flex items-center mx-auto my-4">
          <NavLink to="/home">
            <svg
              viewBox="0 0 1043.63 592.71"
              className="h-6 text-logo mt-1 mx-3"
            >
              <g data-name="Layer 2">
                <g data-name="Layer 1">
                  <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                </g>
              </g>
            </svg>
            <h4 className="text-sm mt-1">Draft in Johnson</h4>
          </NavLink>
        </div>

        <div className="flex mx-auto ml-32 mt-1">
          <div className="my-auto">
            <svg width="25" height="25" viewBox="-293 409 25 25">
              <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path>
            </svg>
          </div>
          <div className="mx-2">
            <NavLink to="/profile">
              <Avatar
                src={userProfile.image}
                alt="avatar"
                size="sm"
                variant="circular"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-intro">
        <div className="sm:w-1/3 items-center my-3 ">
          <form
            onSubmit={formik.handleSubmit}
            className="sm:w-[500px] min-w-[360px]"
          >
            <div className="mb-4">
              <Input
                label="Title"
                variant="static"
                color="blue"
                name="title"
                placeholder="Add your title of article"
                onChange={formik.handleChange}
                value={formik.values.title}
              />

              {formik.errors.title ? (
                <div className="text-sm text-red-500 mb-1">
                  {formik.errors.title}
                </div>
              ) : null}
            </div>
            <div className="mb-4">
              <Input
                label="Description"
                color="blue"
                variant="static"
                placeholder="Description article "
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.errors.description ? (
                <div className="text-sm text-red-500 mb-1">
                  {formik.errors.description}
                </div>
              ) : null}
            </div>
            <div className="mb-3">
              <Textarea
                size="md"
                color="blue"
                label="Body"
                variant="static"
                name="body"
                onChange={formik.handleChange}
                value={formik.values.body}
                placeholder="Tell your story "
              />
              {formik.errors.body ? (
                <div className="text-sm text-red-500 mb-1">
                  {formik.errors.body}
                </div>
              ) : null}
            </div>

            <div className="tag-input">
              <ul className="tags">
                {tags.map((tag, index) => (
                  <li key={index} className="tag">
                    <span className="tag-title">{tag}</span>
                    <span
                      className="tag-close-icon"
                      onClick={() => removeTagData(index)}
                    >
                      x
                    </span>
                  </li>
                ))}
              </ul>
              <input
                type="text"
                onKeyUp={(event) =>
                  event.key === "Shift" ? addTagData(event) : null
                }
                placeholder="You can add more tag"
                name="tagList"
              />
            </div>
            <p className="my-2 ">Press shift to add tag</p>

            <Button variant="gradient" color="blue-gray" type="submit">
              Create Stories
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
