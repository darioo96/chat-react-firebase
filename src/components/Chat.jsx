import { Avatar, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { ref, set } from "firebase/database";
import { database } from "../connection/fireBaseConnection";
import readDataChat from "../connection/dataChat";

function Chat({ user }) {
  const [text, setText] = useState("");
  const [mesages, setMesages] = useState([]);

  //write
  const writeToDataBase = () => {
    const id = mesages.length;
    set(ref(database, `/chats/${id}`), {
      text,
      user,
    });
  };

  useEffect(() => {
    readDataChat(setMesages);
  }, []);

  const handleSubmit = () => {
    if (text) {
      writeToDataBase();
      setText("");
    }
  };

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  if (user) {
    return (
      <Flex
        h='100%'
        w='50%'
        m='auto'
        bgColor="blackAlpha.300"
        direction="column"
        roundedTop="3xl"
        justify="space-between"
      >
        <Box
          padding="5"
          bgColor="red.900"
          color="whiteAlpha.900"
          roundedTop="3xl"
        >
          <Text textAlign="center">Chat-Prueba</Text>
        </Box>

        <Flex direction="column" w="100%" p="7" gap="3" overflow="auto">
          {mesages.map((mesage,index) => {
            return (
              <Flex
                key={index}
                alignSelf={user == mesage.user ? "end" : []}
                direction={user == mesage.user ? "row-reverse" : []}
                alignItems="center"
                gap="5"
              >
                <Avatar size="sm" name={mesage.user} position="static" />
                <Box
                  direction="column"
                  bgColor="whatsapp.100"
                  borderRadius="lg"
                  paddingInline="4"
                >
                  <Text color="black" fontSize="xx-small" fontWeight="bold">
                    {mesage.user.toUpperCase()}
                  </Text>
                  <Text fontSize="small">{mesage.text}</Text>
                </Box>
              </Flex>
            );
          })}
        </Flex>

        <Flex
          gap="2"
          bgColor="whiteAlpha.600"
          border="1px"
          p="3"
          borderColor="whiteAlpha.900"
          rounded="7"
        >
          <Input value={text} onChange={handleChangeInput} pos="static" />
          <Button onClick={handleSubmit}>
            {" "}
            <AiOutlineSend />
          </Button>
        </Flex>
      </Flex>
    );
  }
}

export default Chat;
