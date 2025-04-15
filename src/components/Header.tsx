
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { GlobalSearch } from "./GlobalSearch";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    { text: t('common.home'), path: "/" },
    { text: t('common.services'), path: "/layanan" },
    { text: t('common.portfolio'), path: "/portofolio" },
    { text: t('common.about'), path: "/tentang-kami" },
    { text: t('common.careers'), path: "/karir", icon: Briefcase },
    { text: t('common.contact'), path: "/kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? "bg-background shadow-md py-2 dark:bg-gray-900" 
          : "bg-blue-600 py-4 dark:bg-blue-900"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`text-2xl font-bold ${
            isScrolled 
              ? "text-foreground dark:text-white" 
              : "text-white"
          }`}
        >
          TechConsult
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium text-sm ${
                location.pathname === item.path
                  ? isScrolled 
                    ? "text-primary dark:text-white" 
                    : "text-white font-bold"
                  : isScrolled 
                    ? "text-muted-foreground hover:text-primary dark:text-gray-300" 
                    : "text-white/80 hover:text-white"
              } transition-colors flex items-center gap-1`}
            >
              {item.icon && <item.icon size={16} className={isScrolled ? "text-primary dark:text-white" : "text-white"} />}
              {item.text}
            </Link>
          ))}
          
          <div className="flex items-center gap-2">
            <GlobalSearch />
            <ThemeToggle />
            <Link to="/login">
              <Button 
                variant={isScrolled ? "outline" : "secondary"}
                size="sm"
                className={isScrolled 
                  ? "border-primary text-primary hover:bg-primary/10 dark:border-white dark:text-white" 
                  : "bg-white text-blue-600 hover:bg-blue-50 dark:bg-gray-800 dark:text-white"}
              >
                {t('common.login')}
              </Button>
            </Link>
          </div>
        </div>

        <button
          className={`md:hidden ${isScrolled ? "text-foreground dark:text-white" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? t('header.menu.close') : t('header.menu.open')}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with dark mode support */}
      {isMenuOpen && (
        <div className="md:hidden bg-background dark:bg-gray-900 shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-2 text-sm flex items-center gap-2 ${
                      location.pathname === item.path
                        ? "text-primary dark:text-white"
                        : "text-muted-foreground dark:text-gray-300"
                    }`}
                  >
                    {item.icon && <item.icon size={16} className="text-primary dark:text-white" />}
                    {item.text}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link to="/login" className="block">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary text-primary dark:border-white dark:text-white"
                  >
                    {t('common.login')}
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
