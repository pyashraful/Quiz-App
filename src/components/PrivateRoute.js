import React from "react";
import { Redirect, Router } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth;

  return currentUser ? (
    <Router {...rest}>{(props) => <Component {...props} />}</Router>
  ) : (
    <Redirect to={"/login"} />
  );
};
