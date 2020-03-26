import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import RootRouter from "./components/router";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RootRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
