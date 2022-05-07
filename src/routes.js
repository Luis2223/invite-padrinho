import React from "react";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";

import Home from './home'

const Routers = () => {
   return(
       <HashRouter>
            <Routes>
                <Route element={<Home />}  path=":name" />
           </Routes>
       </HashRouter>
   )
}

export default Routers;