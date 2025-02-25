import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React and build your first app.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master advanced JavaScript concepts and techniques.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Tailwind CSS for Beginners",
    description: "Learn how to style your apps with Tailwind CSS.",
    image: "https://via.placeholder.com/300",
  },
];

const Courses = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Available Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {course.title}
            </h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <Link
              to={`/courses/${course.id}`}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;