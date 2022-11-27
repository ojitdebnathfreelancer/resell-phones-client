import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { resellContext } from '../../../AuthContext/AutchContext';
import Navbar from '../../../Componets/Navbar/Navbar';
import UseAdmin from '../../../Hooks/UseAdmin/UseAdmin';
import UseBuyer from '../../../Hooks/UseBuyer/UseBuyer';
import UseSeller from '../../../Hooks/UseSeller/UseSeller';


const DeshboardLayout = () => {
    const { user } = useContext(resellContext);
    const [isBuyer] = UseBuyer(user?.email);
    const [isSeller] = UseSeller(user?.email);
    const [isAdmin] = UseAdmin(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="deshboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="deshboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 bg-white lg:bg-inherit text-base-content font-bold lg:text-lg">

                        {
                            isBuyer.isBuyer &&
                            <li><Link to='/deshboard/myorders'>My Orders</Link></li>
                        }

                        {
                            isSeller.isSeller &&
                            <>
                                <li className='mt-2'><Link to='/deshboard/mybuyers'>My Buyers</Link></li>
                                <li className='mt-2'><Link to='/deshboard/myproducts'>My Products</Link></li>
                                <li className='mt-2'><Link to='/deshboard/addproduct'>Add A Product</Link></li>
                            </>
                        }

                        {
                            isAdmin.isAdmin &&
                            <>
                                <li className='mt-2'><Link to='/deshboard/allsellers'>All Sellers</Link></li>
                                <li className='mt-2'><Link to='/deshboard/allbuyers'>All Buyers</Link></li>
                                <li className='mt-2'><Link to='/deshboard/reported'>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshboardLayout;