'use client';

// src/components/TechnologyUsed.jsx
import React from 'react';

const TechnologyUsed = () => {
  const technologies = [
    {
      name: "Figma",
      description: "Used for creating wireframes, prototypes, and final UI designs",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
      name: "Miro",
      description: "Collaborative platform for mind mapping, affinity diagrams, and journey mapping",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/miro/miro-original.svg"
    },
    {
      name: "Trello",
      description: "Project management and task organization throughout the design process",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
    },
    {
      name: "Adobe Creative Suite",
      description: "Image editing, graphics creation, and visual asset development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
    },
    {
      name: "Adobe XD",
      description: "UI/UX design and interactive prototyping for user experience design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
    },
    {
      name: "Adobe Illustrator",
      description: "Vector graphics creation and visual asset development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
    }
  ];
  
  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Technology Used</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-start">
              <div className="mr-4 flex-shrink-0">
                <img 
                  src={tech.icon} 
                  alt={`${tech.name} icon`} 
                  className="w-12 h-12"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200?text=" + tech.name;
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-700">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyUsed;