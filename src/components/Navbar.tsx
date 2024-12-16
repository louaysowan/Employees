import React from 'react';
import { Users, Phone, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">WorkForce</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#employees" className="text-gray-600 hover:text-blue-600">Employees</a>
            <a href="#departments" className="text-gray-600 hover:text-blue-600">Departments</a>
            <a href="#contact" className="flex items-center text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-gray-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}