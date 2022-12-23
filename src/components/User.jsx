import { Flex, Input } from '@chakra-ui/react'

import React from "react";

function User() {
    return <>
        <Flex>
            <Input variant='flushed' placeholder='Buscar contacto' />
        </Flex>
    </>;
}

export default User;
