import React, { useState } from "react";
import Horizontal from "./Horizontal";

const FootCalculator = () => {
  const [foot, setFoot] = useState<string>("");
  const [val, setVal] = useState<string>("");
  const [km, setKm] = useState<string>("");
  const handleSubmit = () => {
    let value = 55 * Number(foot);
    setVal(String(Math.floor(value / 1000)));

    setKm(String((2000 / 1.609) * Number(foot)));

    setFoot("");
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <label
        style={{
          fontFamily: "Lobster Two, cursive",
        }}
        className="text-4xl"
      >
        Calculate How many calories you burn
      </label>
      <br />
      <br />
      <input
        style={{
          border: "2px solid black",
          padding: "14px 30px",
          borderRadius: "14px",
          fontFamily: "Lobster Two, cursive",
        }}
        value={foot}
        className="text-3xl"
        type="text"
        placeholder="Enter the Footstep"
        onChange={(e) => setFoot(e.target.value)}
      />
      <br />
      <br />

      <br />
      <br />
      <button
        style={{
          border: "2px solid black",
          padding: "14px 30px",
          borderRadius: "14px",
          fontFamily: "Lobster Two, cursive",
        }}
        onClick={handleSubmit}
        className="text-3xl  bg-sky-500 hover:bg-sky-700 ...  "
      >
        Calculator
      </button>
      <br />
      <br />
      <br />
      <h1 className="text-4xl italic text-gray-900 font-bold">How many calories you burn</h1>
      <br />
      <h1 className="text-2xl">Calories Burn:{val} cal</h1>
      <br />
      <h1 className="text-4xl italic text-gray-900 font-bold">How many kilometer you walk</h1>
      <br/>
      <h1 className="text-2xl">Km you walk :{km} km</h1>
      <br/>
      <br/>
      <br/>
      <br/>
     
    </div>
  );
};

export default FootCalculator;
