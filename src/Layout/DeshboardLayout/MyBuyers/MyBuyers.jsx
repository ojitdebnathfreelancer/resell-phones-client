import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { resellContext } from '../../../AuthContext/AutchContext';
import MyBuyersCard from './MyBuyersCard/MyBuyersCard';

const MyBuyers = () => {
    const { user } = useContext(resellContext);

    const { data: buyers = [] } = useQuery({
        queryKey: ['mybuyers', user],
        queryFn: () => fetch(`http://localhost:5000/mybuyers?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    });
    // product booked buyers for seller 

    return (
        <div className="overflow-x-auto w-full">
            <p className='text-center font-bold text-3xl my-2 capitalize underline'>Your total buyers {buyers.length}</p>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <button className='btn btn-primary'>Delete All</button>
                            </label>
                        </th>
                        <th>Product</th>
                        <th>Your informations</th>
                        <th>Buyer informations</th>
                        <th>Location</th>
                        <th>Paymet</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map(buyer => <MyBuyersCard key={buyer._id} buyer={buyer}></MyBuyersCard>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyBuyers;