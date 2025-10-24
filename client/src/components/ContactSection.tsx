import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

interface Address {
  line1: string;
  line2: string;
  city: string;
  district: string;
  pincode: string;
  mapUrl: string;
}

interface ContactSectionProps {
  firmName: string;
  phone: string;
  email: string;
  address: Address;
}

export default function ContactSection({
  firmName,
  phone,
  email,
  address,
}: ContactSectionProps) {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/91${phone}`, "_blank");
  };

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhone = () => {
    window.location.href = `tel:+91${phone}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your investment journey? Contact us today for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="hover-elevate transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
                    <p className="text-sm text-muted-foreground">
                      {address.line1}
                      <br />
                      {address.line2}
                      <br />
                      {address.city}, Dist- {address.district}, {address.pincode}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <button
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={handlePhone}
                      data-testid="button-call"
                    >
                      +91 {phone}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <button
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={handleEmail}
                      data-testid="button-email"
                    >
                      {email}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground hover-elevate transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-foreground/10 flex-shrink-0">
                    <MessageCircle className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">WhatsApp Consultation</h3>
                    <p className="text-sm mb-3 text-primary-foreground/90">
                      Get instant answers to your investment queries
                    </p>
                    <Button
                      variant="secondary"
                      onClick={handleWhatsApp}
                      data-testid="button-whatsapp-contact"
                      className="hover-elevate active-elevate-2"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="h-[500px] rounded-lg overflow-hidden">
            <iframe
              src={address.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${firmName} Location`}
              data-testid="map-location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
