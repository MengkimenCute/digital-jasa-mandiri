import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  const languages = [
    { code: "id", name: t('footer.language.id') },
    { code: "en", name: t('footer.language.en') }
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">TechConsult</h3>
            <p className="text-blue-100 mb-4">
              {t('footer.company_description')}
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
            <h3 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-100 hover:text-white transition-colors">{t('common.home')}</Link></li>
              <li><Link to="/layanan" className="text-blue-100 hover:text-white transition-colors">{t('common.services')}</Link></li>
              <li><Link to="/portofolio" className="text-blue-100 hover:text-white transition-colors">{t('common.portfolio')}</Link></li>
              <li><Link to="/tentang-kami" className="text-blue-100 hover:text-white transition-colors">{t('common.about')}</Link></li>
              <li><Link to="/kontak" className="text-blue-100 hover:text-white transition-colors">{t('common.contact')}</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><Link to="/layanan/website" className="text-blue-100 hover:text-white transition-colors">{t('common.website')}</Link></li>
              <li><Link to="/layanan/aplikasi" className="text-blue-100 hover:text-white transition-colors">{t('common.app')}</Link></li>
              <li><Link to="/layanan/konsultasi" className="text-blue-100 hover:text-white transition-colors">{t('common.consultation')}</Link></li>
              <li><Link to="/layanan/seo" className="text-blue-100 hover:text-white transition-colors">{t('common.seo')}</Link></li>
              <li><Link to="/layanan/ui-ux" className="text-blue-100 hover:text-white transition-colors">{t('common.uiux')}</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
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
        
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 mb-4 md:mb-0">
            {t('footer.copyright', { year: currentYear })}
          </p>
          
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-blue-100 hover:text-white">
                  <Globe size={16} className="mr-2" />
                  {languages.find(lang => lang.code === i18n.language)?.name || languages[0].name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map(lang => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={i18n.language === lang.code ? "bg-blue-50 text-blue-600" : ""}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
