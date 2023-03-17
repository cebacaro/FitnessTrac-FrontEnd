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
    <div className="main">
      <div>
        <NavBar
          loggedIn={loggedIn}
          setCurrentUser={setCurrentUser}
          setLoggedIn={setLoggedIn}
          setToken={setToken}
        />
      </div>{" "}
      <div className="routesContainer">
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
          <Route path="/routines" element={<Routines />} />{" "}
        </Routes>
      </div>
    </div>
  );
};

export default Main;
