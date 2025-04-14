
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const menuItems = [
  { text: "Beranda", path: "/" },
  { text: "Layanan", path: "/layanan" },
  { text: "Portofolio", path: "/portofolio" },
  { text: "Tentang Kami", path: "/tentang-kami" },
  { text: "Karir", path: "/karir", icon: Briefcase },
  { text: "Kontak", path: "/kontak" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold text-blue-600"
        >
          TechConsult
        </Link>

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <Link to={item.path}>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        location.pathname === item.path
                          ? "text-blue-600 font-medium"
                          : "text-gray-700"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {item.icon && <item.icon size={16} className="text-blue-500" />}
                        {item.text}
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="hidden md:inline-block ml-4">
            <Link to="/login">
              <Button 
                variant="outline" 
                size="sm"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`block py-2 text-sm flex items-center gap-2 ${
                      location.pathname === item.path
                        ? "text-blue-600"
                        : "text-gray-700"
                    }`}
                  >
                    {item.icon && <item.icon size={16} className="text-blue-500" />}
                    {item.text}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link to="/login" className="block">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                  >
                    Login
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
