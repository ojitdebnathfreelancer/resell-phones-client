import React from 'react';
import camera from '../../../Assets/banner/camera.webp'

const ExtraInfo = () => {
    return (
        <div className='lg:flex flex-row-reverse px-5 my-10'>
            <div className='lg:w-2/5 flex flex-col justify-center lg:ml-10'>
                <div>
                    <h1 className='uppercase text-2xl font-bold mb-2'>42 FRONT CAMERA FOR PERFECT SHOT</h1>
                    <p className='text-justify'>
                        Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official.
                    </p>
                    <p className='text-justify'>
                        Diam vulputate ut pharetra sit. Elit ut aliquam purus sit amet luctus venenatis lectus. Lorem dolor sed viverra ipsum nunc aliquet. Ut consequat semper viverra nam libero. Velit ut tortor aremn.
                    </p>
                </div>
            </div>
            <div className='lg:w-3/5 hover:scale-95 duration-300'>
                <img src={camera} alt="camera" />
            </div>
        </div>
    );
};

export default ExtraInfo;