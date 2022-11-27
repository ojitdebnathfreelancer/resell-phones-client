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
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
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