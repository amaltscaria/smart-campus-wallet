'use client';

// src/components/ProblemSpace.jsx
import React, { useState, useEffect } from 'react';

const ProblemSpace = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const problemSpaceSlides = [
    {
      id: 1,
      image: "/images/new/7. Mind map.jpg",
      title: "Mind Map",
      alt: "Problem Space Mind Map",
      description: "This mind map sets the stage by illustrating the interconnected problems around student financial struggles, discount discovery, and campus payment complexity. It outlines key domains like budgeting, subscriptions, and tech integration which shaped the problem space."
    },
    {
      id: 2,
      image: "/images/new/8. Visual Abstarct.jpg",
      title: "Visual Abstract",
      alt: "Visual Abstract",
      description: "This visual abstract uses metaphorical sketches to quickly convey the emotional and practical struggles students face with fragmented financial tools. It anchors the narrative and orients readers to the real-world friction before diving into the UX process."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === problemSpaceSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [problemSpaceSlides.length]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-left">{problemSpaceSlides[currentSlide].title}</h3>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="transition-all duration-1200 ease-in-out flex flex-col justify-center">
              <p className="text-gray-700 mb-4 text-left transition-all duration-1200 ease-in-out">
                {problemSpaceSlides[currentSlide].description}
              </p>
            </div>
            <div className="relative group transition-all duration-1200 ease-in-out">
              <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
                <img
                  src={problemSpaceSlides[currentSlide].image}
                  alt={problemSpaceSlides[currentSlide].alt}
                  className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                  onClick={() => setSelectedImage({ src: problemSpaceSlides[currentSlide].image, alt: problemSpaceSlides[currentSlide].alt })}
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
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {problemSpaceSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
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

export default ProblemSpace;