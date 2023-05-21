/** @format */

import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeEvery } from "redux-saga/effects";
import commentAPi from "../../api/commentApi";
import {
  commentDeleteType,
  commentType,
  CreateCommentType,
} from "../../Types/commentType";
import {
  deleteComment,
  getComment,
  getCommentSuccess,
  postComment,
} from "../comment/commentSlice";

function* handleComment(action: PayloadAction<string>) {
  try {
    const res: commentType = yield commentAPi.getCommentApi(action.payload);
    yield put(getCommentSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}
function* handleCreateComment(action: PayloadAction<CreateCommentType>) {
  try {
    yield commentAPi.sendCommentApi(
      action.payload.slug,
      action.payload.comment.body
    );
    const res: commentType = yield commentAPi.getCommentApi(
      action.payload.slug
    );
    yield put(getCommentSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}

function* handleDeleteComment(action: PayloadAction<commentDeleteType>) {
  try {
    yield commentAPi.deleteCommentApi(action.payload);
    const res: commentType = yield commentAPi.getCommentApi(
      action.payload.slug
    );
    yield put(getCommentSuccess(res));
  } catch (error) {
    console.log("error : ", error);
  }
}
export function* commentSaga() {
  yield takeEvery(getComment.type, handleComment);
  yield takeEvery(postComment.type, handleCreateComment);
  yield takeEvery(deleteComment.type, handleDeleteComment);
}
