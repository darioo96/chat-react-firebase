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
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import signAuth from "../connection/signAuth";

function SignUser() {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [newUser, setNewUser] = useState('')
    const [newMail, setNewMail] = useState('')
    const [password, setPassword] = useState('')
    const toast = useToast()

    const handleChangeUser = (event) => setNewUser(event.target.value)
    const handleChangeMail = (event) => setNewMail(event.target.value)
    const handleChangePassword = (event) => setPassword(event.target.value)
    const handleClick = () => setShow(!show)
    const handleSubmit = () => {
        setLoading(true)
        signAuth(newUser, newMail, password, onClose,setLoading,toast);
    }

    return(
    <Box>
        <Button onClick={onOpen} rightIcon={<FaSignInAlt/>}>Registrarse</Button>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter='blur(10px)'/>
        <ModalContent>
            <ModalHeader>Registro</ModalHeader>
            <ModalCloseButton />
            <ModalBody paddingBottom='5' gap='5' display='flex' flexDir='column'>
                <Input type='text' placeholder="Nombre de Usuario" onChange={handleChangeUser}/>            
                <Input type='text' placeholder="E-mail" onChange={handleChangeMail}/>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'} placeholder='Contraseña' onChange={handleChangePassword}/>
                    <InputRightElement width='4.5rem'>
                        <Button size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Button colorScheme='green' onClick={handleSubmit} isLoading={loading} >Enviar</Button>                
            </ModalBody>
        </ModalContent>
        </Modal>
    </Box>
    )
}

export default SignUser;
