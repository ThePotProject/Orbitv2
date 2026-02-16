import React from 'react';

const GalaxyBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#070A10]">
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(126,235,255,0.22),rgba(126,235,255,0))] blur-2xl" />
      <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(126,235,255,0.14),rgba(126,235,255,0))] blur-2xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,9,15,0.75),rgba(6,9,15,0.95))]" />
    </div>
  );
};

export default GalaxyBackground;
