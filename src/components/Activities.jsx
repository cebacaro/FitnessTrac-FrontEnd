import React, { useEffect, useState } from "react";
import { getActivitiesAPI } from "../api";
import { ActivityCard } from "./";
import { Link } from "react-router-dom";
import image from "../images/pexels-andrea-piacquadio-3764014.jpg";

function Activities({ loggedIn, token, activities }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "rgba(13, 13, 12, 0.035",
        backgroundSize: "cover",
        backgroundPositionY: "center",
        backgroundAttachment: "fixed",
      }}
      className="title-holder"
    >
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
