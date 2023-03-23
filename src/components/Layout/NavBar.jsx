import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn, setToken, setCurrentUser }) => {
  const navigate = useNavigate();

  const activitiesNav = document.getElementById("activitiesNav");
  const routinesNav = document.getElementById("routinesNav");
  const loginNav = document.getElementById("loginNav");
  const myRoutinesNav = document.getElementById("myProfileNav");
  const locationHook = useLocation();

  const updateIsActive = () => {
    if (activitiesNav !== null) {
      activitiesNav.classList.remove("is-active");
    }
    if (routinesNav !== null) {
      routinesNav.classList.remove("is-active");
    }
    if (!loggedIn) {
      if (loginNav !== null) {
        loginNav.classList.remove("is-active");
      }
    } else if (loggedIn) {
      if (myRoutinesNav !== null) {
        myRoutinesNav.classList.remove("is-active");
      }
    }

    if (locationHook.pathname === "/") {
      if (loginNav !== null) {
        loginNav.classList.add("is-active");
      }
    } else if (locationHook.pathname === "/activities") {
      if (activitiesNav !== null) {
        activitiesNav.classList.add("is-active");
      }
    } else if (locationHook.pathname === "/routines") {
      if (routinesNav !== null) {
        routinesNav.classList.add("is-active");
      }
    } else if (locationHook.pathname === "/myRoutines") {
      if (myRoutinesNav !== null) {
        myRoutinesNav.classList.add("is-active");
      }
    }
  };

  useEffect(() => {
    updateIsActive();
  }, [locationHook.pathname]);

  return (
    <div id="navbar">
      <Link to="/">
        <h1>Fitness Tracker</h1>
      </Link>
      <div id="links">
        <Link to="/activities">
          <h2 id="activitiesNav">Activities</h2>
        </Link>
        <Link to="/routines">
          <h2 id="routinesNav">Routines</h2>
        </Link>
        {!loggedIn ? (
          <Link to="/">
            <h2 id="loginNav">Login</h2>
          </Link>
        ) : (
          <>
            <Link to="/myRoutines">
              <h2 id="myProfileNav">My Profile</h2>
            </Link>

            <h2
              onClick={() => {
                setToken("");
                setCurrentUser({});
                setLoggedIn(false);
                localStorage.clear();
                navigate("/");
              }}
            >
              Log Out
            </h2>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
