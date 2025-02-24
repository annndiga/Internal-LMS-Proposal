import React from "react";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-purple-600 mb-8">
        Student Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* View Courses */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Courses
          </h2>
          <p className="text-gray-600">
            View your enrolled courses.
          </p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            View Courses
          </button>
        </div>

        {/* View Assignments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Assignments
          </h2>
          <p className="text-gray-600">
            View and submit assignments.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            View Assignments
          </button>
        </div>

        {/* View Grades */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Grades
          </h2>
          <p className="text-gray-600">
            View your grades and feedback.
          </p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            View Grades
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;