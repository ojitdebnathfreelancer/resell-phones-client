import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../../Category/BookingModal/BookingModal';
import AdCard from '../AdCard/AdCard';

const Advertise = () => {

    const { data: adsProducts = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: () => fetch(`https://resell-phones-server.vercel.app/advertise`)
            .then(res => res.json())
    });
    // advetise all products 

    const [bookingProduct, setBookingProduct] = useState(null);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-5'>
            {
                adsProducts.map(product => <AdCard key={product._id} product={product} setBookingProduct={setBookingProduct}></AdCard>)
            }
            {
                bookingProduct &&
                <BookingModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct}></BookingModal>
            }
        </div>
    );
};

export default Advertise;