import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/data/products";

const WHATSAPP_NUMBER = "2348000000000";

export function CartDrawer() {
  const { state, closeCart, removeItem, updateQuantity, totalItems, totalPrice, getWhatsAppMessage, clearCart } = useCart();

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMessage())}`;

  return (
    <Sheet open={state.isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-l-4 border-primary flex flex-col p-0">
        <SheetHeader className="px-6 py-4 border-b bg-secondary text-secondary-foreground">
          <SheetTitle className="font-display text-2xl flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary" />
            Your Cart
            {totalItems > 0 && (
              <span className="ml-auto text-sm font-heading bg-primary text-primary-foreground px-3 py-1 rounded-full">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {state.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Your cart is empty</h3>
            <p className="font-body text-muted-foreground mb-6">
              Start adding delicious items from our menu!
            </p>
            <Button onClick={closeCart} variant="outline">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 px-6 py-4">
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-card rounded-xl border shadow-soft group hover:shadow-medium transition-shadow"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-heading font-semibold text-foreground truncate">
                        {item.name}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">
                        {formatPrice(item.price)} each
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-heading font-bold">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 ml-auto text-destructive hover:bg-destructive/10"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-right">
                      <span className="font-heading font-bold text-primary">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t bg-secondary text-secondary-foreground p-6 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="font-heading text-lg">Total</span>
                <span className="font-display text-3xl font-bold text-honey">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              {/* Order Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  size="lg"
                  className="w-full gap-3 bg-primary hover:bg-primary/90 text-lg py-6 font-heading font-bold relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <MessageCircle className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
                  <span className="relative z-10">ORDER VIA WHATSAPP</span>
                </Button>
              </a>

              {/* Clear Cart */}
              <Button
                variant="ghost"
                className="w-full text-muted-foreground hover:text-destructive"
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
