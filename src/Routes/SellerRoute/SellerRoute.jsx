import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { resellContext } from '../../AuthContext/AutchContext';
import Loader from '../../Componets/Loader/Loader';
import UseSeller from '../../Hooks/UseSeller/UseSeller';

const SellerRoute = ({ children }) => {

    const { user, loading } = useContext(resellContext);
    const location = useLocation();
    const [isSeller, sellerLoading] = UseSeller(user?.email);

    if (loading || sellerLoading) {
        return <Loader></Loader>
    }

    if (user && isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default SellerRoute;