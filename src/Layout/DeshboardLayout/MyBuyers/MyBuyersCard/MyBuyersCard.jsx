import React from 'react';
import toast from 'react-hot-toast';

const MyBuyersCard = ({ buyer, refetch }) => {

    const { buyerName, buyerEmail, buyerPhone, location, productName, price, product_img, sellerEamil, sellerName, sellerNumber, _id, pay } = buyer;

    const handelDelete = (id) => {
        fetch(`http://localhost:5000/deletemybuyer/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(() => {
                toast.success('One buyer deleted');
                refetch();
            })
    };
    // delete single buyer 

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handelDelete(_id)} className='btn btn-primary'>Delete</button>
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
                <button className="btn btn-outline btn-accent btn-xs capitalize">
                    {
                        pay? "Paid" : "None paid" 
                    }
                </button>
            </th>
        </tr>
    );
};

export default MyBuyersCard;