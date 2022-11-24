import React from 'react';
import { useForm } from 'react-hook-form';

const BookingModal = ({ bookingProduct }) => {
    const { img, locaton, orginal_price, post_time, product_name, resell_price, seller_name, used_time, _id } = bookingProduct;

    const SubmitBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const location = form.location.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const buyerPhone = form.buyerPhone.value;
        console.log(productName, price, location, buyerEmail, buyerName, buyerPhone);
    };
    // submit booking data 

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={(e) => SubmitBooking(e)}>
                        <div>
                            <label>Product Name</label>
                            <input value={product_name} name="productName" type="text" disabled className="input input-bordered w-full" />
                        </div>

                        <div className='mt-2'>
                            <label>Price</label>
                            <input value={resell_price} name="price" type="text" disabled className="input input-bordered w-full" />
                        </div>

                        <div className='mt-2'>
                            <label>Location</label>
                            <input value={locaton} name="location" type="text" disabled className="input input-bordered w-full" />
                        </div>

                        <div className='mt-2'>
                            <label>Buyer Name</label>
                            <input value={"buyer name"} name="buyerName" type="text" disabled className="input input-bordered w-full" />
                        </div>

                        <div className='mt-2'>
                            <label>Buyer Email</label>
                            <input value={"buyer email"} name="buyerEmail" type="text" disabled className="input input-bordered w-full" />
                        </div>

                        <div className='mt-2'>
                            <label>Buyer Phone</label>
                            <input value={"buyer phone"} name="buyerPhone" type="text" disabled className="input input-bordered w-full" />
                        </div>

                        <div className='text-center mt-5'>
                            <button type='submit' className='btn btn-primary'>Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;