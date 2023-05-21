/** @format */

import { ArticleForEditor } from "../../Types/articlesType";
/** @format */

import { CreateArticleType } from "./../../Types/createArticleType";
/* eslint-disable @typescript-eslint/no-redeclare */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  articleInterface,
  postDetail,
  postType,
  tagType,
} from "../../Types/articlesType";

export interface initialState {
  loading: boolean;
  loadingFavorite: boolean;
  listArticle: articleInterface;
  listTagArticle: articleInterface;
  listArticleByAuthor: articleInterface;
  listLikePost: articleInterface;
  postDetail: postDetail;
  createArticles: CreateArticleType;
  listAuthorPost: postType[];
  tagList: tagType;
}

const initialState: initialState = {
  loading: false,
  loadingFavorite: false,
  createArticles: {
    isGetSuccess: false,
    loading: false,
    articles: {
      title: "",
      description: "",
      body: "",
      tagList: [","],
    },
  },

  listArticle: {
    articles: [],
    articlesCount: 0,
  },
  listArticleByAuthor: {
    articles: [],
    articlesCount: 0,
  },
  postDetail: {
    loadingPost: false,
    article: {
      slug: "",
      title: "",
      description: "",
      body: "",
      tagList: [],
      createdAt: "",
      updatedAt: "",
      favorited: false,
      favoritesCount: 0,
      author: {
        username: "",
        bio: null,
        image: "",
        following: false,
      },
    },
  },
  listAuthorPost: [],
  tagList: {
    tags: [],
  },
  listTagArticle: {
    articles: [],
    articlesCount: 0,
  },
  listLikePost: {
    articles: [],
    articlesCount: 0,
  },
};

const articlesSlice = createSlice({
  name: "articles",
  initialState: initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    getArticlesPost: (state, action: PayloadAction<articleInterface>) => {
      state.loading = false;
      state.listArticle = action.payload;
    },
    getPostDetail: (state, action: PayloadAction<string>) => {
      state.postDetail.loadingPost = false;
    },

    getPostDetailSuccess: (state, action: PayloadAction<postDetail>) => {
      state.postDetail.loadingPost = true;
      state.postDetail = action.payload;
    },
    postArticles: (state, action: PayloadAction<articleInterface>) => {
      state.loading = true;
    },
    postArticlesSuccess: (state) => {
      state.loading = false;
      state.createArticles.isGetSuccess = true;
    },
    postArticlesFail(state) {
      state.loading = false;
    },
    updateArticles: (state, action: PayloadAction<ArticleForEditor>) => {
      state.loading = false;
    },

    updateArticlesSuccess: (state, action: PayloadAction<articleInterface>) => {
      state.loading = false;
      state.listArticle = action.payload;
    },

    favoritePost(state, action: PayloadAction<string>) {
      state.loadingFavorite = true;
    },
    favoritePostSuccess(state) {
      state.loadingFavorite = false;
    },
    unFavoritePost(state, action: PayloadAction<string>) {
      state.loadingFavorite = true;
    },
    unFavoritePostSuccess(state) {
      state.loadingFavorite = false;
    },
    deleteArticles: (state, action: PayloadAction<postType>) => {
      state.loading = true;
    },
    getArticlesByAuthor(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getArticlesByAuthorSuccess(state, action: PayloadAction<articleInterface>) {
      state.loading = false;
      state.listArticleByAuthor = action.payload;
    },
    getTag(state) {
      state.loading = true;
    },
    getTagSuccess(state, action: PayloadAction<tagType>) {
      state.loading = false;
      state.tagList = action.payload;
    },
    getTagArticles(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getTagArticlesSuccess(state, action: PayloadAction<articleInterface>) {
      state.loading = false;
      state.listTagArticle = action.payload;
    },
    getLikeUser(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    getLikeUserSuccess(state, action: PayloadAction<articleInterface>) {
      state.loading = false;
      state.listLikePost = action.payload;
    },
  },
});

export const {
  loading,
  getArticlesPost,
  getPostDetail,
  getPostDetailSuccess,
  postArticles,
  postArticlesSuccess,
  updateArticles,
  postArticlesFail,
  favoritePost,
  favoritePostSuccess,
  unFavoritePost,
  unFavoritePostSuccess,
  deleteArticles,
  getArticlesByAuthor,
  updateArticlesSuccess,
  getArticlesByAuthorSuccess,
  getTag,
  getTagSuccess,
  getTagArticles,
  getTagArticlesSuccess,
  getLikeUser,
  getLikeUserSuccess,
} = articlesSlice.actions;
const articlesReducer = articlesSlice.reducer;
export default articlesReducer;
