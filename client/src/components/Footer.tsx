import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/generated_images/Varma_Investments_professional_logo_a8d65eb4.png";

interface FooterProps {
  firmName: string;
  tagline: string;
  phone: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    district: string;
    pincode: string;
  };
}

export default function Footer({
  firmName,
  tagline,
  phone,
  email,
  address,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt={firmName} className="h-10 w-10" />
              <div>
                <h3 className="font-semibold text-foreground">{firmName}</h3>
                <p className="text-xs text-muted-foreground">{tagline}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional investment advisory services for share market, mutual funds, and bonds.
              Trusted by investors since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "Services", id: "services" },
                { label: "Why Choose Us", id: "why-choose" },
                { label: "Testimonials", id: "testimonials" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>
                  {address.line1}, {address.line2}, {address.city}, {address.district} -{" "}
                  {address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href={`tel:+91${phone}`} className="hover:text-primary transition-colors">
                  +91 {phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} {firmName}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Investments are subject to market risks. Please read all scheme-related documents
              carefully before investing.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
