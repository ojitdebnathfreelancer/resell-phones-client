import React from 'react';
import { FcApproval } from "react-icons/fc";

const AdCard = ({ product, setBookingProduct }) => {
    const { img, locaton, orginal_price, post_time, product_name, resell_price, seller_name, used_time, condition, discription, number, seller_verify } = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body flex flex-col justify-between p-2">
                <div className='lg:grid md:grid grid-cols-2 gap-x-5'>
                    <div className=''>
                        <figure><img className='h-48 w-64 pt-5' src={img} alt="phone" /></figure>
                    </div>
                    <div className='lg:mt-0 mt-5'>
                        <h2 className="card-title">Phone: {product_name}</h2>
                        <p className='font-semibold'>Orginal Price: {orginal_price}</p>
                        <p className='font-semibold'>Resell Price: {resell_price}</p>
                        <p className='font-semibold'>Used Time: {used_time}</p>
                        <p className='font-semibold'>Condition: {condition}</p>
                        <p className='font-mono'>{post_time}</p>
                    </div>
                </div>
                <div className='md:px-5 lg:px-5 md:pb-2 lg:pb-2'>
                    <div className='my-5'>
                        <p className='font-semibold flex items-center'>
                            Seller Name: {seller_name}
                            {
                                seller_verify &&
                                <span className='ml-2'>
                                    <FcApproval size={25} />
                                </span>
                            }
                        </p>
                        <p>Number: {number}</p>
                        <p className='font-semibold'>Location: {locaton}</p>
                    </div>
                    <p className='font-bold mb-2'>Discription</p>
                    <p>
                        {discription.slice(0, 250)}
                    </p>
                    <div className="card-actions justify-center mt-2">
                        <label onClick={() => setBookingProduct(product)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdCard;