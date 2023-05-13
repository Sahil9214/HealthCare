import { Box, Center, Image,Button, Stack,Text, Input} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Exerpng from '../Images/Exerpng.png'
import axios from 'axios';

const Exercise = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    // console.log(e.target.value)
    setSearch(e.target.value)
  };

  // const handleSearch = () =>{
  //   const Data = axios({
  //     method :'get',
  //     url : "https://exercisedb.p.rapidapi.com/exercises",
  //     headers: {
  //       "Content-Type": "application/json",
  //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  //       'X-RapidAPI-Key': 'ef64b4469bmsh6a9563b93666788p166408jsn26b5277e7fa0',
  //     },
  //   }).then((res)=>{
  //     console.log(res.data)
  //     setSearch(res.data)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // }

  async function handleSearch(){
      const options = {
        headers: {
          'X-RapidAPI-Key': 'ef64b4469bmsh6a9563b93666788p166408jsn26b5277e7fa0',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      let exercise = axios.get(`https://exercisedb.p.rapidapi.com/exercises`, options)
        .then((res) => {
       
          //  console.log(res.data)
           setSearch(res.data)
        })
        .catch(err => console.error(err));
    }

    useEffect(()=>{
        handleSearch()
    },[])
    console.log(search)
  return (
    <Box>
      <Center border='1px solid black' >
        <Image src={Exerpng} alt="image" />
      </Center>
      <br/>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" color={'blue.500'}>
      <Text fontWeight={700} mb="49px" textAlign="center" >
        Awesome Exercises You <br /> Should Know
      </Text>
      <Box position="relative" mb="72px" display='flex'>
        <Input
         value={search}
         onChange={handleChange}
          placeholder="Search Exercises"
        />
        <br/>
        <Button backgroundColor={'blue.500'} color='white' onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Stack>
    </Box>
  )
}

export default Exercise

