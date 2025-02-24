// CourseCard.js
import React from "react";

const CourseCard = ({ title, description, image }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    View Course
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
