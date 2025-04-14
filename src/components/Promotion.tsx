
import { useState, useEffect } from "react";
import { BadgePercent, Clock, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface PromotionProps {
  title: string;
  description: string;
  discount: string;
  code: string;
  expiryDate: string;
  className?: string;
}

const Promotion = ({
  title,
  description,
  discount,
  code,
  expiryDate,
  className,
}: PromotionProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(expiryDate).getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setTimeLeft("Berakhir");
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      
      if (days > 0) {
        setTimeLeft(`${days} hari ${hours} jam`);
      } else {
        setTimeLeft(`${hours} jam`);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000 * 60 * 60); // Update setiap jam
    
    return () => clearInterval(timer);
  }, [expiryDate]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Kode promo disalin!",
      description: `Kode ${code} telah disalin ke clipboard Anda.`,
    });
  };

  if (!isVisible) return null;

  return (
    <Card className={`relative border-2 border-blue-500 overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 p-1">
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0 rounded-full"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Tutup</span>
        </Button>
      </div>
      
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
            <BadgePercent className="h-8 w-8 text-blue-600" />
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-gray-600 text-sm mb-2">{description}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>Berakhir dalam: {timeLeft}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 md:items-end w-full md:w-auto">
            <div className="text-2xl font-bold text-blue-600">{discount}</div>
            <div className="flex gap-2 w-full">
              <div className="bg-gray-100 px-3 py-1.5 rounded border border-dashed border-gray-400 font-mono text-sm flex-1 text-center">
                {code}
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="whitespace-nowrap"
                onClick={handleCopyCode}
              >
                Salin
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Promotion;
