import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Code, Laptop, MessageSquare, Phone, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import Testimonial from "@/components/Testimonial";
import Newsletter from "@/components/Newsletter";

const services = [
  {
    id: "website",
    title: "Pembuatan Website",
    description: "Website responsif dan modern untuk kebutuhan bisnis Anda",
    icon: <Laptop className="h-10 w-10 text-blue-600" />,
    link: "/layanan/website"
  },
  {
    id: "aplikasi",
    title: "Pengembangan Aplikasi",
    description: "Aplikasi mobile & web yang disesuaikan dengan kebutuhan spesifik",
    icon: <Code className="h-10 w-10 text-blue-600" />,
    link: "/layanan/aplikasi"
  },
  {
    id: "konsultasi",
    title: "Konsultasi IT",
    description: "Solusi dan strategi terbaik untuk transformasi digital bisnis Anda",
    icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
    link: "/layanan/konsultasi"
  }
];

const features = [
  { 
    title: "Berpengalaman", 
    description: "Lebih dari 5 tahun pengalaman dalam industri IT", 
    icon: <CheckCircle className="h-6 w-6 text-blue-600" />
  },
  { 
    title: "Tim Profesional", 
    description: "Didukung oleh tim developer dan designer profesional", 
    icon: <Users className="h-6 w-6 text-blue-600" />
  },
  { 
    title: "Support 24/7", 
    description: "Dukungan teknis siap membantu kapanpun dibutuhkan", 
    icon: <Phone className="h-6 w-6 text-blue-600" />
  }
];

const recentProjects = [
  {
    title: "Website E-commerce",
    client: "PT Maju Bersama",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "/portofolio/ecommerce"
  },
  {
    title: "Aplikasi Manajemen Inventori",
    client: "CV Teknologi Andalan",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "/portofolio/inventori"
  },
  {
    title: "Website Perusahaan",
    client: "PT Sukses Makmur",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "/portofolio/company-profile"
  }
];

const testimonials = [
  {
    name: "Ahmad Sulaiman",
    company: "PT Maju Bersama",
    text: "TechConsult membantu perusahaan kami dalam merancang website e-commerce yang user-friendly dan responsif. Tim profesional mereka sangat memahami kebutuhan kami.",
    rating: 5,
  },
  {
    name: "Siti Rahayu",
    company: "CV Teknologi Andalan",
    text: "Kami sangat puas dengan aplikasi manajemen inventori yang dikembangkan oleh TechConsult. Fitur-fiturnya lengkap dan sangat membantu operasional kami.",
    rating: 4,
  },
  {
    name: "Budi Santoso",
    company: "PT Sukses Makmur",
    text: "Konsultasi IT yang diberikan TechConsult memberikan solusi tepat untuk transformasi digital bisnis kami. Mereka tidak hanya memberikan saran tetapi juga implementasi yang solid.",
    rating: 5,
  }
];

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Berhasil!",
      description: "Pesan Anda telah dikirim. Kami akan segera menghubungi Anda.",
    });
    setEmail("");
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya tertarik dengan layanan konsultasi IT Anda.");
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Solusi Digital untuk <span className="text-blue-300">Bisnis Anda</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Kami membantu bisnis Anda bertransformasi melalui solusi teknologi yang inovatif dan terpercaya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
                  Hubungi via WhatsApp
                </Button>
                <Link to="/portofolio">
                  <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    Lihat Portofolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Digital Solutions" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai solusi digital untuk memenuhi kebutuhan bisnis Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link to={service.link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/layanan" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              Lihat Semua Layanan <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komitmen kami untuk memberikan solusi terbaik bagi bisnis Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepuasan klien adalah prioritas utama kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Portofolio Terbaru</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beberapa proyek terbaru yang telah kami kerjakan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Link to={project.link} key={index} className="group">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-gray-300">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portofolio">
              <Button variant="outline" size="lg">
                Lihat Semua Proyek <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Siap Untuk Memulai Proyek Anda?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Hubungi kami untuk konsultasi gratis dan mulai wujudkan ide Anda bersama tim profesional kami.
            </p>
            <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
              Hubungi via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <Newsletter />
    </div>
  );
};

export default Index;
