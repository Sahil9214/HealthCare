import React from "react";
import "../CSS/Chest.css";
import { background } from "@chakra-ui/styled-system";
import chest from "../Images/chest.png";
const Chest = () => {
  return (
    <div>
      <h1 className="text-black-600 text-5xl font-bold">Chest Exercise</h1>
      <br />
      <p className="text leading-relaxed">
        Chest exercises. Learn how to build a big, strong and muscular Chest.
      </p>
      <br />
      <br />
      <div
        style={{
          width: "80%",
          margin: "auto",
        }}
        className="border_top"
      >
        <div>
          <h1
            style={{ marginLeft: "60px" }}
            className="text-3xl font-bold  text-left "
          >
            Best Chest Exercise
          </h1>
          <br />
          <br />
          <div className="chest_flex">
            <div>
              <img
                style={{ height: "300px", width: "400px", borderRadius: "6px" }}
                data-src="https://cdn.muscleandstrength.com/sites/default/files/dumbbell-bench-press_0.jpg"
                className=" lazyloaded"
                width="800"
                height="500"
                alt="Dumbbell Bench Press"
                src="https://cdn.muscleandstrength.com/sites/default/files/dumbbell-bench-press_0.jpg"
              />
              <h2 className="text-2xl font-bold">Dumbbell Bench Press</h2>
              <br />
              <button
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  backgroundColor: "#059",
                  fontWeight: "700",
                  color: "#fff",
                }}
                className="px-8 py-2"
              >
                View Exercise
              </button>
            </div>
            <div>
              <img
                style={{ height: "300px", width: "400px", borderRadius: "6px" }}
                data-src="https://cdn.muscleandstrength.com/sites/default/files/incline-bench-press.jpg"
                className="lazyloaded"
                width="800"
                height="500"
                alt="Incline Bench Press"
                src="https://cdn.muscleandstrength.com/sites/default/files/incline-bench-press.jpg"
              />
              <h2 className="text-2xl font-bold">Inline Bench Press</h2>
              <br />
              <button
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  backgroundColor: "#059",
                  fontWeight: "700",
                  color: "#fff",
                }}
                className="px-8 py-2"
              >
                View Exercise
              </button>
            </div>
            <div>
              <img
                style={{ height: "300px", width: "400px", borderRadius: "6px" }}
                data-src="https://cdn.muscleandstrength.com/sites/default/files/chest-dip.jpg"
                className="lazyloaded"
                width="800"
                height="500"
                alt="Chest Dip"
                src="https://cdn.muscleandstrength.com/sites/default/files/chest-dip.jpg"
              />
              <h2 className="text-2xl font-bold">Chest Dip</h2>
              <br />
              <button
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  backgroundColor: "#059",
                  fontWeight: "700",
                  color: "#fff",
                }}
                className="px-8 py-2"
              >
                View Exercise
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="chest-2">
        <div>
          <img
            className="gym_img"
            data-src="https://cdn.muscleandstrength.com/sites/default/files/incline-dumbbell-bench-press_0.jpg"
            width="600"
            height="500"
            alt="Incline Dumbbell Bench Press"
            src="https://cdn.muscleandstrength.com/sites/default/files/incline-dumbbell-bench-press_0.jpg"
          />
          <div className="btn-flex">
            <button className="btn-btn">
              TYPE <br /> STRENGTH
            </button>
            <button className="btn-btn">
              EQUIPMENT <br /> MACHINE
            </button>
            <button className="btn-btn">
              MACHINCS <br /> ISOLATION
            </button>
            <button className="btn-btn">
              EXP.LEVEL <br /> BEGINNER
            </button>
          </div>
        </div>
        <div>
          <img
            data-src="https://cdn.muscleandstrength.com/sites/default/files/push-ups.jpg"
            className="gym_img"
            width="600"
            height="500"
            alt="Push Up"
            src="https://cdn.muscleandstrength.com/sites/default/files/push-ups.jpg"
          />
          <div className="btn-flex">
            <button className="btn-btn">
              TYPE <br /> STRENGTH
            </button>
            <button className="btn-btn">
              EQUIPMENT <br /> MACHINE
            </button>
            <button className="btn-btn">
              MACHINCS <br /> ISOLATION
            </button>
            <button className="btn-btn">
              EXP.LEVEL <br /> BEGINNER
            </button>
          </div>
        </div>
      </div>
      <br />

      <div className="chest-2">
        <div>
          <img
            data-src="https://cdn.muscleandstrength.com/sites/default/files/incline-dumbbell-bench-press_0.jpg"
            className="gym_img"
            width="600"
            height="500"
            alt="Incline Dumbbell Bench Press"
            src="https://cdn.muscleandstrength.com/sites/default/files/incline-dumbbell-bench-press_0.jpg"
          />
          <div className="btn-flex">
            <button className="btn-btn">
              TYPE <br /> STRENGTH
            </button>
            <button className="btn-btn">
              EQUIPMENT <br /> MACHINE
            </button>
            <button className="btn-btn">
              MACHINCS <br /> ISOLATION
            </button>
            <button className="btn-btn">
              EXP.LEVEL <br /> BEGINNER
            </button>
          </div>
        </div>
        <div>
          <img
            data-src="https://cdn.muscleandstrength.com/sites/default/files/machine-fly.jpg"
            className="gym_img"
            width="600"
            height="500"
            alt="Pec Dec"
            src="https://cdn.muscleandstrength.com/sites/default/files/machine-fly.jpg"
          />
          <div className="btn-flex">
            <button className="btn-btn">
              TYPE <br /> STRENGTH
            </button>
            <button className="btn-btn">
              EQUIPMENT <br /> MACHINE
            </button>
            <button className="btn-btn">
              MACHINCS <br /> ISOLATION
            </button>
            <button className="btn-btn">
              EXP.LEVEL <br /> BEGINNER
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="chest-2">
        <div>
          <img
            data-src="https://cdn.muscleandstrength.com/sites/default/files/machine-bench-press_0.jpg"
            className="gym_img"
            width="600"
            height="500"
            alt="Machine Bench Press"
            src="https://cdn.muscleandstrength.com/sites/default/files/machine-bench-press_0.jpg"
          />
          <div className="btn-flex">
            <button className="btn-btn">
              TYPE <br /> STRENGTH
            </button>
            <button className="btn-btn">
              EQUIPMENT <br /> MACHINE
            </button>
            <button className="btn-btn">
              MACHINCS <br /> ISOLATION
            </button>
            <button className="btn-btn">
              EXP.LEVEL <br /> BEGINNER
            </button>
          </div>
        </div>
        <div>
          <img
            data-src="https://cdn.muscleandstrength.com/sites/default/files/standing-cable-fly1.jpg"
            className="gym_img"
            width="600"
            height="500"
            alt="Standing Cable Fly"
            src="https://cdn.muscleandstrength.com/sites/default/files/standing-cable-fly1.jpg"
          />
          <div className="btn-flex">
            <button className="btn-btn">
              TYPE <br /> STRENGTH
            </button>
            <button className="btn-btn">
              EQUIPMENT <br /> MACHINE
            </button>
            <button className="btn-btn">
              MACHINCS <br /> ISOLATION
            </button>
            <button className="btn-btn">
              EXP.LEVEL <br /> BEGINNER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chest;
