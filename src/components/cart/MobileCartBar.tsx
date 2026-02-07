import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronUp } from "lucide-react";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

export function MobileCartBar() {
  const { totalItems, totalPrice, openCart } = useCart();

  if (totalItems === 0) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden",
        "bg-secondary/95 backdrop-blur-xl border-t-2 border-primary",
        "transform transition-transform duration-300",
        "shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <Button
          onClick={openCart}
          className="w-full bg-primary hover:bg-primary/90 gap-3 py-6 font-heading font-bold text-base relative overflow-hidden group"
        >
          {/* Shimmer effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          <div className="flex items-center gap-3 relative z-10">
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-honey text-charcoal text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </div>
            <span>View Cart</span>
          </div>
          
          <div className="flex items-center gap-2 ml-auto relative z-10">
            <span className="font-display text-lg">{formatPrice(totalPrice)}</span>
            <ChevronUp className="w-4 h-4" />
          </div>
        </Button>
      </div>
    </div>
  );
}

export default MobileCartBar;
