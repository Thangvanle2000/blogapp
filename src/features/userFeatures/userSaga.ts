/** @format */

import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";
import userApi from "../../api/userApi";
import {
  authorProfileType,
  profileType,
  updateUser,
} from "../../Types/currentUserType";
import {
  followAuthor,
  // followAuthorSuccess,
  getAuthorProfile,
  getAuthorProfileSuccess,
  getUserProfile,
  getUserSuccess,
  unFollowAuthor,
  updateUserProfile,
  updateUserSuccess,
} from "./userSlice";

function* handleUser() {
  try {
    const res: profileType = yield userApi.getUserProfile();
    yield put(getUserSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

function* handleUpdateUser(action: PayloadAction<updateUser>) {
  try {
    const res: profileType = yield userApi.putUserProfile(action.payload);
    yield put(updateUserSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

function* handleAuthorProfile(action: PayloadAction<string>) {
  try {
    const res: authorProfileType = yield userApi.getAuthorProfileApi(
      action.payload
    );
    yield put(getAuthorProfileSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}
function* handleFollow(action: PayloadAction<string>) {
  try {
    const res: authorProfileType = yield userApi.followUser(action.payload);
    yield put(getAuthorProfileSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}
function* handleUnFollow(action: PayloadAction<string>) {
  try {
    const res: authorProfileType = yield userApi.unFollowUser(action.payload);
    yield put(getAuthorProfileSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

export function* userSaga() {
  yield takeEvery(getUserProfile.type, handleUser);
  yield takeEvery(updateUserProfile.type, handleUpdateUser);
  yield takeEvery(getAuthorProfile.type, handleAuthorProfile);
  yield takeEvery(followAuthor.type, handleFollow);
  yield takeEvery(unFollowAuthor.type, handleUnFollow);
}
