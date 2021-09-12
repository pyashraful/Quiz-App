import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import classes from "../styles/Account.module.css";

export const Account = () => {
  const { currentUser } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span class="material-icons-outlined" title="Logout">
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};
