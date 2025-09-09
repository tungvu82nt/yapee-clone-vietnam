import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-hero rounded-lg mx-4 my-6 overflow-hidden">
      <div className="flex items-center justify-between p-8 md:p-12">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Siêu Sale 9.9
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-md">
            Giảm giá tới 50% cho tất cả sản phẩm. Miễn phí vận chuyển toàn quốc!
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary-hover text-secondary-foreground font-semibold"
          >
            Mua ngay
          </Button>
        </div>
        <div className="flex-1 hidden md:block">
          <img 
            src={heroBanner} 
            alt="Shopping promotion banner" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};