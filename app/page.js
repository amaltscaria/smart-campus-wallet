import Header from '../src/components/Header';
import MockupCarousel from '../src/components/MockupCarousel';
import ProjectIntro from '../src/components/ProjectIntro';
import ProblemSpace from '../src/components/ProblemSpace';
import ProjectAim from '../src/components/ProjectAim';
import ProcessOverview from '../src/components/ProcessOverview';
import TechnologyUsed from '../src/components/TechnologyUsed';
import DesignProcess from '../src/components/DesignProcess/Index';
import References from '../src/components/References';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <>
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
    </>
  );
}
