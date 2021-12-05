import React,{useState} from "react"
import { useNavigate } from "react-router-dom"; 

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



const SignUp=()=>{
  
  var Web3 = require('web3');
  var web3 = new Web3('http://127.0.0.1:7545');
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('production.db');
  
    let navigate = useNavigate();
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [confirmPass,setConfirmPass] = useState("");
    
    const [passError, setPassError] = useState(false);
    
    const create_user=()=>{
      fetch(`http://127.0.0.1:5000/auth`)
      
    }
    

    const goLogin=()=>{navigate("/login",{replace: false})};

    const getName=(e)=>{
        setName(e.target.value);
        //console.log("Name",name);
    }

    const getPass=(e)=>{
        setPass(e.target.value);
        //console.log("Pass",pass);
    }

    const getConfirmPass=(e)=>{ 
      setConfirmPass(e.target.value);
      if(confirmPass != pass && confirmPass.length>0)setPassError(true);
      else setPassError(false);
  }

    return(
        <Flex 
          direction="column"
          w="100vw"
          h="100vh"
          align="center"
          bgColor="black"
          justify="center"
          bgGradient="linear(360deg, #232A33 ,black)"
        >
            <VStack
              align="center"
              spacing={4}
              h="full"
              justify="center"
              textColor="whiteAlpha.100"
            >   
    
                <Text
                  textColor="blue.400"
                  fontSize={{base:"2xl",md:"4xl"}}
                  my={2}
                >
                    COPYRIGHT PROTECTION
                  
                </Text>

                <Text
                  textColor="blue.200"
                  fontSize={{base:"sm",md:"2xl"}}
                >
                    A decentralised app for borrowing and publishing assets.

                </Text>

                
                  <FormControl 
                   px={5}
                   h="30%">
                        <InputGroup my={5}>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<ArrowRightIcon color="white"/>}
                        />
                          
                        
                        <Input 
                        focusBorderColor="white"
                          textColor="white"
                          onChange={getName}
                          placeholder="Your name.."></Input>
                        
                        </InputGroup>

                        <InputGroup my={5}>
                         <InputLeftElement 
                           pointerEvents="none"
                           children={<LockIcon color="white"/>}
                           />
                           <Input 
                           type="password"

                            focusBorderColor="white"
                            textColor="white"
                            onChange={getPass}
                            placeholder="Enter your password.." />

                       
                        </InputGroup>

                        <InputGroup my={5}>
                         <InputLeftElement 
                           pointerEvents="none"
                           children={<LockIcon color="white"/>}
                           />
                           <Input 
                           type="password"

                            focusBorderColor="white"
                            textColor="white"
                            onChange={getConfirmPass}
                            placeholder="Confirm password.." />
                        </InputGroup>

                        <Button
                          h="20%"
                          w="100%"
                          onClick={createUser}
                          bgColor="#075D9F"
                          textColor="whiteAlpha.600"
                          _hover={{bgColor:"#0C3E66"}}
                          boxShadow="0px 4px 4px #031A2D "
                          _selected={{bg:"None"}}
                          _active={{bg:"None"}}
                          mt={5}
                          mb={7}
                        >
                            <Text fontSize="lg">Sign up</Text>
  
                        </Button>

                        <Button
                          h="20%"
                          w="100%"
                          onClick={goLogin}
                          
                          bgColor="#06654B"
                          textColor="whiteAlpha.600"
                          _hover={{bgColor:"#1B9372"}}
                          boxShadow="0px 4px 4px #031A2D "
                          _selected={{bg:"None"}}
                          _active={{bg:"None"}}
                          
                          mb={7}
                        >
                            <Text fontSize="lg">Log in with account</Text>
  
                        </Button>
                </FormControl>
            </VStack>
        </Flex>
    )
}

export default SignUp;