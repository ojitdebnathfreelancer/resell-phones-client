import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';

const Category = () => {
    const products = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 my-5'>
            {
                products.map(product => <Card key={product._id} product={product}></Card>)
            }
        </div>
    );
};

export default Category;