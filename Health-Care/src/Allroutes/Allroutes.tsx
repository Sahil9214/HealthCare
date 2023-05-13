import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Tracker from "../Pages/Tracker";
import Coach from "../Pages/Coach";
import Community from "../Pages/Community";

function Allroutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/coach" element={<Coach />} />
      <Route path='/community' element={<Community/>} />
      <Route path='/' element={<Tracker/>} />
    </Routes>
  );
}

export default Allroutes;
