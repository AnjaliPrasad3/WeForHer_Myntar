import React, { Fragment, useState } from 'react';
import Footer from '../../Footer/Footer';
import Sidebar from './sidebar';

const UpdatePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate password update process
        setTimeout(() => {
            console.log("Password update requested:", { oldPassword, newPassword });
            setIsLoading(false);
            alert("Password Updated Successfully!");
            setOldPassword('');
            setNewPassword('');
        }, 1500);
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
                                <h2 className="mb-4 text-xl font-bold">Update Password</h2>
                                <div className="mb-3">
                                    <label htmlFor="old_password_field" className="block mb-2">
                                        Old Password
                                    </label>
                                    <input
                                        type="password"
                                        id="old_password_field"
                                        className="w-full p-2 border rounded"
                                        value={oldPassword}
                                        onChange={(e) => setOldPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="new_password_field" className="block mb-2">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        id="new_password_field"
                                        className="w-full p-2 border rounded"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full p-2 bg-blue-500 text-white rounded"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Updating..." : "Update Password"}
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

export default UpdatePassword;