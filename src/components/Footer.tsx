
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    
    if (emailInput && emailInput.value) {
      toast({
        title: "Berhasil Berlangganan",
        description: "Terima kasih telah berlangganan newsletter kami.",
      });
      emailInput.value = '';
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DigitalPro</h3>
            <p className="text-gray-400 mb-4">
              Penyedia solusi digital terkemuka untuk membantu bisnis Anda bertransformasi dan berkembang di era digital.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link>
              </li>
              <li>
                <Link to="/layanan" className="text-gray-400 hover:text-white transition-colors">Layanan</Link>
              </li>
              <li>
                <Link to="/portofolio" className="text-gray-400 hover:text-white transition-colors">Portofolio</Link>
              </li>
              <li>
                <Link to="/tentang-kami" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-400 hover:text-white transition-colors">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Jl. Sudirman No. 123, Jakarta Pusat, 10220
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@digitalproindonesia.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Berlangganan Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Dapatkan informasi terbaru dan tips teknologi langsung di email Anda.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  name="email"
                  placeholder="Alamat email Anda"
                  className="bg-gray-800 border-gray-700 text-white"
                  required
                />
                <Button type="submit" className="ml-2">Kirim</Button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DigitalPro. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-500 hover:text-white text-sm">Syarat & Ketentuan</Link>
              <Link to="#" className="text-gray-500 hover:text-white text-sm">Kebijakan Privasi</Link>
              <Link to="#" className="text-gray-500 hover:text-white text-sm">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
