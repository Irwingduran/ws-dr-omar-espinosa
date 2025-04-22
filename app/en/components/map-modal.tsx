"use client"

import { useEffect, useState } from 'react';
import mapaImage from '../../assets/mapa.png';
import Image from 'next/image';

const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar modal cuando el componente se monta (carga la página)
    setIsOpen(true);
    
    // Bloquear el scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Restaurar el scroll al desmontar
      document.body.style.overflow = 'auto';
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Restaurar scroll al cerrar
  };

  // Cerrar con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && closeModal()} // Cerrar al hacer clic fuera
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col shadow-xl">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
          <h2 id="modal-title" className="text-2xl font-bold text-gray-800 mb-2">
            Flights to Puebla, Mexico
          </h2>
          <p className="text-gray-600">Explore all available flight routes to this destination</p>
        </div>

        {/* Image content */}
        <div className="p-6 flex-1 overflow-auto">
          <div className="relative w-full h-full min-h-[300px]">
            <Image 
              src={mapaImage} 
              alt="Detailed map showing flight routes and destinations to Puebla, Mexico"
              className="object-contain"
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            All the destinations available from major airports
          </p>
          <button
            onClick={closeModal}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full sm:w-auto"
          >
            Close Map
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
