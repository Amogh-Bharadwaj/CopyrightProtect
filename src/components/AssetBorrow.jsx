import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
import {
    Flex,
    Stack,
    VStack,
    Text,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Button,
    Container,
    StackDivider
} from "@chakra-ui/react";

import{
    ArrowRightIcon,
    LockIcon,
} from "@chakra-ui/icons"

const AssetBorrow =()=>{
    return(
        <Container>
            <VStack 
            divider={<StackDivider borderColor='gray.200' />}>

                <FormControl id='asset-id' isRequired>
                    <FormLabel>Asset ID</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
                <FormControl id='time-quantum' isRequired>
                    <FormLabel>Time Quantum</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
                <FormControl id='price' isRequired>
                    <FormLabel>Price</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
                <FormControl id='numberofseconds' isRequired>
                    <FormLabel>Number of Seconds</FormLabel>
                    <Input placeholder='First name' />
                </FormControl>
                <Button 
                colorScheme="teal"> 
                    Submit
                </Button>
            </VStack>
        </Container>

    )
}

export default AssetBorrow;