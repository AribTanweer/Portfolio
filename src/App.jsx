import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AmbientBackground from './components/AmbientBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <AmbientBackground />
      <div className="fixed inset-0 pointer-events-none z-50 bg-grain mix-blend-overlay"></div>
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-32 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col w-full flex-1 max-w-[1200px]">
              <CustomCursor />
              <Header />
              <Hero />
              <About />
              <TechStack />
              <Skills />
              <Projects />
              <Profiles />
              <Contact />
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
