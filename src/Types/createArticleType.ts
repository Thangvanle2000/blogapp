/** @format */

export interface CreateArticleType {
  isGetSuccess: boolean;
  loading: boolean;
  articles: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}
export interface CurrentArticleType {
  isGetSuccess: boolean;
  articles: {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: any;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: {
      username: string;
      bio: null;
      image: string;
      following: boolean;
    };
  };
}
export interface updateArticlesType {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}
export interface deleteArticleType {
  slug: string;
}
