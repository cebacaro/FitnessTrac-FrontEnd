import React, { useState } from "react";
import { AddActivitiesAPI } from "../api";
import { useNavigate } from "react-router-dom";

import image from "../images/pexels-andrea-piacquadio-3764014.jpg";

function NewActivity({ token, activities, setActivities }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const postNewActivity = async () => {
    const response = await AddActivitiesAPI(token, name, description);
    console.log(response);
    const newActivities = [...activities];
    newActivities.push(response);
    setActivities(newActivities);

    navigate("/activities");
  };

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
      <h1>Add New Activity</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postNewActivity();
        }}
        className="add-activity-form form"
      >
        <label>Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          defaultValue={""}
        />
        <label>Description</label>
        <textarea
          defaultValue={""}
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
  );
}

export default NewActivity;
