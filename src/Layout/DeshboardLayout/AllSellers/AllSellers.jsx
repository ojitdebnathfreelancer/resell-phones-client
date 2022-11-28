import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['allsellers'],
        queryFn: () => fetch('http://localhost:5000/allseller', {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    });
    // load all sellers 

    const handeleDelteSeller = (id) => {
        fetch(`http://localhost:5000/sellerdelete/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('One seller deleted');
                refetch();
            })
    };
    // delete a single seller 

    const handleDeleteAllSeller = () => {
        alert('Are you want to delete all sellers');
        fetch(`http://localhost:5000/allsellerdelete`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            toast.success("All sellers deleted");
            refetch();
        })
    };
    // all seller delete 

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Seller Informations</th>
                        <th>Role</th>
                        <th className='text-center'>Verify</th>
                        <th className='text-center'>
                            <button onClick={handleDeleteAllSeller} className="btn btn-outline btn-accent btn-sm">Delete All</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers.map(seller => <tr key={seller._id}>
                            <td>
                                {seller.name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{seller.email}</span>
                            </td>
                            <td>{seller.role}</td>
                            <td className='text-center'>
                                <button className='btn btn-outline btn-primary btn-sm'>Verify</button>
                            </td>
                            <th className='text-center'>
                                <button onClick={() => handeleDelteSeller(seller._id)} className="btn btn-outline btn-accent btn-sm">Delete</button>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllSellers;