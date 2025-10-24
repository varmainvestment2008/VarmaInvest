import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Investment Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to building and managing your wealth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.step} className="relative">
              <Card
                className="hover-elevate transition-all h-full"
                data-testid={`card-process-${step.step}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg">
                      {step.step}
                    </div>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block h-5 w-5 text-muted-foreground absolute -right-3 top-8 z-10" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
