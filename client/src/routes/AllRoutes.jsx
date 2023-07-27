import React from "react";
import HeaderCom from "../Components/Header";
import FooterCom from "../Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Notes from "../pages/Notes";

const AllRoutes = () => {
    return ( 
        <div>
            <HeaderCom />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/notes' element={<Notes />} />
                <Route />
            </Routes>
            <FooterCom />
        </div>
     );
}
 
export default AllRoutes;