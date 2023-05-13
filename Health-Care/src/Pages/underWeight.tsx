import React from "react";

const UnderweightPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 py-8 pt-8">
        <h1 className="text-gray-900 font-bold text-2xl mb-6">
          Risks of Being Underweight
        </h1>
        <p className="text-gray-700 text-base mb-6">
          Being underweight can put you at risk for a number of health problems,
          including:
          <ul>
            <li>Decreased immune function</li>
            <li>Weaker bones</li>
            <li>Reduced muscle mass</li>
            <li>Irregular menstrual cycles in women</li>
            <li>Anemia</li>
            <li>Increased risk of infections and illness</li>
            <li>Fatigue and weakness</li>
          </ul>
        </p>
        <h2 className="text-gray-900 font-bold text-2xl mb-6">
          Dietary Recommendations
        </h2>
        <p className="text-gray-700 text-base mb-6">
          If you are underweight, it is important to consume a balanced diet
          that provides you with enough calories and nutrients to maintain a
          healthy weight. Some dietary recommendations include:
          <ul>
            <li>
              Eat nutrient-dense, high-calorie foods like nuts, seeds, avocados,
              and lean protein sources like chicken, fish, and tofu.
            </li>
            <li>
              Incorporate healthy fats like olive oil, coconut oil, and avocado
              into your diet.
            </li>
            <li>
              Focus on eating whole, minimally processed foods and avoid junk
              food.
            </li>
            <li>
              Try to eat several small meals throughout the day instead of three
              large meals.
            </li>
            <li>
              Consult with a registered dietitian or nutritionist to develop a
              meal plan that is tailored to your specific needs and goals.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Exercise Recommendations</h2>
          <p className="mb-4">
            Exercise can help build muscle mass and improve overall health. Here
            are some recommended exercises for individuals who are underweight:
          </p>
          <ul className="list-disc ml-8 mb-4">
            <li>Strength training exercises</li>
            <li>Resistance band workouts</li>
            <li>Yoga or Pilates</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Additional Support</h2>
          <p className="mb-4">
            If you need additional support or guidance for managing your weight,
            consider reaching out to one of these resources:
          </p>
          <ul className="list-disc ml-8">
            <li>Online support groups</li>
            <li>Local nutritionists or dietitians</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default UnderweightPage;
