import { Avatar, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

import React from "react";

function Chat({ user }) {
  const mesages = [
    { id: 1, text: "hola", name: "dario" },
    { id: 2, text: "como estas?", name: "len" },
    { id: 3, text: "bien y vos ?", name: "dario" },
    { id: 2, text: "como estas?", name: "len" },
    { id: 2, text: "como estas?", name: "len" },
    { id: 2, text: "como estas?", name: "len" },
  ];

  if (user) {
    return (
      <Flex m="auto" w='xl' bgColor='blackAlpha.300' direction='column' roundedTop='3xl'>
        <Box padding='5' bgColor="red.900" color='whiteAlpha.900' roundedTop='3xl'>
          <Text textAlign='center'> Chat-Prueba</Text>
        </Box>
        <Flex direction="column" p='7' gap='2'>
          {mesages.map((mesage) => {
            return <Flex alignSelf={(user==mesage.name)? 'end' : []} direction={(user==mesage.name)? 'row-reverse' : []} alignItems='center' gap='5'>
              <Avatar size='sm' name={mesage.name}/>
              <Text bgColor='red.200' p='3' paddingInline='10' rounded='full'> {mesage.text} </Text>
            </Flex>
          })}          
        </Flex>
        <Flex gap='2' bgColor='whiteAlpha.600' border='1px' p='3' borderColor='whiteAlpha.900' rounded='5'>
          <Input/>
          <Button> <AiOutlineSend/></Button>
        </Flex>
      </Flex>
    );
  }
}

export default Chat;
