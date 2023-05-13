import React from "react";
import { Link } from "react-router-dom";

const OverweightPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Risks of Being Overweight
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Being overweight or obese can increase your risk for several health
          problems, including:
        </p>
        <ul className="text-gray-700 text-lg list-disc pl-8 mb-8">
          <li>High blood pressure</li>
          <li>High cholesterol</li>
          <li>Heart disease</li>
          <li>Stroke</li>
          <li>Type 2 diabetes</li>
          <li>Joint problems</li>
          <li>Sleep apnea</li>
        </ul>
        <p className="text-gray-700 text-lg mb-6">
          If you are overweight or obese, losing weight can improve your overall
          health and reduce your risk of developing these health problems. A
          healthy diet and regular exercise can help you achieve and maintain a
          healthy weight.
        </p>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Dietary Recommendations
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          If you are overweight or obese, it is important to make changes to
          your diet in order to achieve a healthy weight. Some dietary
          recommendations include:
        </p>
        <ul className="text-gray-700 text-lg list-disc pl-8 mb-8">
          <li>Eating a variety of fruits and vegetables</li>
          <li>
            Choosing lean protein sources, such as chicken, fish, and legumes
          </li>
          <li>Avoiding processed and high-sugar foods</li>
          <li>Drinking plenty of water</li>
          <li>Limiting alcohol consumption</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Exercise Recommendations
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Regular exercise is an important part of achieving and maintaining a
          healthy weight. Some recommended exercises for overweight or obese
          individuals include:
        </p>
        <ul className="text-gray-700 text-lg list-disc pl-8 mb-8">
          <li>Walking</li>
          <li>Swimming</li>
          <li>Cycling</li>
          <li>Aerobic exercise classes</li>
          <li>Strength training</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Resources for Additional Support
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          If you are struggling with your weight, there are many resources
          available to provide support and guidance. Some options include:
        </p>
        <ul className="text-gray-700 text-lg list-disc pl-8 mb-8">
          <li>
            <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/index.htm">
              National Heart, Lung, and Blood Institute - Aim for a Healthy
              Weight
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default OverweightPage;
