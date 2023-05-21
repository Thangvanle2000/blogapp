export interface commentType {
  comments: commentPostType[];
}

export interface commentPostType {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: {
    username: string;
    bio: null;
    image: string;
    following: boolean;
  };
}

export interface CreateCommentType {
  isSuccess: boolean;
  slug: string;
  comment: {
    body: string;
  };
}
export interface SubmitCommentType {
  slug: string;
  body: string;
}
export interface commentDeleteType {
  slug: string;
  id: number;
}
