import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../../Footer/Footer';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import { MDBDataTable } from 'mdbreact';
import "./idea.css";

const Idea = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate API call with setTimeout
        setTimeout(() => {
            const mockProducts = [
                { _id: '1', name: 'Idea 1' },
                { _id: '2', name: 'Idea 2' },
                { _id: '3', name: 'Idea 3' },
                { _id: '4', name: 'Idea 4' },
            ];
            setProducts(mockProducts);
            setIsLoading(false);
        }, 1000);
    }, []);

    const deleteProductHandler = (id) => {
        // Simulate delete operation
        setProducts(products.filter(product => product._id !== id));
        alert(`Idea with ID ${id} deleted successfully!`);
    };

    const setProductsData = () => {
        const data = {
            columns: [
                {
                    label: "ID",
                    field: "id",
                    sort: "asc",
                },
                {
                    label: "Name",
                    field: "name",
                    sort: "asc",
                },
                {
                    label: "Actions",
                    field: "actions",
                    sort: "asc",
                },
            ],
            rows: [],
        };

        products.forEach((product) => {
            data.rows.push({
                id: product._id,
                name: `${product.name}`,
                actions: (
                    <>
                        <Link to={`/admin/products/${product._id}`} className='btn btn-primary me-2'>
                            <i className="fa fa-pencil"></i>
                        </Link>
                        <Link to={`/admin/products/${product._id}/upload_images`} className='btn btn-outline-success me-2'>
                            <i className="fa fa-image"></i>
                        </Link>
                        <button className='btn btn-outline-danger' onClick={() => deleteProductHandler(product._id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </>
                ),
            });
        });

        return data;
    };

    if (isLoading) return <div>Loading...</div>;

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
                    <div className='w-[70%] 2xl:w-[80%] xl:w-[80%] lg:w-[80%]'>
                        <h1 className="my-5">{products.length} Ideas</h1>
                        <MDBDataTable
                            data={setProductsData()}
                            className='px-3'
                            bordered
                            striped
                            hover
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Idea;
