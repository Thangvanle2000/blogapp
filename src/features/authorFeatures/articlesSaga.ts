/** @format */
/** @format */

import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { put, takeEvery } from "redux-saga/effects";
import authorAPi from "../../api/articlesApi";
import {
  ArticleForEditor,
  articleInterface,
  postDetail,
  postType,
  tagType,
} from "../../Types/articlesType";
import { CreateArticleType } from "./../../Types/createArticleType";
import {
  deleteArticles,
  favoritePost,
  favoritePostSuccess,
  getArticlesByAuthor,
  getArticlesByAuthorSuccess,
  getArticlesPost,
  getLikeUser,
  getLikeUserSuccess,
  getPostDetail,
  getPostDetailSuccess,
  getTag,
  getTagArticles,
  getTagArticlesSuccess,
  getTagSuccess,
  loading,
  postArticles,
  postArticlesFail,
  postArticlesSuccess,
  unFavoritePost,
  unFavoritePostSuccess,
  updateArticles,
  updateArticlesSuccess,
} from "./articlesSlide";
export interface success {
  success: boolean;
}

function* handleGetArticles() {
  try {
    const res: articleInterface = yield authorAPi.getArticles();
    yield put(getArticlesPost(res));
  } catch (error) {
    console.log("error : ", error);
    throw error;
  }
}

function* handleUpdateArticles(action: PayloadAction<ArticleForEditor>) {
  try {
    yield authorAPi.updateArticlesApi(
      action.payload.slug,
      action.payload.article
    );

    const res: articleInterface = yield authorAPi.getArticles();
    yield put(updateArticlesSuccess(res));
    yield put(getArticlesPost(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

function* handlePostArticles(action: PayloadAction<CreateArticleType>) {
  try {
    yield authorAPi.postArticlesApi(action.payload);
    yield put(postArticlesSuccess());
    const res: articleInterface = yield authorAPi.getArticles();
    yield put(getArticlesPost(res));
  } catch (error: any) {
    yield put(postArticlesFail());
  }
}

function* handleGetPostDetail(action: PayloadAction<string>) {
  try {
    const res: postDetail = yield authorAPi.singleArticlesApi(action.payload);
    yield put(getPostDetailSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

function* handleFavoritePost(action: PayloadAction<string>) {
  try {
    yield authorAPi.favoriteArticleApi(action.payload);
    yield put(favoritePostSuccess());
  } catch (error) {
    console.log("error : ", error);
  }
}
function* handleUnFavoritePost(action: PayloadAction<string>) {
  try {
    yield authorAPi.unfavoriteArticleApi(action.payload);
    yield put(unFavoritePostSuccess());
  } catch (error) {
    console.log("error : ", error);
  }
}

function* handleDeleteArticle(action: PayloadAction<postType>) {
  try {
    yield authorAPi.deleteArticlesApi(action.payload.slug);
    const res: articleInterface = yield authorAPi.getArticles();
    yield put(getArticlesPost(res));
    const res1: articleInterface = yield authorAPi.getArticlesByAuthor(
      action.payload.author.username
    );
    yield put(getArticlesByAuthorSuccess(res1));
  } catch (error) {
    console.log("error : ", error);
  }
}

function* handleArticleByAuthor(action: PayloadAction<string>) {
  try {
    const res: articleInterface = yield authorAPi.getArticlesByAuthor(
      action.payload
    );
    yield put(getArticlesByAuthorSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

function* handleTags() {
  try {
    const res: tagType = yield authorAPi.getTags();
    yield put(getTagSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}
function* handleTagArticles(action: PayloadAction<string>) {
  try {
    const res: articleInterface = yield authorAPi.getTagsArticles(
      action.payload
    );
    yield put(getTagArticlesSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}
function* handleLikeUser(action: PayloadAction<string>) {
  try {
    const res: articleInterface = yield authorAPi.getLikeUser(action.payload);
    yield put(getLikeUserSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

export function* articlesSaga() {
  yield takeEvery(loading.type, handleGetArticles);
  yield takeEvery(getPostDetail.type, handleGetPostDetail);
  yield takeEvery(postArticles.type, handlePostArticles);
  yield takeEvery(favoritePost.type, handleFavoritePost);
  yield takeEvery(unFavoritePost.type, handleUnFavoritePost);
  yield takeEvery(deleteArticles.type, handleDeleteArticle);
  yield takeEvery(getArticlesByAuthor.type, handleArticleByAuthor);
  yield takeEvery(getTag.type, handleTags);
  yield takeEvery(getTagArticles.type, handleTagArticles);
  yield takeEvery(updateArticles.type, handleUpdateArticles);
  yield takeEvery(getLikeUser.type, handleLikeUser);
}
