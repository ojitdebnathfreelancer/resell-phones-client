import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { resellContext } from '../../../AuthContext/AutchContext';
import MyProductCard from './MyProductCard/MyProductCard';

const MyProducts = () => {
    const { user } = useContext(resellContext);

    const { data: Products = [] } = useQuery({
        queryKey: ['myproducts', user],
        queryFn: () => fetch(`http://localhost:5000/myproducts?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    });

    return (
        <div className="overflow-x-auto w-full">
            <p className='text-center font-bold text-3xl my-2 capitalize underline'>Your total products {Products.length}</p>
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
                        <th>Location</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map(product => <MyProductCard key={product._id} product={product}></MyProductCard>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyProducts;