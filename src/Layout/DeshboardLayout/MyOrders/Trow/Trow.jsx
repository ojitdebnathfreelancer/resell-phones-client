import React from 'react';

const Trow = ({ book }) => {
    const { buyerEmail, buyerName, buyerPhone, location, price, productName, product_img } = book;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
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
                {buyerName}
                <br />
                <span className="badge badge-ghost badge-sm">{buyerEmail}</span>
                <br />
                <span className="badge badge-ghost badge-sm">{buyerPhone}</span>
            </td>
            <td>{location}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default Trow;