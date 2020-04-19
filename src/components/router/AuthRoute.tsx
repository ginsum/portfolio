import React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../store/auth";

interface Props {
  path: string;
  component: any;
}

const AuthRoute: React.FC<Props> = ({
  path,
  component: ChildComponent,
  ...rest
}) => {
  const {
    userInfo: [userInfo, setUserInfo]
  } = React.useContext(UserContext);
  return (
    <Route
      {...rest}
      render={props =>
        userInfo ? <ChildComponent {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};
export default AuthRoute;
