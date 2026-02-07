import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface CartButtonProps {
  isScrolled?: boolean;
  className?: string;
}

export function CartButton({ isScrolled = false, className }: CartButtonProps) {
  const { toggleCart, totalItems } = useCart();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "relative h-10 w-10 transition-colors",
        isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10",
        className
      )}
      onClick={toggleCart}
    >
      <ShoppingBag className="w-5 h-5" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Button>
  );
}

export default CartButton;
