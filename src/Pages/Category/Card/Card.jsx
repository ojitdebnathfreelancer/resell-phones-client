import React from 'react';
import { FcApproval } from "react-icons/fc";

const Card = ({ product, setBookingProduct }) => {

    const { img, locaton, orginal_price, post_time, product_name, resell_price, seller_name, used_time, _id } = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-48 w-64 pt-5' src={img} alt="phone" /></figure>
            <div className="card-body">
                <h2 className="card-title">Phone: {product_name}</h2>
                <p className='font-semibold flex items-center'>
                    <span className='mr-2'>
                        <FcApproval size={25}/>
                    </span>
                    Seller Name: {seller_name}
                </p>
                <p className='font-semibold'>Location: {locaton}</p>
                <p className='font-semibold'>Orginal Price: {orginal_price}</p>
                <p className='font-semibold'>Resell Price: {resell_price}</p>
                <p className='font-semibold'>Used Time: {used_time}</p>
                <p className='font-mono'>{post_time}</p>
                <div className="card-actions justify-center">
                    <label onClick={()=> setBookingProduct(product)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Card;