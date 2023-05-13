import React from "react";
import "./App.css";
import Tracker from "./Pages/Tracker";
import Pricing from "./Pages/Pricing";
import Horizontal from "./Components/Horizontal";
import Navbar from "./Components/Navbar";
import Allroutes from "./Allroutes/Allroutes";


function App() {
  return (
    <div className="App">
      {/* <Horizontal /> */}
        {/*<Tracker /> */>
      {/* <Pricing/> */}
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
