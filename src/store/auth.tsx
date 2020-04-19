import React from "react";
import { UserInfo } from "../components/shared/interface";

const initStore = {
  userInfo: [],
};

export const UserContext = React.createContext(initStore);

interface Props {
  children: any;
}

interface Store {
  userInfo: UserInfo[] | any;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);

  const store: Store = {
    userInfo: [userInfo, setUserInfo],
  };
  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
export default UserProvider;
