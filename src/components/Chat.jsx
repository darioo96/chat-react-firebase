import { Avatar, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import React, { useState, useEffect } from "react";
 import { onValue, ref, set } from "firebase/database";
 import { database } from "../connection/fireBaseConnection";
 import { uid } from "uid"

function Chat({ user }) {
  const [text, setText] = useState("");
  const [mesages, setMesages] = useState([]);

  //write
   const writeToDataBase = () => {
    const id = mesages.length;
     set(ref(database, `/chats/${id}`),{
      text,
      user,
     })
  }

  //read
  useEffect(() => {
    onValue(ref(database, '/chats'),snapshot => {
      setMesages([])
      const data = snapshot.val()
      if(data !== null){
        Object.values(data).map((text) => {
          setMesages((oldArray) => [...oldArray,text])
        })
      }
    })
  }, [])
  

  const handleSubmit = () => {
    writeToDataBase()
    setText("");
  };

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  if (user) {
    return (
      <Flex
        w="100%"
        h='100%'
        bgColor="blackAlpha.300"
        direction="column"
        roundedTop="3xl"
        justify='space-between'
      >
        <Box
          padding="5"
          bgColor="red.900"
          color="whiteAlpha.900"
          roundedTop="3xl"
        >
          <Text textAlign="center"> Chat-Prueba</Text>
        </Box>

        <Flex direction="column" w='100%' p="7" gap="3" overflow="auto">
          {mesages.map((mesage) => {
            return (
              <Flex
                alignSelf={user == mesage.user ? "end" : []}
                direction={user == mesage.user ? "row-reverse" : []}
                alignItems="center"
                gap="5"
              >
                <Avatar size="sm" name={mesage.user} />
                <Text bgColor="red.100" p="3" paddingInline="10" rounded="full">
                  {" "}
                  {mesage.text}{" "}
                </Text>
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
          <Input value={text} onChange={handleChangeInput} />
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
