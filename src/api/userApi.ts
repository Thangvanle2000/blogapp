import rateLimitedAxiosInstance from ".";
import { userType } from "../Types/authType";
import { updateUser } from "../Types/currentUserType";

const userApi = {
  getUserProfile(): Promise<userType> {
    return rateLimitedAxiosInstance.get("user");
  },
  putUserProfile(data: updateUser): Promise<userType> {
    return rateLimitedAxiosInstance.put("user", data);
  },

  getAuthorProfileApi(username: string): Promise<userType> {
    return rateLimitedAxiosInstance.get(`profiles/${username}`);
  },
  followUser(username: string): Promise<userType> {
    return rateLimitedAxiosInstance.post(`profiles/${username}/follow`);
  },
  unFollowUser(username: string): Promise<userType> {
    return rateLimitedAxiosInstance.delete(`profiles/${username}/follow`);
  },
};

export default userApi;
