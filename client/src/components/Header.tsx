import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/generated_images/Varma_Investments_professional_logo_a8d65eb4.png";

interface HeaderProps {
  firmName: string;
  phone: string;
}

export default function Header({ firmName, phone }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${phone}`, "_blank");
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImage} alt={firmName} className="h-10 w-10" />
            <span className="text-xl font-semibold text-foreground hidden sm:inline">
              {firmName}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                data-testid={`link-${item.id}`}
                className="hover-elevate"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={handleWhatsApp}
              data-testid="button-header-consultation"
              className="hover-elevate active-elevate-2"
            >
              <Phone className="h-4 w-4 mr-2" />
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  data-testid={`link-mobile-${item.id}`}
                  className="justify-start hover-elevate"
                >
                  {item.label}
                </Button>
              ))}
              <Button
                onClick={handleWhatsApp}
                data-testid="button-mobile-consultation"
                className="mt-2 hover-elevate active-elevate-2"
              >
                <Phone className="h-4 w-4 mr-2" />
                Book Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
