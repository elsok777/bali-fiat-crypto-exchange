import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EmailModal from "@/components/EmailModal";

const Index = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onContactClick={() => setIsEmailModalOpen(true)} />
      <main>
        <HeroSection onContactClick={() => setIsEmailModalOpen(true)} />
        <div id="services">
          <ServicesSection onContactClick={() => setIsEmailModalOpen(true)} />
        </div>
        <div id="contact">
          <ContactSection onContactClick={() => setIsEmailModalOpen(true)} />
        </div>
      </main>
      <Footer />
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
