import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { resellContext } from '../../AuthContext/AutchContext';
import Loader from '../../Componets/Loader/Loader';
import UseAdmin from '../../Hooks/UseAdmin/UseAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(resellContext);
    const location = useLocation();

    const [isAdmin, adminLoading] = UseAdmin(user?.email);

    if (loading || adminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin.isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;