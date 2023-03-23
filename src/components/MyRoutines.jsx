import React, { useState, useEffect } from "react";
import { getMyRoutinesAPI, getActivitiesAPI } from "../api";
import RoutineCard from "./RoutineCard";
import { Link } from "react-router-dom";
import image from "../images/pexels-andrea-piacquadio-3764014.jpg";

function MyRoutines({ token, currentUser, activities }) {
  const [myRoutines, setMyRoutines] = useState(null);

  const getMyRoutines = async () => {
    const response = await getMyRoutinesAPI(token, currentUser.username);

    setMyRoutines(response);
  };
  useEffect(() => {
    if (token) {
      getMyRoutines();
    }
  }, [token]);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "rgba(13, 13, 12, 0.035",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <div className="title-holder">
        <h1>My Routines</h1>
        <Link to="/newRoutine">
          <button className="center-button">Add New Routine</button>
        </Link>
      </div>

      {myRoutines && myRoutines.length ? (
        <div className="card-holder">
          {myRoutines.reverse().map((routine, idx) => {
            return (
              <RoutineCard
                key={`myRoutines maps: ${idx}`}
                routine={routine}
                currentUser={currentUser}
                token={token}
                activities={activities}
              />
            );
          })}
        </div>
      ) : myRoutines !== null ? (
        <h1>No routines found</h1>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default MyRoutines;
