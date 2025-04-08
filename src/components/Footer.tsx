
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">TechConsult</h3>
            <p className="text-blue-100 mb-4">
              Solusi digital terpercaya untuk bisnis Anda. Kami membantu perusahaan bertransformasi melalui teknologi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Halaman</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/layanan" className="text-blue-100 hover:text-white transition-colors">Layanan</Link></li>
              <li><Link to="/portofolio" className="text-blue-100 hover:text-white transition-colors">Portofolio</Link></li>
              <li><Link to="/tentang-kami" className="text-blue-100 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/kontak" className="text-blue-100 hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><Link to="/layanan/website" className="text-blue-100 hover:text-white transition-colors">Pembuatan Website</Link></li>
              <li><Link to="/layanan/aplikasi" className="text-blue-100 hover:text-white transition-colors">Pengembangan Aplikasi</Link></li>
              <li><Link to="/layanan/konsultasi" className="text-blue-100 hover:text-white transition-colors">Konsultasi IT</Link></li>
              <li><Link to="/layanan/seo" className="text-blue-100 hover:text-white transition-colors">Optimasi SEO</Link></li>
              <li><Link to="/layanan/ui-ux" className="text-blue-100 hover:text-white transition-colors">Desain UI/UX</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Jl. Sudirman No. 123, Jakarta Pusat, 10220</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>info@techconsult.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            &copy; {currentYear} TechConsult. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
