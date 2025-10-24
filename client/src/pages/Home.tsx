import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Content } from "@shared/schema";

export default function Home() {
  // Fetch content from JSON file
  const { data: content, isLoading } = useQuery<Content>({
    queryKey: ["/content.json"],
  });

  if (isLoading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header firmName={content.firmInfo.name} phone={content.firmInfo.phone} />
      
      <main>
        <HeroSection
          headline={content.hero.headline}
          subheadline={content.hero.subheadline}
          ctaPrimary={content.hero.ctaPrimary}
          ctaSecondary={content.hero.ctaSecondary}
          established={content.firmInfo.established}
          phone={content.firmInfo.phone}
        />
        
        <ServicesSection services={content.services} />
        
        <WhyChooseSection items={content.whyChoose} />
        
        <ProcessSection steps={content.process} />
        
        <TestimonialsSection testimonials={content.testimonials} />
        
        <ContactSection
          firmName={content.firmInfo.name}
          phone={content.firmInfo.phone}
          email={content.firmInfo.email}
          address={content.firmInfo.address}
        />
      </main>
      
      <Footer
        firmName={content.firmInfo.name}
        tagline={content.firmInfo.tagline}
        phone={content.firmInfo.phone}
        email={content.firmInfo.email}
        address={content.firmInfo.address}
      />
      
      <WhatsAppButton phone={content.firmInfo.phone} />
    </div>
  );
}
