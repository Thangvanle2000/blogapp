export interface updateUser {
  user: {
    email: string;
    bio: string;
    image: string;
  };
}
export interface profileType {
  user: {
    email: string;
    username: string;
    bio: string;
    image: string;
    token: string;
  };
}
export interface authorProfileType {
  loading: boolean;
  profile: {
    username: string;
    bio: null;
    image: string;
    following: boolean;
  };
}
