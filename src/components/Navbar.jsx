import React from 'react'
import { Flex, Text, Spacer, Avatar } from '@chakra-ui/react'


function Navbar({user}) {
  return (
    <Flex bg='blackAlpha.800' w='30vw' h='100%' p='5' alignItems='start'>
        <Text color='whiteAlpha.800' as='b'> React - Chat</Text>
        <Spacer/>
        <Avatar name={user}  visibility={user? 'visible' : 'hidden'}/>
    </Flex>
  )
}

export default Navbar