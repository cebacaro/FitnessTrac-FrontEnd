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
  NewActivity,
  RoutineCard,
} from "./";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  // useEffect(() => {
  //   localStorage.setItem("token", token);
  // }, [token]);

  // useEffect(() => {
  //   localStorage.setItem("currentUser", JSON.stringify(currentUser));
  // }, [currentUser]);

  const checkLoggedIn = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);

      setCurrentUser(await JSON.parse(localStorage.getItem("currentUser")));
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  console.log(token, "token", currentUser, "currentUser");

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
          <Route
            path="/activities"
            element={
              <Activities
                setToken={setToken}
                token={token}
                setLoggedIn={setLoggedIn}
                loggedIn={loggedIn}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path="/newActivity"
            element={<NewActivity token={token} />}
          ></Route>
          <Route
            path="/myRoutines"
            element={<MyRoutines currentUser={currentUser} token={token} />}
          />
          <Route path="/routines" element={<Routines />} />{" "}
        </Routes>
      </div>
    </div>
  );
};

export default Main;
