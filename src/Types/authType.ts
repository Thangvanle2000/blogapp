export interface loginType {
  user: {
    email: string;
    password: string;
  };
}

export interface userType {
  isGetSuccess: boolean;
  user: {
    email: string;
    username: string;
    bio: string;
    image: string;
    token: string;
  };
}
export interface createUser {
  isGetSuccess: boolean;
  user: {
    email: string;
    username: string;
    bio: string;
    image: string;
    token: string;
  };
}
export interface signUpType {
  user: {
    username: string;
    email: string;
    password: string;
  };
}
