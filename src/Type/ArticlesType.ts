/** @format */

export interface articleInterface {
  id: string;
  slug: string;
  title: string;
  description: string;
  articleImg: string;
  body: string;
  tagList: [any];
  createAt: string;
  updateAt: string;
  favorite: boolean;
  favoritesCount: number;
  comment: commentType[];
  author: {
    userId: number;
    account: string;
    password: string;
    username: string;
    avatar: string;
    email: string;
    follower: number;
    shortBio: string;
    following: boolean;
    jobTittle: string;
  };
}

export interface commentType {
  idComment: number;
  commentUser: string;
}
export interface loginType{
  username:string;
  password:string;
}