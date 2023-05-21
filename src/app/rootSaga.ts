import { articlesSaga } from "../features/authorFeatures/articlesSaga";
import { all } from "redux-saga/effects";
import { commentSaga } from "../features/comment/commentSaga";
import { authSaga } from "../features/auth/authSaga";
import { userSaga } from "../features/userFeatures/userSaga";

export function* rootSaga() {
  yield all([articlesSaga(), commentSaga(), authSaga(), userSaga()]);
}
