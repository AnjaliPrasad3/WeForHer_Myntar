
import React from 'react';

const DraftCard = ({ design, onEdit, onDelete }) => {
    return (
        <div className="border p-4 rounded shadow-md">
            <img src={design.imageUrl} alt={design.title} className="w-full h-32 object-cover mb-2 rounded" />
            <h3 className="text-lg font-semibold">{design.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{design.description}</p>
            <div className="flex justify-between items-center">
            <button
                    onClick={() => onDelete(design.id)}
                    className="text-orange-500 hover:underline"
                >
                    Post
                </button>
                <button
                    onClick={() => onEdit(design.id)}
                    className="text-blue-500 hover:underline"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(design.id)}
                    className="text-red-800 hover:underline"
                >
                    Delete
                </button>
                
                
            </div>
        </div>
    );
};

export default DraftCard;
