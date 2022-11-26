import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { resellContext } from '../../../AuthContext/AutchContext';
import Loader from '../../../Componets/Loader/Loader';
import Trow from './Trow/Trow';

const MyOrders = () => {
    const { user } = useContext(resellContext);

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['booking', user],
        queryFn: () => fetch('http://localhost:5000/booking', {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    });
    // tanstake query for loading booking 

    if (isLoading) {
        return <Loader></Loader>
    };
    return (
        <div>
            <h1>this is orders {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">   
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Product</th>
                            <th>Buyer Details</th>
                            <th>Location</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(book => <Trow key={book._id} book={book}></Trow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;