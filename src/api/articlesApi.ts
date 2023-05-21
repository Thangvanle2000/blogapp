/** @format */

import rateLimitedAxiosInstance from ".";
import { articleInterface, tagType } from "../Types/articlesType";
import {
  CreateArticleType,
  updateArticlesType,
} from "./../Types/createArticleType";

const articlesAPi = {
  getArticles: (): Promise<articleInterface> => {
    return rateLimitedAxiosInstance.get("articles");
  },
  postArticlesApi(articlesData: CreateArticleType): Promise<CreateArticleType> {
    return rateLimitedAxiosInstance.post("articles", articlesData);
  },
  updateArticlesApi(
    slug: string,
    articlesData: updateArticlesType
  ): Promise<articleInterface> {
    return rateLimitedAxiosInstance.put(`articles/${slug}`, { article: articlesData });
  },
  deleteArticlesApi(slug: string): Promise<articleInterface> {
    return rateLimitedAxiosInstance.delete(`articles/${slug}`);
  },

  favoriteArticleApi(slug: string): Promise<articleInterface> {
    return rateLimitedAxiosInstance.post(`articles/${slug}/favorite`);
  },
  unfavoriteArticleApi(slug: string): Promise<articleInterface> {
    return rateLimitedAxiosInstance.delete(`articles/${slug}/favorite`);
  },
  singleArticlesApi(slug: string): Promise<articleInterface> {
    return rateLimitedAxiosInstance.get(`articles/${slug}`);
  },
  getTagApi: function (): Promise<articleInterface> {
    return rateLimitedAxiosInstance.get("tag");
  },
  getArticlesByAuthor(userName: string): Promise<articleInterface> {
    return rateLimitedAxiosInstance.get(`articles/?author=${userName}`);
  },
  getTags(): Promise<tagType> {
    return rateLimitedAxiosInstance.get("tags");
  },
  getTagsArticles(tag: string): Promise<tagType> {
    return rateLimitedAxiosInstance.get(`articles/?tag=${tag}`);
  },
  getLikeUser(name: string): Promise<tagType> {
    return rateLimitedAxiosInstance.get(`articles/?favorited=${name}`);
  },
};
export default articlesAPi;
