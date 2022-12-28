import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Avatar,
  Button,
  Flex,
  Card,
  CardBody,
  Divider,
  CardFooter,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import SignUser from "./SignUser";

function LogUser({ setUser }) {
  const [customUser, setCustomUser] = useState("");

  const handleChange = (event) => setCustomUser(event.target.value);
  const handleSubmit = () => setUser(customUser);
  return (
    <Card m='auto' variant='filled' bg='blackAlpha.300'>
      <CardBody  display="flex" gap="3" flexDir="column" alignItems="center">
        <Avatar bg="blue.300" color="white" size="xl" name={customUser} />
        <FormControl display="flex" flexDir="column" alignItems="center" gap="5">
          <FormLabel>Iniciar Sesión</FormLabel>
          <Input type="text" textAlign="center" w="l" onChange={handleChange} placeholder='User'/>
          <Input type="password" textAlign="center" w="l" placeholder='Password'/>
          <Flex align='center' gap='2'>

            <Button rightIcon={<AiOutlineSend />} colorScheme="blue" size="md" variant="outline" onClick={handleSubmit}>
            Ingresar
            </Button>
          </Flex>
        </FormControl>
      </CardBody>
      <Divider/>
      <CardFooter justify='center'>
        <SignUser/>
      </CardFooter>
    </Card>
  );
}

export default LogUser;
