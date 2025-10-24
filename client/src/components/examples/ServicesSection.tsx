import ServicesSection from "../ServicesSection";

export default function ServicesSectionExample() {
  const services = [
    {
      id: "share-market",
      title: "Share Market Investments",
      description: "Strategic equity investment planning with comprehensive market analysis.",
      icon: "TrendingUp",
      features: [
        "Personalized stock recommendations",
        "Market trend analysis",
        "Portfolio diversification",
      ],
    },
    {
      id: "mutual-funds",
      title: "Mutual Funds",
      description: "Carefully curated mutual fund portfolios tailored to your goals.",
      icon: "PieChart",
      features: ["SIP planning", "Fund selection guidance", "Goal-based investing"],
    },
    {
      id: "bonds",
      title: "Bond Investments",
      description: "Secure fixed-income investment options for stable returns.",
      icon: "Shield",
      features: ["Government securities", "Corporate bonds", "Fixed deposits"],
    },
  ];

  return <ServicesSection services={services} />;
}
