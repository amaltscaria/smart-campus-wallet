// src/components/AuthorBio.jsx
import React, { useState } from "react";

import profile from "../assets/images/aruntscaria.png";

const AuthorBio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg bg-gray-300 flex items-center justify-center relative group">
              {/* Replace with your profile image */}
              <img
                src={profile}
                alt="Arun Tharappel Scaria"
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedImage({ src: profile, alt: "Arun Tharappel Scaria" })}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/300x300?text=Arun";
                }}
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
          <div className="md:w-2/3 md:pl-10">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I am Arun Tharappel Scaria, a UX/UI designer with a passion for
              creating intuitive and engaging digital experiences. With a
              background in Electronics and Communication Engineering (B.Tech),
              I bring a unique perspective to my design approach, combining
              technical knowledge with a deep understanding of user needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              With 5 years of experience in UI/UX design, my design philosophy
              centers on user-centered design principles, with a focus on
              accessibility, inclusivity, and solving complex problems through
              thoughtful design solutions. I believe in the power of
              research-driven design to create meaningful experiences that
              address real user needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Throughout my career, I've worked on a diverse range of projects
              spanning web applications, mobile interfaces, and enterprise
              software. I'm particularly interested in creating seamless
              experiences that bridge the gap between technology and human
              needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Resume
              </a>
              <a
                href="mailto:your.email@example.com"
                className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Contact
              </a>
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

export default AuthorBio;
