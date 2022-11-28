import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { resellContext } from '../../../AuthContext/AutchContext';
import MyProductCard from './MyProductCard/MyProductCard';

const MyProducts = () => {
    const { user } = useContext(resellContext);

    const { data: Products = [], refetch } = useQuery({
        queryKey: ['myproducts', user],
        queryFn: () => fetch(`http://localhost:5000/myproducts?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    });
    // load all products of seller 

    const handelDeleteAllProducts = () => {
        alert("Are you want to delete you all products?")
        fetch(`http://localhost:5000/myallproductsdelete?email=${user?.email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(() => {
                toast.success("Your all products deleted");
                refetch();
            })
    };
    // seller all products delete 

    return (
        <div className="overflow-x-auto w-full">
            <p className='text-center font-bold text-3xl my-2 capitalize underline'>Your total products {Products.length}</p>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <button onClick={handelDeleteAllProducts} className='btn btn-primary'>Delete All</button>
                            </label>
                        </th>
                        <th>Product</th>
                        <th>Your informations</th>
                        <th>Location</th>
                        <th className='text-center'>Buy Status</th>
                        <th className='text-center'>Run Advertisment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map(product => <MyProductCard key={product._id} product={product} refetch={refetch}></MyProductCard>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyProducts;