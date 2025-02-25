import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          LMS
        </Link>
        <div className="space-x-4">
          <Link to="/courses" className="hover:text-gray-400">
            Courses
          </Link>
          {user ? (
            <div className="flex items-center space-x-4">
              <span>Welcome, {user.name}</span>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="hover:text-gray-400">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;