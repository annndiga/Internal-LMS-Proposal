import React from "react";
import { useParams } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React and build your first app.",
    image: "https://via.placeholder.com/300",
    content: "This course covers the fundamentals of React, including components, state, and props.",
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master advanced JavaScript concepts and techniques.",
    image: "https://via.placeholder.com/300",
    content: "This course dives deep into advanced JavaScript topics like closures, promises, and async/await.",
  },
  {
    id: 3,
    title: "Tailwind CSS for Beginners",
    description: "Learn how to style your apps with Tailwind CSS.",
    image: "https://via.placeholder.com/300",
    content: "This course teaches you how to use Tailwind CSS to create responsive and modern designs.",
  },
];

const CourseView = () => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div className="text-center text-red-500">Course not found!</div>;
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-6">{course.description}</p>
        <div className="text-gray-700">{course.content}</div>
      </div>
    </div>
  );
};

export default CourseView;