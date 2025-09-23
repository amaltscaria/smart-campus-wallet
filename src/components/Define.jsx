// src/components/DesignProcess/Define.jsx
import React, { useState, useEffect } from 'react';
import personaImage1 from '../../assets/images/define/Protopersona 1.png';
import personaImage2 from '../../assets/images/define/B.Protopersona 2.png';
import empathyMapImage from '../../assets/images/define/Empathy map 1.png';
import journeyMapImage from '../../assets/images/define/Customer Journey Map .jpg';
import storyboardImage from '../../assets/images/define/Story Board.png';
import povImage from '../../assets/images/new/1.Point of view sattement.jpg';
import userStoryImage from '../../assets/images/new/2.User story.jpg';
import hmwImage from '../../assets/images/new/3.HMW.jpg';
import hmwInsightsImage from '../../assets/images/new/Arun Tharappel Scaria - Frame 4.jpg';

const Define = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPersona, setCurrentPersona] = useState(0);
  const [currentMapSlide, setCurrentMapSlide] = useState(0);
  const [currentPovSlide, setCurrentPovSlide] = useState(0);
  const [currentHmwSlide, setCurrentHmwSlide] = useState(0);
  const [isPersonaTransitioning, setIsPersonaTransitioning] = useState(false);
  const [isMapTransitioning, setIsMapTransitioning] = useState(false);
  const [isPovTransitioning, setIsPovTransitioning] = useState(false);
  const [isHmwTransitioning, setIsHmwTransitioning] = useState(false);

  const personas = [
    {
      id: 1,
      image: personaImage1,
      name: "Stephin Thomas",
      description: "An international student in France who forgets subscription renewals and misses student deals. Needs one app to manage payments, offers, and subscriptions."
    },
    {
      id: 2,
      image: personaImage2,
      name: "Emily Carter",
      description: "A student in London who overspends and misses discounts. Wants simple tools to track spending, manage subscriptions, and get timely reminders."
    }
  ];

  const mapSlides = [
    {
      id: 1,
      image: empathyMapImage,
      title: "Empathy Map",
      alt: "Empathy Map",
      description: "To develop a deeper understanding of user motivations, behaviours, and frustrations, an empathy map was constructed based on patterns identified during semi-structured interviews.",
      additionalText: "This visual tool captured what the user says, thinks, feels, and does, consolidating raw insights into actionable emotional and behavioural drivers.",
      caption: "Empathy Map for Primary Persona – Stephin Thomas"
    },
    {
      id: 2,
      image: journeyMapImage,
      title: "Customer Journey Map",
      alt: "Customer Journey Map",
      description: "A journey map was developed to track user interactions from problem awareness to final solution adoption.",
      content: {
        scenario: [
          "User discovers they've missed a subscription renewal",
          "Searches for student discounts but finds fragmented information",
          "Attempts to manage multiple payment methods across platforms",
          "Experiences frustration with complex payment processes"
        ],
        implications: [
          "Need for unified subscription management",
          "Centralized discount discovery platform",
          "Simplified payment integration",
          "Proactive renewal notifications"
        ],
        conclusion: "The journey revealed critical pain points that directly informed the design of UniVerse's core features."
      }
    }
  ];

  const povSlides = [
    {
      id: 1,
      image: povImage,
      title: "Point of View Statements",
      alt: "Point of View Statements",
      description: "This image translates the affinity insights into two clear Point of View (POV) statements for Stephin and Emily. It sets the foundation for ideation by highlighting their key frustrations and motivations."
    },
    {
      id: 2,
      image: userStoryImage,
      title: "User Stories",
      alt: "User Stories",
      description: "User stories derived from each POV help define the product features from a user's perspective. This image captures goals related to payments, subscriptions, and budget tracking in everyday student life."
    }
  ];

  const hmwSlides = [
    {
      id: 1,
      image: hmwImage,
      title: "HMW + Brainstormed Ideas",
      alt: "HMW and Brainstormed Ideas",
      description: "This image shows the core HMW (How Might We) questions with sticky-note ideation below. It represents divergent thinking used to explore multiple directions for solving the core issues."
    },
    {
      id: 2,
      image: hmwInsightsImage,
      title: "Turning Insights into HMW Questions",
      alt: "Turning Insights into HMW Questions",
      description: "Key HMW questions derived from user insights:",
      questions: [
        "How might we help students discover relevant discounts without overwhelming them?",
        "How might we remind users of upcoming renewals in a non-intrusive way?",
        "How might we simplify campus payment processes for international students?",
        "How might we create a unified platform that students actually want to use daily?"
      ]
    }
  ];

  // Smooth transition effects for all carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPersonaTransitioning(true);
      setTimeout(() => {
        setCurrentPersona((prev) => (prev === personas.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsPersonaTransitioning(false);
        }, 150);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, [personas.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMapTransitioning(true);
      setTimeout(() => {
        setCurrentMapSlide((prev) => (prev === mapSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsMapTransitioning(false);
        }, 150);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, [mapSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPovTransitioning(true);
      setTimeout(() => {
        setCurrentPovSlide((prev) => (prev === povSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsPovTransitioning(false);
        }, 150);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, [povSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHmwTransitioning(true);
      setTimeout(() => {
        setCurrentHmwSlide((prev) => (prev === hmwSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsHmwTransitioning(false);
        }, 150);
      }, 800);
    }, 5000);
    return () => clearInterval(interval);
  }, [hmwSlides.length]);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-center">Define</h3>

      {/* POV & User Stories Carousel */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-6 text-left">{povSlides[currentPovSlide].title}</h4>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isPovTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative group transition-all duration-1200 ease-in-out">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
              <img
                src={povSlides[currentPovSlide].image}
                alt={povSlides[currentPovSlide].alt}
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: povSlides[currentPovSlide].image, alt: povSlides[currentPovSlide].alt })}
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
              {povSlides[currentPovSlide].description}
            </p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {povSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPovSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPovSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* HMW + Brainstormed Ideas */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-6 text-left">HMW + Brainstormed Ideas</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 mb-4 text-left">
              This image shows the core HMW (How Might We) questions with sticky-note ideation below. It represents divergent thinking used to explore multiple directions for solving the core issues.
            </p>
          </div>
          <div className="relative group">
            <img
              src={hmwImage}
              alt="HMW and Brainstormed Ideas"
              className="rounded-lg shadow-sm w-full h-auto cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage({ src: hmwImage, alt: "HMW and Brainstormed Ideas" })}
            />
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
      </div>

      {/* Turning Insights into HMW Questions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-6 text-left">Turning Insights into HMW Questions</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group">
            <img
              src={hmwInsightsImage}
              alt="Turning Insights into HMW Questions"
              className="rounded-lg shadow-sm w-full h-auto cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage({ src: hmwInsightsImage, alt: "Turning Insights into HMW Questions" })}
            />
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
              Key HMW questions derived from user insights:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>"How might we help students discover relevant discounts without overwhelming them?"</li>
              <li>"How might we remind users of upcoming renewals in a non-intrusive way?"</li>
              <li>"How might we simplify campus payment processes for international students?"</li>
              <li>"How might we create a unified platform that students actually want to use daily?"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Persona Development Carousel */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-6 text-left">Persona Development</h4>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isPersonaTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative group transition-all duration-1200 ease-in-out">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
              <img
                src={personas[currentPersona].image}
                alt={`Persona - ${personas[currentPersona].name}`}
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: personas[currentPersona].image, alt: `Persona - ${personas[currentPersona].name}` })}
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
            <h5 className="text-lg font-semibold mb-3">{personas[currentPersona].name}</h5>
            <p className="text-gray-700 mb-4 text-left transition-all duration-1200 ease-in-out">
              {personas[currentPersona].description}
            </p>
            <div className="mt-4">
              <h6 className="font-semibold mb-2">Key Characteristics:</h6>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>International student experience</li>
                <li>Tech-savvy but overwhelmed by options</li>
                <li>Budget-conscious spending habits</li>
                <li>Seeks simplicity and convenience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {personas.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPersona(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentPersona ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* User Research & Mapping Carousel */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-xl font-semibold mb-6 text-left">{mapSlides[currentMapSlide].title}</h4>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isMapTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative group transition-all duration-1200 ease-in-out">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
              <img
                src={mapSlides[currentMapSlide].image}
                alt={mapSlides[currentMapSlide].alt}
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: mapSlides[currentMapSlide].image, alt: mapSlides[currentMapSlide].alt })}
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
          <div className="transition-all duration-1200 ease-in-out">
            <p className="text-gray-700 mb-4 text-left transition-all duration-1200 ease-in-out">
              {mapSlides[currentMapSlide].description}
            </p>
            {mapSlides[currentMapSlide].additionalText && (
              <p className="text-gray-700 mb-4 text-left">
                {mapSlides[currentMapSlide].additionalText}
              </p>
            )}
            {mapSlides[currentMapSlide].caption && (
              <p className="text-sm text-gray-500 italic">
                {mapSlides[currentMapSlide].caption}
              </p>
            )}
            {mapSlides[currentMapSlide].content && (
              <div className="mt-4">
                <div className="mb-4">
                  <h6 className="font-semibold mb-2">User Journey Scenario:</h6>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    {mapSlides[currentMapSlide].content.scenario.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h6 className="font-semibold mb-2">Design Implications:</h6>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    {mapSlides[currentMapSlide].content.implications.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-600 italic text-sm">
                  {mapSlides[currentMapSlide].content.conclusion}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {mapSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMapSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentMapSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
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

export default Define;