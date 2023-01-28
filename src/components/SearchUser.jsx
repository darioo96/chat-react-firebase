import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";

import  searchUsersFirebase  from "../connection/searchUser";
import { useState, useEffect } from "react";

function SearchUser() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => setSearchInput(e.target.value);

  useEffect(() => {
    searchUsersFirebase(searchInput);
  }, [searchInput]);

  return (
    <>
      <Button onClick={onOpen}>Add User</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Agregar Usuario</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              variant="flushed"
              placeholder="Usuario"
              size="lg"
              onChange={handleChange}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SearchUser;
