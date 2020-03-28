import React from "react";
import { Content } from "../components/shared/interface";

const initStore = {
  postContent: []
};

export const ContentContext = React.createContext(initStore);

interface ListContent {
  [Key: string]: Content;
}

interface Props {
  children: any;
}

interface Store {
  postContent: any;
}

const ContentProvider: React.FC<Props> = ({ children }) => {
  const [postContent, setPostContent] = React.useState<Content[] | null>([]);
  const store: Store = {
    postContent: [postContent, setPostContent]
  };
  console.log(store);
  return (
    <ContentContext.Provider value={store}>{children}</ContentContext.Provider>
  );
};

export default ContentProvider;
