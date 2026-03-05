import React, { useState } from 'react';
import IWDCard from './components/IWDCard';
import PolaroidBoard from './components/HangingGallery';

// Import local assets
import img1 from './assets/1.jpeg';
import img2 from './assets/2.jpeg';
import img3 from './assets/3.jpeg';
import img4 from './assets/4.jpeg';
import img5 from './assets/5.jpeg';
import img6 from './assets/6.jpeg';
import img7 from './assets/7.jpeg';
import img8 from './assets/8.jpeg';
import img9 from './assets/9.jpeg';
import img10 from './assets/10.jpeg';

function App() {
  const [stage, setStage] = useState('envelope'); // 'envelope' or 'board'

  const handleOpen = () => {
    // Switch to board after 3 seconds
    setTimeout(() => {
      setStage('board');
    }, 3000);
  };

  const photos = [
    { image: img1, tilt: "-2deg" },
    { image: img2, tilt: "3deg" },
    { image: img3, tilt: "-1deg" },
    { image: img4, tilt: "4deg" },
    { image: img5, tilt: "-3deg" },
    { image: img6, tilt: "2deg" },
    { image: img7, tilt: "-2deg" },
    { image: img8, tilt: "1deg" },
    { image: img9, tilt: "-3deg", objectPosition: "center 20%" }, // Adjusting to see face
    { image: img10, tilt: "2deg" }
  ];

  return (
    <div className="bg-cream font-sans text-slate-800 min-h-screen relative overflow-x-hidden flex items-center justify-center p-4">
      {/* Background Texture */}
      <div className="fixed inset-0 pointer-events-none texture-overlay z-0"></div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-[10%] text-gold opacity-20 text-2xl">✦</div>
        <div className="absolute top-40 right-[15%] text-gold opacity-10 text-xl">✦</div>
      </div>

      <main className="relative z-10 w-full max-w-6xl flex justify-center items-center min-h-[80vh]">
        {/* Stage 1: Envelope (Fades out when stage changes) */}
        <div className={`transition-all duration-1000 transform ${stage === 'envelope' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'}`}>
          <IWDCard onOpen={handleOpen} />
        </div>

        {/* Stage 2: Polaroid Board (Fades in when stage changes) */}
        <div className={`w-full transition-all duration-1000 transform ${stage === 'board' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none fixed'}`}>
          {stage === 'board' && <PolaroidBoard months={photos} />}
        </div>
      </main>
    </div>
  );
}

export default App;
