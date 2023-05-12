import React, { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
//import Swal from "sweetalert2";
import { useToast } from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleClick = () => {
    const form = { email, password };
    fetch(`${process.env.REACT_APP_BASE_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg === "login successfull" && res.token) {
          localStorage.setItem("user", email);
          localStorage.setItem("token", res.token);
          //Swal.fire("Good job!", "Login Successfull", "success");
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
          });
          navigate("/");
        } else if (res.msg === "login failed") {
          //Swal.fire("Nah !", "Wrong credentials", "error");
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else if (res.msg === "Please fill all the fields") {
          //Swal.fire("Wait", "Some fields are missing", "question");
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        } else {
          // Swal.fire(
          //   "Error",
          //   "Something went wrong. Please try after sometime",
          //   "error"
          // );
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((err) =>
        // Swal.fire(
        //   "Error",
        //   "Something went wrong. Please try after sometime",
        //   "error"
        // )
        toast({
          title: "Error",
          description: "Something went wrong. Please try after sometime.",
          status: "error",
          duration: 3000,
          //isClosable: true,
          position: "top",
        })
      );
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        //bg={useColorModeValue("gray.50", "gray.800")}
        // bg={"#f6eff6"}
        backgroundImage={
          "https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
        }
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color={"white"}>
              Login to your account
            </Heading>
            <Text fontSize={"lg"} color={"white"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            //bg={useColorModeValue("white", "gray.700")}
            bg={"#65497b"}
            boxShadow={"lg"}
            p={8}
            color={"white"}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  placeholder="enter your password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.200"}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleClick}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
