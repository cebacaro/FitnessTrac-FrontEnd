import React, { useState } from "react";
import { AddActivitiesAPI } from "../api";
import { useNavigate } from "react-router-dom";

function NewActivity({ token }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const postNewActivity = async () => {
    const response = await AddActivitiesAPI(token, name, description);
    console.log(token, response, "!!!!!!!");
    navigate("/activities");
  };

  return (
    <div>
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
