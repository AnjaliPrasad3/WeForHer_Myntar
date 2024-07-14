import React from 'react';

const RightSidebar = () => {
    const designer = { name: 'Anjali Prasad', posts: 8 }; 
    const categories = ['Casual', 'Formal', 'Travels', 'Festivals', 'Sporty'];

    return (
        <div className="w-1/4 p-6 border-r border-gray-300 bg-gradient-to-b from-orange-300 to-orange-400 rounded-lg shadow-lg">
   
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Featured Designer</h3>
                <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold text-gray-700">{designer.name}</h4>
                    <p className="text-sm text-gray-500">{designer.posts} posts</p>
                    <a href="#view-more" className="mt-4 block text-blue-600 hover:underline">View More</a>
                </div>
            </div>
            <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Categories</h4>
                <ul className="space-y-2">
                    {categories.map((category, index) => (
                        <li key={index} className="bg-gray-200 p-2 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out">
                            <a href={`#${category.toLowerCase()}`} className="text-gray-700">{category}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RightSidebar;
