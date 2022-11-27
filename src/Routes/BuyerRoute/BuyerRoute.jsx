import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { resellContext } from '../../AuthContext/AutchContext';
import Loader from '../../Componets/Loader/Loader';
import UseBuyer from '../../Hooks/UseBuyer/UseBuyer';

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(resellContext);
    const location = useLocation();

    const [isBuyer, buyerLoading] = UseBuyer(user?.email);

    if (loading || buyerLoading) {
        return <Loader></Loader>
    }

    if (user && isBuyer.isBuyer) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;