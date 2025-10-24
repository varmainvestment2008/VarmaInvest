import WhyChooseSection from "../WhyChooseSection";

export default function WhyChooseSectionExample() {
  const items = [
    {
      title: "16+ Years Experience",
      description: "Serving investors since 2008 with proven track record",
    },
    {
      title: "Personalized Approach",
      description: "Customized investment strategies for your unique goals",
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of regional market dynamics",
    },
    {
      title: "Transparent Advice",
      description: "Clear, honest guidance with no hidden charges",
    },
  ];

  return <WhyChooseSection items={items} />;
}
