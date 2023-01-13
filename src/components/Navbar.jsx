import React from "react";
import {
  Flex,
  Text,
  Spacer,
  Avatar,
  Button,
  useDisclosure,
  Slide,
  Box,
} from "@chakra-ui/react";

function Navbar({ user, setUser }) {
  const handleClick = () => setUser("");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Avatar
        visibility={user ? "visible" : "hidden"}
        name={user}
        position="absolute"
        top="3"
        left="3"
        zIndex="2"
        onClick={onToggle}
      />

      <Slide direction="left" in={isOpen} zIndex="1">
        <Flex
          color="white"
          bg="gray.800"
          rounded="md"
          h="100%"
          w="xs"
          shadow="md"
        >
          asdasdsad
          <Button colorScheme='whiteAlpha' onClick={handleClick} alignSelf='end' m='5'>
            Cerrar Sesion
          </Button>
        </Flex>
      </Slide>
    </>
  );
}

export default Navbar;
