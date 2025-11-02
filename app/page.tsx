import Hero from "./components/Hero";
import CustomerPainPoints from "./components/CustomerPainPoints";
import Features from "./components/Features";
import ProductSolutions from "./components/ProductSolutions";
import Specs from "./components/Specs";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <CustomerPainPoints />
      <Features />
      <ProductSolutions />
      <Specs />
      <TestimonialsSection />
      <FAQSection />
      <Cta />
      <Footer />
    </main>
  );
}
