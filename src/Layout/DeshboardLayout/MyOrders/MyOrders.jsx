import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { resellContext } from '../../../AuthContext/AutchContext';

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

    return (
        <div>
            <h1>this is orders {bookings.length}</h1>
        </div>
    );
};

export default MyOrders;