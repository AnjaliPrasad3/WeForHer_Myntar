import React, { Fragment, useEffect, useState } from 'react';
import DesignCard from './Card/DesignCard';
import { dummyDesigns } from './Data/dummyData';
import Sidebar from './sidebar';

const PostPage = () => {
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        
        setDesigns(dummyDesigns);
    }, []);

    const handleEdit = (designId) => {
       
        console.log(`Editing design ${designId}`);
    };

    const handleDelete = (designId) => {
       
        console.log(`Deleting design ${designId}`);
    };

    return (
        <Fragment>
            <div className='py-4 border-b-[1px] mx-auto w-[90%] mt-5 2xl:w-[70%] xl:w-[70%] lg:w-[70%]'>
                <h1 className='font-semibold text-lg'>Account</h1>
                <p className='text-xs'>User Name</p>
            </div>
            <div className="flex w-[90%] mx-auto 2xl:w-[70%] xl:w-[70%] lg:w-[70%]">
                <div className='w-[30%] border-r-2 2xl:w-[20%] xl:w-[20%] lg:w-[20%]'>
                <Sidebar />
                </div>
                <div className="w-[70%] 2xl:w-[80%] xl:w-[80%] lg:w-[80%] p-4">
                    <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {designs.map(design => (
                            <DesignCard
                                key={design.id}
                                design={design}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PostPage;
