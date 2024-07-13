import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddIdea = () => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        seller: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error) {
            toast.error(error);
        }

        if (isSuccess) {
            toast.success("Product created");
            navigate("/admin/products");
        }
    }, [error, isSuccess, navigate]);

    const { name, description, price, category, stock, seller } = product;

    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Simulate a network request
            setTimeout(() => {
                console.log("Product created:", product);
                setIsLoading(false);
                setIsSuccess(true);
            }, 2000);
        } catch (err) {
            setIsLoading(false);
            setError("Failed to create product");
        }
    };

    return (
        <Fragment>
            <div>
                <div className='py-4 border-b-[1px] mx-auto w-[90%] mt-5 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
                    <h1 className='font-semibold text-lg font1'>Account</h1>
                    <p className='text-xs'>User Name</p>
                </div>
                <div className='flex w-[90%] h-auto mx-auto 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
                    <div className='w-[30%] border-r-2 2xl:w-[20%] xl:w-[20%] lg:w-[20%]'>
                        <Sidebar />
                    </div>
                    <div className="w-[70%] 2xl:w-[80%] xl:w-[80%] lg:w-[80%]">
                        <div className="max-w-md mx-auto">
                            <form className="shadow rounded bg-body p-4" onSubmit={submitHandler}>
                                <h2 className="mb-4 text-xl font-bold">New Product</h2>
                                <div className="mb-3">
                                    <label htmlFor="name_field" className="form-label"> Name </label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control w-full p-2 border rounded"
                                        name="name"
                                        value={name}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description_field" className="form-label"> Description </label>
                                    <textarea
                                        className="form-control w-full p-2 border rounded"
                                        id="description_field"
                                        rows="8"
                                        name="description"
                                        value={description}
                                        onChange={onChange}
                                    ></textarea>
                                </div>

                                <div className="row">
                                    <div className="mb-3 col">
                                        <label htmlFor="category_field" className="form-label"> Category </label>
                                        <select
                                            className="form-select w-full p-2 border rounded"
                                            id="category_field"
                                            name="category"
                                            value={category}
                                            onChange={onChange}
                                        >
                                            {["Electronics", "Books", "Clothing", "Sports"].map((category) => (
                                                <option key={category} value={category}>{category}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3 col">
                                        <label className="block mb-2" htmlFor="customFile">
                                            Choose Image
                                        </label>
                                        <input
                                            type="file"
                                            name="avatar"
                                            className="w-full p-2 border rounded"
                                            id="customFile"
                                            accept="image/*"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full p-2 bg-blue-500 text-white rounded"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Creating..." : "CREATE"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default AddIdea;
