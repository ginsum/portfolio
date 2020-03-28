import React from "react";

interface Store {
  title: any;
  content: any;
  date: any;
  catagory: any;
}

const initPost: Store = {
  title: [],
  content: [],
  date: [],
  catagory: []
};

export const PostContext = React.createContext(initPost);

interface Props {
  children: any;
}

const PostProvider: React.FC<Props> = ({ children }) => {
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const [date, setDate] = React.useState<string>("");
  const [catagory, setCatagory] = React.useState<string>("");

  const store: Store | null = {
    title: [title, setTitle],
    content: [content, setContent],
    date: [date, setDate],
    catagory: [catagory, setCatagory]
  };

  return <PostContext.Provider value={store}>{children}</PostContext.Provider>;
};

export default PostProvider;
