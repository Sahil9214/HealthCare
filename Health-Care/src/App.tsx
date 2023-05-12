import React, { useState } from "react";
import "./App.css";
import Tracker from "./Pages/Tracker";
import Navbar from "./Components/Navbar";

import UserForm from "./Components/UserFor";
import UnderweightPage from "./Pages/underWeight";
import OverweightPage from "./Pages/overWeight";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <h1>Welcome to My Health and Wellness Platform</h1> */}
      {/* <UserForm /> */}
      {/* <UnderweightPage/> */}
      <OverweightPage />
    </div>
  );
}

export default App;
