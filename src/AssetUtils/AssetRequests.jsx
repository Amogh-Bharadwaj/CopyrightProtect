import React,{useEffect, useState} from "react"
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
    const [incomingAssets,setIncomingAssets] = useState([]);
    const [sentAssets,setSentAssets] = useState([]);
    
    const getIncoming=()=>{
        fetch(
            `http://127.0.0.1:5000/incoming`,
            {
              method: "GET",
              headers: {
               "Content-type": "application/json",
            },
            }
          ).then((response)=>response.json())
          .then((json)=>{
            console.log(json);
            setIncomingAssets(json.incoming);
           
          });  

    }

    const getSent=()=>{
        fetch(
            `http://127.0.0.1:5000/sent`,
            {
              method: "GET",
              headers: {
               "Content-type": "application/json",
            },
            }
          ).then((response)=>response.json())
           .then((json)=>{
            console.log(json);
            setSentAssets(json.sent);
          });  
        
    }

    const deleteRequest=(req_id,ass_id)=>{
       
            fetch(
                `http://127.0.0.1:5000/decline`,
                {
                  method: "POST",
                  body: JSON.stringify({
                   requester:req_id,
                   assid:ass_id
                  }),
                  headers: {
                   "Content-type": "application/json",
                },
                }
              ).then((response)=>response.json())
               .then((json)=>{
                console.log(json);
                window.location.reload(true);
               
              });
    }

    useEffect(()=>{
        getIncoming();
        getSent();
    },[]);
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
            h="full"
            w="60%"> 
               
               <Center>
                   <Text
                    color="#55A1F2"
                    fontSize="3xl">
                        Incoming Requests
                    </Text>
               </Center>

               {incomingAssets.length>0 && (<VStack
                spacing={5}
                w="full"
                h="full"
                overflowY="scroll"
                px={5}
                
               >  
                 {incomingAssets.map((ass)=>{
                    return(
                    <Flex 
                    w="full"
                    align="center"
                    direction="column">
                   <Box
                    rounded="5%"
                    boxShadow="0px 0px 0px 3px black"
                    w="50%"
                    h="30vh"
                    fontSize="sm"
                    textColor="black"
                    bgGradient="linear(#204DA6,#17A1A9)"

                    >
                        <Text my={5} px={5}>ID: {ass.BORROW_ACCOUNT_ID}</Text>
                        <Text px={5}>{ass.NAME}</Text>
                        <Text px={5}>PRICE: {ass.PRICE_PER_QUANTUM}</Text>
                        <Text px={5}>QUANTUM: {ass.TIME_QUANTUM_SECONDS}</Text>
                        <Text px={5}>ITERATIONS: {ass.QUANTUM_COUNT}</Text>

                    </Box>
                    <HStack 
                     mt={5} 
                     spacing={5}>

                        <Button 
                         bgColor="#15C34B"
                         _hover={{bg:"green"}}
                         > Accept
                         </Button> 

                         <Button 
                          onClick={() => deleteRequest(ass.BORROW_ACCOUNT_ID,ass.ASSET_ID)}
                          bgColor="red.700"
                          _hover={{bg:"red.800"}}>
                              Decline
                          </Button>

                    </HStack>
                    </Flex>
                    );
                  })      
                 }  
              </VStack>)}
              <Divider py={5} color="white" w="full"/>

              <Center my={5}>
                   <Text
                    color="#55A1F2"
                    fontSize="3xl">
                        Sent Requests
                    </Text>
               </Center> 

               {sentAssets.length>0 && (<VStack
                spacing={5}
                w="full"
                h="full"
                overflowY="scroll"
                px={5}
                
               >  
                 {sentAssets.map((ass)=>{
                    return(
                    <Flex 
                    w="full"
                    align="center"
                    direction="column">

                   <Box
                    rounded="5%"
                    boxShadow="0px 0px 0px 3px black"
                    w="50%"
                    h="30vh"
                    fontSize="sm"
                    textColor="black"
                    bgGradient="linear(#204DA6,#17A1A9)"
                    >
                        <Text my={5} px={5}>ID: {ass.OWNER_ACCOUNT_ID}</Text>
                        <Text px={5}>{ass.NAME}</Text>
                        <Text px={5}>PRICE: {ass.PRICE_PER_QUANTUM}</Text>
                        <Text px={5}>QUANTUM: {ass.TIME_QUANTUM_SECONDS}</Text>
                        <Text px={5}>ITERATIONS: {ass.QUANTUM_COUNT}</Text>

                    </Box>
                    
                    </Flex>
                    );
                })      
            }  
              </VStack>)}   
            </VStack>
        </Flex>

    )
}

export default AssetRequests;