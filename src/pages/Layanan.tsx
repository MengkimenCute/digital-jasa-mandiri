
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop, MessageSquare, Smartphone, Search, PenTool } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "website",
    title: "Pembuatan Website",
    description: "Website responsif dan modern untuk kebutuhan bisnis Anda",
    longDescription: "Kami menyediakan layanan pembuatan website berkualitas tinggi yang dioptimalkan untuk performa dan SEO. Tim kami akan merancang website yang tidak hanya indah secara visual, tetapi juga berfungsi dengan baik di semua perangkat.",
    icon: <Laptop className="h-10 w-10 text-blue-600" />,
    features: [
      "Desain responsif untuk semua perangkat",
      "Optimasi SEO untuk peringkat yang lebih baik di Google",
      "Integrasi dengan sosial media dan analitik",
      "Panel admin yang mudah digunakan",
      "Hosting dan domain (opsional)",
      "Pemeliharaan dan dukungan teknis"
    ],
    cta: "Mulai Proyek Website"
  },
  {
    id: "aplikasi",
    title: "Pengembangan Aplikasi",
    description: "Aplikasi mobile & web yang disesuaikan dengan kebutuhan spesifik",
    longDescription: "Kembangkan aplikasi mobile atau web custom yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda. Kami menggunakan teknologi terbaru untuk memastikan aplikasi Anda cepat, aman, dan skalabel.",
    icon: <Smartphone className="h-10 w-10 text-blue-600" />,
    features: [
      "Aplikasi native untuk iOS dan Android",
      "Aplikasi web progresif (PWA)",
      "Solusi multiplatform dengan React Native",
      "Integrasi API dan layanan pihak ketiga",
      "Pembaruan dan pemeliharaan berkala",
      "Sistem backend yang aman dan skalabel"
    ],
    cta: "Diskusikan Kebutuhan Aplikasi"
  },
  {
    id: "konsultasi",
    title: "Konsultasi IT",
    description: "Solusi dan strategi terbaik untuk transformasi digital bisnis Anda",
    longDescription: "Dapatkan panduan ahli untuk transformasi digital bisnis Anda. Tim konsultan kami akan membantu Anda mengidentifikasi solusi teknologi yang tepat untuk mengoptimalkan proses dan meningkatkan efisiensi.",
    icon: <MessageSquare className="h-10 w-10 text-blue-600" />,
    features: [
      "Audit sistem IT yang komprehensif",
      "Strategi transformasi digital",
      "Optimasi infrastruktur cloud",
      "Keamanan data dan jaringan",
      "Integrasi sistem dan migrasi data",
      "Manajemen proyek IT"
    ],
    cta: "Jadwalkan Konsultasi"
  },
  {
    id: "seo",
    title: "Optimasi SEO",
    description: "Tingkatkan visibilitas online dan dapatkan lebih banyak trafik organik",
    longDescription: "Tingkatkan peringkat website Anda di mesin pencari dengan layanan SEO kami. Kami menggunakan strategi SEO terbaru untuk meningkatkan visibilitas online dan mendatangkan lebih banyak trafik organik ke website Anda.",
    icon: <Search className="h-10 w-10 text-blue-600" />,
    features: [
      "Audit SEO menyeluruh",
      "Riset kata kunci kompetitif",
      "Optimasi on-page dan off-page",
      "Pembuatan konten berkualitas",
      "Analisis kompetitor",
      "Laporan peringkat dan performa bulanan"
    ],
    cta: "Tingkatkan Peringkat Website"
  },
  {
    id: "ui-ux",
    title: "Desain UI/UX",
    description: "Rancang antarmuka yang intuitif dan meningkatkan pengalaman pengguna",
    longDescription: "Tim desainer UI/UX kami akan menciptakan antarmuka yang tidak hanya indah secara visual, tetapi juga mudah digunakan dan meningkatkan pengalaman pengguna. Desain yang baik akan meningkatkan konversi dan kepuasan pengguna.",
    icon: <PenTool className="h-10 w-10 text-blue-600" />,
    features: [
      "User research dan persona",
      "Wireframing dan prototyping",
      "User journey dan flow mapping",
      "Desain visual dan branding",
      "Usability testing",
      "Design system dan UI kit"
    ],
    cta: "Mulai Proyek Desain"
  },
  {
    id: "pengembangan",
    title: "Pengembangan Custom",
    description: "Solusi software custom untuk kebutuhan bisnis spesifik",
    longDescription: "Kembangkan solusi software custom yang sesuai dengan kebutuhan unik bisnis Anda. Tim developer kami akan bekerja sama dengan Anda untuk menciptakan solusi yang tepat guna dan efisien.",
    icon: <Code className="h-10 w-10 text-blue-600" />,
    features: [
      "Analisis kebutuhan bisnis",
      "Perancangan arsitektur sistem",
      "Pengembangan full-stack",
      "Integrasi dengan sistem yang sudah ada",
      "Quality assurance dan testing",
      "Dokumentasi teknis dan pelatihan"
    ],
    cta: "Diskusikan Solusi Custom"
  }
];

const handleWhatsAppClick = (service: string) => {
  const message = encodeURIComponent(`Halo, saya tertarik dengan layanan ${service} Anda.`);
  window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
};

const Layanan = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Layanan Kami</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Solusi digital komprehensif untuk membantu bisnis Anda bertransformasi dan berkembang di era digital
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <ul className="mt-4 space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 text-blue-600">•</span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link to={`/layanan/${service.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleWhatsAppClick(service.title)}
                    className="text-green-600 border-green-600 hover:bg-green-50"
                  >
                    Konsultasi
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bagaimana Kami Bekerja</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses pengembangan kami dirancang untuk memberikan hasil terbaik dan memastikan kepuasan klien
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Konsultasi</h3>
              <p className="text-gray-600">Mendiskusikan kebutuhan dan tujuan proyek Anda secara detail</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Perencanaan</h3>
              <p className="text-gray-600">Merancang strategi dan membuat roadmap pengembangan</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Pengembangan</h3>
              <p className="text-gray-600">Mengimplementasikan solusi dengan teknologi terbaik</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Peluncuran</h3>
              <p className="text-gray-600">Mengantarkan proyek sampai ke tahap peluncuran dan dukungan berkelanjutan</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Butuh Solusi Khusus?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Tim kami siap membantu merancang solusi yang sesuai dengan kebutuhan unik bisnis Anda.
            </p>
            <Button 
              size="lg" 
              onClick={() => handleWhatsAppClick("Konsultasi Khusus")} 
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Hubungi Kami Sekarang
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layanan;
