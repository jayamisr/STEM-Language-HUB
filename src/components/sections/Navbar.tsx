import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-gold/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-gold" />
          <span className="font-heading text-xl text-primary font-bold tracking-wide">
            The Future Leader's Lab
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["curriculum", "credentials", "seats"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-cream-muted hover:text-primary transition-colors uppercase tracking-widest font-medium"
            >
              {id === "seats" ? "Enroll" : id}
            </button>
          ))}
          <a 
          href="https://wa.me/918595199947?text=I%20want%20to%20secure%20a%20spot%20for%20the%20July%201st%20STEMCOMM%20Batch%20at%20the%20Lab%20🚀" 
          target="_blank" 
          className="bg-gradient-gold text-primary-foreground px-6 py-2 rounded font-bold"
          >
          BOOK CONSULTATION
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-gold/10 px-6 py-6 flex flex-col gap-4">
          {["curriculum", "credentials", "seats"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-left text-cream-muted hover:text-primary transition-colors uppercase tracking-widest text-sm"
            >
              {id === "seats" ? "Enrol" : id}
            </button>
          ))}
          <button
            onClick={() => scrollTo("consultation")}
            className="mt-2 px-6 py-3 bg-gradient-gold text-primary-foreground font-semibold text-sm rounded uppercase tracking-widest"
          >
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
