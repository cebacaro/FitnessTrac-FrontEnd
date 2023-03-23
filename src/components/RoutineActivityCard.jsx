import React, { useState, useEffect } from "react";
import { deleteRoutineActivityAPI, editRoutineActivityAPI } from "../api";
import { useLocation } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const RoutineActivityCard = ({ activity, token }) => {
  const [duration, setDuration] = useState(activity.duration);
  const [count, setCount] = useState(activity.count);
  const locationHook = useLocation();

  const deleteRoutineActivity = async () => {
    const response = await deleteRoutineActivityAPI(
      token,
      activity.routineActivityId
    );

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
    <div className="activityCard card-width">
      <h4> {activity.name} </h4>
      <ul className="activityList">
        <li>
          Duration:{" "}
          {locationHook.pathname === "/myRoutines" ? (
            <RemoveIcon
              fontSize="x-small"
              onClick={() => {
                if (duration > 0) {
                  setDuration(duration - 1);
                }
              }}
            />
          ) : null}{" "}
          <span className="number">{duration}</span>{" "}
          {locationHook.pathname === "/myRoutines" ? (
            <AddIcon
              fontSize="x-small"
              onClick={() => {
                setDuration(duration + 1);
              }}
            />
          ) : null}
        </li>
        <li>
          Count:{" "}
          {locationHook.pathname === "/myRoutines" ? (
            <RemoveIcon
              fontSize="x-small"
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}
            />
          ) : null}{" "}
          <span className="number">{count}</span>{" "}
          {locationHook.pathname === "/myRoutines" ? (
            <AddIcon
              fontSize="x-small"
              onClick={() => {
                setCount(count + 1);
              }}
            />
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
