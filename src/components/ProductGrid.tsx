import { ProductCard } from "./ProductCard";
import productPhone from "@/assets/product-phone.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";

const products = [
  {
    id: "1",
    name: "iPhone 15 Pro Max 256GB - Chính hãng VN/A",
    price: 29990000,
    originalPrice: 34990000,
    image: productPhone,
    rating: 5,
    reviewCount: 1250,
    discount: 14,
  },
  {
    id: "2",
    name: "MacBook Air M2 13 inch 2023 8GB/256GB - Chính hãng Apple",
    price: 25990000,
    originalPrice: 28990000,
    image: productLaptop,
    rating: 5,
    reviewCount: 890,
    discount: 10,
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    price: 7990000,
    originalPrice: 9990000,
    image: productHeadphones,
    rating: 4,
    reviewCount: 2340,
    discount: 20,
  },
  {
    id: "4",
    name: "Samsung Galaxy S24 Ultra 512GB - Chính hãng",
    price: 31990000,
    originalPrice: 35990000,
    image: productPhone,
    rating: 5,
    reviewCount: 1567,
    discount: 11,
  },
  {
    id: "5",
    name: "Dell XPS 13 Plus Core i7 Gen 12 16GB/512GB",
    price: 45990000,
    originalPrice: 52990000,
    image: productLaptop,
    rating: 4,
    reviewCount: 445,
    discount: 13,
  },
  {
    id: "6",
    name: "AirPods Pro 2nd Generation với MagSafe Case",
    price: 5990000,
    originalPrice: 6990000,
    image: productHeadphones,
    rating: 5,
    reviewCount: 3421,
    discount: 14,
  },
];

export const ProductGrid = () => {
  return (
    <section className="mx-4 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">Sản phẩm nổi bật</h3>
        <a href="#" className="text-primary hover:text-primary-hover text-sm font-medium">
          Xem tất cả →
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};