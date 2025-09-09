import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">Yapee</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Nền tảng mua sắm trực tuyến hàng đầu Việt Nam với hàng triệu sản phẩm chính hãng.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Về chúng tôi</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Hỗ trợ khách hàng</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">Danh mục</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Điện thoại</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Laptop</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Tai nghe</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Phụ kiện</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-card-foreground mb-4">Liên hệ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">1900 1234</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                <span className="text-muted-foreground">support@yapee.vn</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-muted-foreground mr-2 mt-0.5" />
                <span className="text-muted-foreground">123 Nguyễn Huệ, Q1, TP.HCM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Yapee. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};