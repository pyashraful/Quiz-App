import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { Button } from "./Button";
import { Form } from "./Form";
import { TextInput } from "./TextInput";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState();
  const { login } = useAuth();
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    console.log(`${email} and ${password}`);
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("can not loging");
    }
  }
  return (
    <Form onSubmit={handleSubmit} style={{ height: "330px" }}>
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
      />
      <TextInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        placeholder="Enter password"
        icon="lock"
      />
      <Button type="submit" disabled={loading}>
        <span>Submit now </span>{" "}
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};
