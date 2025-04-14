
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useNavigate } from "react-router-dom";

const searchCategories = [
  {
    category: "Layanan",
    items: [
      { id: "website", name: "Pembuatan Website", path: "/layanan/website" },
      { id: "aplikasi", name: "Pengembangan Aplikasi", path: "/layanan/aplikasi" },
      { id: "konsultasi", name: "Konsultasi IT", path: "/layanan/konsultasi" },
      { id: "seo", name: "Optimasi SEO", path: "/layanan/seo" },
      { id: "ui-ux", name: "Desain UI/UX", path: "/layanan/ui-ux" },
    ],
  },
  {
    category: "Portofolio",
    items: [
      { id: "ecommerce", name: "E-Commerce Platform", path: "/portofolio#ecommerce" },
      { id: "dashboard", name: "Admin Dashboard", path: "/portofolio#dashboard" },
      { id: "mobile", name: "Mobile App", path: "/portofolio#mobile" },
    ],
  },
  {
    category: "Karir",
    items: [
      { id: "developer", name: "Web Developer", path: "/karir/developer" },
      { id: "designer", name: "UI/UX Designer", path: "/karir/designer" },
      { id: "pm", name: "Project Manager", path: "/karir/pm" },
    ],
  },
];

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Filter search results based on query
  const filteredCategories = query
    ? searchCategories.map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        ),
      })).filter((category) => category.items.length > 0)
    : searchCategories;

  const handleSelect = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <Button 
        variant="outline" 
        className="relative w-full h-10 rounded-md lg:w-64 flex justify-start"
        onClick={() => setOpen(true)}
      >
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        <span className="ml-8 text-gray-500 text-sm">Cari layanan, portofolio...</span>
      </Button>
      
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Cari di TechConsult..." 
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>Tidak ditemukan hasil untuk "{query}"</CommandEmpty>
          
          {filteredCategories.map((category) => (
            <CommandGroup key={category.category} heading={category.category}>
              {category.items.map((item) => (
                <CommandItem 
                  key={item.id} 
                  onSelect={() => handleSelect(item.path)}
                >
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
