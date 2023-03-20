import React, { useState } from "react";
import { Activities } from ".";
import { editActivitiesAPI } from "../api";

const ActivityCard = ({ activity, loggedIn, token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const displayEditForm = (id) => {
    const formsList = document.getElementsByClassName("edit-activity-form");
    const formsArr = [...formsList];
    if (formsArr[id - 1].style.display === "flex") {
      formsArr[id - 1].style.display = "none";
    } else {
      formsArr[id - 1].style.display = "flex";
    }
    console.log(formsArr);
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
        <p>{activity.id}</p>
        {loggedIn ? (
          <button
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
          className="edit-activity-form"
        >
          <label>Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            value={activity.name}
          />
          <label>Description</label>
          <textarea
            value={activity.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows="10"
            cols="30"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ActivityCard;
