import React, { useReducer } from "react";
import { Login } from "./";

function Home({
  loggedIn,
  setLoggedIn,
  token,
  setToken,
  currentUser,
  setCurrentUser,
}) {
  return (
    <div>
      <h1>Welcome to Fitness Tracker</h1>
      {!loggedIn ? (
        <>
          <h2>Please Log In</h2>
          <Login
            setLoggedIn={setLoggedIn}
            setToken={setToken}
            token={token}
            setCurrentUser={setCurrentUser}
          />
        </>
      ) : (
        <h1>You are logged in as {currentUser.username}</h1>
      )}
    </div>
  );
}

export default Home;
