import React, { useState } from 'react';
import { Ruler, ArrowRight } from 'lucide-react';
import UnitToggle from './UnitToggle';
import { calculateDrawLength, convertInchesToCm } from '../utils/measurements';

export default function Calculator() {
  const [wingspan, setWingspan] = useState('');
  const [unit, setUnit] = useState<'cm' | 'inches'>('inches');
  const [result, setResult] = useState<{
    wingspan: number;
    drawLength: number;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wingspanNum = parseFloat(wingspan);
    const drawLength = calculateDrawLength(wingspanNum, unit);
    setResult({
      wingspan: wingspanNum,
      drawLength,
    });
  };

  const getMinMax = () => {
    return unit === 'inches' 
      ? { min: 40, max: 100 } 
      : { min: 100, max: 250 };
  };

  const { min, max } = getMinMax();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-6">
        <Ruler className="h-8 w-8 text-green-600 mr-2" />
        <h1 className="text-2xl font-bold text-gray-900">Draw Length Calculator</h1>
      </div>

      <div className="bg-green-50 p-4 rounded-md mb-6">
        <h2 className="text-lg font-semibold text-green-800 mb-2">How to Measure Your Wingspan</h2>
        <ol className="list-decimal list-inside text-green-700 space-y-2">
          <li>Stand straight with your back against a wall</li>
          <li>Extend your arms horizontally (like a T-pose)</li>
          <li>Measure from middle fingertip to middle fingertip</li>
          <li>Enter the measurement in your preferred unit</li>
        </ol>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <UnitToggle unit={unit} onUnitChange={setUnit} />
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Wingspan ({unit})
          </label>
          <input
            type="number"
            value={wingspan}
            onChange={(e) => setWingspan(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
            min={min}
            max={max}
            step={unit === 'inches' ? '0.25' : '0.5'}
            placeholder={`Enter your wingspan in ${unit}`}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Calculate Draw Length
        </button>
      </form>

      {result && (
        <div className="mt-6 p-4 rounded-md bg-green-50">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Results</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Your Wingspan:</span>
              <span className="font-semibold">
                {result.wingspan} {unit}
                {unit === 'inches' && ` (${convertInchesToCm(result.wingspan).toFixed(1)} cm)`}
                {unit === 'cm' && ` (${(result.wingspan * 0.393701).toFixed(1)} inches)`}
              </span>
            </div>
            <div className="flex items-center justify-center py-2">
              <ArrowRight className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Recommended Draw Length:</span>
              <span className="font-semibold text-green-700">
                {result.drawLength.toFixed(2)} inches
                ({(result.drawLength * 2.54).toFixed(1)} cm)
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: This is a starting point. Fine-tuning with a professional archery coach is recommended.
          </p>
        </div>
      )}
    </div>
  );
}