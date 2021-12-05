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
    StackDivider,
    Center
} from "@chakra-ui/react";

import{
    ArrowRightIcon,
    LockIcon,
} from "@chakra-ui/icons"

const AssetBorrow =()=>{
    return(
        <Flex
         direction="row"
         w="70%"
         h="100vh"
         align="center"

         justify="center"
        >
            <VStack 
            p={6}
            w="60%">

                <Center>
                    <Text 
                      color="#55A1F2" 
                      fontSize="3xl"> 
                        Request an Asset 
                    </Text>
                </Center> 
            

                <FormControl
                 w="full"
                 textColor="white">
                    <FormLabel py={5} >
                    Asset ID</FormLabel>
                    <Input placeholder='Asset ID..' />
               
                
                    <FormLabel pt={5} >Time Quantum</FormLabel>
                    <Input placeholder='In seconds' />
                
               
                    <FormLabel pt={5} >Price</FormLabel>
                    <Input placeholder='In wei' />
                
                
                    <FormLabel pt={5} >Number of Seconds</FormLabel>
                    <Input 
                     
                     mb={5}
                     />
                </FormControl>
                <Button 
                
                colorScheme="teal"> 
                    Submit
                </Button>
            </VStack>
        </Flex>

    )
}

export default AssetBorrow;