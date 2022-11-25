import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../../Componets/Navbar/Navbar';

const DeshboardLayout = () => {
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
                    <ul className="menu p-4 w-48 bg-white lg:bg-inherit text-base-content">

                        <li><Link to='/deshboard/myorders'>My Orders</Link></li>

                        <li><Link to='/deshboard/mybuyers'>My Buyers</Link></li>
                        <li><Link>My Products</Link></li>
                        <li><Link>Add Product</Link></li>

                        <li><Link>All Sellers</Link></li>
                        <li><Link>All Buyers</Link></li>
                        <li><Link>Reported Items</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshboardLayout;