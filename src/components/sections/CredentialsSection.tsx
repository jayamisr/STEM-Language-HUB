import { Award, BookOpen, Users, Shield } from "lucide-react";
import stemPattern from "@/assets/stem-pattern.jpg";

const credentials = [
  { icon: Award, label: "10+ Years", desc: "In Learning & Development across corporate and educational sectors" },
  { icon: BookOpen, label: "Masters in Psychology", desc: "Specialising in Counselling & Child Developmental Frameworks" },
  { icon: Users, label: "500+ Professionals", desc: "Trained across India in communication, leadership & performance" },
  { icon: Shield, label: "Scientific Methodology", desc: "Every module is backed by cognitive psychology and behavioural science" },
];

const CredentialsSection = () => {
  return (
    <section id="credentials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={stemPattern} alt="" loading="lazy" width={1920} height={600} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/90" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">Your Child's Architect</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Not a Teacher.{" "}
            <span className="text-gradient-gold">An Architect of the Young Mind.</span>
          </h2>
          <p className="text-cream-muted max-w-2xl mx-auto leading-relaxed">
            This isn't a tuition centre run by a graduate student. This is a laboratory of human potential, 
            designed by a professional with a decade of experience in shaping minds — 
            and a Master's in understanding how they work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {credentials.map((cred, i) => (
            <div key={i} className="text-center p-6 rounded-lg border border-gold/10 bg-card/30 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <cred.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-bold text-primary mb-1">{cred.label}</h4>
              <p className="text-cream-muted text-sm">{cred.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
