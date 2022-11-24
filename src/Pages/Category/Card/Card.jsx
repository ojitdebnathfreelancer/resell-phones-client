import React from 'react';
import { IconName } from "react-icons/fc";

const Card = ({product}) => {

    const {img, locaton, orginal_price, post_time, product_name, resell_price, seller_name, used_time, _id} = product;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='h-48 w-64 pt-5' src={img} alt="phone" /></figure>
            <div className="card-body">
                <h2 className="card-title">Phone: {product_name}</h2>
                <p className='font-semibold'>Seller Name: {seller_name}</p>
                <p className='font-semibold'>Location: {locaton}</p>
                <p className='font-semibold'>Orginal Price: {orginal_price}</p>
                <p className='font-semibold'>Resell Price: {resell_price}</p>
                <p className='font-semibold'>Used Time: {used_time}</p>
                <p className='font-mono'>{post_time}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;