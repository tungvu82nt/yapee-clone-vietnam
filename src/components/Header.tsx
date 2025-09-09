import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="bg-card shadow-header border-b">
      <div className="container mx-auto px-4 py-3">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-6">
            <h1 className="text-2xl font-bold text-primary">Yapee</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Trang chủ</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Danh mục</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Khuyến mãi</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              Tài khoản
            </Button>
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Search bar */}
        <div className="relative max-w-2xl mx-auto">
          <Input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="pl-4 pr-12 py-3 w-full text-base"
          />
          <Button 
            size="sm" 
            className="absolute right-1 top-1 bottom-1 px-6 bg-primary hover:bg-primary-hover"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};