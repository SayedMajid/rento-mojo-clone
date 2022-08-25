import React from "react";
import { Routes, Route } from "react-router-dom";
import Electronics from "./Electronics";
import Homepage from "./Homepage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Electronics" element={<Electronics />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
