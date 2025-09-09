import { Smartphone, Laptop, Headphones, Camera, Gamepad2, Watch } from "lucide-react";

const categories = [
  { name: "Điện thoại", icon: Smartphone, color: "text-primary" },
  { name: "Laptop", icon: Laptop, color: "text-secondary" },
  { name: "Tai nghe", icon: Headphones, color: "text-success" },
  { name: "Camera", icon: Camera, color: "text-destructive" },
  { name: "Gaming", icon: Gamepad2, color: "text-primary" },
  { name: "Đồng hồ", icon: Watch, color: "text-secondary" },
];

export const CategoryGrid = () => {
  return (
    <section className="mx-4 my-6">
      <h3 className="text-xl font-semibold mb-4">Danh mục sản phẩm</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.name}
              className="bg-card rounded-lg p-4 text-center shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer"
            >
              <Icon className={`h-8 w-8 mx-auto mb-2 ${category.color}`} />
              <p className="text-sm font-medium text-card-foreground">{category.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};