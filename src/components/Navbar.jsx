import React from 'react'
import { Flex, Text, Spacer, Avatar } from '@chakra-ui/react'


function Navbar({user}) {
  return (
    <Flex bg='blackAlpha.800' pos='absolute' w='100vw' p='5' alignItems='center'>
        <Text color='whiteAlpha.800' as='b'> React - Chat</Text>
        <Spacer/>
        <Avatar name={user}  visibility={user? 'visible' : 'hidden'}/>
    </Flex>
  )
}

export default Navbar