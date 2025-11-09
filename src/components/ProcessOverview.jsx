'use client';

// src/components/ProcessOverview.jsx
import React, { useState } from 'react';

const ProcessOverview = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Process Overview</h2>
        
        {/* UX Process Image */}
        <div className="mb-16 bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Stanford d. Design Process</h3>
          <div className="mb-6">
            <p className="text-gray-700">
              The UniVerse project was structured using the Stanford d. design process, supported by participatory design methods at multiple stages. Each phase integrated direct user involvement from discovery and co-ideation to testing and refinement ensuring the final solution was informed by real behaviours, expectations, and feedback loops.
            </p>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="/images/define/The UX Process.jpg"
              alt="UX Design Process"
              className="rounded-lg shadow max-w-[80%] h-auto"
            />
          </div>
        </div>


      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProcessOverview;