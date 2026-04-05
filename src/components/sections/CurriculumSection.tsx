import { Rocket, Cpu, Brain, Mic, Megaphone, Presentation } from "lucide-react";
import childLeader from "@/assets/child-leader.jpg";

const stemModules = [
  { icon: Rocket, title: "Space & Planetary Science", desc: "Your 6-year-old will explain Planetary Bio-signatures. Not from a textbook — from their own telescope observations and lab models." },
  { icon: Cpu, title: "Circuits & Electronics", desc: "They won't just use devices — they'll understand how they work. From building basic circuits to programming simple robots." },
  { icon: Brain, title: "Mathematical Thinking & Patterns", desc: "Beyond rote math. Pattern recognition, logical reasoning, and problem-solving that IIT aspirants wish they'd started at age 8." },
];

const commModules = [
  { icon: Mic, title: "Theatre & Stage Craft", desc: "The child who can hold a room at 10 will command a boardroom at 30. Voice modulation, body language, and fearless expression." },
  { icon: Megaphone, title: "Marketing & Persuasion", desc: "They'll learn to sell an idea in 60 seconds. Branding, storytelling, and the art of influence — skills MBAs pay lakhs to learn." },
  { icon: Presentation, title: "The 5-Minute Speech", desc: "Every child graduates with a polished 5-minute presentation. Imagine your 8-year-old presenting like a TED speaker to a live audience." },
];

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">The Elite Curriculum</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Two Pillars of{" "}
            <span className="text-gradient-gold">Future-Proof Excellence</span>
          </h2>
          <p className="text-cream-muted max-w-xl mx-auto">
            Designed for children who are destined to lead, not follow.
          </p>
        </div>

        {/* STEM Pillar */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
            <h3 className="font-heading text-xl md:text-2xl font-bold text-primary uppercase tracking-widest">
              Pillar I — Practical Intelligence
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stemModules.map((mod, i) => (
              <div key={i} className="p-6 rounded-lg border border-gold/10 bg-card/30 hover:border-gold/25 transition-all group">
                <mod.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading text-lg font-semibold mb-2">{mod.title}</h4>
                <p className="text-cream-muted text-sm leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Pillar */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
            <h3 className="font-heading text-xl md:text-2xl font-bold text-primary uppercase tracking-widest">
              Pillar II — Leadership Presence
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {commModules.map((mod, i) => (
              <div key={i} className="p-6 rounded-lg border border-gold/10 bg-card/30 hover:border-gold/25 transition-all group">
                <mod.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-heading text-lg font-semibold mb-2">{mod.title}</h4>
                <p className="text-cream-muted text-sm leading-relaxed">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image showcase */}
        <div className="max-w-md mx-auto rounded-lg overflow-hidden border border-gold/20 shadow-gold">
          <img src={childLeader} alt="Young future leader in lab coat" loading="lazy" width={800} height={1024} className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};


export default CurriculumSection;
