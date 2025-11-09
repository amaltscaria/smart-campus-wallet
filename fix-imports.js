const fs = require('fs');
const path = require('path');

const fixes = [
  // DesignProcess/Testing.jsx
  {
    file: 'src/components/DesignProcess/Testing.jsx',
    replacements: [
      { import: "import guerrillaTestImage from '../../assets/images/test/Arun Tharappel Scaria - Guerrilla Test.jpg';", varName: 'guerrillaTestImage', path: '/images/test/Arun Tharappel Scaria - Guerrilla Test.jpg' },
      { import: "import innovationRoadmapImage from '../../assets/images/other/Arun Tharappel Scaria - Innovation Roadmap-2.jpg';", varName: 'innovationRoadmapImage', path: '/images/other/Arun Tharappel Scaria - Innovation Roadmap-2.jpg' },
      { import: "import swotAnalysisImage from '../../assets/images/other/Arun Tharappel Scaria - SWOT Analysis.jpg';", varName: 'swotAnalysisImage', path: '/images/other/Arun Tharappel Scaria - SWOT Analysis.jpg' },
    ]
  },
  // DesignProcess/Prototype.jsx
  {
    file: 'src/components/DesignProcess/Prototype.jsx',
    replacements: [
      { import: "import designSystemImage from '../../assets/images/prototype/16.1Design System.png';", varName: 'designSystemImage', path: '/images/prototype/16.1Design System.png' },
      { import: "import screenshotImage from '../../assets/images/prototype/16-screenshot.png';", varName: 'screenshotImage', path: '/images/prototype/16-screenshot.png' },
      { import: "import designPrinciplesImage from '../../assets/images/new/6.Design Principles.jpg';", varName: 'designPrinciplesImage', path: '/images/new/6.Design Principles.jpg' },
      { import: "import lowWireframeImage from '../../assets/images/new/10.Low wireframe.jpg';", varName: 'lowWireframeImage', path: '/images/new/10.Low wireframe.jpg' },
    ]
  },
  // DesignProcess/Define.jsx
  {
    file: 'src/components/DesignProcess/Define.jsx',
    replacements: [
      { import: "import personaImage1 from '../../assets/images/define/Protopersona 1.png';", varName: 'personaImage1', path: '/images/define/Protopersona 1.png' },
      { import: "import personaImage2 from '../../assets/images/define/B.Protopersona 2.png';", varName: 'personaImage2', path: '/images/define/B.Protopersona 2.png' },
      { import: "import empathyMapImage from '../../assets/images/define/Empathy map 1.png';", varName: 'empathyMapImage', path: '/images/define/Empathy map 1.png' },
      { import: "import journeyMapImage from '../../assets/images/define/Customer Journey Map .jpg';", varName: 'journeyMapImage', path: '/images/define/Customer Journey Map .jpg' },
      { import: "import storyboardImage from '../../assets/images/define/Story Board.png';", varName: 'storyboardImage', path: '/images/define/Story Board.png' },
      { import: "import povImage from '../../assets/images/new/1.Point of view sattement.jpg';", varName: 'povImage', path: '/images/new/1.Point of view sattement.jpg' },
      { import: "import userStoryImage from '../../assets/images/new/2.User story.jpg';", varName: 'userStoryImage', path: '/images/new/2.User story.jpg' },
      { import: "import hmwImage from '../../assets/images/new/3.HMW.jpg';", varName: 'hmwImage', path: '/images/new/3.HMW.jpg' },
      { import: "import hmwInsightsImage from '../../assets/images/new/Arun Tharappel Scaria - Frame 4.jpg';", varName: 'hmwInsightsImage', path: '/images/new/Arun Tharappel Scaria - Frame 4.jpg' },
    ]
  },
  // DesignProcess/Empathise.jsx
  {
    file: 'src/components/DesignProcess/Empathise.jsx',
    replacements: [
      { import: "import interviewTopicsImage from '../../assets/images/research/Set interview topics.jpg';", varName: 'interviewTopicsImage', path: '/images/research/Set interview topics.jpg' },
      { import: "import participantSummaryImage from '../../assets/images/research/Participant Summary Table1.jpg';", varName: 'participantSummaryImage', path: '/images/research/Participant Summary Table1.jpg' },
      { import: "import participantSummary2Image from '../../assets/images/research/Participant Summary Table.jpg';", varName: 'participantSummary2Image', path: '/images/research/Participant Summary Table.jpg' },
      { import: "import interviewInsightsImage from '../../assets/images/research/User﻿ Interview Insights.jpg';", varName: 'interviewInsightsImage', path: '/images/research/User﻿ Interview Insights.jpg' },
      { import: "import affinityMapImage from '../../assets/images/research/Interview evaluation - Affinity Map..jpg';", varName: 'affinityMapImage', path: '/images/research/Interview evaluation - Affinity Map..jpg' },
      { import: "import insightClustersImage from '../../assets/images/new/9.Insight clusters.jpg';", varName: 'insightClustersImage', path: '/images/new/9.Insight clusters.jpg' },
      { import: "import competitorAnalysisImage from '../../assets/images/new/5. Competitor analysis.jpg';", varName: 'competitorAnalysisImage', path: '/images/new/5. Competitor analysis.jpg' },
      { import: "import participantAdvertImage from '../../assets/images/research/Participants N﻿eeded Advert.jpg';", varName: 'participantAdvertImage', path: '/images/research/Participants N﻿eeded Advert.jpg' },
    ]
  }
];

fixes.forEach(({ file, replacements }) => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');

  replacements.forEach(({ import: importStmt, varName, path: imagePath }) => {
    // Remove import statement
    content = content.replace(importStmt + '\n', '');

    // Replace variable usage with string path
    // Handle {varName} case
    content = content.replace(new RegExp(`\\{${varName}\\}`, 'g'), `"${imagePath}"`);
    // Handle src={varName} case
    content = content.replace(new RegExp(`src=\\{${varName}\\}`, 'g'), `src="${imagePath}"`);
    // Handle varName in object like { src: varName }
    content = content.replace(new RegExp(`src:\\s*${varName}([,}\\s])`, 'g'), `src: "${imagePath}"$1`);
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Fixed: ${file}`);
});

console.log('\nAll imports fixed!');
