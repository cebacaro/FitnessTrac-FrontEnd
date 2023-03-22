import React, { useEffect, useState } from "react";
import { getRoutinesAPI } from "../api";
import { RoutineCard } from "./";

function Routines({ token, currentUser, activities }) {
  const [routines, setRoutines] = useState("");
  const getRoutines = async () => {
    const response = await getRoutinesAPI();
    console.log(response, "!!!!!!!");
    setRoutines(response);
    console.log(routines);
  };

  useEffect(() => {
    getRoutines();
  }, []);

  return (
    <div>
      <h1>Routines</h1>
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
