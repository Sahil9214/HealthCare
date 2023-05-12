import { FormLabel, Input, Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import "../CSS/Tracker.css";
import { useToast } from "@chakra-ui/react";
const Bmi = () => {
  const [age, setAge] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const toast = useToast();
 

  const handleAge = (e: any) => {
    setAge(e.target.value);
  };
  const handleHeight = (e: any) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e: any) => {
    setWeight(e.target.value);
  };
  console.log(height, weight, age);
  const handleSubmit = () => {
    let value = weight / Math.pow(height / 100, 2);

    if (value <= 18.5) {
      toast({
        position: "top",
        title: "BMi calculation",
        description: `BMI value ${value}"\n" You are underweight`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else if (value > 18.5 && value <= 24.9) {
      toast({
        position: "top",
        title: "BMi calculation",
        description: `BMI value ${value}"\n" You are Healthy person`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else if (value > 25 && value < 29.9) {
      toast({
        position: "top",
        title: "BMi calculation",
        description: `BMI value ${value}"\n" You are Overweight`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } else {
      toast({
        position: "top",
        title: "BMi calculation",
        description: `BMI value ${value}"\n"You are suffering from obesity U are in danger please consult the doctor `,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    }
    setAge(0);
    setHeight(0);
    setWeight(0);
  };

  return (
    <div style={{ width: "100%" }}>
      <Box width={"80%"}>
        <FormLabel
          style={{
            fontSize: "23px",
            lineHeight: "1.7",
            letterSpacing: "1.5px",
            fontStyle: "italic",
          }}
          className="text-3xl font-bold"
        >
          Enter the Age
        </FormLabel>

        <Input
          placeholder="Enter the age"
          type="number"
          style={{
            padding: "28px 0px",
            fontSize: "21px",
          }}
          value={age}
          onChange={handleAge}
        />

        <FormLabel
          className=""
          style={{
            fontSize: "23px",
            lineHeight: "1.7",
            letterSpacing: "1.5px",
            fontStyle: "italic",
          }}
        >
          Enter the Height in CM
        </FormLabel>
        <Input
          placeholder="Enter the height in cm"
          style={{
            padding: "28px 0px",
            fontSize: "21px",
          }}
          value={height}
          onChange={handleHeight}
        />
        <br />
        <FormLabel
          className="formable_bmi"
          style={{
            fontSize: "23px",
            lineHeight: "1.7",
            letterSpacing: "1.5px",
            fontStyle: "italic",
          }}
        >
          Enter the Weight in Kg
        </FormLabel>
        <Input
          placeholder="Enter the weight in kg"
          style={{
            padding: "28px 0px",
            fontSize: "21px",
          }}
          value={weight}
          onChange={handleWeight}
        />

        <br />
        <br />
        <Button onClick={handleSubmit}>Calculate</Button>
      </Box>
    </div>
  );
};

export default Bmi;
