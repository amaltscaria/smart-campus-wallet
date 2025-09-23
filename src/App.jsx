// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MockupCarousel from './components/MockupCarousel';
import ProjectIntro from './components/ProjectIntro';
import ProblemSpace from './components/ProblemSpace';
import ProjectAim from './components/ProjectAim';
import ProcessOverview from './components/ProcessOverview';
import TechnologyUsed from './components/TechnologyUsed';
import DesignProcess from './components/DesignProcess/Index';
import References from './components/References';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MockupCarousel />
      <main>
        <ProjectIntro />
        <ProblemSpace />
        <ProjectAim />
        <ProcessOverview />
        <TechnologyUsed />
        <DesignProcess />
        <References />
      </main>
      <Footer />
    </div>
  );
}

export default App;