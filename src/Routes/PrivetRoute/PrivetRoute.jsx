import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { resellContext } from '../../AuthContext/AutchContext';
import Loader from '../../Componets/Loader/Loader';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(resellContext);
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;