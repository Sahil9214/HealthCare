import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Shoulder from "../Pages/Shoulder";
import Tracker from "../Pages/Tracker";

import Coach from "../Pages/Coach";
import Community from "../Pages/Community";

import Chest from "../Pages/Chest";
import Abs from "../Pages/Abs";
import Shoulder from "../Pages/Shoulder";
import Bicesep from "../Pages/Bicesep";


function Allroutes() {
  return (
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/coach" element={<Coach />} />
      <Route path='/community' element={<Community/>} />
      <Route path='/' element={<Tracker/>} />


      <Route path="/" element={<Tracker />} />
      <Route path="/chest" element={<Chest />} />
      <Route path="/abs" element={<Abs />} />
      <Route path="/shoulder" element={<Shoulder />} />
      <Route path="/bicesep" element={<Bicesep />} />

     

    </Routes>
  );
}

export default Allroutes;
