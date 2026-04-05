import Navbar from "@/components/sections/Navbar";
import HeroSection from "../components/sections/HeroSection";
import PainSection from "../components/sections/PainSection";
import CurriculumSection from "../components/sections/CurriculumSection";
import CredentialsSection from "../components/sections/CredentialsSection";
import ScarcitySection from "../components/sections/ScarcitySection";
import ConsultationSection from "../components/sections/ConsultationSection";
import Footer from "../components/sections/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden selection:bg-gold/30">
      {/* GLOBAL COSMIC BACKGROUNDS */}
      {/* ✅ FIXED: Using Backticks and Double Backslashes to avoid the ')' error */}
<div className="fixed inset-0 z-0 pointer-events-none">
  
  {/* E = mc^2 */}
  <div className="absolute top-20 left-[10%] text-gold/10 font-mono text-4xl animate-float">
    {`$E = mc^2$`}
  </div>

  {/* Summation - The likely cause of the ')' expected error */}
  <div className="absolute top-60 right-[15%] text-gold/5 font-mono text-6xl animate-orbit">
    {`$\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$`}
  </div>

  {/* Gravity - F = G (m1m2/r2) */}
  <div className="absolute bottom-40 left-[20%] text-gold/10 font-mono text-3xl animate-float">
    {`$F = G \\frac{m_1 m_2}{r^2}$`}
  </div>

</div>

      {/*MAIN CONTENT*/}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        
        {/* Add a "Scientific Essence" separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        
        <PainSection />
        <CurriculumSection />
        
        {/* Constellation visual divider */}
        <div className="flex justify-center py-10 opacity-30">
          <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <div className="w-20 h-px bg-gold mt-1 mx-2" />
          <div className="h-2 w-2 rounded-full bg-gold" />
        </div>

        <CredentialsSection />
        <ScarcitySection />
        <ConsultationSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;