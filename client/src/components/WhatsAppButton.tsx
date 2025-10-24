import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phone: string;
}

export default function WhatsAppButton({ phone }: WhatsAppButtonProps) {
  const handleClick = () => {
    window.open(`https://wa.me/91${phone}`, "_blank");
  };

  return (
    <Button
      size="lg"
      onClick={handleClick}
      data-testid="button-whatsapp-float"
      className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 p-0 shadow-lg hover:shadow-xl hover-elevate active-elevate-2"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
