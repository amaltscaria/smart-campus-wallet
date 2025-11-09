'use client';

// src/components/DesignProcess/Testing.jsx
import React, { useState, useEffect } from 'react';

const Testing = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentAnalysis, setCurrentAnalysis] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const analysisSlides = [
    {
      id: 1,
      image: "/images/other/Arun Tharappel Scaria - SWOT Analysis.jpg",
      title: "SWOT Analysis",
      alt: "SWOT Analysis",
      description: "To evaluate the overall design solution, I conducted a SWOT analysis examining the strengths, weaknesses, opportunities, and threats of the proposed design."
    },
    {
      id: 2,
      image: "/images/other/Arun Tharappel Scaria - Innovation Roadmap-2.jpg",
      title: "Innovation Roadmap",
      alt: "Innovation Roadmap",
      description: "Looking beyond the current iteration, I developed an innovation roadmap outlining potential future enhancements and features. This strategic planning helps ensure the design can evolve to meet changing user needs over time."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentAnalysis((prev) => (prev === analysisSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [analysisSlides.length]);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-center text-white">Testing</h3>
      
      {/* Guerrilla Testing */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-4">Guerrilla Testing</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg">
              <img
                src="/images/test/Arun Tharappel Scaria - Guerrilla Test.jpg"
                alt="Guerrilla Testing Session"
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: "/images/test/Arun Tharappel Scaria - Guerrilla Test.jpg", alt: "Guerrilla Testing Session" })}
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
              To quickly gather initial feedback on the prototype, I conducted guerrilla testing
              with potential users. This lightweight, informal testing approach allowed me to
              identify obvious usability issues early in the process.
            </p>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Testing Approach:</h5>
              <ul className="list-disc pl-6 text-gray-700">
                <li>5-act interviews with realistic tasks</li>
                <li>Think-aloud protocol to understand user thought process</li>
                <li>Observation of user behavior and pain points</li>
                <li>Follow-up questions to explore areas of confusion</li>
              </ul>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Key Metrics:</h5>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Task completion rate: 85%</li>
                <li>Average time per task: 3.2 minutes</li>
                <li>User satisfaction score: 4.2/5</li>
                <li>Critical usability issues identified: 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Testing Results */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-4">Testing Results</h4>
        <p className="text-gray-700 mb-6">
          The testing phase revealed several key insights that informed further iterations of the design.
          User feedback was categorized into themes and prioritized based on severity and frequency.
        </p>
        
        <div className="mb-6">
          <h5 className="font-semibold mb-2">Key Findings:</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h6 className="font-semibold text-green-700 mb-2">What Worked Well</h6>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Users appreciated the clean, intuitive layout</li>
                <li>Navigation structure was easy to understand</li>
                <li>Visual hierarchy effectively guided attention</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h6 className="font-semibold text-red-700 mb-2">Areas for Improvement</h6>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Some users had difficulty with [specific feature]</li>
                <li>Certain terminology caused confusion</li>
                <li>Additional guidance needed for complex tasks</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h5 className="font-semibold mb-2">User Quotes:</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "I really liked how easy it was to [specific task]. It was much more intuitive than similar products I've used."
            </blockquote>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "I wasn't sure what would happen when I clicked on [specific element]. Some additional guidance there would be helpful."
            </blockquote>
          </div>
        </div>
      </div>
      
      {/* Design Iteration */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-4">Design Iteration</h4>
        <p className="text-gray-700 mb-6">
          Based on testing feedback, I made several iterations to the design to address user pain points
          and enhance the overall experience. The iterative process ensured that the final design was
          thoroughly validated with real users.
        </p>
        
        <div className="mb-6">
          <h5 className="font-semibold mb-2">Key Improvements:</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="border border-gray-200 px-4 py-2">Issue</th>
                  <th className="border border-gray-200 px-4 py-2">Solution</th>
                  <th className="border border-gray-200 px-4 py-2">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Issue 1</td>
                  <td className="border border-gray-200 px-4 py-2">Implemented solution 1</td>
                  <td className="border border-gray-200 px-4 py-2">Improved usability for key task</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Issue 2</td>
                  <td className="border border-gray-200 px-4 py-2">Implemented solution 2</td>
                  <td className="border border-gray-200 px-4 py-2">Reduced confusion and errors</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Issue 3</td>
                  <td className="border border-gray-200 px-4 py-2">Implemented solution 3</td>
                  <td className="border border-gray-200 px-4 py-2">Enhanced visual clarity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Additional Analysis Carousel */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-xl font-semibold mb-6 text-left">{analysisSlides[currentAnalysis].title}</h4>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="transition-all duration-1200 ease-in-out flex flex-col justify-center">
            <p className="text-gray-700 mb-4 text-left transition-all duration-1200 ease-in-out">
              {analysisSlides[currentAnalysis].description}
            </p>
          </div>
          <div className="relative group transition-all duration-1200 ease-in-out">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
              <img
                src={analysisSlides[currentAnalysis].image}
                alt={analysisSlides[currentAnalysis].alt}
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: analysisSlides[currentAnalysis].image, alt: analysisSlides[currentAnalysis].alt })}
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
          {analysisSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAnalysis(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentAnalysis ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
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

export default Testing;