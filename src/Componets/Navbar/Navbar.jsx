import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo/logo.png';
import { resellContext } from '../../AuthContext/AutchContext';

const Navbar = () => {
    const { user, userLogout } = useContext(resellContext);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);
    // loading all cetegory name 

    const hadelLogout = () => {
        userLogout();
    };
    // handel logout user 

    const menuItems = <>
        <li tabIndex={0}>
            <span>
                Category
            </span>
            <ul className='z-50 bg-slate-200'>
                {
                    categories.map(category => <li key={category.category_id}><Link to={`/category/${category.category_id}`}>{category.category_name}</Link></li>)
                }
            </ul>
        </li>
        <li><Link>Deshboard</Link></li>
        <li className='ml-5'>{user?.email}</li>
        {
            user?.uid ?
                <li className='ml-5'>
                    <button onClick={hadelLogout} className='btn btn-primary ml-5  rounded-lg'>Logout</button>
                </li>
                :
                <li className='btn btn-primary ml-5 rounded-lg'><Link to='/login'>LogIn</Link></li>
        }
    </>

    return (
        <div className="navbar justify-between z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='max-h-14 ' src={logo} alt="logo" />
                    <span>Resell Phones</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 items-center">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;