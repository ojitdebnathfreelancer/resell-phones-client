import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../../../Componets/Loader/Loader';

const CheckOutForm = ({ paymentProduct }) => {
    const { price, buyerName, buyerEmail, _id } = paymentProduct;

    const [clientSecret, setClientSecret] = useState("");
    const [loader, setLoader] = useState(true);
    const [trId, setTrId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://resell-phones-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret);
                setLoader(false);
            });
    }, [price]);

    const stripe = useStripe();
    const elements = useElements();

    const [cardError, setCardError] = useState('');

    const emptyeError = () => {
        setCardError('');
        setTrId('');
    };
    // card eror empty onclick 

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        }
        else {

            setCardError('');
        }

        const { paymentIntent, error: ConfireError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail
                    },
                },
            },
        );

        if (ConfireError) {
            setCardError(ConfireError.message);
        }

        if (paymentIntent.status === 'succeeded') {
            setTrId(paymentIntent.id);

            fetch(`https://resell-phones-server.vercel.app/bookedpaymentupdate/${_id}`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(() => {
                    fetch(`https://resell-phones-server.vercel.app/productpaymentupdate`, {
                        method:"PATCH",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(paymentProduct)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success("Your payment succeeded");
                            navigate('/deshboard/myorders');
                        })
                })
        };
        // paypemt succeeded 
    };
    // confirem paymetn 

    if (loader) {
        return <Loader></Loader>
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    onChange={emptyeError}
                    className='mt-3 border-2 border-zinc-400 px-2 py-1 rounded w-full'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#222222',
                                '::placeholder': {
                                    color: '#22222',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <p className='text-red-500 text-center'>{cardError}</p>
                <p className='font-bold text-center'>Your TransactionID: {trId}</p>
                <div className='text-center'>
                    <button className='btn btn-secondary btn-sm mt-3' type="submit" disabled={!stripe || cardError || !clientSecret || loader}>
                        Send Money
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckOutForm;