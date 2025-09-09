import { Clock, Zap } from "lucide-react";
import { ProductCard } from "./ProductCard";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";

const flashDeals = [
  {
    id: "flash1",
    name: "Xiaomi Redmi Note 13 Pro 8GB/128GB - Flash Sale",
    price: 4990000,
    originalPrice: 6990000,
    image: productPhone,
    rating: 4,
    reviewCount: 567,
    discount: 29,
  },
  {
    id: "flash2",
    name: "JBL Tune 760NC Wireless Noise Canceling - Flash Sale",
    price: 1990000,
    originalPrice: 2990000,
    image: productHeadphones,
    rating: 4,
    reviewCount: 234,
    discount: 33,
  },
];

export const DealsSection = () => {
  return (
    <section className="mx-4 my-8">
      <div className="bg-secondary/10 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="bg-secondary p-2 rounded-lg">
              <Zap className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-card-foreground">Flash Sale</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                Kết thúc trong: 02:15:30
              </div>
            </div>
          </div>
          <a href="#" className="text-secondary hover:text-secondary-hover text-sm font-medium">
            Xem tất cả →
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {flashDeals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          <div className="hidden md:flex items-center justify-center bg-card rounded-lg p-6 text-center">
            <div>
              <Zap className="h-12 w-12 text-secondary mx-auto mb-3" />
              <p className="text-sm font-medium text-card-foreground mb-2">Xem thêm</p>
              <p className="text-xs text-muted-foreground">Flash Sale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};