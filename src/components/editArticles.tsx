/** @format */

/** @format */

import { Avatar, Button, Input, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { updateArticles } from "../features/authorFeatures/articlesSlide";
import { ArticleForEditor } from "../Types/articlesType";
import * as Yup from "yup";
import { useFormik } from "formik";
export interface EditArticlesProps {}
type EditArticleForm = {
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export default function EditArticles(props: EditArticlesProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { reset } = useForm<EditArticleForm>();
  const postDetail = useAppSelector(
    (state) => state.articles.postDetail.article
  );
  const userProfile = useAppSelector((data) => data.user.userProfile.user);
  const [tags, setTags] = useState<string[]>([]);
  const removeTagData = (indexToRemove: number) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTagData = (event: any) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const loading = useAppSelector((state) => state.articles.loading);
  const EditArticleForm = ({ title, description, body }: any) => {
    const slug = postDetail.slug;
    const data: ArticleForEditor = {
      slug: slug,
      article: {
        title: title,
        description: description,
        body: body,
        tagList: tags,
      },
    };
    dispatch(updateArticles(data));
    if (loading !== true) {
      navigate("/home");
      toast.success("Edit Articles Success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
    reset();
  };
  const formik = useFormik({
    initialValues: {
      title: postDetail.title,
      description: postDetail.description,
      body: postDetail.body,
      tagList: [postDetail.tagList].join(),
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
      EditArticleForm(values);
    },
  });
  return (
    <div>
      <div className="flex justify-center text-center items-center">
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
          <button
            className="font-helvetica mx-2 px-3 py-0 h-6 text-white text-xs rounded-full bg-light-green-200"
            disabled
          >
            Publish
          </button>
          <svg width="25" height="25" viewBox="-293 409 25 25">
            <path d="M-273.327 423.67l-1.673-1.52v-3.646a5.5 5.5 0 00-6.04-5.474c-2.86.273-4.96 2.838-4.96 5.71v3.41l-1.68 1.553c-.204.19-.32.456-.32.734V427a1 1 0 001 1h3.49a3.079 3.079 0 003.01 2.45 3.08 3.08 0 003.01-2.45h3.49a1 1 0 001-1v-2.59c0-.28-.12-.55-.327-.74zm-7.173 5.63c-.842 0-1.55-.546-1.812-1.3h3.624a1.92 1.92 0 01-1.812 1.3zm6.35-2.45h-12.7v-2.347l1.63-1.51c.236-.216.37-.522.37-.843v-3.41c0-2.35 1.72-4.356 3.92-4.565a4.353 4.353 0 014.78 4.33v3.645c0 .324.137.633.376.85l1.624 1.477v2.373z"></path>
          </svg>
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
      <div className="w-full flex justify-center">
        <div className="w-1/3 items-center my-3">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <Input
                color="blue"
                name="title"
                variant="static"
                onChange={formik.handleChange}
                value={formik.values.title}
                placeholder={postDetail.title}
              />
            </div>
            <div className="mb-3">
              <Input
                color="blue"
                variant="static"
                placeholder={postDetail.description}
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
            <div className="mb-2">
              <Textarea
                size="md"
                color="blue"
                placeholder={postDetail.body}
                variant="static"
                name="body"
                onChange={formik.handleChange}
                value={formik.values.body}
              />
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
                placeholder="Press enter to add a tag"
                name="tagList"
                onChange={formik.handleChange}
              />
            </div>
            <Button
              variant="gradient"
              color="blue-gray"
              type="submit"
              className="my-2"
            >
              Edit Article
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
