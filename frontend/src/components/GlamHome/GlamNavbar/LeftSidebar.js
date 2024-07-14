import React from 'react';

const LeftSidebar = () => {
    const designers = [
        { name: 'Anjali Prasad', posts: 5 },
        { name: 'Shruti Thakur', posts: 3 },
        { name: 'Supriya Kashyap', posts: 8 },
    ];

    return (
        <div className="w-1/5 p-6 border-r border-gray-300 bg-gradient-to-b from-pink-300 to-pink-500 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Designers</h3>
            <ul className="space-y-4">
                {designers.map((designer, index) => (
                    <li key={index} className="flex items-center p-3 bg-white rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                            <span className="text-xl font-semibold text-gray-600">{designer.name[0]}</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-gray-700">{designer.name}</h4>
                            <p className="text-sm text-gray-500">{designer.posts} posts</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftSidebar;
