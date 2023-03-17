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
      console.log(response);
      setToken(response.token);
      setCurrentUser(response.user);

      setLoggedIn(true);
    }
  };

  return (
    <div id="login-form-div">
      <form
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
        <button type="submit">Log In</button>
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
