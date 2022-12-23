import React from "react";
import { Flex, Text, Spacer, Avatar } from "@chakra-ui/react";
import User from "./User";

function Navbar({ user }) {
  return (
    <>
      <Flex bg="blackAlpha.800" w="30vw" h="100vh" p="5" direction='column'>
        <Flex>
          <Text color="whiteAlpha.800" as="b">React - Chat</Text>
          <Spacer />
          <Avatar name={user} visibility={user ? "visible" : "hidden"} />
        </Flex>
        <User />
      </Flex>
    </>
  );
}

export default Navbar;
