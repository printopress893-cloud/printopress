import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ContactSection from "@/components/sections/ContactSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { LanguageProvider } from "@/lib/i18n";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <ProductsSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </LanguageProvider>
  );
}
