import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: () => fetch('http://localhost:5000/allbuyers', {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
    });
    // load all buyers 

    const handeleDeleteBuyer = (id) => {
        fetch(`http://localhost:5000/buyerdelete/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(() => {
                toast.success("One buyer delete");
                refetch();
            })
    };
    // delete one buyer

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>buyer Informations</th>
                        <th>Role</th>
                        <th className='text-center'>
                            <button className="btn btn-outline btn-accent btn-sm">Delete All</button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map(buyer => <tr key={buyer._id}>
                            <td>
                                {buyer.name}
                                <br />
                                <span className="badge badge-ghost badge-sm">{buyer.email}</span>
                            </td>
                            <td>{buyer.role}</td>
                            <th className='text-center'>
                                <button onClick={() => handeleDeleteBuyer(buyer._id)} className="btn btn-outline btn-accent btn-sm">Delete</button>
                            </th>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllBuyers;