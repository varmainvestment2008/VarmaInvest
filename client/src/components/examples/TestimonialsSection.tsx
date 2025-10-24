import TestimonialsSection from "../TestimonialsSection";

export default function TestimonialsSectionExample() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patil",
      location: "Rahata",
      rating: 5,
      text: "Varma Investments helped me build a strong mutual fund portfolio. Their guidance has been invaluable.",
      date: "2024-09",
    },
    {
      id: 2,
      name: "Priya Deshmukh",
      location: "Ahilyanagar",
      rating: 5,
      text: "Excellent service and professional advice. They take time to understand your needs.",
      date: "2024-08",
    },
    {
      id: 3,
      name: "Amit Sharma",
      location: "Rahata",
      rating: 5,
      text: "Very knowledgeable team. Their share market insights helped me grow my wealth significantly.",
      date: "2024-10",
    },
  ];

  return <TestimonialsSection testimonials={testimonials} />;
}
