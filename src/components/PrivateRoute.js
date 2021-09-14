import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to={"/login"} />
  );
};
