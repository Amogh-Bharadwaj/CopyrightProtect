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
    Box
} from "@chakra-ui/react";

import{
    ArrowRightIcon,
    LockIcon,
} from "@chakra-ui/icons"

const AssetManage =()=>{
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
                        Your Assets
                    </Text>
               </Center>

               <VStack
                spacing={5}
                w="full"
                
                px={5}
                
               >  
                 {assets.map((ass)=>{
                    return(
                   <Box
                    
                    boxShadow="0px 0px 0px 3px black"
                    w="50%"
                    h="15vh"
                    fontSize="sm"
                    textColor="black"
                    bgGradient="linear(#204DA6,white)"

                    >
                        <Text my={5} px={5}>ID: {ass.ID}</Text>
                        <Text px={5}>{ass.NAME}</Text>
                    </Box>
                    );
                })      
            }  
              </VStack>
              <Divider py={5} color="white" w="full"/>

              <Center my={5}>
                   <Text
                    color="#55A1F2"
                    fontSize="3xl">
                        Create an Asset
                    </Text>
               </Center>

               <FormControl
                textColor="white"
                
                >
                   <FormLabel>Asset Name</FormLabel>
                   <Input placeholder="Name your asset..."/>

                   <Button
                          h="30%"
                          w="100%"
                          my={5}
                          
                          bgColor="#3C8A4F"
                          textColor="white"
                          _hover={{bgColor:"#1B9372"}}
                          boxShadow="0px 4px 4px #031A2D "
                          _selected={{bg:"None"}}
                          _active={{bg:"None"}}
                          
                          mb={7}
                        >
                            <Text fontSize="lg">Publish</Text>
  
                        </Button>

               </FormControl>

              
            

              
            </VStack>
        </Flex>

    )
}

export default AssetManage;