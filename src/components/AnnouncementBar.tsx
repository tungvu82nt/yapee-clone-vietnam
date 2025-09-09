import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

export const AnnouncementBar = () => {
  const features = [
    {
      icon: Truck,
      title: "Miễn phí vận chuyển",
      subtitle: "Đơn hàng từ 150k"
    },
    {
      icon: Shield,
      title: "Bảo hành chính hãng",
      subtitle: "Tất cả sản phẩm"
    },
    {
      icon: RotateCcw,
      title: "Đổi trả 30 ngày",
      subtitle: "Không hỏi lý do"
    },
    {
      icon: Headphones,
      title: "Hỗ trợ 24/7",
      subtitle: "Tư vấn miễn phí"
    }
  ];

  return (
    <div className="bg-accent py-4 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center space-x-3">
                <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-accent-foreground">{feature.title}</p>
                  <p className="text-xs text-muted-foreground">{feature.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};