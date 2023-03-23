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
import image from "../images/pexels-andrea-piacquadio-3764014.jpg";

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

    setActivities(response);
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "rgba(13, 13, 12, 0.035",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        backgroundAttachment: "fixed",
      }}
    >
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
            element={
              <NewActivity
                activities={activities}
                setActivities={setActivities}
                token={token}
              />
            }
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
