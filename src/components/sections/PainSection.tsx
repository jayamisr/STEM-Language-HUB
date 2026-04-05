import { Smartphone, VolumeX, TrendingDown } from "lucide-react";

const pains = [
  {
    icon: Smartphone,
    title: "The Screen Trap",
    description:
      "Your child spends 4+ hours daily consuming content that builds nothing — no skills, no confidence, no future. Every hour scrolling is an hour a competitor's child is building.",
  },
  {
    icon: VolumeX,
    title: "The Silent Struggle",
    description:
      "They know the answer but won't raise their hand. They have ideas but can't express them. In boardrooms of tomorrow, silence is not modesty — it's invisibility.",
  },
  {
    icon: TrendingDown,
    title: "The Mediocrity Risk",
    description:
      "Average grades. Average skills. Average opportunities. The world doesn't reward 'good enough' anymore. By the time you notice, the gap is already too wide to close.",
  },
];

const PainSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light to-background" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">The Uncomfortable Truth</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Is Your Child Falling Behind{" "}
            <span className="text-gradient-gold">While You Watch?</span>
          </h2>
          <p className="text-cream-muted max-w-xl mx-auto">
            In Agra's elite circles, the gap between a leader and a follower is decided before age 12.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="group p-8 rounded-lg border border-gold/10 bg-card/50 backdrop-blur-sm hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pain.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{pain.title}</h3>
              <p className="text-cream-muted text-sm leading-relaxed">{pain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
