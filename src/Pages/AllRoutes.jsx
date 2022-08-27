import React from "react";
import { Routes, Route } from "react-router-dom";
import Wfh from "../Components/Wfh";
import Electronics from "./Electronics";
import Fitness from "./Fitness";
import Furniture from "./Furniture";
import Homepage from "./Homepage";
import Appliances from "./Appliances";
import WfhDetails from "../Components/WfhDetails";
import Cart from "../Components/Cart";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route  path="/WfhEssentials" element={<Wfh />} />
        <Route path="/wfh/:id" element={<WfhDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Fitness" element={<Fitness/>}/>
        <Route path="/Furniture" element={<Furniture />}/>
        <Route path="/Appliances" element={<Appliances/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
