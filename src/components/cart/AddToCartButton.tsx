import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Check, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
  variant?: "default" | "icon" | "full";
  className?: string;
}

export function AddToCartButton({ product, variant = "default", className }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setIsAdded(true);
    toast.success(`${product.name} added to cart!`, {
      description: "View your cart to continue to checkout.",
      duration: 2000,
    });
    setTimeout(() => setIsAdded(false), 1500);
  };

  if (variant === "icon") {
    return (
      <Button
        size="icon"
        className={cn(
          "h-10 w-10 rounded-full transition-all duration-300",
          isAdded ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary/90",
          className
        )}
        onClick={handleAdd}
      >
        {isAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </Button>
    );
  }

  if (variant === "full") {
    return (
      <Button
        size="lg"
        className={cn(
          "w-full gap-2 font-heading font-semibold transition-all duration-300",
          isAdded ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary/90",
          className
        )}
        onClick={handleAdd}
      >
        {isAdded ? (
          <>
            <Check className="w-5 h-5" />
            Added!
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            Add to Cart
          </>
        )}
      </Button>
    );
  }

  return (
    <Button
      className={cn(
        "gap-2 font-heading font-semibold transition-all duration-300",
        isAdded ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary/90",
        className
      )}
      onClick={handleAdd}
    >
      {isAdded ? (
        <>
          <Check className="w-4 h-4" />
          Added!
        </>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </>
      )}
    </Button>
  );
}

export default AddToCartButton;
