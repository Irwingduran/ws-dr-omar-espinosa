 "use client"
import React, { useState, useEffect } from 'react';

const BMICalculator: React.FC = () => {
  const [feet, setFeet] = useState<number>(0);
  const [inches, setInches] = useState<number>(0);
  const [pounds, setPounds] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);
  const [isBariatric, setIsBariatric] = useState<boolean>(false);

  useEffect(() => {
    calculateBMI();
  }, [feet, inches, pounds]);

  const calculateBMI = () => {
    if (feet > 0 && pounds > 0) {
      const totalInches = feet * 12 + inches;
      const heightInMeters = totalInches * 0.0254;
      const weightInKg = pounds * 0.453592;
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(calculatedBmi.toFixed(2)));
    } else {
      setBmi(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Body Mass Index Calculator (BMI)</h1>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <input 
            type="checkbox" 
            id="bariatric-checkbox"
            checked={isBariatric}
            onChange={() => setIsBariatric(!isBariatric)}
            className="mr-2"
          />
          <label htmlFor="bariatric-checkbox" className="text-sm font-medium text-gray-700">
            Applies to Bariatric Surgery Only
          </label>
        </div>
        
        {isBariatric && (
          <p className="text-xs text-gray-500 mb-4">
            If you're considering weight loss surgery, use this calculator to determine eligibility.
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Height</h2>
          <p className="text-sm text-gray-500 mb-3">
            Please enter your feet and inches in separate boxes. If you're 5 ft 4 in, put 5 in the first box and 4 in the second.
          </p>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="feet" className="block text-sm font-medium text-gray-700 mb-1">Feet</label>
              <input
                type="number"
                id="feet"
                min="0"
                max="8"
                value={feet || ''}
                onChange={(e) => setFeet(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="inches" className="block text-sm font-medium text-gray-700 mb-1">Inches</label>
              <input
                type="number"
                id="inches"
                min="0"
                max="11"
                value={inches || ''}
                onChange={(e) => setInches(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Weight</h2>
          <p className="text-sm text-gray-500 mb-3">
            After entering your weight, make sure to press enter, or tap/click anywhere to make the BMI formula update.
          </p>
          <div>
            <label htmlFor="pounds" className="block text-sm font-medium text-gray-700 mb-1">Pounds</label>
            <input
              type="number"
              id="pounds"
              min="0"
              value={pounds || ''}
              onChange={(e) => setPounds(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Your BMI</h2>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
            <div>
              <p className="text-sm text-gray-500">BMI Result</p>
              <p className="text-3xl font-bold text-indigo-600">{bmi.toFixed(2)}</p>
            </div>
            <div className="text-sm text-gray-500">
              {bmi === 0 ? (
                <p>Enter your height and weight to calculate</p>
              ) : (
                <p>Calculated from your height and weight</p>
              )}
            </div>
          </div>
        </div>

       
      </form>

      {isBariatric && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Are You A Weight Loss Surgery Candidate?</h3>
          <p className="text-sm text-gray-600 mb-3">
            If you're considering weight loss surgery, there are a few general requirements to factor in.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 font-bold">• BMI of 26+</span>
              <span>Most weight loss surgeries require BMI ≥ 30+, ESG is 26+</span>
            </li>
            <li>• 16 – 70 years old. Minors accepted in some circumstances</li>
            <li>• Have tried conventional weight loss methods like diet and exercise but can't maintain a healthy BMI</li>
          </ul>
          {bmi > 0 && (
            <div className="mt-4 p-3 rounded-md bg-white">
              <p className="font-medium text-gray-800">
                {bmi >= 26 ? (
                  <span className="text-green-600">Based on your BMI, you may be eligible for bariatric surgery.</span>
                ) : (
                  <span className="text-red-600">Based on your BMI, you may not meet the minimum requirements for bariatric surgery.</span>
                )}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BMICalculator; 