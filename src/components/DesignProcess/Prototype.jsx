'use client';

// src/components/DesignProcess/Prototype.jsx
import React, { useState, useEffect } from 'react';

const Prototype = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentWireframe, setCurrentWireframe] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const wireframeSlides = [
    {
      id: 1,
      image: "/images/new/10.Low wireframe.jpg",
      title: "Low-Fidelity Wireframes",
      alt: "Low-Fidelity Wireframes",
      layout: "text-left",
      description: "This image displays early sketches of screen layouts and navigation flows. These hand-drawn wireframes helped validate feature placement before digital prototyping."
    },
    {
      id: 2,
      image: "/images/prototype/16-screenshot.png",
      title: "Wireframes and Mockups",
      alt: "Wireframes and Mockups",
      layout: "text-left",
      description: "After establishing the design system, I created wireframes to map out the structure and information hierarchy of key screens. These wireframes were then developed into higher-fidelity mockups that incorporated the visual design elements.",
      designDecisions: [
        "Prioritized content to highlight key features",
        "Simplified navigation to improve user flow",
        "Ensured adequate whitespace for readability",
        "Applied visual hierarchy to guide user attention"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentWireframe((prev) => (prev === wireframeSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [wireframeSlides.length]);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-center text-white">Prototype</h3>

      {/* Design Principles */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-4">Design Principles (Yablonski)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg">
              <img
                src="/images/new/6.Design Principles.jpg"
                alt="Design Principles"
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: "/images/new/6.Design Principles.jpg", alt: "Design Principles" })}
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
              Design guidelines inspired by Yablonski were applied to ensure usability, feedback, and simplicity. This informed wireframe structures and feature hierarchy.
            </p>
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Key Design Principles Applied:</h5>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Jakob's Law:</strong> Users expect familiar interaction patterns</li>
                <li><strong>Fitts's Law:</strong> Larger, closer targets are easier to interact with</li>
                <li><strong>Miller's Rule:</strong> Limit information to 7±2 items for cognitive ease</li>
                <li><strong>Law of Proximity:</strong> Related elements are grouped together</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 italic text-sm">
                These principles guided the creation of intuitive interfaces that reduce cognitive load while maximizing usability for student users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Design System */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-4">Design System</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg">
              <img
                src="/images/prototype/16.1Design System.png"
                alt="Design System"
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: "/images/prototype/16.1Design System.png", alt: "Design System" })}
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
              To ensure consistency and scalability of the design, I developed a comprehensive design system with standardized components, typography, colors, and spacing. This system served as the foundation for creating wireframes and the final prototype.
            </p>
            <div className="mt-6">
              <h5 className="font-semibold mb-3">System Components:</h5>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Color Palette:</strong> Accessible colors balancing brand identity with usability</li>
                <li><strong>Typography:</strong> Hierarchical type system for readability across devices</li>
                <li><strong>UI Components:</strong> Reusable buttons, forms, and interactive elements</li>
                <li><strong>Spacing & Grid:</strong> Consistent layout structure and white space</li>
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-gray-600 italic text-sm">
                This systematic approach ensured visual consistency throughout the UniVerse app while maintaining design flexibility for future iterations.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Color Palette</h5>
            <p className="text-gray-700">
              A carefully selected color palette that balances brand identity with usability
              and accessibility considerations.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Typography</h5>
            <p className="text-gray-700">
              A hierarchical type system ensuring readability and visual organization
              across different screen sizes and contexts.
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Components</h5>
            <p className="text-gray-700">
              Reusable UI components designed for flexibility while maintaining
              visual consistency throughout the interface.
            </p>
          </div>
        </div>
      </div>

      {/* Wireframes Carousel */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-6 text-left">{wireframeSlides[currentWireframe].title}</h4>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="transition-all duration-1200 ease-in-out">
            <p className="text-gray-700 mb-4 text-left transition-all duration-1200 ease-in-out">
              {wireframeSlides[currentWireframe].description}
            </p>
            {wireframeSlides[currentWireframe].designDecisions && (
              <div className="mt-4">
                <h5 className="font-semibold mb-2">Design Decisions:</h5>
                <ul className="list-disc pl-6 text-gray-700">
                  {wireframeSlides[currentWireframe].designDecisions.map((decision, index) => (
                    <li key={index}>{decision}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative group transition-all duration-1200 ease-in-out">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
              <img
                src={wireframeSlides[currentWireframe].image}
                alt={wireframeSlides[currentWireframe].alt}
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: wireframeSlides[currentWireframe].image, alt: wireframeSlides[currentWireframe].alt })}
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
          {wireframeSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentWireframe(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentWireframe ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Prototype */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-xl font-semibold mb-4">Interactive Prototype</h4>
        <p className="text-gray-700 mb-6">
          The final step in the prototyping phase was creating an interactive prototype
          that simulated the actual user experience. This clickable prototype allowed for
          realistic user testing and validation of the design concepts.
        </p>

        <div className="mb-6">
          <h5 className="font-semibold mb-2">Prototype Features:</h5>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Interactive elements with appropriate feedback states</li>
            <li>Connected user flows for key tasks</li>
            <li>Responsive design for multiple device sizes</li>
            <li>Realistic content and data</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h5 className="font-semibold mb-2 text-blue-700">Prototype Tool: Figma</h5>
          <p className="text-gray-700">
            I used Figma to create both the design system and interactive prototype,
            leveraging its powerful prototyping features to create a realistic simulation
            of the final product.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-2">From Concept to Reality</h5>
          <p className="text-gray-700">
            The prototyping phase transformed abstract ideas from the ideation phase into
            tangible, testable designs. This allowed stakeholders to visualize the proposed
            solution and provided a solid foundation for user testing in the next phase.
          </p>
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

export default Prototype;