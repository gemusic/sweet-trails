import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "2348000000000";
const WHATSAPP_MESSAGE = "Hello Sweet Trails! I'd like to place an order.";

interface WhatsAppButtonProps {
  className?: string;
  message?: string;
}

export const WhatsAppButton = ({ 
  className,
  message = WHATSAPP_MESSAGE 
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className={cn("fixed bottom-4 right-4 xs:bottom-6 xs:right-6 z-50", className)}>
      {/* Outer pulse ring */}
      <div className="absolute inset-0 -m-3 xs:-m-4 rounded-full border-2 border-[#25D366]/30 animate-ping" />
      
      {/* Middle ring */}
      <div className="absolute inset-0 -m-2 rounded-full border border-[#25D366]/20 animate-pulse" />

      {/* Glassmorphism tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 glass-premium rounded-lg px-3 xs:px-4 py-2 opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block pointer-events-none group-hover:pointer-events-auto">
        <span className="font-heading text-xs xs:text-sm text-foreground font-medium">
          Chat with us! 💬
        </span>
      </div>

      {/* Main Button - Neo Brutal style */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative group block",
          "w-12 h-12 xs:w-14 xs:h-14 md:w-16 md:h-16 rounded-full",
          "bg-[#25D366] hover:bg-[#20BD5A]",
          "flex items-center justify-center",
          "border-3 border-charcoal",
          "shadow-[4px_4px_0_hsl(var(--charcoal))]",
          "hover:shadow-[2px_2px_0_hsl(var(--charcoal))]",
          "hover:translate-x-[2px] hover:translate-y-[2px]",
          "transition-all duration-200 ease-out"
        )}
        aria-label="Order via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 text-white fill-white group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
