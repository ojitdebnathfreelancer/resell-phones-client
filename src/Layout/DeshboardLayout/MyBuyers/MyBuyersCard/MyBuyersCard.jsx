import React from 'react';

const MyBuyersCard = ({ buyer }) => {
    const { buyerName, buyerEmail, buyerPhone, location, productName, price, product_img, sellerEamil, sellerName, sellerNumber } = buyer;
    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-primary'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={product_img} alt="product img" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm opacity-50">{price} Taka</div>
                    </div>
                </div>
            </td>
            <td>
                {sellerName}
                <br />
                <span className="badge badge-ghost badge-sm">{sellerEamil}</span>
                <br />
                <span className="badge badge-ghost badge-sm">{sellerNumber}</span>
            </td>
            <td>
                {buyerName}
                <br />
                <span className="badge badge-ghost badge-sm">{buyerEmail}</span>
                <br />
                <span className="badge badge-ghost badge-sm">{buyerPhone}</span>
            </td>
            <td>{location}</td>
            <th>
                <button className="btn btn-outline btn-accent btn-xs">None paid</button>
            </th>
        </tr>
    );
};

export default MyBuyersCard;