import React, { useEffect, useState } from "react";
import { getActivitiesAPI } from "../api";
import { ActivityCard } from "./";

function Activities({
  loggedIn,
  token,
  setToken,
  setCurrentUser,
  setLoggedIn,
}) {
  // const convertUserData = async () => {
  //   const currentUserString = JSON.parse(localStorage.getItem("currentUser"));
  //   console.log(typeof currentUserString, "!!!!!!");

  //   return currentUserString;
  // };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setToken(token);
  //     setCurrentUser(convertUserData());
  //     setLoggedIn(true);
  //   }
  // }, []);

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
      {activities.length ? (
        <div>
          {activities.map((activity, idx) => {
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
