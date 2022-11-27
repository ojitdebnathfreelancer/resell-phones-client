import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { resellContext } from '../../../AuthContext/AutchContext';
import Loader from '../../../Componets/Loader/Loader';
import Trow from './Trow/Trow';

const MyOrders = () => {
    const { user } = useContext(resellContext);

    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['booking', user],
        queryFn: () => fetch(`http://localhost:5000/booking?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    });
    // tanstake query for loading booking 

    const handelDeleteall = (email) => {
        fetch(`http://localhost:5000/bookingdeleteall/${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(() => {
                refetch();
            })
    };
    // delete all products

    if (isLoading) {
        return <Loader></Loader>
    };

    return (
        <div>
            <p className='text-center font-bold text-3xl my-2 capitalize underline'>Your total orders {bookings.length}</p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-center'>
                                <label>
                                    <button onClick={() => handelDeleteall(user?.email)} className='btn btn-primary'>Delete All</button>
                                </label>
                            </th>
                            <th>Product</th>
                            <th>Your Details</th>
                            <th>Seller Details</th>
                            <th>Location</th>
                            <th className='text-center'>Pyment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(book => <Trow key={book._id} book={book} refetch={refetch}></Trow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;