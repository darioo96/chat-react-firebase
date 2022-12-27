import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Avatar,
  Button,
  Flex,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function LogUser({ setUser }) {
  const [customUser, setCustomUser] = useState("");

  const handleChange = (event) => setCustomUser(event.target.value);
  const handleSubmit = () => setUser(customUser);
  return (
    <Box m="auto" display="flex" gap="3" flexDir="column" alignItems="center">
      <Avatar bg="blue.300" color="white" size="xl" name={customUser} />
      <FormControl display="flex" flexDir="column" alignItems="center" gap="5">
        <FormLabel>Iniciar Sesión</FormLabel>
        <Input type="text" textAlign="center" w="l" onChange={handleChange} placeholder='User'/>
        <Input type="password" textAlign="center" w="l" placeholder='Password'/>
        <Flex align='center' gap='2'>
          <Button size='md' colorScheme="teal" variant="outline" ><FaSignInAlt /></Button>
          <Button rightIcon={<AiOutlineSend />} colorScheme="blue" size="md" variant="outline" onClick={handleSubmit}>
           Ingresar
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}

export default LogUser;
