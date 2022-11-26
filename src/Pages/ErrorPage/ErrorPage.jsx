import React from 'react';
import { FaSadTear } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './ErroPage.css';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-inherit">
            <div>
                <center className="">
                    <FaSadTear className='emoji-404' size={100} />
                    <div className=" mt-4">
                        <span className="text-gray-500 text-6xl block"><span>4  0  4</span></span>
                        <span className="text-gray-500 text-xl">Sorry, We couldn't find what you are looking for!</span>
                    </div>
                </center>
                <center className="mt-6">
                    <Link to="/" className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md">Go back </Link>
                </center>
            </div>
        </div>
    );
};

export default ErrorPage;