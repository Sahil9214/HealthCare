import { FormLabel, Input, Button, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import "../CSS/Tracker.css";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const Bmi = () => {
  // const [age, setAge] = useState<number>(0);
  // const [height, setHeight] = useState<number>(0);
  // const [weight, setWeight] = useState<number>(0);
  const [bmi, setBmi] = useState<{age: string; height: string; weight: string}>({
    age: "",
    height: "",
    weight: ""
  });
  const toast = useToast();


  

  const handleSubmit =(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    axios.post('http://localhost:8080/bmi',{
       ...bmi
    }).then((res)=>{
      console.log(res.data)
      let value = res.data.weight / Math.pow(res.data.height / 100, 2);
      // console.log(value)
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
    })
  }
  


  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <Box width={"80%"} margin={"auto"}>
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
          value={bmi.age}
          onChange={(e)=>setBmi({...bmi,age:e.target.value})}
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
          value={bmi.height}
          onChange={(e)=>setBmi({...bmi,height:e.target.value})}
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
          value={bmi.weight}
          onChange={(e)=>setBmi({...bmi,weight:e.target.value})}
        />

        <br />
        <br />
        <Button className="text-4xl " type='submit'>Calculate</Button>
      </Box>
    </form>
  );
};

export default Bmi;
