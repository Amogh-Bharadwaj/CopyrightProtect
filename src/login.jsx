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

const Login=()=>{
    let navigate = useNavigate();

    const goSignUp=()=>{navigate("/",{replace: false})};
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");

    const getName=(e)=>{
        setName(e.target.value);
        //console.log("Name",name);
    }

    const getPass=(e)=>{
        setPass(e.target.value);
        //console.log("Pass",pass);
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
              spacing={6}
              h="full"
              justify="center"
              textColor="whiteAlpha.100"
            >   

                <Text
                  textColor="blue.400"
                  fontSize={{base:"2xl",md:"4xl"}}
                  my={5}
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

                        <InputGroup>
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

                        <Button
                          h="20%"
                          w="100%"
                          
                          bgColor="#075D9F"
                          textColor="whiteAlpha.600"
                          _hover={{bgColor:"#0C3E66"}}
                          boxShadow="0px 4px 4px #031A2D "
                          _selected={{bg:"None"}}
                          _active={{bg:"None"}}
                          mt={5}
                          mb={7}
                        >
                            <Text fontSize="lg">Log in</Text>
  
                        </Button>

                        <Button
                          h="20%"
                          w="100%"
                          onClick={goSignUp}
                          
                          bgColor="#06654B"
                          textColor="whiteAlpha.600"
                          _hover={{bgColor:"#1B9372"}}
                          boxShadow="0px 4px 4px #031A2D "
                          _selected={{bg:"None"}}
                          _active={{bg:"None"}}
                          
                          mb={7}
                        >
                            <Text fontSize="lg">Create an account</Text>
  
                        </Button>
                </FormControl>
              
               

              


            </VStack>
          

        </Flex>
    )
}

export default Login;