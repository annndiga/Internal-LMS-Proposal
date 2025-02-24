import React from "react";

const TrainerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-8">
        Trainer Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Manage Courses */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Manage Courses
          </h2>
          <p className="text-gray-600">
            Create, edit, or delete courses.
          </p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Go to Course Management
          </button>
        </div>

        {/* Manage Assignments */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Manage Assignments
          </h2>
          <p className="text-gray-600">
            Create, grade, or delete assignments.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Go to Assignment Management
          </button>
        </div>

        {/* View Student Progress */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Student Progress
          </h2>
          <p className="text-gray-600">
            View and manage student progress.
          </p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            View Progress
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;