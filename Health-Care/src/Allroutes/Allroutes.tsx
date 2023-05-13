import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Shoulder from "../Pages/Shoulder";

function Allroutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shoulder" element={<Shoulder />} />
    </Routes>
  );
}

export default Allroutes;
