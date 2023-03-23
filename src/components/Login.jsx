import React, { useState } from "react";
import { logInAPI } from "../api";
import Register from "./Register";

function Login({
  loggedIn,
  setLoggedIn,
  token,
  setToken,
  currentUser,
  setCurrentUser,
}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const logInToSite = async () => {
    const response = await logInAPI(userName, password);
    if (response.error) {
      alert("Invalid Credientials");
    } else {
      setToken(response.token);
      setCurrentUser(response.user);
      localStorage.setItem("currentUser", JSON.stringify(response.user));
      localStorage.setItem("token", JSON.stringify(response.token));
      setLoggedIn(true);
    }
  };

  return (
    <div className="form-div">
      <h2>Please Log In</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          logInToSite();
        }}
        id="login-form"
      >
        <label>Username</label>
        <input
          require="true"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
        />
        <label>Password</label>
        <input
          require="true"
          minLength="8"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
        <button className="submitButton" type="submit">
          Log In
        </button>
      </form>
      <h2>Or Register for an Account Below</h2>
      <Register
        userName={userName}
        password={password}
        setUserName={setUserName}
        setPassword={setPassword}
        setLoggedIn={setLoggedIn}
        setToken={setToken}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}

export default Login;
