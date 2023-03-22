import React, { useState } from "react";

import { editActivitiesAPI } from "../api";

const ActivityCard = ({ activity, loggedIn, token, routineId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const displayEditForm = (id) => {
    if (document.getElementById(`form${id}`).style.display === "flex") {
      document.getElementById(`form${id}`).style.display = "none";
    } else {
      document.getElementById(`form${id}`).style.display = "flex";
    }
  };

  const editActivity = async () => {
    const response = await editActivitiesAPI(
      token,
      activity.id,
      name,
      description
    );

    location.reload();
  };

  return (
    <>
      <div className="activity-card">
        <h2>{activity.name}</h2>
        <p>{activity.description}</p>

        {loggedIn ? (
          <button
            className="submitButton"
            onClick={() => {
              displayEditForm(activity.id);
            }}
          >
            Edit
          </button>
        ) : null}
      </div>
      <div className="edit-activity-form-holder">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editActivity();
          }}
          className="edit-activity-form form"
          id={`form${activity.id}`}
        >
          <label>Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            defaultValue={activity.name}
          />
          <label>Description</label>
          <textarea
            defaultValue={activity.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows="10"
            cols="30"
          />
          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ActivityCard;
