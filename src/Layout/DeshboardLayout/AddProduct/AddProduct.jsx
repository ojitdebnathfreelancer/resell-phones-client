import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const Product = data => {
        if(data.category === 'apple'){
            data.category = '1'
        };
        if(data.category === 'oppo'){
            data.category = '2'
        };
        if(data.category === 'vivo'){
            data.category = '3'
        };
        console.log(data);
    };
    // product info 

    return (
        <div className="lg:my-3">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(Product)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Produtc Name</span>
                                </label>
                                <input type="text" placeholder="Product name" className="input input-bordered" {...register('name', { required: "Please write product name" })} />
                                {
                                    errors?.name && <p className='text-red-500'>{errors.name.message}</p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Price</span>
                                </label>
                                <input type="text" placeholder="Price" className="input input-bordered" {...register('price', { required: "Please write price" })} />
                                {
                                    errors?.price && <p className='text-red-500'>{errors.price.message}</p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Location</span>
                                </label>
                                <input type="text" placeholder="location" className="input input-bordered" {...register('location', { required: "Please write location" }
                                )} />
                                {
                                    errors?.location && <p className='text-red-500'>{errors.location.message}</p>
                                }
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Number</span>
                                </label>
                                <input type="text" placeholder="Number" className="input input-bordered" {...register('number', { required: "Please write number" }
                                )} />
                                {
                                    errors?.number && <p className='text-red-500'>{errors.number.message}</p>
                                }
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Discription</span>
                                </label>
                                <input type="text" placeholder="discription" className="input input-bordered" {...register('discription', { required: "Please write discription", maxLength:{value:250, message:'Write within 250 word'} }
                                )} />
                                {
                                    errors?.discription && <p className='text-red-500'>{errors.discription.message}</p>
                                }
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Used time</span>
                                </label>
                                <input type="text" placeholder="used" className="input input-bordered" {...register('used', { required: "Please write used time" }
                                )} />
                                {
                                    errors?.used && <p className='text-red-500'>{errors.used.message}</p>
                                }
                            </div>

                            <div className="form-control mt-3">
                                <p className='font-bold'>Product Category</p>
                                <div className='flex'>
                                    <label className='flex items-center mt-3'>
                                        <input
                                            {...register('category', { required: true })}
                                            type="radio"
                                            name="category"
                                            value="apple"
                                            className="radio radio-primary"
                                        />
                                        <span className='ml-2'>Apple</span>
                                    </label>
                                    <label className='flex items-center ml-3 mt-3'>
                                        <input
                                            {...register('category', { required: true })}
                                            type="radio"
                                            name="category"
                                            value="oppo"
                                            className="radio radio-primary"
                                        />
                                        <span className='ml-2'>Oppo</span>
                                    </label>
                                    <label className='flex items-center ml-3 mt-3'>
                                        <input
                                            {...register('category', { required: true })}
                                            type="radio"
                                            name="category"
                                            value="vivo"
                                            className="radio radio-primary"
                                        />
                                        <span className='ml-2'>Vivo</span>
                                    </label>
                                </div>
                            </div>

                            <div className='mt-3'>
                                <p className='font-bold'>Product conditon</p>
                                <div className='flex'>
                                    <label className='flex items-center mt-3'>
                                        <input
                                            {...register('condition', { required: true })}
                                            type="radio"
                                            name="condition"
                                            value="Excillent"
                                            className="radio radio-primary"
                                        />
                                        <span className='ml-2'>Excillent</span>
                                    </label>
                                    <label className='flex items-center ml-3 mt-3'>
                                        <input
                                            {...register('condition', { required: true })}
                                            type="radio"
                                            name="condition"
                                            value="Good"
                                            className="radio radio-primary"
                                        />
                                        <span className='ml-2'>Good</span>
                                    </label>
                                    <label className='flex items-center ml-3 mt-3'>
                                        <input
                                            {...register('condition', { required: true })}
                                            type="radio"
                                            name="condition"
                                            value="Fair"
                                            className="radio radio-primary"
                                        />
                                        <span className='ml-2'>Fair</span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-control mt-3">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;