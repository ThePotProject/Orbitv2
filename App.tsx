import React from 'react';
import OrbitNav from './components/OrbitNav';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Marathon from './components/Marathon';
import ThePot from './components/ThePot';
import Footer from './components/Footer';
import GalaxyBackground from './components/GalaxyBackground';

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans selection:bg-orbit-green selection:text-orbit-black overflow-hidden bg-[#070A10]">
      <GalaxyBackground />

      <OrbitNav />

      <main className="relative z-20 flex flex-col">
        <Hero />
        <HowItWorks />
        <Marathon />
        <ThePot />
      </main>

      <Footer />
    </div>
  );
}
