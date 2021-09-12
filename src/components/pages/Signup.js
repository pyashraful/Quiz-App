import React from "react";
import signupImage from "../../assets/images/signup.svg";
import { Illustration } from "../Illustration";
import { SignupForm } from "../SignupForm";

export const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signupImage} />
        <SignupForm />
      </div>
    </>
  );
};
