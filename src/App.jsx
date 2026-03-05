import React, { useState } from 'react';
import IWDCard from './components/IWDCard';
import PolaroidBoard from './components/HangingGallery';

function App() {
  const [stage, setStage] = useState('envelope'); // 'envelope' or 'board'

  const handleOpen = () => {
    // Switch to board after 3 seconds
    setTimeout(() => {
      setStage('board');
    }, 3000);
  };

  const months = [
    { label: "January", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfZPJ8hzkRkWknbnEfeTbvg9r3MvJKBj3vdoey9WMnB_5y9m7R0jCv8jAB9H6akNRiTkA8agDxxwCIOw18r34LX2qmEDmKklDXolpbgxCltS6_DMeMQJJFklAVvx0sizHZ_T4VUcGGdBM1cuibt1Hb7UfW5nS44y1kDsD1vTvmxvcH-zpQVcGYSRxfowungVmozTEkpLfb043Z_xo2B-vo9EGpU0RZ1XbJuJCIC1Lh3_P6u05SyLPSzjHuwLSlUyJT3dWP21nDq7g", tilt: "-2deg" },
    { label: "February", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjgapC2BDwpEIh21jTqVAz4WEBfDiGCaaqU0p_tK4xGkXnjIRg7IiI0csQeMxFayv-o_-pk0TmwVH30P7yApbj7OC5tKHRebQrYsQqWuEGtJBFmTIK_B3Td9l7qNaecdfcrlhpjfHJ1wRXRrKiBzw4su05FACsqsu9o5Rtm7EOKY64KSXn6NtLqpUIC_VbXyJyw5Tl6f_lscWsT9GHlAkf15S45WhcCOUHDsBakPzFb6m6VALfHn7PPit07GEUQ-687xA-RWmUbMk", tilt: "3deg" },
    { label: "March", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_KsL80N6Uk6du15AbRXGHTEckJ95laPJVyBBqG4yIUERqgSkQyeTe7MYb_k-8sBGKBeOovg7T5hMr6ZnWQPH0rDSQxFpo_QtCJ1O9Ixh4H_KIEYYBi_DuWUXam4LQl8XmWkycrAk1_GfRcfT0PJ_lWtmZCuqeq7g02-FIkDvi6AUtg3zUAlLV-owjydB2kP0gXC01pFmoDy4jUccA7YUFZE2LKfn3iQNRAFZVpkaOhjAdQL2ktjXTsIX6gYiwdX6gcNzizhpEm4o", tilt: "-1deg" },
    { label: "April", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZtlvfVnG_gd6UCVCqnbGeSMS-Lt8fziM1CSN7QPhHG7PXHJphuhaSFPqD0iZhdDRb29KAi1M-rKsWPuk6p-nCQ77CEzhHYcXpK_UW9qCeWroyJ7XGLEUzjxwnx7suSbm0koDboHUomvnz6em_Bq4kCogjHtdPKF4yAX-ULm4OnSLdngxxszSvFp9nAZwI4QbRFZuVch127hdxnAeIUgOLC8-mb8zysR-1dV8aB58h2iscrQSNRw9IoH6TbBy4a5buKprOQxMqmiY", tilt: "4deg" },
    { label: "May", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX_u_iO6W5A_rPjY7xL8qJ5eJ3d6M8y2R0jCv8j-AB9H6_akNRiTkA8agDxxwCIOw1wE9qScmK_R7Tj_lWtmZCuqeq7g02-FIkDvi6AUtg3zUAlLV-owjydB2kP0gXC01pFmoDy4jUccA7YUFZE2LKfn3iQNRAFZVpkaOhjAdQL2ktjXTsIX6gYiwdX6gcNzizhpEm4o", tilt: "-3deg" },
    { label: "June", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZtlvfVnG_gd6UCVCqnbGeSMS-Lt8fziM1CSN7QPhHG7PXHJphuhaSFPqD0iZhdDRb29KAi1M-rKsWPuk6p-nCQ77CEzhHYcXpK_UW9qCeWroyJ7XGLEUzjxwnx7suSbm0koDboHUomvnz6em_Bq4kCogjHtdPKF4yAX-ULm4OnSLdngxxszSvFp9nAZwI4QbRFZuVch127hdxnAeIUgOLC8-mb8zysR-1dV8aB58h2iscrQSNRw9IoH6TbBy4a5buKprOQxMqmiY", tilt: "2deg" },
    { label: "July", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfZPJ8hzkRkWknbnEfeTbvg9r3MvJKBj3vdoey9WMnB_5y9m7R0jCv8jAB9H6akNRiTkA8agDxxwCIOw18r34LX2qmEDmKklDXolpbgxCltS6_DMeMQJJFklAVvx0sizHZ_T4VUcGGdBM1cuibt1Hb7UfW5nS44y1kDsD1vTvmxvcH-zpQVcGYSRxfowungVmozTEkpLfb043Z_xo2B-vo9EGpU0RZ1XbJuJCIC1Lh3_P6u05SyLPSzjHuwLSlUyJT3dWP21nDq7g", tilt: "-1deg" },
    { label: "August", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjgapC2BDwpEIh21jTqVAz4WEBfDiGCaaqU0p_tK4xGkXnjIRg7IiI0csQeMxFayv-o_-pk0TmwVH30P7yApbj7OC5tKHRebQrYsQqWuEGtJBFmTIK_B3Td9l7qNaecdfcrlhpjfHJ1wRXRrKiBzw4su05FACsqsu9o5Rtm7EOKY64KSXn6NtLqpUIC_VbXyJyw5Tl6f_lscWsT9GHlAkf15S45WhcCOUHDsBakPzFb6m6VALfHn7PPit07GEUQ-687xA-RWmUbMk", tilt: "3deg" },
    { label: "September", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_KsL80N6Uk6du15AbRXGHTEckJ95laPJVyBBqG4yIUERqgSkQyeTe7MYb_k-8sBGKBeOovg7T5hMr6ZnWQPH0rDSQxFpo_QtCJ1O9Ixh4H_KIEYYBi_DuWUXam4LQl8XmWkycrAk1_GfRcfT0PJ_lWtmZCuqeq7g02-FIkDvi6AUtg3zUAlLV-owjydB2kP0gXC01pFmoDy4jUccA7YUFZE2LKfn3iQNRAFZVpkaOhjAdQL2ktjXTsIX6gYiwdX6gcNzizhpEm4o", tilt: "-2deg" },
    { label: "October", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZtlvfVnG_gd6UCVCqnbGeSMS-Lt8fziM1CSN7QPhHG7PXHJphuhaSFPqD0iZhdDRb29KAi1M-rKsWPuk6p-nCQ77CEzhHYcXpK_UW9qCeWroyJ7XGLEUzjxwnx7suSbm0koDboHUomvnz6em_Bq4kCogjHtdPKF4yAX-ULm4OnSLdngxxszSvFp9nAZwI4QbRFZuVch127hdxnAeIUgOLC8-mb8zysR-1dV8aB58h2iscrQSNRw9IoH6TbBy4a5buKprOQxMqmiY", tilt: "4deg" },
    { label: "November", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX_u_iO6W5A_rPjY7xL8qJ5eJ3d6M8y2R0jCv8j-AB9H6_akNRiTkA8agDxxwCIOw1wE9qScmK_R7Tj_lWtmZCuqeq7g02-FIkDvi6AUtg3zUAlLV-owjydB2kP0gXC01pFmoDy4jUccA7YUFZE2LKfn3iQNRAFZVpkaOhjAdQL2ktjXTsIX6gYiwdX6gcNzizhpEm4o", tilt: "-1deg" },
    { label: "December", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZtlvfVnG_gd6UCVCqnbGeSMS-Lt8fziM1CSN7QPhHG7PXHJphuhaSFPqD0iZhdDRb29KAi1M-rKsWPuk6p-nCQ77CEzhHYcXpK_UW9qCeWroyJ7XGLEUzjxwnx7suSbm0koDboHUomvnz6em_Bq4kCogjHtdPKF4yAX-ULm4OnSLdngxxszSvFp9nAZwI4QbRFZuVch127hdxnAeIUgOLC8-mb8zysR-1dV8aB58h2iscrQSNRw9IoH6TbBy4a5buKprOQxMqmiY", tilt: "3deg" }
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
          {stage === 'board' && <PolaroidBoard months={months} />}
        </div>
      </main>
    </div>
  );
}

export default App;
