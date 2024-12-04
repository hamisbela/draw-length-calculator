import React from 'react';
import { Info, Heart, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Info className="h-8 w-8 text-blue-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">Welcome to Prescription Refill Calculator, your trusted resource for managing medication schedules and refills.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="flex flex-col items-center text-center p-4">
                <Heart className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">To help people maintain their health through better medication management.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Accuracy, reliability, and user privacy are our top priorities.</p>
              </div>

              <div className="flex flex-col items-center text-center p-4">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Community</h3>
                <p className="text-gray-600">Helping thousands manage their medications effectively.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Why Choose Us</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Free, easy-to-use medication management tools</li>
              <li>Accurate calculations based on your prescription details</li>
              <li>Privacy-focused approach</li>
              <li>Mobile-friendly interface</li>
              <li>Regular updates and improvements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Expertise</h2>
            <p className="text-gray-600">Our team combines healthcare knowledge with technical expertise to provide reliable medication management tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
}