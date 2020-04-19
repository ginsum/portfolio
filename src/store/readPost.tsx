import React from "react";
import { Content } from "../components/shared/interface";

const initStore: Store = {
  postContent: [],
  projectContent: []
};

export const ContentContext = React.createContext(initStore);

interface Props {
  children: any;
}

interface Store {
  postContent: Content[] | any;
  projectContent: Content[] | any;
}

const ContentProvider: React.FC<Props> = ({ children }) => {
  const [postContent, setPostContent] = React.useState<Content[]>([]);
  const [projectContent, setProjectContent] = React.useState<Content[]>([]);
  const store: Store = {
    postContent: [postContent, setPostContent],
    projectContent: [projectContent, setProjectContent]
  };
  return (
    <ContentContext.Provider value={store}>{children}</ContentContext.Provider>
  );
};

export default ContentProvider;
