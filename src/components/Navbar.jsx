import React from "react";
import { Flex, Text, Spacer, Avatar, Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import User from "./User";

function Navbar({ user }) {
  return (
    <>
      <Flex bg="blackAlpha.700" w="30vw" h="100vh" p="5" direction='column' justify='space-between' borderRightRadius='3xl'>
        <Flex>
          <Text color="whiteAlpha.800" as="b">React - Chat</Text>
          <Spacer />
          <Menu isLazy>
            <MenuButton>
              <Avatar name={user} visibility={user ? "visible" : "hidden"} />
            </MenuButton>
            <MenuList p='0'>
              <Button  w='100%' variant='ghost'>Cerrar Sesion</Button>
            </MenuList>
          </Menu>
        </Flex>
        <User />
      </Flex>
    </>
  );
}

export default Navbar;
