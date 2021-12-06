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
    Spinner
} from "@chakra-ui/react";

import{
    ArrowRightIcon,
    LockIcon,
} from "@chakra-ui/icons"

const AssetManage =()=>{
    const [assets,setAssets] = useState([]);
    const [assetName,setAssetName] = useState("");

    const getAsset=(e)=>{
        setAssetName(e.target.value);
        console.log(assetName);
    }

    const createAsset=()=>{
        fetch(
            `http://127.0.0.1:5000/create`,
            {
              method: "POST",
              body: JSON.stringify({
                assName:assetName
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

    const getAssets=()=>{
        fetch(
            `http://127.0.0.1:5000/myassets`,
            {
              method: "GET",
              headers: {
               "Content-type": "application/json",
            },
            }
          ).then((response)=>response.json())
          .then((json)=>{
            
            console.log(json.assets);
            setAssets(json.assets);
          }).then(()=>{console.log(assets);});
    }

    useEffect(()=>{
        getAssets();
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
                        Your Assets
                    </Text>
               </Center>

               {assets.length>0 && (<VStack
                spacing={5}
                w="full"
                overflowY="scroll"
                h="full"
                
                px={5}
                
               >  
                 {assets.map((ass)=>{
                    return(
                   <Box
                    key={ass.ASSET_ID}
                    rounded="5%"
                    boxShadow="0px 0px 0px 3px black"
                    w="50%"
                    h="25vh"
                    fontSize="sm"
                    textColor="black"
                    bgGradient="linear(#204DA6,#17A1A9)"

                    >
                        <Text my={5} px={5}>ACCOUNT_ID: {ass.ACCOUNT_ID}</Text>
                        <Text my={5} px={5} textColor="red.800">ASSET_ID: {ass.ASSET_ID}</Text>
                        
                    </Box>
                    );

                    
                })      
            } 
              </VStack>)}
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
                   <Input 
                    onChange={getAsset}
                    placeholder="Name your asset..."/>

                   <Button
                          h="30%"
                          w="100%"
                          my={5}
                          onClick={createAsset}
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