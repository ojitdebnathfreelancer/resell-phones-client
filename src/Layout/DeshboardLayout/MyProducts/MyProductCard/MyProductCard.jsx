import React from 'react';
import toast from 'react-hot-toast';

const MyProductCard = ({ product, refetch }) => {

    const { condition, img, locaton, number, post_time, product_name, resell_price, sellerEmail, seller_name, used_time, _id } = product;

    const handeleteMyProductDelete = (id) => {
        fetch(`http://localhost:5000/myproductdelete/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(() => {
                toast.success("One product deleted");
                refetch();
            })
    };
    // delete sngle product 

    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=> handeleteMyProductDelete(_id)} className='btn btn-primary'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                            <img src={img} alt="product imgage" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product_name}</div>
                        <div className="text-sm opacity-50">{resell_price} Taka</div>
                        <div className="text-sm opacity-50">{condition}</div>
                        <div className="text-sm opacity-50">{used_time}</div>
                        <div className="text-sm opacity-50">{post_time}</div>
                    </div>
                </div>
            </td>
            <td>
                {seller_name}
                <br />
                <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
                <br />
                <span className="badge badge-ghost badge-sm">{number}</span>
            </td>
            <td>{locaton}</td>
            <td className='text-center'>
                Aivalable
            </td>
            <th className='text-center'>
                <button className="btn btn-outline btn-accent btn-xs">Run Ads</button>
            </th>
        </tr>
    );
};

export default MyProductCard;