import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddRoutinesAPI } from "../api";

const NewRoutine = ({ token }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  const postNewRoutine = async () => {
    const response = await AddRoutinesAPI(token, name, goal);
    console.log(token, response, "!!!!!!!");
    navigate("/myRoutines");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postNewRoutine();
        }}
        className="add-routine-form form"
      >
        <label>Name</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          defaultValue={""}
        />
        <label>Goal</label>
        <textarea
          defaultValue={""}
          onChange={(e) => {
            setGoal(e.target.value);
          }}
          rows="10"
          cols="30"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewRoutine;
