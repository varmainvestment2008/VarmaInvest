import ProcessSection from "../ProcessSection";

export default function ProcessSectionExample() {
  const steps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free consultation to understand your financial goals",
    },
    {
      step: 2,
      title: "Investment Analysis",
      description: "Comprehensive analysis of investment opportunities",
    },
    {
      step: 3,
      title: "Portfolio Planning",
      description: "Strategic portfolio construction with diversification",
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Regular monitoring and guidance to keep you on track",
    },
  ];

  return <ProcessSection steps={steps} />;
}
