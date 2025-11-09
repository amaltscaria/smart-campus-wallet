'use client';

// src/components/ProjectAim.jsx
import React, { useState, useEffect } from 'react';

const ProjectAim = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const timelineSlides = [
    {
      id: 1,
      image: "/images/planning/Gan chart.jpg",
      title: "Project Timeline",
      alt: "Project Gantt Chart",
      description: "To ensure effective project management and timely delivery, I developed a comprehensive Gantt chart outlining all major phases and deliverables."
    },
    {
      id: 2,
      image: "/images/planning/Trelloboard.png",
      title: "Project Management",
      alt: "Trello Project Board",
      description: "To keep track of tasks, milestones, and progress throughout the project, I used Trello as a project management tool. This allowed me to organize my workflow and ensure all aspects of the design process were properly addressed."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === timelineSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [timelineSlides.length]);
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Project Aim</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <p className="text-gray-700 mb-6">
            The goal was to design a mobile-first wallet that unifies student discounts, subscriptions, and campus payments—especially for international students in the UK.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Scope</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>User research (primary & secondary)</li>
                <li>Ideation, prototyping, and testing</li>
                <li>Accessibility and UX best practices</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Success Criteria</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Solve key user pain points (missed renewals, fragmented offers)</li>
                <li>Ensure smooth, low-friction user flows</li>
                <li>Meet accessibility standards</li>
                <li>Achieve 90%+ task success in usability testing with at least one post-feedback iteration</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-bold mb-6 text-left">{timelineSlides[currentSlide].title}</h3>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className="relative group transition-all duration-1200 ease-in-out">
              <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
                <img
                  src={timelineSlides[currentSlide].image}
                  alt={timelineSlides[currentSlide].alt}
                  className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                  onClick={() => setSelectedImage({ src: timelineSlides[currentSlide].image, alt: timelineSlides[currentSlide].alt })}
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
            <div className="transition-all duration-1200 ease-in-out flex flex-col justify-center">
              <p className="text-gray-700 mb-4 text-left transition-all duration-1200 ease-in-out">
                {timelineSlides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {timelineSlides.map((_, index) => (
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

export default ProjectAim;