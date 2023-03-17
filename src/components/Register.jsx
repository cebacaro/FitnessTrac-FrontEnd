import React from "react";
import { registerAPI } from "../api";
import { useNavigate } from "react-router-dom";

function Register({
  setUserName,
  setPassword,
  setLoggedIn,
  setToken,
  setCurrentUser,
  userName,
  password,
}) {
  const registerToSite = async () => {
    const response = await registerAPI(userName, password);
    if (response.error) {
      alert("Something went wrong, username may already exists");
    } else {
      setCurrentUser(response.user);
      setToken(response.token);
      setLoggedIn(true);
    }
  };

  return (
    <div id="register-form-div">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerToSite();
        }}
        id="register-form"
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
    </div>
  );
}

export default Register;
