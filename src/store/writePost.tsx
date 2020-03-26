import React from "react";

const initPost = {
  title: [],
  content: [],
  date: [],
  catagory: []
};

export const PostContext = React.createContext(initPost);

interface Store {
  title: any;
  content: any;
  date: any;
  catagory: any;
}

interface Props {
  children: any;
}

const PostProvider: React.FC<Props> = ({ children }) => {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [date, setDate] = React.useState("");
  const [catagory, setCatagory] = React.useState("");

  const store: Store = {
    title: [title, setTitle],
    content: [content, setContent],
    date: [date, setDate],
    catagory: [catagory, setCatagory]
  };

  return <PostContext.Provider value={store}>{children}</PostContext.Provider>;
};

export default PostProvider;
