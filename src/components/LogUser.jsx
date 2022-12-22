import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

function LogUser({ setUser }) {
  const [customUser, setCustomUser] = useState("");

  const handleChange = (event) => setCustomUser(event.target.value);
  const handleSubmit = () => setUser(customUser);
  return (
    <Box m="auto" display="flex" gap="10" flexDir="column" alignItems="center">
      <Avatar bg="blue.300" color="white" size="xl" name={customUser} />
      <FormControl display="flex" flexDir="column" alignItems="center" gap="2">
        <FormLabel>Nombre Usuario</FormLabel>
        <Input type="text" textAlign="center" w="l" onChange={handleChange} />
        <Button
          rightIcon={<AiOutlineSend />}
          colorScheme="blue"
          size="lg"
          variant="outline"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}

export default LogUser;
