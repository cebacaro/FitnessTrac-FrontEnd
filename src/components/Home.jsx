import React, { useReducer } from "react";
import { Login } from "./";
import image from "../images/pexels-andrea-piacquadio-3764014.jpg";

function Home({
  loggedIn,
  setLoggedIn,
  token,
  setToken,
  currentUser,
  setCurrentUser,
}) {
  setTimeout(() => {
    if (document.getElementById("logged-in-h1")) {
      document.getElementById("logged-in-h1").style.display = "inline";
    }
  }, 2000);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "rgba(13, 13, 12, 0.035",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        backgroundAttachment: "fixed",
      }}
      className="homeContainer"
    >
      <h1 id="welcome-h1"> Welcome {currentUser.username}!</h1>
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
        <h1 id="logged-in-h1"> Enjoy Your Fitness Journey! </h1>
      )}
    </div>
  );
}

export default Home;
