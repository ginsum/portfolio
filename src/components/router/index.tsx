import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";
import Home from "../page/Home";
import SignIn from "../page/SingIn";
import SignUp from "../page/SignUp";
import WritePost from "../page/WritePost";
import DetailPost from "../page/DetailPost";

interface Props {}

const RootRouter: React.FC<Props> = ({}) => {
  return (
    <>
      <Router>
        <Route component={NavBar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/writepost" component={WritePost} />
          <Route path="/:postId" component={DetailPost} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};
export default RootRouter;
