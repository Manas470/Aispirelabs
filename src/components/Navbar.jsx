import React, { useState } from "react";
import { Link } from "react-router-dom";
import AIspireLabsLogo from "../assets/AIspireLabsLogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={AIspireLabsLogo} 
              alt="AIspire Labs Logo" 
              className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AISPIRE LABS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about">
              <span className="text-lg font-semibold hover:text-blue-600 transition-colors">
                About
              </span>
            </Link>
            <Link to="/use-cases">
              <span className="text-lg font-semibold hover:text-blue-600 transition-colors">
                UseCases
              </span>
            </Link>
            <a 
              href="https://sara.aispirelabs.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Try Sara
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`${
            isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="py-3 space-y-4">
            <Link 
              to="/about"
              className="block px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/use-cases"
              className="block px-4 py-2 text-lg font-semibold hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              UseCases
            </Link>
            <a 
              href="https://calendly.com/aispirelabs/book-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;