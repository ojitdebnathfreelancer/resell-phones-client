import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm/CheckOutForm';

const Payment = () => {
    const paymentProduct = useLoaderData();
    const { productName, price, product_img } = paymentProduct;

    return (
        <div className='mt-2 md:mt-5 lg:mt-10'>
            <div className="card bg-base-100 max-w-lg shadow-xl mx-auto px-5 py-5">
                <figure className="px-10 pt-10">
                    <img src={product_img} alt="product img" className="rounded-xl max-h-72" />
                </figure>
                <div className="flex flex-col items-center text-center">
                    <h2 className="card-title text-2xl">{productName}</h2>
                    <p className='font-semibold'>You have to pay <span className='font-bold'>{price}</span> Taka</p>
                </div>
                <div className='text-center my-5'>
                    <p>Please provide your card infmoramtion for payment</p>
                    <CheckOutForm paymentProduct={paymentProduct}></CheckOutForm>
                </div>
            </div>
        </div>
    );
};

export default Payment;