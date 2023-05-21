/** @format */

export interface articleInterface {
  articles: postType[];
  articlesCount: number;
}

export interface postType {
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
}

export interface postDetail {
  loadingPost: boolean;
  article: {
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
export interface registerType {
  username: string;
  password: string;
  email: string;
}
export interface loginType {
  password: string;
  email: string;
}
export interface listArticleType {
  page: number;
  tag?: string;
  favorited?: string;
  author?: string;
}
export interface tagType {
  tags: string[];
}

export interface ArticleForEditor {
  slug: string;
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}
