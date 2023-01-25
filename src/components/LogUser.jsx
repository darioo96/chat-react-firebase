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
  useToast,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import SignUser from "./SignUser";
import { signIn } from "../connection/signIn";

function LogUser({ setUser }) {
  const toast = useToast();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeMail = (event) => setMail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleSubmit = () => {
    signIn(mail, password, setUser, toast);
  };
  return (
    <Card m="auto" variant="filled" bg="brand.white">
      <CardBody display="flex" gap="3" flexDir="column" alignItems="center">
        <Avatar bg="blue.300" color="white" size="xl" name={mail} />
        <FormControl
          display="flex"
          flexDir="column"
          alignItems="center"
          gap="5"
        >
          <FormLabel>Iniciar Sesión</FormLabel>
          <Input
            type="text"
            textAlign="center"
            w="l"
            onChange={handleChangeMail}
            placeholder="E-mail"
          />
          <Input
            type="password"
            textAlign="center"
            w="l"
            onChange={handleChangePassword}
            placeholder="Password"
          />
          <Flex align="center" gap="2">
            <Button
              rightIcon={<AiOutlineSend />}
              colorScheme="blue"
              size="md"
              variant="outline"
              onClick={handleSubmit}
            >
              Ingresar
            </Button>
          </Flex>
        </FormControl>
      </CardBody>
      <Divider />
      <CardFooter justify="center">
        <SignUser />
      </CardFooter>
    </Card>
  );
}

export default LogUser;
