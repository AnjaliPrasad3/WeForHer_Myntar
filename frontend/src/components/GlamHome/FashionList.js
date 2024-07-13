import React from 'react';
import item1 from '../images/item1.jpeg';
import anjaliImage from '../images/anjali.jpeg';
import { FcLikePlaceholder } from "react-icons/fc";

const FashionList = () => {
    return (
        <>
            <div >
                <div className="linkedin-box w-[60%] mx-auto p-4 border border-gray-300 shadow-md rounded-lg bg-white">
                    <div className="flex">
                    <img src={anjaliImage} alt="Profile Picture" class="w-12 h-12 rounded-full mb-4 mx-2" />    
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Anjali Prasad</h2>
                    </div>
                    <hr />
                    <div className="mt-4 flex flex-col justify-center items-center">
                        <img src={item1} alt="Profile Picture" className="w-full p-4 h-auto mb-4" />
                        <div>
                            <h3 className="text-lg font-medium text-gray-700 text-center">Everyday Wear</h3>
                            <p className="text-sm text-gray-500 text-center">XYZ</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex">
                    <button className=' font1 font-smibold text-[#ff3f6c] text-sm border-[1px] px-3 py-2 mx-4 my-2
                   border-[#d4d5d8] hover:border-[#ff3f6c] '><FcLikePlaceholder /></button>
                    <button className=' font1 font-smibold text-[#ff3f6c] text-sm border-[1px] px-3 py-2 mx-4 my-2
                   border-[#d4d5d8] hover:border-[#ff3f6c] '>Contact Me</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FashionList