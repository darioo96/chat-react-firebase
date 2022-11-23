import { Box, Flex } from "@chakra-ui/react";
import React from "react";

function Chat({ user }) {
  if (user) {
    return (
      <Flex m="auto">
        <Box bgColor='cyan.100'>
          
        </Box>
      </Flex>
    );
  }
}

export default Chat;
