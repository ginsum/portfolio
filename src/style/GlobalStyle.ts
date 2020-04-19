import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "../theme";

const globalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing:border-box;
  }
  body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:14px;
    background-color:white;
    color:black;
  }
  body>section{
    background-color:${theme.bg_color};
  }
`;

export default globalStyles;
