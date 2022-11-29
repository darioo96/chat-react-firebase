import { Avatar, Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

import React, { useState } from "react";
// import { ref, set } from "firebase/database";
// import { database } from "../connection/fireBaseConnection";
// import { uid } from "uid"

function Chat({ user }) {
  const [text, setText] = useState("");
  const [mesages, setMesages] = useState([]);

  //write
  // const writeToDataBase = () => {
  //   const uuid = uid();
  //   set(ref(database, `/${uuid}`))
  // }

  const handleSubmit = () => {
    setMesages([...mesages, { name: user, text: text }]);
    setText("");
    // writeToDataBase
  };

  const handleChangeInput = (e) => {
    setText(e.target.value);
  };

  if (user) {
    return (
      <Flex
        m="auto"
        w="xl"
        bgColor="blackAlpha.300"
        direction="column"
        roundedTop="3xl"
      >
        <Box
          padding="5"
          bgColor="red.900"
          color="whiteAlpha.900"
          roundedTop="3xl"
        >
          <Text textAlign="center"> Chat-Prueba</Text>
        </Box>
        <Flex direction="column" p="7" gap="2">
          {mesages.map((mesage) => {
            return (
              <Flex
                alignSelf={user == mesage.name ? "end" : []}
                direction={user == mesage.name ? "row-reverse" : []}
                alignItems="center"
                gap="5"
              >
                <Avatar size="sm" name={mesage.name} />
                <Text bgColor="red.200" p="3" paddingInline="10" rounded="full">
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
          rounded="5"
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
