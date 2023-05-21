/** @format */

import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "../features/auth/authSlice";
import articlesReducer from "../features/authorFeatures/articlesSlide";
import commentReducer from "../features/comment/commentSlice";
import userReducer from "../features/userFeatures/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const ENABLE_REDUX_DEV_TOOLS = true;
const encryptor= encryptTransform({
  secretKey: 'Super-Secret-key-jrtec',
  onError: function (error) {
    // Handle the error.
  },
})
const persistConfig:any = {
  key: "root",
  storage,
  timeout: null,
  transforms: [encryptor] ,
};


const rootReducer = combineReducers({
  articles: articlesReducer,
  auth: authReducer,
  comment: commentReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
  devTools: ENABLE_REDUX_DEV_TOOLS,
});

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
