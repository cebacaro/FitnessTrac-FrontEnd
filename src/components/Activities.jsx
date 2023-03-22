import React, { useEffect, useState } from "react";
import { getActivitiesAPI } from "../api";
import { ActivityCard } from "./";
import { Link } from "react-router-dom";

function Activities({ loggedIn, token, activities }) {
  return (
    <div className="title-holder">
      <h1>Activities</h1>

      {loggedIn ? (
        <Link to={"/newActivity"}>
          <button className="center-button" type="submit">
            Add new activity
          </button>
        </Link>
      ) : null}

      <div></div>
      {activities.length ? (
        <div className="card-holder">
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
