import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ loggedIn, setLoggedIn, setToken, setCurrentUser }) => {
  const navigate = useNavigate();

  return (
    <div id="navbar">
      <Link to="/">
        <h1>Fitness Tracker</h1>
      </Link>
      <div id="links">
        <Link to="/activities">
          <h2>Activities</h2>
        </Link>
        <Link to="/routines">
          <h2>Routines</h2>
        </Link>
        {!loggedIn ? (
          <Link to="/">
            <h2>Login</h2>
          </Link>
        ) : (
          <>
            <Link to="/myRoutines">
              <h2>My Profile</h2>
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
