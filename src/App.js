import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RahiHome } from './Components/RahiHome';
import RahiRoutes from './Components/RahiRoutes';
import Wfh from './Components/Wfh';
import WfhDetails from './Components/WfhDetails';
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import { Container } from '@chakra-ui/react';
import Login from './Components/Login';
import Cart from './Components/Cart';
function App() {
  return (
    <div>

     
    
        {/* <RahiRoutes /> */}
        {/* <Cart /> */}

    <Navbar />
      <AllRoutes />
      <Footer /> 
      {/* <Login /> */}
    </div>
  );
}

export default App;
