/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location =useLocation()

    if(loading){
        return <h1 className=" flex justify-center items-center text-4xl"><span className="loading loading-spinner loading-lg"></span></h1>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;