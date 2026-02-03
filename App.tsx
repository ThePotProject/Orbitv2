import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Marathon from './components/Marathon';
import ThePot from './components/ThePot';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import GalaxyBackground from './components/GalaxyBackground';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-orbit-green selection:text-orbit-black overflow-hidden bg-[#050505] cursor-auto md:cursor-none">
      {/* Custom Cursor - Hidden on mobile */}
      <CustomCursor />

      {/* Dynamic Background */}
      <GalaxyBackground />

      {/* Background Noise Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      {/* Navigation switched to Header to fix build resolution error */}
      <Header />
      
      <main className="relative z-20 flex flex-col gap-0">
        <Hero />
        <HowItWorks />
        <Marathon />
        <ThePot />
        <Roadmap />
      </main>
      
      <Footer />
    </div>
  );
}