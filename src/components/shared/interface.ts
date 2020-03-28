export interface NewContent {
  user: string;
  title: string;
  content: string;
  date: string;
  catagory: string;
}

export interface OnePost {
  [key: string]: any;
}

export interface Content {
  catagory: string;
  content: string;
  date: string;
  title: string;
  user: UserInfo;
}

export interface UserInfo {
  email: string;
  id: string;
  photoUrl: string;
  userName: string;
}

export interface ListContent {
  [Key: string]: Content;
}
