import React, { useState } from "react";
import {
  deleteRoutineAPI,
  editRoutineAPI,
  addActivityToRoutineAPI,
} from "../api";
import { useLocation } from "react-router-dom";
import RoutineActivityCard from "./RoutineActivityCard.jsx";

function RoutineCard({ routine, currentUser, token, activities }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(routine.isPublic);
  const [activityToAdd, setActivityToAdd] = useState("");
  const locationHook = useLocation();
  const [duration, setDuration] = useState("");
  const [count, setCount] = useState("");

  console.log(locationHook.pathname);

  const displayEditForm = (id) => {
    if (document.getElementById(`form${id}`).style.display === "flex") {
      document.getElementById(`form${id}`).style.display = "none";
    } else {
      document.getElementById(`form${id}`).style.display = "flex";
    }
  };

  const deleteRoutine = async () => {
    await deleteRoutineAPI(token, routine.id);
    location.reload();
  };

  const editRoutine = async () => {
    const response = await editRoutineAPI(
      token,
      routine.id,
      name,
      goal,
      isPublic
    );
    console.log(response);
    location.reload();
  };

  const addActivitytoRoutine = async () => {
    const response = await addActivityToRoutineAPI(
      token,
      routine.id,
      activityToAdd,
      count,
      duration
    );
    console.log(response);
    location.reload();
  };

  return (
    <>
      <div className="routine-card">
        <h2>{routine.name}</h2>
        <p>{routine.goal}</p>
        <p>Created by {routine.creatorName}</p>

        {routine.activities.map((activity, idx) => {
          return (
            <RoutineActivityCard
              key={`Routine activity map: ${idx}`}
              activity={activity}
              token={token}
            />
          );
        })}

        {locationHook.pathname === "/myRoutines" ? (
          routine.creatorId === currentUser.id ? (
            <div>
              <button
                onClick={() => {
                  displayEditForm(routine.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteRoutine();
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  if (
                    document.getElementById(`addActivityForm${routine.id}`)
                      .style.display === "flex"
                  ) {
                    document.getElementById(
                      `addActivityForm${routine.id}`
                    ).style.display = "none";
                  } else {
                    document.getElementById(
                      `addActivityForm${routine.id}`
                    ).style.display = "flex";
                  }
                }}
              >
                Add Activity
              </button>
            </div>
          ) : null
        ) : null}
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addActivitytoRoutine();
          }}
          className="add-activity-form"
          id={`addActivityForm${routine.id}`}
        >
          <label>Activity to Add</label>
          <select
            onChange={(e) => {
              setActivityToAdd(e.target.value);
              console.log(activityToAdd);
            }}
            name="activities"
            id="activity-selector"
          >
            {activities.map((activity, idx) => {
              return (
                <option
                  key={`activity selector map:${idx}`}
                  value={activity.id}
                >
                  {activity.name}
                </option>
              );
            })}
          </select>
          <label>Duration</label>
          <input
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            type="number"
          />
          <label>Count</label>
          <input
            onChange={(e) => {
              setCount(e.target.value);
            }}
            type="number"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="edit-routine-form-holder">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editRoutine();
          }}
          className="edit-routine-form"
          id={`form${routine.id}`}
        >
          <label>Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            defaultValue={routine.name}
          />
          <label>Goal</label>
          <textarea
            defaultValue={routine.goal}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
            rows="10"
            cols="30"
          />
          <label>Public</label>
          <input
            onChange={(e) => {
              setIsPublic(e.target.value);
            }}
            required
            name="isPublic"
            type="radio"
            value="true"
          />
          <label>Not Public</label>
          <input
            onChange={(e) => {
              setIsPublic(e.target.value);
            }}
            required
            name="isPublic"
            type="radio"
            value="false"
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default RoutineCard;
