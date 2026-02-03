import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

class AttractorParticle {
  x: number = 0;
  y: number = 0;
  size: number = 0;
  speed: number = 0;
  // Removed unused 'angle' property to prevent build linter errors

  constructor(w: number, h: number) {
    this.reset(w, h, true);
  }

  reset(w: number, h: number, initial: boolean = false) {
    const angle = Math.random() * Math.PI * 2;
    // Initial spread logic
    const dist = initial ? Math.random() * (Math.max(w, h) / 2) + 100 : Math.max(w, h) / 2 + Math.random() * 100;
    
    this.x = (w / 2) + Math.cos(angle) * dist;
    this.y = (h / 2) + Math.sin(angle) * dist;
    
    this.size = Math.random() * 2 + 1; 
    this.speed = Math.random() * 2 + 1;
  }

  update(ctx: CanvasRenderingContext2D, w: number, h: number, targetX: number, targetY: number, planetRadius: number) {
    const dx = targetX - this.x;
    const dy = targetY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const vx = (dx / dist) * this.speed;
    const vy = (dy / dist) * this.speed;

    this.x += vx;
    this.y += vy;

    if (dist < planetRadius - 5) {
        this.reset(w, h);
    }

    // Draw Particle
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = '#00FF71'; 
    ctx.fill();
  }
}

const ThePot: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;
    let centerX = width / 2;
    let centerY = height / 2;
    const planetRadius = 80;

    const particles: AttractorParticle[] = [];
    const numParticles = 60; 

    const initParticles = () => {
        particles.length = 0;
        for (let i = 0; i < numParticles; i++) {
            particles.push(new AttractorParticle(width, height));
        }
    };

    const handleResize = () => {
        if (containerRef.current && containerRef.current.clientWidth > 0) {
            width = containerRef.current.clientWidth;
            height = containerRef.current.clientHeight;
        } else {
             width = window.innerWidth;
             height = window.innerHeight;
        }
        
        centerX = width / 2;
        centerY = height / 2;

        const dpr = window.devicePixelRatio || 1;
        // Ensure width/height are never 0 to prevent canvas errors
        canvas.width = (width || window.innerWidth) * dpr;
        canvas.height = (height || window.innerHeight) * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `100%`;
        canvas.style.height = `100%`;
    };

    handleResize();
    initParticles();

    const render = () => {
        ctx.clearRect(0, 0, width, height);
        const time = Date.now() / 1000;

        // 1. Draw Planet (The "Green Circle")
        
        // Inner Gradient Fill (Energy Core)
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, planetRadius);
        gradient.addColorStop(0, 'rgba(0, 255, 113, 0.15)');
        gradient.addColorStop(0.6, 'rgba(0, 255, 113, 0.02)');
        gradient.addColorStop(1, 'rgba(5, 5, 5, 1)');
        
        ctx.beginPath();
        ctx.arc(centerX, centerY, planetRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner Pulsing Ring
        const pulse = Math.sin(time * 2) * 4;
        ctx.beginPath();
        ctx.arc(centerX, centerY, planetRadius * 0.6 + pulse, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 255, 113, 0.1)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner Spinning Elements
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(time * 0.5);
        ctx.beginPath();
        ctx.moveTo(-planetRadius * 0.3, 0);
        ctx.lineTo(planetRadius * 0.3, 0);
        ctx.moveTo(0, -planetRadius * 0.3);
        ctx.lineTo(0, planetRadius * 0.3);
        ctx.strokeStyle = 'rgba(0, 255, 113, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        // Main Border with Glow
        ctx.shadowBlur = 30;
        ctx.shadowColor = 'rgba(0, 255, 113, 0.4)';
        ctx.beginPath();
        ctx.arc(centerX, centerY, planetRadius, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#00FF71'; 
        ctx.stroke();
        ctx.shadowBlur = 0;

        // 2. Draw Particles
        particles.forEach(p => {
            p.update(ctx, width, height, centerX, centerY, planetRadius);
        });

        animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
        id="the-pot" 
        ref={containerRef}
        className="relative min-h-[80vh] py-20 overflow-hidden flex flex-col items-center justify-center"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-[320px] pointer-events-none">
          
          {/* Top: Title */}
          <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-white drop-shadow-md text-center"
          >
              The Pot
          </motion.h2>

          {/* Bottom: Description */}
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-center px-6"
          >
              <p className="text-lg md:text-xl font-light text-gray-300 max-w-md mx-auto leading-relaxed drop-shadow-md">
                  <span className="text-orbit-green font-bold block mb-2">The Robin Hood Protocol.</span>
                  Lazy stakes are redistributed to the disciplined. Zero house fees.
              </p>
          </motion.div>
      </div>

    </section>
  );
};

export default ThePot;