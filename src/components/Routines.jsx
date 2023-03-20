import React, { useEffect, useState } from "react";
import { getRoutinesAPI } from "../api";
import { RoutineCard } from "./";

function Routines({ token }) {
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

      {routines.length ? (
        routines.reverse().map((routine, idx) => {
          return <RoutineCard key={`routine: ${idx}`} routine={routine} />;
        })
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}

export default Routines;
