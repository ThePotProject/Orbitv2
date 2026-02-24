import { MotionConfig } from 'framer-motion';
import OrbitNav from './components/OrbitNav';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="never">
      <div className="min-h-screen overflow-x-hidden bg-[#F5F2FE] text-[#271F3D] selection:bg-[#3B3259] selection:text-[#F5F2FE]">
        <OrbitNav />

        <main className="relative z-10">
          <Hero />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
