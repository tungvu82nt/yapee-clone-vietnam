import { Header } from "@/components/Header";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { HeroBanner } from "@/components/HeroBanner";
import { CategoryGrid } from "@/components/CategoryGrid";
import { DealsSection } from "@/components/DealsSection";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AnnouncementBar />
      <main>
        <HeroBanner />
        <CategoryGrid />
        <DealsSection />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
