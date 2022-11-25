import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import BookingModal from '../BookingModal/BookingModal';

const Category = () => {
    const products = useLoaderData();
    const [bookingProduct, setBookingProduct] = useState(null);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 my-5'>
            {
                products.map(product => <Card key={product._id} product={product} setBookingProduct={setBookingProduct}></Card>)
            }
            {
                bookingProduct &&
                <BookingModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct}></BookingModal>
            }
        </div>
    );
};

export default Category;