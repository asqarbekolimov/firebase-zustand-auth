import React, { FormEvent, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useAuthStore } from "../store/auth.store";

const Auth = () => {
  const [auth, setAuth] = useState<"signup" | "signin">("signin");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalid, setInvalid] = useState<boolean>(false);
  const { signUp, signIn } = useAuth();
  const { error, isLoading, user } = useAuthStore();

  const toggleAuth = (state: "signup" | "signin") => {
    setAuth(state);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!password.length || !email.length) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
    if (auth === "signup") {
      signUp(email, password);
    } else {
      signIn(email, password);
    }
  };

  return (
    <main className="container form-signin mt-4 w-50">
      <form className="form-signin m-auto w-100" onSubmit={onSubmit}>
        <h1 className="h3 mb-3 font-weight-normal text-center">
          {auth == "signup" ? "Sign up" : "Sign in"}
        </h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className={`form-control ${invalid && "is-invalid"}`}
          placeholder="Email address"
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="inputPassword mt-4" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className={`form-control ${invalid && "is-invalid"}`}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button
          className="btn btn-lg btn-primary btn-block mt-2"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? "Loading..." : auth == "signup" ? "Sign Up" : "Sign In"}
        </button>
        <p className="mt-2 fw-bold text-center">
          {auth == "signup" ? "Already have account" : "No account yet"}
          {auth == "signup" ? (
            <span
              onClick={() => toggleAuth("signin")}
              className="fw-normal text-primary mx-2"
              style={{ cursor: "pointer" }}
            >
              Sign in
            </span>
          ) : (
            <span
              onClick={() => toggleAuth("signup")}
              className="fw-normal text-primary mx-2"
              style={{ cursor: "pointer" }}
            >
              Sign Up now
            </span>
          )}
        </p>
      </form>
    </main>
  );
};

export default Auth;
