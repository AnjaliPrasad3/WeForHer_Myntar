import React from 'react';
import { FcBookmark, FcLikePlaceholder } from 'react-icons/fc';
import anjaliImage from '../images/anjali.jpeg';
import item1 from '../images/item1.jpeg';
import m4 from '../images/m4.jpg';
import LeftSidebar from './GlamNavbar/LeftSidebar';
import RightSidebar from './GlamNavbar/RightSidebar';

const FashionList = () => {
    const cards = [
        {
            id: 1,
            image: item1,
            title: 'Everyday Wear',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ',
            designer: 'Anjali Prasad',
            likes: 5,
        },
        {
            id: 2,
            image: m4,
            title: 'Summer Collection',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
            designer: 'Supriya Kashyap',
            likes: 10,
        },
        {
            id: 3,
            image: item1,
            title: 'Winter Fashion',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
            designer: 'Shruti Thakur',
            likes: 8,
        },
        {
            id: 4,
            image: item1,
            title: 'Formal Wear',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
            designer: 'Shruti Thakur',
            likes: 12,
        },
        {
            id: 5,
            image: item1,
            title: 'Casual Outfit',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a',
            designer: 'Supriya Kashyap',
            likes: 6,
        },
    ];

    return (
        <div className="flex bg-gradient-to-b from-purple-200 to-blue-200 min-h-screen">
            <LeftSidebar />
            <div className="flex-1 p-4 overflow-hidden">
                <div className="h-[calc(100vh-6rem)] overflow-y-auto">
                    {cards.map((card) => (
                        <div key={card.id} className="card p-4 border border-gray-300 shadow-md rounded-lg bg-white mb-4">
                            <div className="flex items-center mb-4">
                                <img src={anjaliImage} alt="Profile Picture" className="w-12 h-12 rounded-full mr-4" />
                                <h2 className="text-xl font-semibold text-gray-700">{card.designer}</h2>
                            </div>
                            <hr />
                            <div className="mt-4 flex flex-col justify-center items-center">
                                <img src={card.image} alt="Fashion Item" className="w-full p-4 h-auto mb-4" />
                                <div>
                                    <h3 className="text-lg font-medium text-gray-700 text-center">{card.title}</h3>
                                    <p className="text-sm text-gray-500 text-center">{card.description}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex justify-center mt-4">
                                <button className="flex items-center justify-center font-semibold text-[#ff3f6c] text-sm border-[1px] px-3 py-2 mx-2 border-[#d4d5d8] hover:border-[#ff3f6c]">
                                    <FcLikePlaceholder className="mr-1" /> Like {card.likes}
                                </button>
                                <button className="flex items-center justify-center font-semibold text-[#ff3f6c] text-sm border-[1px] px-3 py-2 mx-2 border-[#d4d5d8] hover:border-[#ff3f6c]">
                                    <FcBookmark className="mr-1" /> Save
                                </button>
                                <button className="font-semibold text-[#ff3f6c] text-sm border-[1px] px-3 py-2 mx-2 border-[#d4d5d8] hover:border-[#ff3f6c]">Contact Me</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <RightSidebar />
        </div>
    );
};

export default FashionList;
