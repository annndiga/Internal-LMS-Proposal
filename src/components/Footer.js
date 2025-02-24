// Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-8">
            &copy; {new Date().getFullYear()} LMS. All Rights Reserved.
        </footer>
    );
};

export default Footer;