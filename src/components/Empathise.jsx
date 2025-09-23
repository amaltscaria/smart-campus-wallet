// src/components/DesignProcess/Empathise.jsx
import React, { useState, useEffect } from 'react';
import interviewTopicsImage from '../../assets/images/research/Set interview topics.jpg';
import participantSummaryImage from '../../assets/images/research/Participant Summary Table1.jpg';
import participantSummary2Image from '../../assets/images/research/Participant Summary Table.jpg';
import interviewInsightsImage from '../../assets/images/research/User﻿ Interview Insights.jpg';
import affinityMapImage from '../../assets/images/research/Interview evaluation - Affinity Map..jpg';
import insightClustersImage from '../../assets/images/new/9.Insight clusters.jpg';
import competitorAnalysisImage from '../../assets/images/new/5. Competitor analysis.jpg';
import participantAdvertImage from '../../assets/images/research/Participants N﻿eeded Advert.jpg';

const Empathise = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentInsightSlide, setCurrentInsightSlide] = useState(0);
  const [currentRecruitmentSlide, setCurrentRecruitmentSlide] = useState(0);
  const [currentParticipantSlide, setCurrentParticipantSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isParticipantTransitioning, setIsParticipantTransitioning] = useState(false);
  const [isInsightTransitioning, setIsInsightTransitioning] = useState(false);

  const insightSlides = [
    {
      id: 1,
      image: affinityMapImage,
      title: "Affinity Mapping",
      alt: "Interview Evaluation Affinity Map",
      description: "Qualitative data from interviews was analysed using affinity mapping, resulting in six core insight categories. The sticky-note wall (see visual) shows how quotes were grouped to uncover emerging patterns.",
      content: (
        <div className="mt-6">
          <h5 className="font-semibold mb-3">Major Insight Clusters</h5>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li><strong>Fragmented Campus Payments</strong> - University payment systems are disconnected and difficult to navigate.</li>
            <li><strong>Subscription Struggles</strong> - Users forget to cancel trials, miss renewal dates, and use multiple unlinked services.</li>
            <li><strong>Budgeting & Expense Awareness</strong> - Manual tracking with spreadsheets or apps leads to errors and mental fatigue.</li>
            <li><strong>Discount Discovery Challenges</strong> - Many students miss deals unless reminded or shown directly by peers.</li>
            <li><strong>Motivation & Rewards</strong> - Referral bonuses, gamification, and offer-based loyalty systems increase engagement.</li>
          </ul>
          <p className="text-gray-700 mt-4">
            These themes directly shaped persona creation, journey mapping, and feature prioritisation in the next stages.
          </p>
        </div>
      )
    },
    {
      id: 2,
      image: insightClustersImage,
      title: "Empathise Phase Summary",
      alt: "Insight Clusters Summary",
      description: "This image summarises core user struggles into five insight themes such as fragmented campus payments and budgeting fatigue. Each cluster highlights user evidence and suggests a concrete design need for the solution.",
      content: null
    }
  ];

  const recruitmentSlides = [
    {
      id: 1,
      image: interviewTopicsImage,
      title: "Interview Planning",
      alt: "Interview Topics and Planning",
      description: "Created a semi-structured guide to explore students' financial habits, discount awareness, and subscription tracking. The interviews balanced consistency with flexibility allowing users to share unplanned insights.",
      content: (
        <div>
          <div className="mb-6">
            <h5 className="font-semibold mb-3">Core Themes</h5>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Spending & budgeting behaviours</li>
              <li>Discount and loyalty scheme usage</li>
              <li>Subscription management</li>
              <li>Pain points in digital wallet adoption</li>
            </ul>
          </div>
          <p className="text-gray-700">
            Questions were grouped under: <strong>Users, Environment, Tasks & Goals, and Resources</strong> to guide focused yet open conversations.
          </p>
        </div>
      )
    },
    {
      id: 2,
      image: participantAdvertImage,
      title: "Participant Recruitment Strategy",
      alt: "Participant Recruitment Advertisement",
      description: "To gather meaningful insights, I recruited university students who actively manage subscriptions, student discounts, and campus payments.",
      content: (
        <div>
          <div className="mb-6">
            <h5 className="font-semibold mb-3">Selection Criteria</h5>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>User Fit:</strong> UK-based undergraduates & international students</li>
              <li><strong>Diversity:</strong> Mix of nationalities, ages, and financial habits</li>
              <li><strong>Usage Range:</strong> From active discount users to unaware students</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3">Outcome</h5>
            <ul className="list-disc pl-6 text-gray-700 space-y-1">
              <li>5 student participants (UK, Ireland, France)</li>
              <li>1 expert interview (University app designer)</li>
              <li>1 pilot interview to refine flow</li>
            </ul>
            <p className="text-gray-700 mt-3">
              These insights shaped the user personas, affinity maps, and idea generation in the next stages.
            </p>
          </div>
        </div>
      )
    }
  ];

  const participantSlides = [
    {
      id: 1,
      image: participantSummaryImage,
      title: "Initial Participant Summary",
      alt: "Participant Summary Table",
      description: "Overview of participant demographics and basic information collected during the recruitment phase."
    },
    {
      id: 2,
      image: participantSummary2Image,
      title: "Detailed Participant Analysis",
      alt: "Detailed Participant Summary Table",
      description: "In-depth analysis of participant behaviors, preferences, and insights gathered during the interview process."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsInsightTransitioning(true);
      setTimeout(() => {
        setCurrentInsightSlide((prev) => (prev === insightSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsInsightTransitioning(false);
        }, 150);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [insightSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentRecruitmentSlide((prev) => (prev === recruitmentSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [recruitmentSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsParticipantTransitioning(true);
      setTimeout(() => {
        setCurrentParticipantSlide((prev) => (prev === participantSlides.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsParticipantTransitioning(false);
        }, 150);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [participantSlides.length]);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-6 text-center">Empathise</h3>
      
      {/* Recruitment & Insights Carousel */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-6 text-left">{recruitmentSlides[currentRecruitmentSlide].title}</h4>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="transition-all duration-1200 ease-in-out flex flex-col justify-center">
            <p className="text-gray-700 mb-4 text-left transition-all duration-1200 ease-in-out">
              {recruitmentSlides[currentRecruitmentSlide].description}
            </p>
            {recruitmentSlides[currentRecruitmentSlide].content && recruitmentSlides[currentRecruitmentSlide].content}
          </div>
          <div className="relative group transition-all duration-1200 ease-in-out">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
              <img
                src={recruitmentSlides[currentRecruitmentSlide].image}
                alt={recruitmentSlides[currentRecruitmentSlide].alt}
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: recruitmentSlides[currentRecruitmentSlide].image, alt: recruitmentSlides[currentRecruitmentSlide].alt })}
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
          {recruitmentSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentRecruitmentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentRecruitmentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Interview Insights */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-4">Interview Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 mb-4">
              Students struggled with scattered payment tools, underused discounts, forgotten subscriptions, and manual budgeting—many preferred simple reminders and loyalty rewards over complex features.
            </p>
            <p className="text-gray-700">
              These key insights revealed critical pain points that directly informed our design decisions and feature prioritization for the UniVerse app, ensuring we addressed the most pressing student needs.
            </p>
          </div>
          <div className="relative group">
            <img
              src={interviewInsightsImage}
              alt="User Interview Insights"
              className="rounded-lg shadow-sm w-full h-auto cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage({ src: interviewInsightsImage, alt: "User Interview Insights" })}
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

      {/* Participant Summary Carousel */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h4 className="text-xl font-semibold mb-6 text-left">{participantSlides[currentParticipantSlide].title}</h4>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isParticipantTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative group transition-all duration-1200 ease-in-out">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
              <img
                src={participantSlides[currentParticipantSlide].image}
                alt={participantSlides[currentParticipantSlide].alt}
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: participantSlides[currentParticipantSlide].image, alt: participantSlides[currentParticipantSlide].alt })}
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
              {participantSlides[currentParticipantSlide].description}
            </p>
            <p className="text-gray-700 text-left">
              Interviews were conducted with a diverse group of participants to capture varied perspectives on student financial behaviours and app usage. The analysis provides crucial insights into user needs and behaviors.
            </p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {participantSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentParticipantSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentParticipantSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Insights & Analysis Carousel */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h4 className="text-xl font-semibold mb-6 text-left">{insightSlides[currentInsightSlide].title}</h4>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1200 ease-in-out ${isInsightTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="relative group transition-all duration-1200 ease-in-out">
            <div className="h-[500px] flex items-center justify-center bg-transparent rounded-lg transition-all duration-1200 ease-in-out">
              <img
                src={insightSlides[currentInsightSlide].image}
                alt={insightSlides[currentInsightSlide].alt}
                className="rounded-lg shadow-sm max-w-full max-h-full object-contain cursor-pointer hover:scale-105 transition-all duration-1200 ease-in-out"
                onClick={() => setSelectedImage({ src: insightSlides[currentInsightSlide].image, alt: insightSlides[currentInsightSlide].alt })}
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
              {insightSlides[currentInsightSlide].description}
            </p>
            {insightSlides[currentInsightSlide].content && insightSlides[currentInsightSlide].content}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {insightSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentInsightSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentInsightSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 mt-8">
        <h4 className="text-xl font-semibold mb-4">Competitor Analysis</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 mb-4">
              This image compares existing platforms like UNiDAYS and Monzo across usability, features, and limitations. It helped identify gaps and differentiation strategies for the UniVerse app.
            </p>
            <p className="text-gray-700">
              By analyzing competitor strengths and weaknesses, we were able to position UniVerse as a comprehensive solution that addresses the specific pain points identified in our user research while leveraging successful patterns from existing platforms.
            </p>
          </div>
          <div className="relative group">
            <img
              src={competitorAnalysisImage}
              alt="Competitor Analysis"
              className="rounded-lg shadow-sm w-full h-auto cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage({ src: competitorAnalysisImage, alt: "Competitor Analysis" })}
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

export default Empathise;
