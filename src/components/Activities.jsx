import React, { useEffect, useState } from "react";
import { getActivitiesAPI } from "../api";
import { ActivityCard } from "./";
import { Link } from "react-router-dom";

function Activities({ loggedIn, token }) {
  const [activities, setActivities] = useState([]);

  const getActivities = async () => {
    const response = await getActivitiesAPI();
    console.log(response);
    setActivities(response);
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <div>
      <h1>Activities</h1>

      {loggedIn ? (
        <Link to={"/newActivity"}>
          <button type="submit">Add new activity</button>
        </Link>
      ) : null}

      {activities.length ? (
        <div>
          {activities.reverse().map((activity, idx) => {
            return (
              <ActivityCard
                token={token}
                key={`activity map: ${idx}`}
                activity={activity}
                loggedIn={loggedIn}
              />
            );
          })}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Activities;
