const Navbar = () => {
    return (
        <nav className="bg-gray-200 shadow-md p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">LMS</h1>
            <div className="space-x-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            </div>
        </nav>
    );
};
export default Navbar;