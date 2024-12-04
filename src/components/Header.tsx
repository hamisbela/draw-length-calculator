import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Home, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Ruler className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Draw Length Calculator</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-gray-700 hover:text-green-600">
              <Home className="h-5 w-5" />
              <span className="ml-1">Home</span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
            <Link to="/contact" className="flex items-center text-gray-700 hover:text-green-600">
              <Mail className="h-5 w-5" />
              <span className="ml-1">Contact</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}