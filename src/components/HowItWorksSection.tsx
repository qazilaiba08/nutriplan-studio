const steps = [
  {
    number: "01",
    title: "Set Your Preferences",
    description: "Tell us about your dietary needs, cooking skill level, and time constraints. We'll personalize everything for you.",
  },
  {
    number: "02", 
    title: "Plan Your Week",
    description: "Use our intuitive calendar to schedule meals. Our AI suggests recipes based on your preferences and what's in season.",
  },
  {
    number: "03",
    title: "Generate Grocery List",
    description: "With one tap, create an organized shopping list grouped by aisle. Share it with family or export to your favorite store app.",
  },
  {
    number: "04",
    title: "Cook & Enjoy",
    description: "Follow step-by-step recipes with smart timers. Log your meals to track nutrition and build your personal food history.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            From Plan to Plate in{" "}
            <span className="text-gradient">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started is easy. NutriPlan guides you through every step of your meal planning journey.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />

            {/* Step Items */}
            <div className="space-y-8 lg:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative flex gap-6 lg:gap-10 items-start group"
                >
                  {/* Number Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-all duration-300">
                      <span className="text-xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
