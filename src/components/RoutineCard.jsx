import React from "react";

function RoutineCard({ routine }) {
  return (
    <div>
      <h2>{routine.name}</h2>
      <p>{routine.goal}</p>
      <p>Created by {routine.creatorName}</p>

      {routine.activities.map((activity, idx) => {
        return (
          <div key={`routineActivities: ${idx}`}>
            <h4>{activity.name}</h4>
            <ul>
              <li>Duration: {activity.duration} </li>
              <li>Count: {activity.count} </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default RoutineCard;
