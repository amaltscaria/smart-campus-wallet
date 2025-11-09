'use client';

// src/components/DesignProcess/Ideate.jsx
import React, { useState } from 'react';

const Ideate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-center text-white">Ideate</h3>

      {/* NUF Test Results Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-xl font-semibold mb-4">NUF Test Results Table</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg">
              <img
                src="/images/new/4.nuf test results.jpg"
                alt="NUF Test Results Table"
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: "/images/new/4.nuf test results.jpg", alt: "NUF Test Results Table" })}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M8 3H5a2 2 0 0 0-2 2v3"/>
                  <path d="M21 8V5a2 2 0 0 0-2-2h-3"/>
                  <path d="M3 16v3a2 2 0 0 0 2 2h3"/>
                  <path d="M16 21h3a2 2 0 0 0 2-2v-3"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 mb-4 text-left">
              This table quantifies the brainstormed ideas using the NUF framework—New, Useful, Feasible. It guided the selection of the MVP features like QR payments and spending dashboards.
            </p>
            <div className="mt-6">
              <h5 className="font-semibold mb-3">NUF Framework Criteria:</h5>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>New:</strong> How innovative or unique is the idea?</li>
                <li><strong>Useful:</strong> How much value does it provide to users?</li>
                <li><strong>Feasible:</strong> How realistic is it to implement?</li>
              </ul>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Selected MVP Features:</h5>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>QR payment integration</li>
                <li>Spending dashboard</li>
                <li>Subscription management</li>
                <li>Student discount discovery</li>
              </ul>
            </div>
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
    </div>
  );
};

export default Ideate;