import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Save 4 hours/week on meal planning
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
              <span className="text-foreground">Meal Planning</span>
              <br />
              <span className="text-gradient">Made Effortless</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              End decision fatigue forever. NutriPlan combines smart meal scheduling, 
              automated grocery lists, and personalized recipes in one beautiful app.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="group">
                Start Planning Free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/60 to-primary border-2 border-background"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">10,000+ Active Users</p>
                <p className="text-sm text-muted-foreground">Reducing food waste by 30%</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 rounded-3xl" />
              <img
                src={heroImage}
                alt="Fresh healthy food ingredients arranged beautifully"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute top-8 -left-4 lg:-left-8 glass rounded-2xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🥗</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Weekly Plan Ready</p>
                    <p className="text-xs text-muted-foreground">21 meals scheduled</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -right-4 lg:-right-8 glass rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Grocery List</p>
                    <p className="text-xs text-muted-foreground">Auto-generated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
