import React from "react";
import PostProvider from "./writePost";
import ContentProvider from "./readPost";

interface Props {
  children: any;
}

const StoreProvider: React.FC<Props> = ({ children }) => {
  return (
    <PostProvider>
      <ContentProvider>{children}</ContentProvider>
    </PostProvider>
  );
};

export default StoreProvider;
