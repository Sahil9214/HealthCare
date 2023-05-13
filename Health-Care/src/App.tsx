import React from "react";
import "./App.css";
import Tracker from "./Pages/Tracker";
import Navbar from "./Components/Navbar";
import Allroutes from "./Allroutes/Allroutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
