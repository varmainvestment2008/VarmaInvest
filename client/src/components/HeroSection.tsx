import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Award } from "lucide-react";
import heroImage from "@assets/generated_images/Investment_firm_hero_background_f5940126.png";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
  established: string;
  phone: string;
}

export default function HeroSection({
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
  established,
  phone,
}: HeroSectionProps) {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${phone}`, "_blank");
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Investment Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="flex justify-center mb-6">
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm bg-primary/10 border-primary/20 backdrop-blur-sm"
            data-testid="badge-established"
          >
            <Award className="h-4 w-4 mr-2" />
            Trusted Since {established}
          </Badge>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
          {headline}
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={handleWhatsApp}
            data-testid="button-hero-primary"
            className="text-lg px-8 hover-elevate active-elevate-2"
          >
            {ctaPrimary}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToServices}
            data-testid="button-hero-secondary"
            className="text-lg px-8 bg-background/50 backdrop-blur-sm hover-elevate active-elevate-2"
          >
            {ctaSecondary}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-sm">Expert Market Analysis</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm">Secure & Confidential</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Award className="h-5 w-5 text-primary" />
            <span className="text-sm">Personalized Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
