import React from "react";
import Tracker1 from "../Images/Tracker1.png";
import "../CSS/Tracker.css";
import {  Image, Text } from "@chakra-ui/react";
import clock from "../Images/clock.png";
import exercise from "../Images/exercise.png";
import run from "../Images/run.png";
import time from "../Images/time.png";
import Tracker2 from "../Images/Tracker2.png";
import Tracker3 from "../Images/Tracker3.png";
import runner from "../Images/runner.png";
import womenrun from "../Images/womenrun.png";
import Bmi from "../Components/Bmi";
const Tracker = () => {
  return (
    <div>
      <img className="Tracker1_img" src={Tracker1} alt="tracker1" />
      <div className="Tracker1_box1">
        <div className="Tracker1_best">
          <h1 className="h1Tag_Tracker1">
            Do what's best for your body every day
          </h1>
          <br />
          <br />
          <br />
          <br />
          <div className="grid_column">
            <div>
              <Image margin={"auto"} width="40px" src={clock} alt="img1" />
              <Text className="text_heading">Get in tune with you</Text>
              <Text className="text_text">
                See how your previous activity,sleep & heart rate variability
                affect today
              </Text>
            </div>
            <div>
              <Image margin={"auto"} width="40px" src={exercise} alt="image2" />
              <Text className="text_heading">Redefine your routine</Text>
              <Text className="text_text">
                Base exercise & recovery on your body instead of a schedule.
              </Text>
            </div>
            <div>
              <Image margin={"auto"} width="40px" src={run} alt="image2" />
              <Text
                style={{ fontWeight: "600", fontSize: "24px" }}
                className="text_heading"
              >
                Intensity guidance
              </Text>
              <Text className="text_text">
                Get dynamic recommendations for workouts & mindfulness.
              </Text>
            </div>
            <div>
              <Image margin={"auto"} width="40px" src={time} alt="image2" />
              <Text className="text_heading">Exercise efficiently</Text>
              <Text className="text_text">
                Improved recovery helps you get more out of your workouts.
              </Text>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div>
          <Image className="Tracker1_img" src={Tracker2} alt="tracker2" />
        </div>
        {/* //className="bmi_text" */}
        <br/>
        <div >
          <h1 className="text-6Xl font-medium text-green" style={{
            fontSize:"39px",
            fontFamily:"Lobster Two cursive",
            fontStyle:"italic",
            fontWeight:"600"

          }}>
            We are worry about your health Check your BMI Score{" "}
          </h1>
          <div className="BMI_Images">
            <Image className="run_image" src={womenrun} alt="womenrun" />
          
            {/* <Image className="run_image" src={runner} alt="men runner" /> */}
            <Bmi />
          </div>
        </div>
        <br/>
        <div>
          <Image className="Tracker1_img" src={Tracker3} alt="tracker2" />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
