import React from "react";
import "../CSS/Tracker.css";
import delivery from "../Images/delivery.png";
import health from "../Images/healthcare.png";
import house from "../Images/house.png";
import doctor from "../Images/doctor.png";
import foot from "../Images/footsteps.png";
import FootCalculator from "./FootCalculator";

const FootStep = () => {
  return (
    <div>
      <h1
        className="text-6Xl font-medium text-green font-bold underline"
        style={{
          fontSize: "39px",
          fontFamily: "Lobster Two cursive",
          fontStyle: "italic",
          fontWeight: "600",
        }}
      >
        How to Remain Always Fit and check by doctor
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="grid_column">
        <div className="grid_div_column">
          <img
            style={{ margin: "auto", width: "40px" }}
            src={delivery}
            alt="img1"
          />
          <p className="text_heading">Get in tune with you</p>
          <p className="text_text">
            See how your previous activity,sleep & heart rate variability affect
            today
          </p>
        </div>
        <div>
          <img
            style={{ margin: "auto", width: "40px" }}
            src={health}
            alt="image2"
          />
          <p className="text_heading">Redefine your routine</p>
          <p className="text_text">
            Base exercise & recovery on your body instead of a schedule.
          </p>
        </div>
        <div>
          <img
            style={{ margin: "auto", width: "40px" }}
            src={house}
            alt="image2"
          />
          <p
            style={{ fontWeight: "600", fontSize: "24px" }}
            className="text_heading"
          >
            Intensity guidance
          </p>
          <p className="text_text">
            Get dynamic recommendations for workouts & mindfulness.
          </p>
        </div>
        <div>
          <img
            style={{ margin: "auto", width: "40px" }}
            src={doctor}
            alt="image2"
          />
          <p className="text_heading">Exercise efficiently</p>
          <p className="text_text">
            Improved recovery helps you get more out of your workouts.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <div>
        <div className="foot_grid">
          <div>
            <br/>
            <br/>
            <br/>
            <img className="Img_run_foot" src={foot} alt="foot" />
           
          </div>
          <FootCalculator />
        </div>
      </div>
    </div>
  );
};

export default FootStep;
