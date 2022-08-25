import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Wfh from './Wfh';
import WfhDetails from './WfhDetails';


const RahiRoutes = () => {
  return (
    <div>
         <Routes>
            <Route path="/" element={<Wfh />} />
      <Route path="/wfh/:id" element={<WfhDetails />} />
    </Routes>
    </div>
  )
}

export default RahiRoutes