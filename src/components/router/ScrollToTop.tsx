import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {}

const ScrollToTop: React.FC<Props> = ({ history, children }) => {
  history.listen((location, action) => {
    window.scrollTo(0, 0);
  });
  return <>{children}</>;
};
export default withRouter(ScrollToTop);
