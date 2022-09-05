import React from "react";
import {  Navigate, Outlet } from "react-router-dom";
import { isAutheticated } from "./admin-service";

const PrivateRoute = () => {
  
 let isLoggedIn=isAutheticated();
 if(isLoggedIn !=null)
 {
   return <Outlet/>
 }
 else{
   <Navigate to="/signin"/>
 }
};

export default PrivateRoute;
