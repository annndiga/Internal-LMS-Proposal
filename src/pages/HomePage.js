import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const { user, login } = useContext(AuthContext);

  const handleLogin = async (role) => {
    let email, password;
    if (role === "admin") {
      email = "admin@example.com";
      password = "admin123";
    } else if (role === "trainer") {
      email = "trainer@example.com";
      password = "trainer123";
    } else if (role === "student") {
      email = "student@example.com";
      password = "student123";
    }
    await login(email, password);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">
          Welcome to the LMS
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Manage your courses, assignments, and progress with ease.
        </p>
        {!user ? (
          <div className="space-x-4">
            <button
              onClick={() => handleLogin("admin")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Login as Admin
            </button>
            <button
              onClick={() => handleLogin("trainer")}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Login as Trainer
            </button>
            <button
              onClick={() => handleLogin("student")}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              Login as Student
            </button>
          </div>
        ) : (
          <p className="text-xl text-gray-700">
            Welcome back, {user.name}! Go to your{" "}
            <a
              href={`/${user.role}`}
              className="text-blue-600 underline hover:text-blue-700"
            >
              dashboard
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;