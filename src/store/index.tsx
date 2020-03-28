import React from "react";
import PostProvider from "./writePost";
import ContentProvider from "./readPost";
import UserProvider from "./auth";

interface Props {
  children: any;
}

const StoreProvider: React.FC<Props> = ({ children }) => {
  return (
    <UserProvider>
      <PostProvider>
        <ContentProvider>{children}</ContentProvider>
      </PostProvider>
    </UserProvider>
  );
};

export default StoreProvider;
