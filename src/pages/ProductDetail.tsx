import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, Share2, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Mock product data
const mockProduct = {
  id: "1",
  name: "iPhone 15 Pro Max 256GB - Chính hãng VN/A",
  price: 32990000,
  originalPrice: 34990000,
  discount: 6,
  rating: 4.8,
  reviewCount: 2847,
  images: [
    "/src/assets/product-phone.jpg",
    "/src/assets/product-phone.jpg",
    "/src/assets/product-phone.jpg",
    "/src/assets/product-phone.jpg"
  ],
  description: "iPhone 15 Pro Max với chip A17 Pro mạnh mẽ, camera telephoto 5x và khung titan siêu bền. Thiết kế sang trọng, hiệu năng đỉnh cao.",
  specifications: {
    "Màn hình": "6.7 inch, Super Retina XDR OLED",
    "Chip": "Apple A17 Pro",
    "RAM": "8GB",
    "Bộ nhớ": "256GB",
    "Camera sau": "48MP + 12MP + 12MP",
    "Camera trước": "12MP TrueDepth",
    "Pin": "4422mAh, sạc nhanh 27W"
  },
  inStock: true,
  soldCount: 1250
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { 
      style: 'currency', 
      currency: 'VND' 
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Trang chủ</Link>
          <span>/</span>
          <Link to="/" className="hover:text-primary">Điện thoại</Link>
          <span>/</span>
          <span className="text-foreground">iPhone 15 Pro Max</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-card rounded-lg overflow-hidden">
              <img 
                src={mockProduct.images[selectedImage]} 
                alt={mockProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {mockProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                    selectedImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                {mockProduct.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < mockProduct.rating ? 'text-rating fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({mockProduct.reviewCount} đánh giá)
                  </span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span className="text-sm text-muted-foreground">
                  Đã bán {mockProduct.soldCount}
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-price">
                  {formatPrice(mockProduct.price)}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(mockProduct.originalPrice)}
                </span>
                <Badge variant="secondary" className="text-sm">
                  -{mockProduct.discount}%
                </Badge>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Số lượng:</span>
                <div className="flex items-center border border-input rounded">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-8 w-8 p-0"
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="px-3 py-1 text-sm min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Thêm vào giỏ hàng
                </Button>
                <Button variant="outline" size="lg" className="px-4">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="px-4">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              <Button variant="destructive" size="lg" className="w-full">
                Mua ngay
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm">Bảo hành chính hãng 12 tháng</span>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-4 w-4 text-primary" />
                <span className="text-sm">Miễn phí vận chuyển toàn quốc</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-4 w-4 text-primary" />
                <span className="text-sm">Đổi trả trong 30 ngày</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Mô tả sản phẩm</TabsTrigger>
            <TabsTrigger value="specifications">Thông số kỹ thuật</TabsTrigger>
            <TabsTrigger value="reviews">Đánh giá ({mockProduct.reviewCount})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                {mockProduct.description}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                iPhone 15 Pro Max mang đến trải nghiệm đỉnh cao với thiết kế khung titan cao cấp, 
                màn hình Super Retina XDR 6.7 inch tuyệt đẹp và hệ thống camera Pro tiên tiến. 
                Chip A17 Pro mạnh mẽ nhất từ trước đến nay đảm bảo hiệu năng vượt trội cho mọi tác vụ.
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <div className="grid gap-3">
              {Object.entries(mockProduct.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                  <span className="font-medium text-foreground">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="text-center py-8 text-muted-foreground">
              <p>Tính năng đánh giá sẽ được triển khai sau khi kết nối Supabase</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;