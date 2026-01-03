import { Leaf } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Updates"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Help Center", "Community", "Guides", "API"],
  Legal: ["Privacy", "Terms", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">NutriPlan</span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Smart meal planning for busy people. Save time, eat better, reduce waste.
            </p>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 NutriPlan. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with 💚 for healthier eating
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
