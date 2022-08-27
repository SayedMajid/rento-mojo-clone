import React from "react";
import { Routes, Route } from "react-router-dom";
import Wfh from "../Components/Wfh";
import Electronics from "./Electronics";
import Fitness from "./Fitness";
import Furniture from "./Furniture";
import Homepage from "./Homepage";
import Appliances from "./Appliances";
import ApplianceDetail from "./ApplianceDetail";
import ElectronicsDetails from "./ElectronicsDetails";
import Cart from "../Components/Cart";
import WfhDetails from "../Components/WfhDetails";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Electronics/:id" element={<ElectronicsDetails />} />
        <Route path="/WfhEssentials" element={<Wfh />} />
        <Route path="/wfh/:id" element={<WfhDetails />} />
        <Route path="/Fitness" element={<Fitness />} />
        <Route path="/Packages" element={<Appliances />} />
        <Route path="/Furniture" element={<Furniture />} />
        <Route path="/Appliances" element={<Appliances />} />
        <Route path="/Appliances/:id" element={<ApplianceDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
