import React, { useState } from "react";
import "./App.css";
import Tracker from "./Pages/Tracker";
import Pricing from "./Pages/Pricing";
import Horizontal from "./Components/Horizontal";
import Navbar from "./Components/Navbar";
import Allroutes from "./Allroutes/Allroutes";

import UserForm from "./Components/UserFor";
import UnderweightPage from "./Pages/underWeight";
import OverweightPage from "./Pages/overWeight";
function App() {
  return (
    <div className="App">

        {/*<Tracker /> */>
      {/* <Pricing/> */}
      <Navbar />
      <Allroutes />

    </div>
  );
}

export default App;
