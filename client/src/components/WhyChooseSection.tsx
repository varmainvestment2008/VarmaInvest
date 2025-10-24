import { Card, CardContent } from "@/components/ui/card";
import consultationImage from "@assets/generated_images/Financial_consultation_meeting_scene_f1e6ff2d.png";

interface WhyChooseItem {
  title: string;
  description: string;
}

interface WhyChooseSectionProps {
  items: WhyChooseItem[];
}

export default function WhyChooseSection({ items }: WhyChooseSectionProps) {
  return (
    <section id="why-choose" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Varma Investments?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of working with trusted financial advisors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={consultationImage}
              alt="Financial Consultation"
              className="rounded-lg shadow-lg w-full"
              data-testid="img-consultation"
            />
          </div>

          {/* Features */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((item, idx) => (
              <Card
                key={idx}
                className="hover-elevate transition-all"
                data-testid={`card-why-choose-${idx}`}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
