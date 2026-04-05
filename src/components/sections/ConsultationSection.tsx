import { useState } from "react";
import { ArrowRight } from "lucide-react";

const ConsultationSection = () => {
  const [formData, setFormData] = useState({ 
    parentName: "", 
    childAge: "", 
    phone: "", 
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // The WhatsApp Number and Formatting logic
    const phoneNumber = "918595199947";
    
    // Constructing the encoded message with the form data
    const text = encodeURIComponent(
      `Hello Future Leader’s Lab! 🚀\n\n` +
      `I would like to book a private consultation. Here are my details:\n\n` +
      `*Parent Name:* ${formData.parentName}\n` +
      `*Child's Age:* ${formData.childAge}\n` +
      `*Phone/WhatsApp:* ${formData.phone}\n` +
      `*What matters most:* ${formData.message}\n\n` +
      `Please guide me on the next steps for the July 1st STEMCOMM Batch.`
    );

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    // Mark as submitted and open WhatsApp in a new tab
    setSubmitted(true);
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="consultation" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-light via-background to-background" />
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 font-medium">Take the First Step</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Request a{" "}
              <span className="text-gradient-gold">Private Consultation</span>
            </h2>
            <p className="text-cream-muted leading-relaxed">
              This is not a sales call. It's a confidential conversation about your child's unique potential 
              and how this programme can unlock it. Speak directly with the programme architect.
            </p>
          </div>

          {submitted ? (
            <div className="text-center p-12 rounded-lg border border-gold/20 bg-card/50 glow-gold animate-fade-up">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Consultation Requested</h3>
              <p className="text-cream-muted">
                Your details have been captured. If WhatsApp didn't open automatically, please ensure pop-ups are allowed.
                Welcome to the beginning of something extraordinary.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-lg border border-gold/15 bg-card/30 backdrop-blur-sm">
              <div>
                <label className="block text-sm text-cream-muted mb-2 uppercase tracking-wider">Parent's Name</label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-gold/10 rounded text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-cream-muted mb-2 uppercase tracking-wider">Child's Age</label>
                  <input
                    type="text"
                    required
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary/50 border border-gold/10 rounded text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="e.g. 6 years"
                  />
                </div>
                <div>
                  <label className="block text-sm text-cream-muted mb-2 uppercase tracking-wider">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary/50 border border-gold/10 rounded text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-cream-muted mb-2 uppercase tracking-wider">What matters most for your child?</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary/50 border border-gold/10 rounded text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="e.g. Confidence, STEM skills, stage presence..."
                />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center px-12 py-5 bg-gradient-gold text-primary-foreground font-black text-lg rounded-sm uppercase tracking-[0.2em] hover:shadow-gold transition-all duration-500 animate-pulse-gold w-full md:w-auto"
              >
                Book Your Consultation Now
              </button>

              <p className="text-center text-xs text-muted-foreground">
                100% confidential · No obligation · Limited availability
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;