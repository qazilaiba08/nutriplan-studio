import { Calendar, ShoppingCart, BookOpen, Scan, TrendingUp, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Meal Scheduling",
    description: "Build comprehensive weekly or monthly meal plans with our intuitive calendar view. Drag, drop, and customize your entire food journey.",
  },
  {
    icon: ShoppingCart,
    title: "Auto Grocery Lists",
    description: "Turn any meal plan into a smart shopping list instantly. Our AI groups items by store aisle to save you time.",
  },
  {
    icon: BookOpen,
    title: "Recipe Vault",
    description: "Store, edit, and reuse your favorite meals. Build a living library that adapts to your changing tastes and preferences.",
  },
  {
    icon: Scan,
    title: "Fridge Scanner AI",
    description: "Snap a photo of your fridge and let AI suggest recipes using what you already have. Zero waste, maximum creativity.",
  },
  {
    icon: TrendingUp,
    title: "Macro Analytics",
    description: "Track calories, protein, carbs, and fats effortlessly. Get insights into your nutritional patterns over time.",
  },
  {
    icon: Users,
    title: "Family Sync",
    description: "Share meal plans with your household. Everyone stays on the same page with real-time sync across devices.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Eat Better</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From planning to shopping to cooking — NutriPlan streamlines every step of your nutrition journey.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-3xl card-gradient border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
