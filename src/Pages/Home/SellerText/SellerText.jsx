import React from 'react';
import { Link } from 'react-router-dom';
import sellbanner from '../../../Assets/banner/sellerbanner.png';

const SellerText = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse mt-5'>
            <div className='lg:w-2/5 self-center'>
                <h1 className='text-2xl text-center font-bold'>Start your Seller Journey</h1>
                <p className='text-center'>Whether you are a brand owner, a reseller, are new to selling, or have been doing it for years Resell Phones.in has a wide range of options to help you find your customer and grow your business.</p>
                <div className='text-center mt-5'>
                    <Link to='/signup'>
                        <button className='btn btn-outline btn-md'>Sign up Now</button>
                    </Link>
                </div>
            </div>
            <div className='lg:w-3/5'>
                <img src={sellbanner} alt="sellbanner" />
            </div>
        </div>
    );
};

export default SellerText;