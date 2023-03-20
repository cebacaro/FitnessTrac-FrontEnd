import React, { useState, useEffect } from "react";
import { getMyRoutinesAPI } from "../api";
import RoutineCard from "./RoutineCard";

function MyRoutines({ token, currentUser }) {
  const [myRoutines, setMyRoutines] = useState("");

  const getMyRoutines = async () => {
    const response = await getMyRoutinesAPI(token, currentUser.usename);
    console.log(response);
    setMyRoutines(response);
  };
  useEffect(() => {
    getMyRoutines();
  }, []);

  return (
    <div>
      <h1>My Routines</h1>
      {myRoutines.length ? (
        <div>
          {myRoutines.reverse.map((routine, idx) => {
            return (
              <RoutineCard key={`myRoutines maps: ${idx}`} routine={routine} />
            );
          })}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default MyRoutines;
