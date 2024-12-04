import React from 'react';
import { Target, Ruler, Shield, Award, Settings2, BookOpen } from 'lucide-react';

export default function SeoContent() {
  return (
    <div className="mt-16">
      <div className="bg-gradient-to-b from-green-50 to-white rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          The Ultimate Draw Length Calculator Guide for Archers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Target className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">Archery Draw Length Calculator</h3>
            </div>
            <p className="text-gray-600">Our draw length calculator helps archers find their perfect draw length for optimal shooting performance.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Ruler className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">Precise Measurements</h3>
            </div>
            <p className="text-gray-600">Calculate your ideal draw length using our specialized draw length calculator tool.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">Archery Form</h3>
            </div>
            <p className="text-gray-600">Proper draw length is crucial for maintaining good form and accuracy in archery.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="text-xl font-semibold">Better Performance</h3>
            </div>
            <p className="text-gray-600">Improve your archery performance with the right draw length.</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <div className="flex items-center mb-4">
              <Settings2 className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Understanding Draw Length</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">Draw length is a crucial measurement in archery that determines how far you can comfortably pull back your bowstring. Our draw length calculator helps archers find their ideal draw length using the proven arm span method.</p>
              <p className="text-gray-600">Using our draw length calculator ensures you get the most accurate measurement for your archery setup.</p>
            </div>
          </section>

          <section>
            <div className="flex items-center mb-4">
              <BookOpen className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Draw Length Calculator Tips</h2>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  Measure your arm span accurately
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  Stand straight against a wall
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  Keep arms parallel to the ground
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  Verify measurements with a professional
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Use Our Draw Length Calculator?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Accurate draw length calculations based on proven methods</li>
            <li>Easy-to-use interface</li>
            <li>Helpful measurement instructions</li>
            <li>Free archery tool</li>
            <li>Mobile-friendly design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}