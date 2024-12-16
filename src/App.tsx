import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EmployeeCard } from './components/EmployeeCard';
import { ContactForm } from './components/ContactForm';

const employees = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Developer',
    department: 'Engineering',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    email: 'sarah.j@company.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/sarah-johnson'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    department: 'Product',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    email: 'michael.c@company.com',
    phone: '+1 (555) 234-5678',
    linkedin: 'https://linkedin.com/in/michael-chen'
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    department: 'Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    email: 'emily.r@company.com',
    phone: '+1 (555) 345-6789',
    linkedin: 'https://linkedin.com/in/emily-rodriguez'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      <Hero />
      
      <section id="employees" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Team Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employees.map((employee) => (
              <EmployeeCard key={employee.email} {...employee} />
            ))}
          </div>
        </div>
      </section>
      
      <section id="departments" className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Engineering', 'Design', 'Product'].map((dept) => (
              <div key={dept} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{dept}</h3>
                <p className="text-gray-600">Excellence through collaboration and innovation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-20 px-4 bg-gray-100">
        <ContactForm />
      </section>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 WorkForce. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;