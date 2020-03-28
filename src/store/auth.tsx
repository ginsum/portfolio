import React from "react";

const initStore = {
  userInfo: []
};

export const UserContext = React.createContext(initStore);

interface Props {
  children: any;
}

interface Store {
  userInfo: any;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  // const initUser = {

  // }
  const [userInfo, setUserInfo] = React.useState(null);

  const store: Store = {
    userInfo: [userInfo, setUserInfo]
  };
  console.log(store);
  return <UserContext.Provider value={store}>{children}</UserContext.Provider>;
};
export default UserProvider;
