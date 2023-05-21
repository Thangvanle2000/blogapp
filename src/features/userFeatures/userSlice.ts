import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  authorProfileType,
  profileType,
  updateUser,
} from "../../Types/currentUserType";

export interface initialState {
  isLoading: boolean;
  userProfile: profileType;
  authorProfile: authorProfileType;
}

const initialState: initialState = {
  isLoading: false,
  userProfile: {
    user: {
      email: "",
      username: "",
      bio: "",
      image: "",
      token: "",
    },
  },
  authorProfile: {
    loading: false,
    profile: {
      username: "",
      bio: null,
      image: "",
      following: false,
    },
  },
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUserProfile: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action: PayloadAction<profileType>) => {
      state.isLoading = false;
      state.userProfile = action.payload;
    },
    updateUserProfile: (state, action: PayloadAction<updateUser>) => {
      state.isLoading = true;
    },
    updateUserSuccess: (state, action: PayloadAction<profileType>) => {
      state.isLoading = false;
      state.userProfile = action.payload;
    },
    getAuthorProfile: (state, action: PayloadAction<string>) => {
      state.authorProfile.loading = false;
    },
    getAuthorProfileSuccess: (
      state,
      action: PayloadAction<authorProfileType>
    ) => {
      state.authorProfile.loading = false;
      state.authorProfile = action.payload;
    },
    followAuthor: (state, action: PayloadAction<string>) => {
      state.authorProfile.loading = true;
    },

    unFollowAuthor: (state, action: PayloadAction<string>) => {
      state.authorProfile.loading = true;
    },
  },
});

export const {
  getUserProfile,
  getUserSuccess,
  updateUserProfile,
  updateUserSuccess,
  getAuthorProfile,
  getAuthorProfileSuccess,
  followAuthor,
  unFollowAuthor,
} = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
