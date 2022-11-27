import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { resellContext } from '../../../AuthContext/AutchContext';

const AddProduct = () => {
    const {user} = useContext(resellContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const Product = data => {
        if (data.category === 'apple') {
            data.category = '1'
        };
        if (data.category === 'oppo') {
            data.category = '2'
        };
        if (data.category === 'vivo') {
            data.category = '3'
        };

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const d = new Date();
        const month = months[d.getMonth()];
        const mainTime = `${month} ${d.getDate()}, ${d.getFullYear()}`;
        // time 

        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);

        const imgApi = process.env.REACT_APP_img_apikey;

        fetch(`https://api.imgbb.com/1/upload?key=${imgApi}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgdata => {

                const product = {
                    category_id: data.category,
                    img: imgdata.data.url,
                    product_name: data.name,
                    number: data.number,
                    seller_name: data.sellerName,
                    locaton: data.location,
                    resell_price: data.price,
                    orginal_price: "Not Aivalable",
                    used_time: data.used,
                    post_time: mainTime,
                    condition: data.condition,
                    discription: data.discription,
                    sellerEmail:user.email
                };

                fetch(`http://localhost:5000/addproduct`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            navigate('/deshboard/myproducts');
                            toast.success('Your product added')
                        }
                    })
                // post product 
            })
    };
    // product info 

    return (
        <div className="lg:my-3">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                    <p className='font-bold text-center text-3xl mt-2'>Post Product With Informations</p>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(Product)}>
                            <div className='lg:grid md:grid grid-cols-2 gap-x-5'>
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
                            </div>

                            <div className='lg:grid md:grid grid-cols-2 gap-x-5'>
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
                            </div>

                            <div className='lg:grid md:grid grid-cols-2 gap-x-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Discription</span>
                                    </label>
                                    <input type="text" placeholder="discription" className="input input-bordered" {...register('discription', { required: "Please write discription", maxLength: { value: 250, message: 'Write within 250 word' } }
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
                            </div>

                            <div className='lg:grid md:grid grid-cols-2 gap-x-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Product photo</span>
                                    </label>
                                    <input type="file" placeholder="Product photo" className="file-input file-input-bordered file-input-info w-full" {...register('image', { required: "Please upload a photo" }
                                    )} />
                                    {
                                        errors?.image && <p className='text-red-500'>{errors.image.message}</p>
                                    }
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Seller Name</span>
                                    </label>
                                    <input type="text" placeholder="sellerName" className="input input-bordered" {...register('sellerName', { required: "Please you name" }
                                    )} />
                                    {
                                        errors?.sallerName && <p className='text-red-500'>{errors.sellerName.message}</p>
                                    }
                                </div>
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