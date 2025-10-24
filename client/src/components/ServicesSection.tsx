import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, PieChart, Shield, CheckCircle2 } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServicesSectionProps {
  services: Service[];
}

const iconMap: Record<string, any> = {
  TrendingUp: TrendingUp,
  PieChart: PieChart,
  Shield: Shield,
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Investment Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive investment solutions tailored to your financial goals and risk appetite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || TrendingUp;
            return (
              <Card
                key={service.id}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-service-${service.id}`}
              >
                <CardHeader className="space-y-0 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
