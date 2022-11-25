import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { resellContext } from '../../AuthContext/AutchContext';

const PrivetRoute = ({children}) => {
    const {user} = useContext(resellContext);
    const location = useLocation();
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;