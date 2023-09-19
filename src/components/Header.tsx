import React, { useState } from "react";
import Logo from "./../assets/IMG-20230408-WA0000.png";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="logo">
            <img src={Logo} alt="Logo" className="w-11" />
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link
              to="about"
              smooth
              className="text-gray-600 hover:text-blue-500"
            >
              About
            </Link>
            <Link to="services" smooth className="text-gray-600 hover:text-blue-500">
              Services
            </Link>
            <Link to="contact" smooth className="text-gray-600 hover:text-blue-500">
              Contact
            </Link>
            <Link to="faq" smooth className="text-gray-600 hover:text-blue-500">
              FAQ
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-500"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <ul className="text-center space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="text-gray-600 hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="faq" className="text-gray-600 hover:text-blue-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
