import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-foreground" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary mb-8 glow animate-pulse-glow">
            <Leaf className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-background mb-6">
            Start Your Journey to{" "}
            <span className="text-primary">Healthier Eating</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-background/70 mb-10 max-w-2xl mx-auto">
            Join thousands of users who've transformed their relationship with food. 
            Free to start, no credit card required.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl" className="group">
              Get Started Free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-background/20 text-background hover:bg-background/10 hover:border-background/40"
            >
              Talk to Sales
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-background/50 text-sm">
            <span>✓ No credit card needed</span>
            <span>✓ Free forever plan</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
