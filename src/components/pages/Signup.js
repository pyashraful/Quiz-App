import React from "react";
import signupImage from "../../assets/images/signup.svg";
import classes from "../../styles/Signup.module.css";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Form } from "../Form";
import { Illustration } from "../Illustration";
import { TextInput } from "../TextInput";

export const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signupImage} />
        <Form className={`${classes.signup} from`}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <TextInput
            type="password"
            placeholder="confirm password"
            icon="lock_clock"
          />
          <Checkbox
            type="checkbox"
            text="I agree to the Terms &amp; Conditions"
          />
          <Button>Submit now</Button>
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};
