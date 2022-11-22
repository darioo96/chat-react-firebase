import Navbar from './components/Navbar'
import { ChakraProvider ,Flex, Spacer } from '@chakra-ui/react'
import { useState } from 'react'

import IsLoged from './components/IsLoged'

function App() {

  const [user, setUser] = useState("")

  return (
    <ChakraProvider>
      <Flex direction='column' alignItems='center' w='100vw' h='100vh' bgColor='blackAlpha.300'>
        <Navbar user = {user}/>
        <IsLoged user={user} setUser={setUser}/>
      </Flex>
    </ChakraProvider>
  )
}

export default App
