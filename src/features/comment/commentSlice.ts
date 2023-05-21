/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { commentType } from "../../Types/commentType";
import { CreateCommentType } from "../../Types/commentType";

export interface initialState {
  loading: boolean;
  listComment: commentType;
  createComment: CreateCommentType;
}

const initialState: initialState = {
  loading: false,
  listComment: {
    comments: [],
  },
  createComment: {
    isSuccess: false,
    slug: "",
    comment: {
      body: "",
    },
  },
};
const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    getComment: (state, action: PayloadAction<string>) => {
      state.loading = true;
    },
    getCommentSuccess: (state, action: PayloadAction<commentType>) => {
      state.loading = false;
      state.listComment = action.payload;
      state.createComment.isSuccess = false;
    },
    postComment: (state, action: PayloadAction<CreateCommentType>) => {
      state.createComment.isSuccess = true;
      state.createComment.slug = action.payload.slug;
    },
    deleteComment(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    deleteCommentSuccess(state) {
      state.loading = false;
    },
  },
});

export const {
  getComment,
  getCommentSuccess,
  postComment,
  deleteComment,
  deleteCommentSuccess,
} = commentSlice.actions;
const commentReducer = commentSlice.reducer;
export default commentReducer;
