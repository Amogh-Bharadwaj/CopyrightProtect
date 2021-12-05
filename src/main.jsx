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
    Button
} from "@chakra-ui/react";

import{
    ArrowRightIcon,
    LockIcon,
} from "@chakra-ui/icons"

const Main =()=>{
    return(

        <Flex
         direction="column"
         align="center"
         w="100vw"
         bgColor="black"
         justify="center"
         bgGradient="linear(360deg, #232A33 ,black)"
         >  
          <Flex
           direction="row"
           h="full"
           w="full"
           >
            <VStack
              spacing = {4}
              w="30%"
              h="100vh"
              bgGradient="linear(to-r, black,#0E3259)"
              >

              </VStack>

           </Flex>
             
         </Flex>

    )
}

export default Main;