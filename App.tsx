import OrbitNav from './components/OrbitNav';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 selection:bg-[#0066FF] selection:text-white">
      <OrbitNav />

      <main className="relative z-10">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
