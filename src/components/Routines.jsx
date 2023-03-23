import React, { useEffect, useState } from "react";
import { getRoutinesAPI } from "../api";
import { RoutineCard } from "./";
import image from "../images/pexels-andrea-piacquadio-3764014.jpg";

function Routines({ token, currentUser, activities }) {
  const [routines, setRoutines] = useState("");
  const getRoutines = async () => {
    const response = await getRoutinesAPI();

    setRoutines(response);
  };

  useEffect(() => {
    getRoutines();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "rgba(13, 13, 12, 0.035",
        backgroundSize: "cover",
        backgroundPositionY: "center",
      }}
    >
      <div className="title-holder ">
        <h1>Routines</h1>
      </div>
      <div className="card-holder">
        {routines.length ? (
          routines.reverse().map((routine, idx) => {
            return (
              <RoutineCard
                currentUser={currentUser}
                key={`routine: ${idx}`}
                routine={routine}
                token={token}
                activities={activities}
              />
            );
          })
        ) : (
          <h1>Loading....</h1>
        )}
      </div>
    </div>
  );
}

export default Routines;
