                                                                                                      /** @format */

import rateLimitedAxiosInstance from ".";
import { loginType } from "../Types/articlesType";
import { signUpType, userType } from "../Types/authType";

const authApi = {
  postUserLogin(loginData: loginType): Promise<userType> {
    return rateLimitedAxiosInstance.post("users/login", loginData);
  },
  postSignUP(signUpData: signUpType): Promise<userType> {
    return rateLimitedAxiosInstance.post("users", signUpData);
  },
};

export default authApi;
