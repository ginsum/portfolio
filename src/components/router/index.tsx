import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";
import Home from "../page/Home";
import SignIn from "../page/SingIn";
import SignUp from "../page/SignUp";
import WritePost from "../page/WritePost";
import DetailPost from "../page/DetailPost";
import BlogList from "../page/BlogList";
import ProjectList from "../page/ProjectList";
import EditPost from "../page/EditPost";
import ScrollToTop from "./ScrollToTop";

interface Props {}

const RootRouter: React.FC<Props> = ({}) => {
  return (
    <>
      <Router>
        <Route component={NavBar} />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route
              path={`/${process.env.REACT_APP_SING_UP}`}
              component={SignUp}
            />
            <AuthRoute path="/writepost" component={WritePost} />
            <AuthRoute
              path="/editpost/:catagory/:postId"
              component={EditPost}
            />
            <Route path="/:catagory/:postId" component={DetailPost} />
            <Route path="/bloglist" component={BlogList} />
            <Route path="/projectlist" component={ProjectList} />
          </Switch>
        </ScrollToTop>
      </Router>
      <Footer />
    </>
  );
};
export default RootRouter;
