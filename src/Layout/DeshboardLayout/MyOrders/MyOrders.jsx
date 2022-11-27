import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { resellContext } from '../../../AuthContext/AutchContext';
import Loader from '../../../Componets/Loader/Loader';
import Trow from './Trow/Trow';

const MyOrders = () => {
    const { user } = useContext(resellContext);

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['booking', user],
        queryFn: () => fetch(`http://localhost:5000/booking?email=${user?.email}`, {
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
            <h1 className='text-center text-3xl mb-5'>Total oreder products {bookings.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">   
                    <thead>
                        <tr>
                            <th className='text-center'>
                                <label>
                                    <button className='btn btn-primary'>Delete All</button>
                                </label>
                            </th>
                            <th>Product</th>
                            <th>Buyer Details</th>
                            <th>Location</th>
                            <th className='text-center'>Pyment</th>
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