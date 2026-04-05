import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="STEM background with circuits and space" className="w-full h-full object-cover" width={1920} height={1080} />
        
        {/* ADDED COSMIC GLOW TOUCH HERE */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center max-w-4xl">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-secondary/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
            Agra's Most Exclusive Programme · Ages 2–12
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
          Don't Just Raise a Student.{" "}
          <span className="text-gradient-gold">Raise a Visionary.</span>
        </h1>

        {/* Sub-headline */}
        <p className="animate-fade-up-delay text-lg md:text-xl text-cream-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Where <strong className="text-foreground">Space Science, Circuits & Mathematical Thinking</strong> meet{" "}
          <strong className="text-foreground">Stage Presence, Persuasion & Leadership</strong> — giving your child the one competitive edge no school provides.
        </p>

        {/* CTA */}
        <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
          href="https://wa.me/918595199947?text=I%20want%20to%20secure%20a%20spot%20for%20the%20July%201st%20STEMCOMM%20Batch%20at%20the%20Lab%20🚀"
          target="_blank"
          className="px-10 py-4 bg-gradient-gold text-primary-foreground font-bold rounded uppercase tracking-widest text-center animate-pulse-gold"
  >
          Request a Private Consultation
          </a>
          

          {/* PDF Download Button */}
<a 
  href="/curriculum.pdf" 
  download="STEM-Language-HUB-Curriculum.pdf"
  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-gold/50 text-gold font-bold text-sm rounded uppercase tracking-widest hover:bg-gold/10 transition-all duration-300"
>
  {/* Download Icon (SVG) */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="40" 
    height="50" 
    viewBox="0 0 20 20" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="group-hover:translate-y-1 transition-transform duration-300"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
  
  Download Brochure (PDF)
  
  {/* Subtle Glow Effect */}
  <div className="absolute inset-0 bg-gold/5 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
</a>
        </div>

        <button
            onClick={() => scrollTo("curriculum")}
            className="px-10 py-4 border border-gold/30 text-primary font-semibold text-base rounded uppercase tracking-widest hover:bg-primary/5 transition-all"
          >
            View the Curriculum
          </button>

        {/* Trust line */}
        <p className="mt-12 text-xs text-muted-foreground uppercase tracking-[0.2em]">
          Backed by 10 Years of Learning & Development · Masters in Psychology
        </p>
      </div>
    </section>
  );
};

export default HeroSection;