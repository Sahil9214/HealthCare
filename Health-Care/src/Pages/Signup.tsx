import React from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
//import Swal from "sweetalert2";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleClick = () => {
    const form = { name, gender, email, password };
    fetch(`https://blushing-crab-purse.cyclic.app/user/register`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.msg);

        if (res.msg === "Registerd Successfull.") {
          setName("");
          setGender("");
          setEmail("");
          setPass("");
          //Swal.fire("Good job!", "New user has been registered", "success");
          toast({
            title: "Good job!",
            description: "New user has been registered.",
            status: "success",
            duration: 4000,
            //isClosable: true,
            position: "top",
          });
          navigate("/login");
        } else if (res.msg === "This email is already registered.") {
          setEmail("");
          //Swal.fire("Nah !", "Email already in use", "error");
          toast({
            title: "Nah !",
            description: "Email already in use.",
            status: "error",
            duration: 4000,
            //isClosable: true,
            position: "top",
          });
        } else if (res.msg === "Please fill all the details.") {
          // Swal.fire("Wait", "Some fields are missing", "question");
          toast({
            title: "Wait",
            description: "Some fields are missing.",
            status: "info",
            duration: 4000,
            //isClosable: true,
            position: "top",
          });
        } else {
          //Swal.fire("Error", "Wrong credentials", "error");
          toast({
            title: "Error",
            description: "Something went wrong. Please try after sometime.",
            status: "error",
            duration: 4000,
            //isClosable: true,
            position: "top",
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
          duration: 4000,
          //isClosable: true,
          position: "top",
        })
      );
    //console.log(form);
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        //bg={useColorModeValue("gray.50", "gray.800")}
        //bg={"#f6eff6"}
        bgImg={
          "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
        }
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"} bg={"InfoText"} borderRadius={"30px"}>
            <Heading fontSize={"4xl"} textAlign={"center"} color={"white"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"white"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            color={"white"}
            bg={"#65497b"}
            //bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      value={name}
                      placeholder="enter your name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="gender">
                    <FormLabel>Gender</FormLabel>

                    <Input
                      type="text"
                      value={gender}
                      placeholder="enter your gender"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    {/* <Select placeholder="Select">
                      <option value="Male">M</option>
                      <option value="Female">F</option>
                    </Select> */}
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="enter your password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      color={"black"}
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleClick}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"blue.400"} href="/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
