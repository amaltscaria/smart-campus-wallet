// src/components/ProjectIntro.jsx
import React, { useState } from 'react';
import introImage from '../assets/images/planning/Introduction.jpg';
import contextImage from '../assets/images/planning/Context of Use.jpg';

const ProjectIntro = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <section id="project" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Project Introduction</h2>
        
        {/* Introduction Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">
          <div className="md:flex">
            <div className="md:w-1/2 relative group">
              <div className="h-[600px] flex items-center justify-center bg-transparent rounded-lg p-4">
                <img
                  src={introImage}
                  alt="Project Introduction"
                  className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                  onClick={() => setSelectedImage({ src: introImage, alt: "Project Introduction" })}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">UniVerse - Digital Wallet for Students</h3>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                <p className="text-gray-700">
                  UniVerse is a mobile-first wallet app tailored for university students, especially international learners. It centralises student discounts, subscription tracking, and campus payments into one seamless platform. The app was developed through user interviews, journey maps, and iterative prototyping to help students manage money smarter, avoid hidden costs, and access exclusive deals effortlessly.
                </p>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Business Goals</h4>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li>Unify campus discounts, loyalty rewards, and payments in one app</li>
                  <li>Minimise missed subscriptions and overspending</li>
                  <li>Increase student satisfaction through better financial visibility</li>
                  <li>Offer a white-label platform for universities to enhance student services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Context of Use Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">Context of Use</h3>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Market Trends</h4>
              <p className="text-gray-700">
                University students increasingly rely on digital wallets and subscriptions, but most campus services remain disconnected. Apps like Apple Wallet, Google Pay, and UNiDAYS have raised expectations for a single, streamlined experience. UniVerse responds to this by unifying payments, student discounts, and subscriptions into one app.
              </p>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Key Opportunity Areas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">All-in-One Wallet</h5>
                  <p className="text-gray-700 text-sm">
                    Replace 4–6 separate apps with a unified wallet for payments, rewards, and discounts.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Smart Spending & Subscription Tracker</h5>
                  <p className="text-gray-700 text-sm">
                    Help students avoid auto-renewal shocks and track their monthly expenses clearly.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">On-Campus Discounts</h5>
                  <p className="text-gray-700 text-sm">
                    Bring visibility to student offers across cafés, printers, laundry, and shops with a loyalty system.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Support for International Students</h5>
                  <p className="text-gray-700 text-sm">
                    Ease the transition with a tool that explains UK systems, offers local tips, and encourages smart budgeting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center p-8 bg-gray-50">
            <div className="relative group">
              <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg">
                <img
                  src={contextImage}
                  alt="Context of Use"
                  className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                  onClick={() => setSelectedImage({ src: contextImage, alt: "Context of Use" })}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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

export default ProjectIntro;