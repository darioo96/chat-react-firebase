import React from "react";
import { Flex, Text, Spacer, Avatar, Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import User from "./User";

function Navbar({ user , setUser}) {
  const  handleClick = () => setUser('')
  return (
    <>
      <Flex bg="blackAlpha.700" w="30vw" h="100vh" p="5" direction='column' justify='space-between' borderRightRadius='3xl'>
        <Flex>
          <Text color="whiteAlpha.800" as="b">React - Chat</Text>
          <Spacer />
          <Menu isLazy>
            <MenuButton visibility={user ? "visible" : "hidden"}>
              <Avatar name={user}/>
            </MenuButton>
            <MenuList p='0'>
              <MenuItem>
              <Button w='100%' variant='ghost' onClick={handleClick}>Cerrar Sesion</Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <User />
      </Flex>
    </>
  );
}

export default Navbar;
