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
   
    const [assId,setAssID] = useState("");
    const [price,setPrice] = useState(0);
    const [iter,setIter] = useState(0);
    const [quantum,setQuantum] = useState(0);
    const [borrowError,setBorrowError] = useState("");

    const getIters=(e)=>{
        setIter(e.target.value);
    }

    const getPrice=(e)=>{
        setPrice(e.target.value);
    }

    const getQuantum=(e)=>{
        setQuantum(e.target.value);
    }

    const getAID=(e)=>{
        setAssID(e.target.value);
    }
    

    const borrowAsset=()=>{
        fetch(
            `http://127.0.0.1:5000/borrow`,
            {
              method: "POST",
              body: JSON.stringify({
             
                assetId:assId,
                price:price,
                quantum:quantum,
                iterations:iter
              }),
              headers: {
               "Content-type": "application/json",
            },
            }
          ).then((response)=>response.json())
          .then((json)=>{
              if(json.error){
                  console.log(json.error);
                  setBorrowError(json.error);
              }

              else {
                  console.log("successfuly borrowed");
                  setBorrowError("Successfully borrowed.");
              }
            
           
          });
    }
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

                    <FormLabel pt={5} >Asset ID</FormLabel>
                    <Input 
                    onChange={getAID}
                    placeholder='Asset ID..' />
                    
                    <FormLabel pt={5} >Time Quantum</FormLabel>
                    <Input 
                    onChange={getQuantum}
                    placeholder='In seconds' />
                
               
                    <FormLabel pt={5} >Price</FormLabel>
                    <Input 
                    onChange={getPrice}
                    placeholder='In wei' />
                
                
                    <FormLabel pt={5} >Number of Iterations</FormLabel>
                    <Input 
                     onChange={getIters}
                     mb={5}
                     />
                </FormControl>
                <Button 
                onClick={borrowAsset}
                colorScheme="teal"> 
                    Request
                </Button>

                <Text 
                 fontSize="2xl"
                 color="red.500"
                 > {borrowError} </Text>
            </VStack>
        </Flex>

    )
}

export default AssetBorrow;