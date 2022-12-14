import Navbar from './components/Navbar'
import { ChakraProvider ,Flex } from '@chakra-ui/react'
import { useState } from 'react'

import IsLoged from './components/IsLoged'

function App() {

  const [user, setUser] = useState("")

  return (
    <ChakraProvider>
      <Flex direction='row' alignItems='center' w='100vw' h='100vh' bgColor='green.50' overflow='hidden'>
        <Navbar user = {user} setUser={setUser}/>
        <IsLoged user={user} setUser={setUser}/>
      </Flex>
    </ChakraProvider>
  )
}

export default App
