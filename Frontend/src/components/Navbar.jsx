import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full">
    
      <div className="fixed top-0 left-0 w-full z-50">   
        

      
        <nav className="bg-white shadow-md w-full">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="text-xl font-bold text-blue-600">
              A2 Developers
            </Link>

            <div className="hidden md:flex space-x-6">
              <Link to="#" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <Link to="#" className="text-gray-700 hover:text-blue-600">
                About
              </Link>
            </div>

            <Link
              to="/book-trial"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Book Trial
            </Link>
             <div className="bg-gray-100 text-sm text-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end gap-6">
            <div>Email: contact@a2developers.org</div>
            <div>Phone: +91 98765 43210</div>
          </div>
        </div>
          </div>
        </nav>
      </div>

     
    </header>
  );
}
