import React,{useState} from "react"
import { useNavigate } from "react-router-dom"
import AssetBorrow from "./AssetUtils/AssetBorrow";
import AssetManage from "./AssetUtils/AssetManage";

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
    List,
    ListItem,
    ListIcon
} from "@chakra-ui/react";

import{
    ArrowRightIcon,
    LockIcon,
} from "@chakra-ui/icons"
import AssetRequests from "./AssetUtils/AssetRequests";

const Main =()=>{
    const [utility,setUtility] = useState(<AssetBorrow/>);

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
              spacing = {5}
              w="30%"
              //h="full"
              bgGradient="linear(to-r, black,#0E3259)"
              px={3}
              textColor="white"
              fontSize="xl"
              
              >  
                 <Text
                 mt={10}
                 py={5}
                 fontSize="2xl"
                 color="#4E84F3"
                 >
                    Copyright Protection
                 </Text>

                 <List spacing={10}>
                    <ListItem>
                         <ListIcon as={ArrowRightIcon} color='white' />
                         <Link onClick={()=>{setUtility(<AssetManage />)}}>  Manage Assets </Link>
                    </ListItem>

                    <ListItem>
                         <ListIcon as={ArrowRightIcon} color='white' />
                         <Link onClick={()=>{setUtility(<AssetBorrow />)}}>  Borrow Assets </Link>
                    </ListItem>

                    <ListItem>
                         <ListIcon as={ArrowRightIcon} color='white' />
                         <Link onClick={()=>{setUtility(<AssetRequests />)}}>  Handle Requests </Link>
                    </ListItem>

                </List>

              </VStack>

              {utility}

           </Flex>
             
         </Flex>

    )
}

export default Main;