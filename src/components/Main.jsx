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
  NewRoutine,
} from "./";
import { getActivitiesAPI } from "../api";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [activities, setActivities] = useState([]);

  const checkLoggedIn = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(await JSON.parse(token));

      setCurrentUser(await JSON.parse(localStorage.getItem("currentUser")));
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const getActivities = async () => {
    const response = await getActivitiesAPI();
    console.log(response);
    setActivities(response);
  };

  useEffect(() => {
    getActivities();
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
                activities={activities}
              />
            }
          />
          <Route
            path="/newActivity"
            element={<NewActivity token={token} />}
          ></Route>
          <Route
            path="/myRoutines"
            element={
              <MyRoutines
                activities={activities}
                currentUser={currentUser}
                token={token}
              />
            }
          />
          <Route
            path="/routines"
            element={
              <Routines activities={activities} currentUser={currentUser} />
            }
          />
          <Route path="/newRoutine" element={<NewRoutine token={token} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
