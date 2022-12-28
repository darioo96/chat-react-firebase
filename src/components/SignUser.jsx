import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Input,
  InputRightElement,
  InputGroup,
  ModalFooter
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";




function SignUser() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return(
    <Box>
        <Button onClick={onOpen} rightIcon={<FaSignInAlt/>}>Registrarse</Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter='blur(10px)'/>
        <ModalContent>
            <ModalHeader>Registro</ModalHeader>
            <ModalCloseButton />
            <ModalBody gap='5' display='flex' flexDir='column'>
                <Input type='email' placeholder="E-mail"/>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'} placeholder='Contraseña'/>
                    <InputRightElement width='4.5rem'>
                        <Button size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='green'>Enviar</Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </Box>
    )
}

export default SignUser;
