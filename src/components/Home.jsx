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
    <div className="homeContainer">
      <h1>Welcome to Fitness Tracker</h1>
      {!loggedIn ? (
        <>
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
