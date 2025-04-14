
import { useState } from "react";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface NewsletterProps {
  title?: string;
  description?: string;
  buttonText?: string;
  className?: string;
  dark?: boolean;
}

const Newsletter = ({
  title = "Dapatkan Update Terbaru",
  description = "Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang teknologi dan promo.",
  buttonText = "Berlangganan",
  className = "",
  dark = false
}: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulasi API call
    setTimeout(() => {
      toast({
        title: "Berhasil!",
        description: "Terima kasih telah berlangganan newsletter kami.",
      });
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={`py-12 ${dark ? "bg-blue-900 text-white" : "bg-gray-100"} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className={`text-2xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>{title}</h3>
          <p className={`${dark ? "text-blue-100" : "text-gray-600"} mb-6`}>
            {description}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Mendaftar..." : buttonText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
