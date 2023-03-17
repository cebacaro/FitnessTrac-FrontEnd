import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, Activities, MyRoutines, Routines, Home } from "./";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/myRoutines" element={<MyRoutines />} />
        <Route path="/routines" element={<Routines />} />
      </Routes>
    </div>
  );
};

export default Main;
