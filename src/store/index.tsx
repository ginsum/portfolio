import React from "react";

const initStore = {
  title: [],
  content: [],
  date: [],
  catagory: []
};

export const StoreContext = React.createContext(initStore);

interface Store {
  title: any;
  content: any;
  date: any;
  catagory: any;
}

interface Props {
  children: any;
}

const StoreProvider: React.FC<Props> = ({ children }) => {
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

  console.log(store);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
