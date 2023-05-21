/** @format */

import rateLimitedAxiosInstance from ".";
import { commentDeleteType, commentType } from "../Types/commentType";

const commentAPi = {
  getCommentApi: function (slug: string): Promise<commentType> {
    return rateLimitedAxiosInstance.get(`articles/${slug}/comments`);
  },
  sendCommentApi: function (slug: string, body: string): Promise<any> {
    const comment = {
      comment: {
        body: body,
      },
    };
    return rateLimitedAxiosInstance.post(`articles/${slug}/comments`, comment);
  },
  deleteCommentApi: function (data: {
    slug: string;
    id: number;
  }): Promise<commentDeleteType> {
    const { slug, id } = data;
    return rateLimitedAxiosInstance.delete(`articles/${slug}/comments/${id}`);
  },
};
export default commentAPi;
