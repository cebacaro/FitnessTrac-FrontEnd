import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  Activities,
  MyRoutines,
  Routines,
  Home,
  NavBar,
} from "./";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div>
      <NavBar
        loggedIn={loggedIn}
        setCurrentUser={setCurrentUser}
        setLoggedIn={setLoggedIn}
        setToken={setToken}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              token={token}
              setToken={setToken}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/myRoutines" element={<MyRoutines />} />
        <Route path="/routines" element={<Routines />} />
      </Routes>
    </div>
  );
};

export default Main;
