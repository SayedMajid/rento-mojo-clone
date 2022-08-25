import React from "react";
import { Routes, Route } from "react-router-dom";
import Wfh from "../Components/Wfh";
import Electronics from "./Electronics";
import Homepage from "./Homepage";
import Appliances from "./Appliances";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route  path="/WfhEssentials" element={<Wfh />} />
        <Route path="/Appliances" element={<Appliances/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
