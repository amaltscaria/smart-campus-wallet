// src/components/MockupCarousel.jsx
import React, { useState, useEffect } from 'react';
import mockup1 from '../assets/images/mockup/1.png';
import mockup2 from '../assets/images/mockup/2.png';
import mockup3 from '../assets/images/mockup/3.png';
import mockup4 from '../assets/images/mockup/4.png';
import mockup5 from '../assets/images/mockup/5.png';
import mockup6 from '../assets/images/mockup/6.png';
import mockup7 from '../assets/images/mockup/7.png';
import mockup8 from '../assets/images/mockup/8.png';
import mockup9 from '../assets/images/mockup/9.png';

const MockupCarousel = () => {
  // Repeating the same mockup to demonstrate carousel effect
  const mockups = [
    { id: 1, image: mockup1, alt: "UniVerse App - Welcome", title: "Welcome to UniVerse", subtitle: "Your Smart Campus Wallet" },
    { id: 2, image: mockup2, alt: "UniVerse App - Campus Wallet", title: "Your Campus Wallet", subtitle: "All in One Place" },
    { id: 3, image: mockup3, alt: "UniVerse App - Smart Spending", title: "Smart Spending", subtitle: "Transparent Tracking" },
    { id: 4, image: mockup4, alt: "UniVerse App - Monthly Tracking", title: "Track & Analyse", subtitle: "Take Control of Your Monthly Spending" },
    { id: 5, image: mockup5, alt: "UniVerse App - Student Deals", title: "Exclusive Student Deals", subtitle: "Save more every day" },
    { id: 6, image: mockup6, alt: "UniVerse App - Subscription Management", title: "Never Forget Subscriptions", subtitle: "Track, manage, and stay ahead" },
    { id: 7, image: mockup7, alt: "UniVerse App - Bank Connection", title: "Connect Your Bank", subtitle: "Unlock student-only rewards" },
    { id: 8, image: mockup8, alt: "UniVerse App - Promo Codes", title: "Student Promo Codes", subtitle: "Claim exclusive codes and save instantly" },
    { id: 9, image: mockup9, alt: "UniVerse App - Fund Transfers", title: "Seamless Transfers", subtitle: "Move Funds to Your UniVerse Wallet in Seconds" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (mockups.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === mockups.length - 1 ? 0 : prevIndex + 1
        );
      }, 1500); // Auto-advance every 1.5 seconds

      return () => clearInterval(interval);
    }
  }, [mockups.length]);

  if (mockups.length === 0) return null;

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{mockups[currentIndex]?.title || "UniVerse App"}</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {mockups[currentIndex]?.subtitle || "Experience the future of student financial management"}
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="flex items-center justify-center min-h-[300px] md:min-h-[500px] overflow-visible">

            {mockups.length === 1 ? (
              // Single mockup display
              <div className="relative">
                <div className="bg-white rounded-3xl px-1 py-6 transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={mockups[0].image}
                    alt={mockups[0].alt}
                    className="w-32 md:w-64 h-auto rounded-2xl max-h-[200px] md:max-h-[450px] object-contain"
                  />
                </div>
              </div>
            ) : (
              // Multiple mockups carousel
              <div className="relative w-full flex items-center justify-center overflow-visible">
                {/* Gradient fade overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-30 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-30 pointer-events-none"></div>

                {mockups.map((mockup, index) => {
                  const isActive = index === currentIndex;
                  const isPrev = index === (currentIndex - 1 + mockups.length) % mockups.length;
                  const isNext = index === (currentIndex + 1) % mockups.length;
                  const isVisible = isActive || isPrev || isNext;

                  if (!isVisible) return null;

                  let transform = 'translateX(0px) scale(1)';
                  let opacity = 1;
                  let zIndex = 5;
                  let filter = 'blur(0px)';

                  if (isPrev) {
                    // 1 o'clock position: right and slightly down (previous item goes clockwise)
                    transform = 'translateX(300px) translateY(50px) scale(0.75) rotate(15deg)';
                    opacity = 0.7;
                    zIndex = 2;
                    filter = 'blur(0px)';
                  } else if (isNext) {
                    // 11 o'clock position: left and slightly down (next item comes from left)
                    transform = 'translateX(-300px) translateY(50px) scale(0.75) rotate(-15deg)';
                    opacity = 0.7;
                    zIndex = 2;
                    filter = 'blur(0px)';
                  } else if (isActive) {
                    // 12 o'clock position: center top
                    transform = 'translateX(0px) translateY(-50px) scale(1)';
                    opacity = 1;
                    zIndex = 5;
                    filter = 'blur(0px)';
                  }

                  return (
                    <div
                      key={mockup.id}
                      className="absolute transition-all duration-1000 ease-out"
                      style={{
                        transform: window.innerWidth <= 768 ?
                          (isPrev ? 'translateX(150px) translateY(25px) scale(0.75) rotate(10deg)' :
                           isNext ? 'translateX(-150px) translateY(25px) scale(0.75) rotate(-10deg)' :
                           'translateX(0px) translateY(-25px) scale(1)') : transform,
                        opacity,
                        zIndex,
                        filter,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <img
                        src={mockup.image}
                        alt={mockup.alt}
                        className="w-32 md:w-64 h-auto rounded-2xl max-h-[200px] md:max-h-[450px] object-contain"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Dots Indicator (only show if multiple mockups) */}
          {mockups.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {mockups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-125'
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Wallet</h3>
            <p className="text-gray-600">Unified payment system for all your student needs</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Discounts</h3>
            <p className="text-gray-600">Never miss a student discount or offer again</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Budget Tracking</h3>
            <p className="text-gray-600">Monitor subscriptions and spending in real-time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupCarousel;