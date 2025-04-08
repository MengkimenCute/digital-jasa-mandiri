
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

// Kategori portofolio
const categories = [
  { id: "all", name: "Semua Proyek" },
  { id: "website", name: "Website" },
  { id: "aplikasi", name: "Aplikasi" },
  { id: "ui-ux", name: "UI/UX" },
  { id: "branding", name: "Branding" }
];

// Data portofolio
const projects = [
  {
    id: 1,
    title: "Website E-commerce",
    category: "website",
    client: "PT Maju Bersama",
    year: "2023",
    description: "Pengembangan website e-commerce dengan fitur lengkap, termasuk sistem pembayaran, manajemen produk, dan analitik bisnis.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    gallery: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ],
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Aplikasi Manajemen Inventori",
    category: "aplikasi",
    client: "CV Teknologi Andalan",
    year: "2023",
    description: "Aplikasi manajemen inventori yang memudahkan pelacakan stok, pemesanan, dan pelaporan data secara real-time.",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ],
    link: "https://example.com"
  },
  {
    id: 3,
    title: "Website Perusahaan",
    category: "website",
    client: "PT Sukses Makmur",
    year: "2022",
    description: "Website perusahaan modern dengan tampilan elegan yang mencerminkan identitas brand klien.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    gallery: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ],
    link: "https://example.com"
  },
  {
    id: 4,
    title: "Redesign UI/UX Aplikasi",
    category: "ui-ux",
    client: "Startup Innovasi",
    year: "2022",
    description: "Redesign antarmuka pengguna untuk meningkatkan pengalaman dan meningkatkan tingkat konversi.",
    technologies: ["Figma", "Adobe XD", "Principle", "Maze"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    gallery: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ],
    link: "https://example.com"
  },
  {
    id: 5,
    title: "Branding dan Identitas Visual",
    category: "branding",
    client: "PT Brand Baru",
    year: "2021",
    description: "Pengembangan identitas brand lengkap termasuk logo, panduan brand, dan material pemasaran.",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "InDesign"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    gallery: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    ],
    link: "https://example.com"
  },
  {
    id: 6,
    title: "Sistem Manajemen CRM",
    category: "aplikasi",
    client: "PT Solusi Digital",
    year: "2021",
    description: "Sistem CRM custom yang membantu bisnis mengelola hubungan pelanggan dengan lebih efektif.",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    gallery: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    ],
    link: "https://example.com"
  }
];

const ProjectDialog = ({ project }: { project: typeof projects[0] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="overflow-hidden rounded-lg cursor-pointer group">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium px-4 py-2 border border-white rounded-md">Lihat Detail</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.client}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            Klien: {project.client} | Tahun: {project.year}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative h-[300px] md:h-[400px] mb-4 overflow-hidden rounded-lg">
            <img 
              src={project.gallery[currentImage]} 
              alt={`${project.title} gallery`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
              <div className="flex gap-2">
                {project.gallery.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full ${currentImage === index ? 'bg-white' : 'bg-white/50'}`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Deskripsi Proyek</h4>
              <p className="text-gray-700">{project.description}</p>
              
              <h4 className="text-lg font-semibold mt-4 mb-2">Teknologi</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Detail Proyek</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Klien:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kategori:</span>
                  <span className="font-medium">{categories.find(c => c.id === project.category)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tahun:</span>
                  <span className="font-medium">{project.year}</span>
                </div>
              </div>
              
              {project.link && (
                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    <span>Kunjungi Proyek</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Portofolio = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Portofolio Kami</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Temukan proyek-proyek terbaik yang telah kami kerjakan untuk klien kami
          </p>
        </div>
      </section>

      {/* Portofolio Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>{category.name}</TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects
                    .filter(project => category.id === "all" || project.category === category.id)
                    .map((project) => (
                      <Card key={project.id} className="border-none shadow-lg overflow-hidden">
                        <CardContent className="p-0">
                          <ProjectDialog project={project} />
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Untuk Memulai Proyek Anda?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hubungi kami untuk mendiskusikan kebutuhan proyek Anda dan dapatkan solusi terbaik dari tim kami.
          </p>
          <Button 
            size="lg" 
            onClick={() => {
              const message = encodeURIComponent("Halo, saya ingin mendiskusikan proyek saya dengan tim Anda.");
              window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
            }}
            className="bg-green-600 hover:bg-green-700"
          >
            Hubungi via WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portofolio;
