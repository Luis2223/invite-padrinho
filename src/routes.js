import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from './home'

const Routers = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route element={<Home />}  path=":name" />
           </Routes>
       </BrowserRouter>
   )
}

export default Routers;