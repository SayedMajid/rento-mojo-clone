
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RahiHome } from './Components/RahiHome';
import RahiRoutes from './Components/RahiRoutes';
import Wfh from './Components/Wfh';
import WfhDetails from './Components/WfhDetails';
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { RahiHome } from "./Components/RahiHome";
import RahiRoutes from "./Components/RahiRoutes";
import Wfh from "./Components/Wfh";
import WfhDetails from "./Components/WfhDetails";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";

import { Container } from '@chakra-ui/react';
import Login from './Components/Login';
function App() {
  return (
    <div>

     
    
        {/* <RahiRoutes /> */}

    {/* <Navbar />
      <AllRoutes />
      <Footer />  */}
      <Login />


function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />

    </div>
  );
}

export default App;
