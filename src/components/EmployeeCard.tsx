import React from 'react';
import { Mail, Phone, LinkedinIcon } from 'lucide-react';

interface EmployeeProps {
  name: string;
  role: string;
  department: string;
  image: string;
  email: string;
  phone: string;
  linkedin: string;
}

export function EmployeeCard({ name, role, department, image, email, phone, linkedin }: EmployeeProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-blue-600 font-medium">{role}</p>
        <p className="text-gray-600 mt-1">{department}</p>
        
        <div className="mt-4 space-y-2">
          <a href={`mailto:${email}`} className="flex items-center text-gray-600 hover:text-blue-600">
            <Mail className="h-4 w-4 mr-2" />
            {email}
          </a>
          <a href={`tel:${phone}`} className="flex items-center text-gray-600 hover:text-blue-600">
            <Phone className="h-4 w-4 mr-2" />
            {phone}
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-600">
            <LinkedinIcon className="h-4 w-4 mr-2" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}