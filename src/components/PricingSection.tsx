import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Perfect for individuals starting their meal planning journey",
    features: [
      "Manual meal planning",
      "Up to 5 saved recipes",
      "Basic grocery list",
      "Single device",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$4.99",
    period: "/mo",
    description: "For power users who want AI-powered meal optimization",
    features: [
      "AI Recipe Import",
      "Unlimited recipes",
      "Macro & nutrition analytics",
      "Fridge Scanner AI",
      "Cross-device sync",
      "Priority support",
    ],
    cta: "Start 7-Day Trial",
    popular: true,
  },
  {
    name: "Family",
    price: "$39.99",
    period: "/yr",
    description: "Designed for households with shared meal planning needs",
    features: [
      "Everything in Pro",
      "Up to 6 family members",
      "Shared grocery lists",
      "Kid-friendly meal tags",
      "Allergy management",
      "Family analytics dashboard",
    ],
    cta: "Start Family Plan",
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            Plans That Fit{" "}
            <span className="text-gradient">Your Lifestyle</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start free and upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl transition-all duration-500 ${
                plan.popular
                  ? "bg-foreground text-background scale-[1.02] shadow-2xl shadow-foreground/20"
                  : "card-gradient border border-border hover:border-primary/30 hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-background" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-5xl font-extrabold ${plan.popular ? "text-background" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.popular ? "text-background/60" : "text-muted-foreground"}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={plan.popular ? "text-background/70" : "text-muted-foreground"}>
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-primary" : "bg-primary/20"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className={plan.popular ? "text-background/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
