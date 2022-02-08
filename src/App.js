import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { React } from "react";
import Splash from "../src/views/splash"
import Inscription from "../src/views/inscription"
import Login from "../src/views/login"
import Forgotpwd from "../src/views/forgotpwd"
import SlideBar from "../src/components/sideBar"
import StepBar from './components/stepsBar';


export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpwd" element={<Forgotpwd />} />
          <Route path="/slideBar" element={<SlideBar />} />
          <Route path="/stepbar" element={<StepBar/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};