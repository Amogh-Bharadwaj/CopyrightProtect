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
    Center,
    Divider,
    Box,
    HStack
} from "@chakra-ui/react";

import{
    ArrowRightIcon,
    LockIcon,
} from "@chakra-ui/icons"

const AssetRequests =()=>{
    const assets = [{"ID":"4F34F342","NAME":"VIOLIN COMPOSITION"},{"ID":"T668J342","NAME":"POKEMON FANFICTION"},{"ID":"GG44KLM0","NAME":"MECHANICAL SHOE MODEL"},{"ID":"33RRY789","NAME":"GAUSSIAN RESEARCH PAPER"}];
    return(
        <Flex
         direction="row"
         w="70%"
       
         align="center"
         justify="center"
        >
            <VStack 
            p={6}
            h="full"
            w="60%"> 
               
               <Center>
                   <Text
                    color="#55A1F2"
                    fontSize="3xl">
                        Incoming Requests
                    </Text>
               </Center>

               <VStack
                spacing={5}
                w="full"
                
                px={5}
                
               >  
                 {assets.map((ass)=>{
                    return(
                    <Flex 
                    w="full"
                    align="center"
                    direction="column">
                   <Box
                    
                    boxShadow="0px 0px 0px 3px black"
                    w="50%"
                    h="15vh"
                    fontSize="sm"
                    textColor="black"
                    bgGradient="linear(#204DA6,#17A1A9)"

                    >
                        <Text my={5} px={5}>ID: {ass.ID}</Text>
                        <Text px={5}>{ass.NAME}</Text>
                    </Box>
                    <HStack 
                     mt={5} 
                     spacing={5}>
                        <Button 
                         bgColor="#15C34B"
                         _hover={{bg:"green"}}
                         >Accept</Button> 
                         <Button 
                          bgColor="red.700"
                          _hover={{bg:"red.800"}}>Decline</Button>
                    </HStack>
                    </Flex>
                    );
                })      
            }  
              </VStack>
              <Divider py={5} color="white" w="full"/>

              <Center my={5}>
                   <Text
                    color="#55A1F2"
                    fontSize="3xl">
                        Sent Requests
                    </Text>
               </Center> 

                <VStack
                spacing={5}
                w="full"
                
                px={5}
                
               >  
                 {assets.map((ass)=>{
                    return(
                    <Flex 
                    w="full"
                    align="center"
                    direction="column">
                   <Box
                    
                    boxShadow="0px 0px 0px 3px black"
                    w="50%"
                    h="15vh"
                    fontSize="sm"
                    textColor="black"
                    bgGradient="linear(#204DA6,#17A1A9)"

                    >
                        <Text my={5} px={5}>ID: {ass.ID}</Text>
                        <Text px={5}>{ass.NAME}</Text>
                    </Box>
                    <HStack 
                     mt={5} 
                     spacing={5}>
                        <Button 
                         bgColor="#15C34B"
                         _hover={{bg:"green"}}
                         >Accept</Button> 
                         <Button 
                          bgColor="red.700"
                          _hover={{bg:"red.800"}}>Decline</Button>
                    </HStack>
                    </Flex>
                    );
                })      
            }  
              </VStack>   
            </VStack>
        </Flex>

    )
}

export default AssetRequests;