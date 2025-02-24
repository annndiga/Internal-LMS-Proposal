// Courses.js
import React from "react";
import CourseCard from "../components/Coursecard";
import courseImg from "../assets/course.jpg"; // Add an image

const Courses = () => {
    const courses = [
        { title: "React for Beginners", description: "Learn React from scratch.", image: courseImg },
        { title: "Advanced JavaScript", description: "Deep dive into JS concepts.", image: courseImg },
        { title: "Web Design Basics", description: "Learn UI/UX and styling.", image: courseImg },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-blue-700 text-center">Courses</h1>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
