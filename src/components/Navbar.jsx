import React from "react";
import {
  Flex,
  Avatar,
  Button,
  useDisclosure,
  Slide,
  Stack,
} from "@chakra-ui/react";
import SearchUser from "./SearchUser";

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
          flexDir="column"
          justifyContent="space-between"
          color="white"
          bg="gray.800"
          rounded="md"
          h="100%"
          w="xs"
          shadow="md"
        >
          <Stack p='5'>
            <SearchUser />
          </Stack>
          hoas
          <Button
            colorScheme="whiteAlpha"
            onClick={handleClick}
            alignSelf="end"
            justifySelf="center"
            m="5"
          >
            Cerrar Sesion
          </Button>
        </Flex>
      </Slide>
    </>
  );
}

export default Navbar;
