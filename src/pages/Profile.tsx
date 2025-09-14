import { useState } from "react";
import { User, Package, Heart, Settings, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Mock user data
const mockUser = {
  name: "Nguyễn Văn A",
  email: "nguyenvana@email.com",
  phone: "0123456789",
  avatar: "/placeholder.svg",
  joinDate: "2024-01-15"
};

// Mock orders data
const mockOrders = [
  {
    id: "YP2024001",
    date: "2024-01-20",
    status: "delivered",
    total: 29990000,
    items: 2
  },
  {
    id: "YP2024002", 
    date: "2024-01-18",
    status: "shipping",
    total: 15990000,
    items: 1
  }
];

const statusLabels = {
  pending: { label: "Chờ xác nhận", variant: "secondary" as const },
  confirmed: { label: "Đã xác nhận", variant: "default" as const },
  shipping: { label: "Đang giao", variant: "default" as const },
  delivered: { label: "Đã giao", variant: "default" as const },
  cancelled: { label: "Đã hủy", variant: "destructive" as const }
};

export default function Profile() {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { 
      style: 'currency', 
      currency: 'VND' 
    }).format(price);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('vi-VN');
  };

  const handleSave = () => {
    // Save user data - would connect to backend
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <h2 className="font-semibold text-lg">{user.name}</h2>
                <p className="text-sm text-muted-foreground">{user.email}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Thành viên từ {formatDate(user.joinDate)}
                </p>
              </div>

              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  <User className="h-4 w-4 mr-3" />
                  Thông tin cá nhân
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="h-4 w-4 mr-3" />
                  Đơn hàng của tôi
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-3" />
                  Danh sách yêu thích
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-3" />
                  Sổ địa chỉ
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-3" />
                  Thẻ thanh toán
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-3" />
                  Cài đặt
                </Button>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Thông tin</TabsTrigger>
                <TabsTrigger value="orders">Đơn hàng</TabsTrigger>
                <TabsTrigger value="wishlist">Yêu thích</TabsTrigger>
                <TabsTrigger value="addresses">Địa chỉ</TabsTrigger>
              </TabsList>

              {/* Profile Information */}
              <TabsContent value="profile">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Thông tin cá nhân</h2>
                    <Button 
                      variant={isEditing ? "default" : "outline"}
                      onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    >
                      {isEditing ? "Lưu" : "Chỉnh sửa"}
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên</Label>
                      <Input
                        id="name"
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại</Label>
                      <Input
                        id="phone"
                        value={user.phone}
                        onChange={(e) => setUser({...user, phone: e.target.value})}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Ngày tham gia</Label>
                      <Input value={formatDate(user.joinDate)} disabled />
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Orders */}
              <TabsContent value="orders">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Đơn hàng của tôi</h2>
                  
                  {mockOrders.length === 0 ? (
                    <div className="text-center py-8">
                      <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Bạn chưa có đơn hàng nào</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <Card key={order.id} className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">Đơn hàng #{order.id}</h3>
                              <p className="text-sm text-muted-foreground">
                                {formatDate(order.date)} • {order.items} sản phẩm
                              </p>
                              <p className="font-semibold text-primary mt-1">
                                {formatPrice(order.total)}
                              </p>
                            </div>
                            <div className="text-right">
                              <Badge variant={statusLabels[order.status as keyof typeof statusLabels].variant}>
                                {statusLabels[order.status as keyof typeof statusLabels].label}
                              </Badge>
                              <div className="mt-2">
                                <Button variant="outline" size="sm">
                                  Xem chi tiết
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  )}
                </Card>
              </TabsContent>

              {/* Wishlist */}
              <TabsContent value="wishlist">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Danh sách yêu thích</h2>
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Danh sách yêu thích trống</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Thêm sản phẩm yêu thích để dễ dàng mua sắm sau
                    </p>
                  </div>
                </Card>
              </TabsContent>

              {/* Addresses */}
              <TabsContent value="addresses">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Sổ địa chỉ</h2>
                    <Button>Thêm địa chỉ mới</Button>
                  </div>
                  <div className="text-center py-8">
                    <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Chưa có địa chỉ nào</p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}