import { Clock, Users, Star } from "lucide-react";

const ScarcitySection = () => {
  return (
    <section id="seats" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">Enrolment Window</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Only <span className="text-gradient-gold">15 Seats</span> Per Batch.{" "}
            <br className="hidden md:block" />
            No Exceptions.
          </h2>
          <p className="text-cream-muted max-w-xl mx-auto mb-12 leading-relaxed">
            We deliberately limit each batch to ensure every child receives deep, 
            personalised attention. This is not a classroom — it is a mentorship.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-lg border border-gold/15 bg-card/40">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-bold text-lg mb-1">Limited Window</h4>
              <p className="text-cream-muted text-sm">Enrolment closes once seats fill. No waitlist, no second chances.</p>
            </div>
            <div className="p-6 rounded-lg border border-gold/15 bg-card/40">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-bold text-lg mb-1">15 Per Batch</h4>
              <p className="text-cream-muted text-sm">Each child is known by name, not by number. That requires exclusivity.</p>
            </div>
            <div className="p-6 rounded-lg border border-gold/15 bg-card/40">
              <Star className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-heading font-bold text-lg mb-1">By Consultation Only</h4>
              <p className="text-cream-muted text-sm">We assess fit before acceptance. Not every applicant is admitted.</p>
            </div>
          </div>

          <div className="p-8 rounded-lg border border-gold/20 bg-secondary/30 glow-gold">
            <p className="font-heading text-xl md:text-2xl font-bold mb-2">
              <span className="text-primary">7 of 15</span> seats already spoken for.
            </p>
            <p className="text-cream-muted text-sm">
              Agra's most discerning families have already secured their child's place. Will you?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScarcitySection;
