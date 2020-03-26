import React from "react";

const initStore = {
  postContent: []
};

export const ContentContext = React.createContext(initStore);

interface ListContent {
  [Key: string]: Content;
}

interface Content {
  postId: string;
  user: string;
  userId: string;
  title: string;
  content: string;
  date: string;
  catagory: string;
}

interface Props {
  children: any;
}

interface Store {
  postContent: any;
}

const ContentProvider: React.FC<Props> = ({ children }) => {
  const initPost = {
    "1": {
      postId: "1",
      user: "안녕",
      userId: "1234",
      title: "블로그형 사이트 만들기",
      content: "<p>별이 빛나는 밤</p>",
      date: "2020-03-26",
      catagory: "blog"
    }
  };
  const [postContent, setPostContent] = React.useState<ListContent>(initPost);
  const store: Store = {
    postContent: [postContent, setPostContent]
  };
  return (
    <ContentContext.Provider value={store}>{children}</ContentContext.Provider>
  );
};

export default ContentProvider;
