import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const IWDCard = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff3d71', '#00d1c1', '#ff9f1c', '#ffd700']
      });
      if (onOpen) onOpen();
    }
    setIsOpen(!isOpen);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[500px] w-full px-4 overflow-visible">
      <div
        className={`envelope-container ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
      >
        {/* 1. Back Layer */}
        <div className="envelope-back shadow-xl"></div>

        {/* 2. Letter Layer */}
        <div className="letter-card">
          <h2 className="letter-title">Happy International</h2>
          <h3 className="letter-subtitle">Women's Day</h3>
          <div className="w-1/4 h-0.5 bg-primary/30 my-2 rounded-full"></div>
          <p className="letter-text">
            "To the person who makes every day brighter. You are a force of nature."
          </p>

          <div className="absolute top-2 right-2 text-primary opacity-50 w-[8cqw]">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* 3. Flap Layer */}
        <div className="envelope-flap shadow-md"></div>

        {/* 4. Front Pocket Layer */}
        <div className="envelope-front">
          <div className="envelope-front-base"></div>
          <div className="envelope-front-side-l"></div>
          <div className="envelope-front-side-r"></div>
          <div className="envelope-front-bottom shadow-sm"></div>

          {/* Stamp */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-30">
            <div className="bg-white p-1 shadow-md border-2 border-dashed border-red-200 rotate-12 w-[10cqw]">
              <svg viewBox="0 0 24 24" fill="#ff3d71">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 5. Bow decoration (Topmost) */}
        <div className="bow-container">
          <svg viewBox="0 0 120 80">
            <path d="M60 40 C30 10 10 10 10 40 C10 70 30 70 60 40 Z" fill="#ff3d71" />
            <path d="M60 40 C90 10 110 10 110 40 C110 70 90 70 60 40 Z" fill="#ff3d71" />
            <circle cx="60" cy="40" r="10" fill="#e63566" />
            <path d="M60 40 L40 80 L55 75 L60 40 Z" fill="#ff3d71" />
            <path d="M60 40 L80 80 L65 75 L60 40 Z" fill="#ff3d71" />
          </svg>
        </div>

        {/* Rose decoration (Lowest, behind everything) */}
        <div className="absolute top-[-15%] left-2 z-0 opacity-70 w-[15cqw] pointer-events-none">
          <svg viewBox="0 0 100 150">
            <path d="M50 80 C20 40 20 0 50 20 C80 0 80 40 50 80 Z" fill="#ff3d71" />
            <path d="M50 80 C80 120 20 120 50 80" stroke="#2d5a27" strokeWidth="4" fill="none" />
            <path d="M50 80 L50 150" stroke="#2d5a27" strokeWidth="4" />
            <path d="M50 110 C30 100 20 120 50 110 Z" fill="#2d5a27" />
          </svg>
        </div>
      </div>

      <p className="mt-8 font-sans uppercase tracking-[0.3em] text-[10px] md:text-sm text-slate-400 font-bold animate-pulse">
        {isOpen ? 'Click to Close' : 'Click to Open'}
      </p>
    </section>
  );
};

export default IWDCard;
