import React from "react"
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./signup";
import Login from "./login";
import Main from "./main";
import AssetBorrow from "./components/AssetBorrow"; //to be removed later
//import Diary from "./Pages/diary";

const App=()=>{
  return (
      <Router>
      <ChakraProvider>
        <Routes>
            <Route path="/" element={<SignUp/>}/>

            <Route exact path="/login" element={<Login/>}/>

            <Route exact path="/main" element={<Main/>}/>
            <Route exact path="/test" element={<AssetBorrow/>}/>{/* to test out components */}
        </Routes>
      </ChakraProvider>

      </Router>
      

    
     
  );
}

export default App;
