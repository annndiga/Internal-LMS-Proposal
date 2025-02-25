import React from "react";

import heroImage from "../assets/heroimage.jpg"; 
import feature1Icon from "../assets/feature1-icon.jpg"; 
import feature2Icon from "../assets/feature2-icon.jpg"; 
import feature3Icon from "../assets/feature3-icon.jpg"; 
import testimonial1 from "../assets/testimonial1.png"; 
import testimonial2 from "../assets/testimonial2.png"; 
import testimonial3 from "../assets/testimonial3.png"; 

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center justify-center h-full text-center text-white relative z-10">
          <h1 className="text-5xl font-bold mb-6">Welcome to the Future of Learning</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Join thousands of students and trainers in our interactive and engaging learning platform.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ img: testimonial1, name: "Alice", role: "Student", quote: "This platform has transformed the way I learn. The courses are well-structured and easy to follow." },
              { img: testimonial2, name: "Bob", role: "Trainer", quote: "As a trainer, I love how easy it is to create and manage courses on this platform." },
              { img: testimonial3, name: "Charlie", role: "Student", quote: "The interactive learning experience is unmatched. Highly recommend!" }]
              .map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                  <img src={testimonial.img} alt={testimonial.name} className="w-20 h-20 rounded-full border-4 border-gray-300 mb-4" />
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2023 LMS. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
