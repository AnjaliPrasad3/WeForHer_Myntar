import React, { Fragment, useState } from 'react';
import Footer from '../../Footer/Footer';
import Sidebar from './sidebar';

const UploadAvatar = () => {
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.jpg");
    const [isLoading, setIsLoading] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate upload process
        setTimeout(() => {
            console.log("Avatar uploaded:", avatar);
            setIsLoading(false);
            alert("Avatar Uploaded Successfully!");
        }, 1500);
    };

    const onChange = (e) => {
        const reader = new FileReader();

        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        };

        reader.readAsDataURL(e.target.files[0]);
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
                            <form
                                className="shadow rounded bg-body p-4"
                                onSubmit={submitHandler}
                            >
                                <h2 className="mb-4 text-xl font-bold">Upload Avatar</h2>

                                <div className="mb-3">
                                    <div className="flex items-center">
                                        <div className="mr-3">
                                            <figure className="avatar">
                                                <img src={avatarPreview} className="rounded-full w-16 h-16" alt="Avatar Preview" />
                                            </figure>
                                        </div>
                                        <div className="flex-1">
                                            <label className="block mb-2" htmlFor="customFile">
                                                Choose Avatar
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
                                </div>

                                <button
                                    type="submit"
                                    className="w-full p-2 bg-blue-500 text-white rounded"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Uploading..." : "Upload"}
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

export default UploadAvatar;