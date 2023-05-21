/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginType } from "../../Types/articlesType";
import { createUser, signUpType, userType } from "../../Types/authType";

export interface initialState {
  loading: boolean;
  currentUser: userType;
  createUser: createUser;
  loadingSignUp: boolean;
}

const initialState: initialState = {
  loading: false,
  currentUser: {
    isGetSuccess: false,
    user: {
      email: "",
      username: "",
      bio: "",
      image: "",
      token: "",
    },
  },
  createUser: {
    isGetSuccess: false,
    user: {
      email: "",
      username: "",
      bio: "",
      image: "",
      token: "",
    },
  },
  loadingSignUp: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginStart: (state, action: PayloadAction<loginType>) => {
      state.loading = true;
    },
    getUser: (state, action: PayloadAction<userType>) => {
      state.loading = false;
      state.currentUser = action.payload;
      state.currentUser.isGetSuccess = true;
    },
    loginFalse: (state) => {
      state.loading = false;
    },
    signUpStart: (state, action: PayloadAction<signUpType>) => {
      state.loading = true;
    },
    signUpSuccess: (state, action: PayloadAction<createUser>) => {
      state.loading = false;
      state.createUser = action.payload;
      state.createUser.isGetSuccess = true;
    },
    signUpFalse: (state) => {
      state.loading = false;
    },
    logoutUser: (state) => {
      state.loadingSignUp = true;
    },
    logoutSuccess: (state, action: PayloadAction<userType>) => {
      state.loadingSignUp = false;
      state.currentUser = action.payload;
      state.currentUser.isGetSuccess = false;
    },

  },
});

export const {
  getUser,
  loginStart,
  signUpStart,
  signUpSuccess,
  logoutUser,
  logoutSuccess,
  loginFalse,
  signUpFalse,

} = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
