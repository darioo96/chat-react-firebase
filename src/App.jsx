import Navbar from './components/Navbar'
import { ChakraProvider ,extendTheme,Flex } from '@chakra-ui/react'
import { useState } from 'react'

import IsLoged from './components/IsLoged'

function App() {

  const [user, setUser] = useState("")
  const theme = extendTheme({
    colors: {
      brand: {
        'black': "#333333",
        'white': "#FFFFFF",
        'sky': "#E1F4F3",
        'brown': "#706C61",

      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="row"
        alignItems="center"
        w="100vw"
        h="100vh"
        bgColor="brand.black"
        overflow="hidden"
      >
        <Navbar user={user} setUser={setUser} />
        <IsLoged user={user} setUser={setUser} />
      </Flex>
    </ChakraProvider>
  );
}

export default App
