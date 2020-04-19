import React from "react";

interface Store {
  title: any;
  content: any;
  date: any;
  catagory: any;
  section: any;
  cover: any;
  hiddenBtn: any;
}

const initPost: Store = {
  title: [],
  content: [],
  date: [],
  catagory: [],
  section: [],
  cover: [],
  hiddenBtn: []
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
  const [section, setSection] = React.useState<string>("");
  const [cover, setCover] = React.useState<string>("");
  const [hiddenBtn, setHiddenBtn] = React.useState(true);

  const store: Store | null = {
    title: [title, setTitle],
    content: [content, setContent],
    date: [date, setDate],
    catagory: [catagory, setCatagory],
    section: [section, setSection],
    cover: [cover, setCover],
    hiddenBtn: [hiddenBtn, setHiddenBtn]
  };

  return <PostContext.Provider value={store}>{children}</PostContext.Provider>;
};

export default PostProvider;
