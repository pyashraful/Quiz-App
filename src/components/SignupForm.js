import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Form } from "./Form";
import { TextInput } from "./TextInput";

export const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      return setError("password do not match");
    }
    try {
      setError("");
      setLoading(true);
      signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setError("can not create account");
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit} className={{ height: "500px" }}>
      <TextInput
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        type="text"
        placeholder="Enter name"
        icon="person"
      />
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        required
        placeholder="Enter email"
        icon="alternate_email"
      />
      <TextInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
      />
      <TextInput
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        type="password"
        placeholder="confirm password"
        icon="lock_clock"
      />
      <Checkbox
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
        required
        type="checkbox"
        text="I agree to the Terms &amp; Conditions"
      />
      <Button disabled={loading} type="submit">
        {" "}
        <span>Submit now</span>{" "}
      </Button>
      {error && <p className="error"> {error} </p>}
      <div className="info">
        Already have an account? <Link to="/Login">Login</Link> instead.
      </div>
    </Form>
  );
};
