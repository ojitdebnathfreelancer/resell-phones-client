import React from 'react';
import banner from '../../../Assets/banner/banner.jpg';

const Banner = () => {
    return (
        <div className='mt-3 relative'>
            <img src={banner} alt="banner" />
            <div className='absolute left-0 top-0 z-10 w-full h-full bg-[rgba(0,0,0,0.3)]'>
            </div>
        </div>
    );
};

export default Banner;