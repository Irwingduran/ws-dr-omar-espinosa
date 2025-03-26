"use client"

import { useEffect, useState } from 'react';
import mapaImage from '../../assets/mapa.png';
import Image from 'next/image';

const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal when component mounts (page loads)
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
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
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header with title and description */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Flights to Puebla, Mexico</h2>
        </div>

        {/* Image content */}
        <div className="p-6">
          <Image 
            src={mapaImage} 
            alt="Routes and destinations map"
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 flex justify-between items-center">
          <p className="text-sm text-gray-500">
          All the destinations available
          </p>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Close Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;