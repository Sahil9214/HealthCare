// import React, { useState } from "react";

// type Gender = "male" | "female" | "other";

// interface FormValues {
//   age: number | null;
//   gender: Gender | null;
//   weight: number | null;
//   height: number | null;
// }

// interface Props {
//   onSubmit: (formValues: FormValues) => void;
// }

// const GenderOptions: Gender[] = ["male", "female", "other"];
// const AgeOptions: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const WeightOptions: number[] = Array.from({ length: 200 }, (_, i) => i + 1);
// const HeightOptions: number[] = Array.from({ length: 150 }, (_, i) => i + 100);

// const initialFormValues: FormValues = {
//   age: null,
//   gender: null,
//   weight: null,
//   height: null,
// };

// const UserForm: React.FC<Props> = ({ onSubmit }) => {
//   const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value !== "" ? Number(value) : null,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     onSubmit(formValues);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="age">Age:</label>
//         <select name="age" onChange={handleChange}>
//           <option value="">Select Age</option>
//           {AgeOptions.map((age) => (
//             <option key={age} value={age}>
//               {age}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="gender">Gender:</label>
//         <select name="gender" onChange={handleChange}>
//           <option value="">Select Gender</option>
//           {GenderOptions.map((gender) => (
//             <option key={gender} value={gender}>
//               {gender}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="weight">Weight (in kg):</label>
//         <select name="weight" onChange={handleChange}>
//           <option value="">Select Weight</option>
//           {WeightOptions.map((weight) => (
//             <option key={weight} value={weight}>
//               {weight}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div>
//         <label htmlFor="height">Height (in cm):</label>
//         <select name="height" onChange={handleChange}>
//           <option value="">Select Height</option>
//           {HeightOptions.map((height) => (
//             <option key={height} value={height}>
//               {height}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

import React, { useState } from "react";
import { Form } from "react-router-dom";

const UserForm = () => {
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted values:", age, gender, weight, height);
  
    // Store form data in local storage
    localStorage.setItem("userForm", JSON.stringify({ age, gender, weight, height }));
  
    // Redirect based on weight
    const bmi = weight! / ((height! / 100) ** 2);
    if (bmi < 18.5) {
      // Redirect to underweight page
      window.location.href = "/underweight";
    } else if (bmi >= 25) {
      // Redirect to overweight page
      window.location.href = "/overweight";
    }
  };
  

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className=" rounded px-8 py-8 pt-8">
        <h1 className="text-gray-900 font-bold text-2xl mb-6">
          User Information
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            min={0}
            max={100}
            placeholder="Enter your age"
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="gender"
          >
            Gender
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="weight"
          >
            Weight (in kg)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="number"
            min={0}
            max={500}
            placeholder="Enter your weight"
            onChange={(e) => setWeight(Number(e.target.value))}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="height"
          >
            Height (in cm)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="height"
            type="number"
            min={0}
            max={300}
            placeholder="Enter your height"
            onChange={(e) => setHeight(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit" className="text-gray-700">
          Submit
        </button>
      </form>
    </div>
  );
};
export default UserForm;
