// src/components/References.jsx
import React from 'react';

const References = () => {
  return (
    <section id="references" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">References</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-700 mb-6">The following sources were referenced during this project:</p>
          
          <div className="space-y-4 text-gray-700">
            <h3 className="text-xl font-bold mb-4">Books</h3>
            <ul className="space-y-3">
              <li>Cooper, A., Reimann, R., Cronin, D., & Noessel, C. (2014). <em>About Face: The Essentials of Interaction Design</em>. John Wiley & Sons.</li>
              <li>Krug, S. (2014). <em>Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability</em>. New Riders.</li>
              <li>Norman, D. (2013). <em>The Design of Everyday Things: Revised and Expanded Edition</em>. Basic Books.</li>
              <li>Gothelf, J., & Seiden, J. (2016). <em>Lean UX: Designing Great Products with Agile Teams</em>. O'Reilly Media.</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 mt-8">Articles and Papers</h3>
            <ul className="space-y-3">
              <li>Nielsen, J. (2020). "10 Usability Heuristics for User Interface Design." <em>Nielsen Norman Group</em>. Retrieved from https://www.nngroup.com/articles/ten-usability-heuristics/</li>
              <li>Kaley, A. (2019). "How to Conduct a Usability Test on a Mobile Device." <em>Nielsen Norman Group</em>. Retrieved from https://www.nngroup.com/articles/mobile-usability-testing/</li>
              <li>Laubheimer, P. (2020). "Journey Mapping 101." <em>Nielsen Norman Group</em>. Retrieved from https://www.nngroup.com/articles/journey-mapping-101/</li>
              <li>Pernice, K. (2018). "User Interviews: How, When, and Why to Conduct Them." <em>Nielsen Norman Group</em>. Retrieved from https://www.nngroup.com/articles/user-interviews/</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 mt-8">Web Resources</h3>
            <ul className="space-y-3">
              <li>Interaction Design Foundation. (2021). "What is User Experience (UX) Design?" Retrieved from https://www.interaction-design.org/literature/topics/ux-design</li>
              <li>Adobe XD Ideas. (2021). "Design Thinking: A Process for Creative Problem Solving." Retrieved from https://xd.adobe.com/ideas/process/design-thinking/</li>
              <li>Google Design. (2020). "Material Design Guidelines." Retrieved from https://material.io/design</li>
              <li>InVision. (2020). "Design Systems Handbook." Retrieved from https://www.designbetter.co/design-systems-handbook</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 mt-8">Tools and Software</h3>
            <ul className="space-y-3">
              <li>Figma (2021). Used for wireframing, prototyping, and design system creation.</li>
              <li>Miro (2021). Used for affinity mapping, user journey mapping, and collaborative ideation.</li>
              <li>Trello (2021). Used for project management and task organization.</li>
              <li>Adobe Creative Suite (2021). Used for image editing and graphic design.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;