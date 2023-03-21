import React, { useState, useEffect } from "react";
import { deleteRoutineActivityAPI, editRoutineActivityAPI } from "../api";
import { useLocation } from "react-router-dom";

const RoutineActivityCard = ({ activity, token }) => {
  const [duration, setDuration] = useState(activity.duration);
  const [count, setCount] = useState(activity.count);
  const locationHook = useLocation();

  console.log(activity);

  const deleteRoutineActivity = async () => {
    const response = await deleteRoutineActivityAPI(
      token,
      activity.routineActivityId
    );
    console.log(response);
    location.reload();
  };

  const editRoutineActivity = async () => {
    const response = await editRoutineActivityAPI(
      token,
      activity.routineActivityId,
      duration,
      count
    );
  };

  useEffect(() => {
    editRoutineActivity();
  }, [count, duration]);

  return (
    <div>
      <h4>{activity.name}</h4>
      <ul>
        <li>
          Duration:{" "}
          {locationHook.pathname === "/myRoutines" ? (
            <button
              onClick={() => {
                if (duration > 0) {
                  setDuration(duration - 1);
                }
              }}
            >
              -
            </button>
          ) : null}{" "}
          {duration}{" "}
          {locationHook.pathname === "/myRoutines" ? (
            <button
              onClick={() => {
                setDuration(duration + 1);
              }}
            >
              {" "}
              +{" "}
            </button>
          ) : null}
        </li>
        <li>
          Count:{" "}
          {locationHook.pathname === "/myRoutines" ? (
            <button
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
            >
              -
            </button>
          ) : null}
          {count}{" "}
          {locationHook.pathname === "/myRoutines" ? (
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          ) : null}
        </li>
        {locationHook.pathname === "/myRoutines" ? (
          <button
            onClick={() => {
              deleteRoutineActivity();
            }}
          >
            Delete
          </button>
        ) : null}
      </ul>
    </div>
  );
};

export default RoutineActivityCard;
