import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo/logo.png';
import { resellContext } from '../../AuthContext/AutchContext';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const { user, userLogout } = useContext(resellContext);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
            })
    }, []);
    // loading all cetegory name 

    const hadelLogout = () => {
        userLogout()
            .then(() => {
                localStorage.clear();
                navigate('/login');
            })
    };
    // handel logout user 

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li className='lg:ml-5' tabIndex={0}>
            <span>
                Category
            </span>
            <ul className='z-50 bg-slate-200'>
                {
                    categories.map(category => <li key={category.category_id}><Link to={`/category/${category.category_id}`}>{category.category_name}</Link></li>)
                }
            </ul>
        </li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user?.uid &&
            <>
                <li><Link to='/deshboard'>Deshboard</Link></li>
                <li title='Profile' className='lg:ml-5'>{user?.displayName}</li>
            </>
        }
        {
            user?.uid ?
                <li className='lg:ml-5'>
                    <button onClick={hadelLogout} className='btn btn-primary lg:ml-5  rounded-lg mt-2 lg:mt-0'>Logout</button>
                </li>
                :
                <li className='btn btn-primary lg:ml-5 rounded-lg'><Link to='/login'>LogIn</Link></li>
        }
    </>

    if (!categories) {
        return;
    };

    return (
        <div className="navbar justify-between items-center z-50 font-semibold">
            <div className="navbar-start flex ">
                <div className="dropdown flex ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars size={20} />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-12 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn lg:pl-2 p-0 btn-ghost normal-case lg:text-xl">
                    <img className='lg:max-h-14 max-h-10' src={logo} alt="logo" />
                    <span className='font-bold font-mono text-primary'>Resell Phones</span>
                </Link>
            </div>
            <label htmlFor="deshboard-drawer" className="lg:hidden">Deshboard</label>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 items-center">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;