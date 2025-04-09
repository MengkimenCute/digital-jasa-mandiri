
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface LayananFeature {
  title: string;
  description: string;
}

interface LayananProcess {
  title: string;
  description: string;
}

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

const LayananDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  
  // Dalam implementasi sebenarnya, data ini akan diambil dari API
  const layananData = {
    website: {
      title: "Pembuatan Website",
      subtitle: "Website responsif dan modern untuk kebutuhan bisnis Anda",
      description: "Kami menyediakan layanan pembuatan website berkualitas tinggi yang dioptimalkan untuk performa dan SEO. Tim kami akan merancang website yang tidak hanya indah secara visual, tetapi juga berfungsi dengan baik di semua perangkat.",
      features: [
        { 
          title: "Desain Responsif", 
          description: "Website yang tampil sempurna di semua perangkat, dari desktop hingga smartphone." 
        },
        { 
          title: "Optimasi SEO", 
          description: "Struktur kode dan konten yang dioptimalkan untuk peringkat yang lebih baik di mesin pencari." 
        },
        { 
          title: "Integrasi CMS", 
          description: "Panel admin yang memudahkan Anda mengelola konten website tanpa pengetahuan teknis." 
        },
        { 
          title: "Performa Tinggi", 
          description: "Waktu muat halaman yang cepat dan pengalaman pengguna yang lancar." 
        }
      ],
      process: [
        {
          title: "Konsultasi Awal",
          description: "Mendiskusikan kebutuhan, tujuan, dan ekspektasi proyek Anda."
        },
        {
          title: "Perencanaan & Desain",
          description: "Merancang struktur website dan tampilan visual yang sesuai dengan brand Anda."
        },
        {
          title: "Pengembangan",
          description: "Mengimplementasikan desain dengan kode berkualitas tinggi dan fitur yang dibutuhkan."
        },
        {
          title: "Pengujian & Peluncuran",
          description: "Menguji fungsionalitas di berbagai perangkat dan meluncurkan website Anda."
        }
      ],
      pricing: [
        {
          name: "Starter",
          price: "Rp 4.999.000",
          features: [
            "Website 5 halaman",
            "Desain responsif",
            "Optimasi SEO dasar",
            "Hosting 1 tahun",
            "Domain .com 1 tahun",
            "Support 30 hari"
          ]
        },
        {
          name: "Business",
          price: "Rp 9.999.000",
          features: [
            "Website 10-15 halaman",
            "Desain responsif premium",
            "Optimasi SEO lengkap",
            "CMS custom",
            "Hosting 1 tahun",
            "Domain .com 1 tahun",
            "Support 90 hari",
            "Revisi unlimited"
          ],
          recommended: true
        },
        {
          name: "Enterprise",
          price: "Hubungi Kami",
          features: [
            "Website halaman unlimited",
            "Desain custom sesuai kebutuhan",
            "Optimasi SEO profesional",
            "CMS custom + training",
            "Hosting premium 1 tahun",
            "Domain .com 1 tahun",
            "Support 12 bulan",
            "Integrasi sistem lain",
            "Fitur e-commerce (opsional)"
          ]
        }
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    aplikasi: {
      title: "Pengembangan Aplikasi",
      subtitle: "Aplikasi mobile & web yang disesuaikan dengan kebutuhan spesifik",
      description: "Kembangkan aplikasi mobile atau web custom yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda. Kami menggunakan teknologi terbaru untuk memastikan aplikasi Anda cepat, aman, dan skalabel.",
      features: [
        { 
          title: "Aplikasi Native", 
          description: "Performa optimal dengan aplikasi yang dibangun khusus untuk iOS dan Android." 
        },
        { 
          title: "Aplikasi Cross-Platform", 
          description: "Solusi hemat biaya dengan aplikasi yang berjalan di berbagai platform." 
        },
        { 
          title: "Integrasi API", 
          description: "Menghubungkan aplikasi Anda dengan layanan pihak ketiga dan sistem yang sudah ada." 
        },
        { 
          title: "Keamanan Tinggi", 
          description: "Perlindungan data dan transaksi dengan standar keamanan terbaik." 
        }
      ],
      process: [
        {
          title: "Analisis Kebutuhan",
          description: "Memahami proses bisnis dan kebutuhan pengguna aplikasi Anda."
        },
        {
          title: "Desain UX/UI",
          description: "Merancang alur pengguna dan antarmuka yang intuitif dan menarik."
        },
        {
          title: "Pengembangan",
          description: "Membangun aplikasi dengan arsitektur yang solid dan kode berkualitas."
        },
        {
          title: "Pengujian & Deployment",
          description: "QA menyeluruh dan peluncuran aplikasi ke App Store/Play Store atau server."
        }
      ],
      pricing: [
        {
          name: "Basic",
          price: "Rp 25.000.000",
          features: [
            "Aplikasi dengan fitur dasar",
            "Platform tunggal (Android/iOS)",
            "Desain UI/UX standar",
            "Integrasi API sederhana",
            "Support 30 hari"
          ]
        },
        {
          name: "Professional",
          price: "Rp 50.000.000",
          features: [
            "Aplikasi multi-platform",
            "Desain UI/UX premium",
            "Integrasi API kompleks",
            "Backend custom",
            "Autentikasi pengguna",
            "Support 90 hari",
            "Revisi unlimited"
          ],
          recommended: true
        },
        {
          name: "Enterprise",
          price: "Hubungi Kami",
          features: [
            "Aplikasi skala enterprise",
            "Desain UI/UX premium",
            "Arsitektur skala besar",
            "Integrasi sistem legacy",
            "Fitur keamanan tingkat lanjut",
            "Support 12 bulan",
            "Training tim internal"
          ]
        }
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    konsultasi: {
      title: "Konsultasi IT",
      subtitle: "Solusi dan strategi terbaik untuk transformasi digital bisnis Anda",
      description: "Dapatkan panduan ahli untuk transformasi digital bisnis Anda. Tim konsultan kami akan membantu Anda mengidentifikasi solusi teknologi yang tepat untuk mengoptimalkan proses dan meningkatkan efisiensi.",
      features: [
        { 
          title: "Audit Teknologi", 
          description: "Evaluasi menyeluruh terhadap infrastruktur IT dan sistem yang sudah ada." 
        },
        { 
          title: "Roadmap Digital", 
          description: "Perencanaan strategis untuk transformasi digital jangka panjang." 
        },
        { 
          title: "Optimasi Proses", 
          description: "Identifikasi area yang dapat dioptimalkan dengan teknologi." 
        },
        { 
          title: "Rekomendasi Solusi", 
          description: "Saran independen tentang teknologi dan vendor yang sesuai dengan kebutuhan Anda." 
        }
      ],
      process: [
        {
          title: "Assessment",
          description: "Menganalisis kondisi saat ini, tantangan, dan peluang bisnis Anda."
        },
        {
          title: "Workshop",
          description: "Sesi interaktif untuk menggali kebutuhan dan mengedukasi tim Anda."
        },
        {
          title: "Penyusunan Strategi",
          description: "Mengembangkan rencana aksi dan roadmap implementasi."
        },
        {
          title: "Pendampingan",
          description: "Mendampingi implementasi dan memberikan rekomendasi penyesuaian."
        }
      ],
      pricing: [
        {
          name: "Konsultasi Singkat",
          price: "Rp 5.000.000",
          features: [
            "3 sesi konsultasi (2 jam)",
            "Analisis kebutuhan dasar",
            "Rekomendasi solusi",
            "Laporan ringkas"
          ]
        },
        {
          name: "Konsultasi Menengah",
          price: "Rp 15.000.000",
          features: [
            "5 sesi konsultasi (2 jam)",
            "Audit teknologi menyeluruh",
            "Workshop dengan tim Anda",
            "Roadmap transformasi digital",
            "Laporan komprehensif",
            "Follow-up 1 bulan"
          ],
          recommended: true
        },
        {
          name: "Konsultasi Enterprise",
          price: "Hubungi Kami",
          features: [
            "Sesi konsultasi sesuai kebutuhan",
            "Audit mendalam semua aspek IT",
            "Multiple workshops dengan tim",
            "Strategi transformasi lengkap",
            "Pendampingan implementasi",
            "Review berkala 6 bulan"
          ]
        }
      ],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    seo: {
      title: "Optimasi SEO",
      subtitle: "Tingkatkan visibilitas online dan dapatkan lebih banyak trafik organik",
      description: "Tingkatkan peringkat website Anda di mesin pencari dengan layanan SEO kami. Kami menggunakan strategi SEO terbaru untuk meningkatkan visibilitas online dan mendatangkan lebih banyak trafik organik ke website Anda.",
      features: [
        { 
          title: "Audit SEO", 
          description: "Analisis mendalam website Anda untuk mengidentifikasi peluang optimasi." 
        },
        { 
          title: "Riset Kata Kunci", 
          description: "Menemukan kata kunci yang relevan dan berpotensi mendatangkan trafik." 
        },
        { 
          title: "Optimasi On-Page", 
          description: "Penyesuaian elemen website untuk meningkatkan relevansi dengan kata kunci target." 
        },
        { 
          title: "Backlink Building", 
          description: "Strategi untuk mendapatkan tautan berkualitas dari website otoritatif." 
        }
      ],
      process: [
        {
          title: "Audit & Analisis",
          description: "Menganalisis website Anda dan kompetitor untuk menentukan strategi terbaik."
        },
        {
          title: "Implementasi On-Page",
          description: "Mengoptimalkan konten, meta tag, struktur URL, dan elemen teknis lainnya."
        },
        {
          title: "Strategi Konten",
          description: "Mengembangkan konten bernilai tinggi yang ditargetkan untuk kata kunci strategis."
        },
        {
          title: "Pemantauan & Penyesuaian",
          description: "Melacak performa dan melakukan penyesuaian untuk hasil yang lebih baik."
        }
      ],
      pricing: [
        {
          name: "SEO Basic",
          price: "Rp 3.500.000/bulan",
          features: [
            "Audit SEO dasar",
            "Riset 10 kata kunci",
            "Optimasi on-page 5 halaman",
            "Laporan bulanan",
            "Durasi minimal 3 bulan"
          ]
        },
        {
          name: "SEO Professional",
          price: "Rp 7.500.000/bulan",
          features: [
            "Audit SEO komprehensif",
            "Riset 30 kata kunci",
            "Optimasi on-page 15 halaman",
            "Strategi link building",
            "Content marketing dasar",
            "Laporan mingguan",
            "Durasi minimal 6 bulan"
          ],
          recommended: true
        },
        {
          name: "SEO Enterprise",
          price: "Hubungi Kami",
          features: [
            "Audit SEO menyeluruh",
            "Riset kata kunci komprehensif",
            "Optimasi seluruh website",
            "Link building agresif",
            "Content marketing lengkap",
            "Analisis kompetitor",
            "Laporan real-time",
            "Durasi minimal 12 bulan"
          ]
        }
      ],
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
    },
    "ui-ux": {
      title: "Desain UI/UX",
      subtitle: "Rancang antarmuka yang intuitif dan meningkatkan pengalaman pengguna",
      description: "Tim desainer UI/UX kami akan menciptakan antarmuka yang tidak hanya indah secara visual, tetapi juga mudah digunakan dan meningkatkan pengalaman pengguna. Desain yang baik akan meningkatkan konversi dan kepuasan pengguna.",
      features: [
        { 
          title: "User Research", 
          description: "Memahami perilaku dan kebutuhan pengguna untuk desain yang lebih relevan." 
        },
        { 
          title: "Wireframing", 
          description: "Kerangka visual yang menunjukkan struktur dan alur navigasi produk." 
        },
        { 
          title: "Visual Design", 
          description: "Tampilan visual yang menarik dan sesuai dengan identitas brand Anda." 
        },
        { 
          title: "Prototype & Testing", 
          description: "Model interaktif untuk menguji dan menyempurnakan pengalaman pengguna." 
        }
      ],
      process: [
        {
          title: "Riset & Discovery",
          description: "Memahami pengguna, bisnis, dan tujuan produk Anda."
        },
        {
          title: "Wireframing & Flowchart",
          description: "Merancang struktur dasar dan alur navigasi produk."
        },
        {
          title: "Visual Design",
          description: "Mengembangkan tampilan visual yang menarik dan konsisten."
        },
        {
          title: "Prototyping & Testing",
          description: "Membuat prototype interaktif dan melakukan pengujian dengan pengguna."
        }
      ],
      pricing: [
        {
          name: "UI/UX Basic",
          price: "Rp 8.000.000",
          features: [
            "Redesign 1 produk digital",
            "User research dasar",
            "Wireframe & mockup",
            "Design system sederhana",
            "2 revisi"
          ]
        },
        {
          name: "UI/UX Professional",
          price: "Rp 18.000.000",
          features: [
            "Design/redesign 1 produk",
            "User research mendalam",
            "User persona & journey",
            "Wireframe & mockup detail",
            "Design system lengkap",
            "Prototype interaktif",
            "Usability testing",
            "Revisi unlimited"
          ],
          recommended: true
        },
        {
          name: "UI/UX Enterprise",
          price: "Hubungi Kami",
          features: [
            "Design/redesign produk kompleks",
            "User research komprehensif",
            "Workshop dengan stakeholders",
            "Design system enterprise",
            "Prototype high-fidelity",
            "Usability testing ekstensif",
            "Dokumentasi lengkap",
            "Training tim internal"
          ]
        }
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
    }
  };

  useEffect(() => {
    // Simulasi loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan layanan ${id ? layananData[id as keyof typeof layananData]?.title : ""} Anda.`);
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  const handleContactClick = () => {
    toast({
      title: "Form Kontak",
      description: "Silakan isi form di halaman kontak. Kami akan segera menghubungi Anda.",
    });
  };

  if (!id || !layananData[id as keyof typeof layananData]) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Layanan Tidak Ditemukan</h1>
        <p className="mb-8">Maaf, layanan yang Anda cari tidak tersedia.</p>
        <Link to="/layanan">
          <Button>Kembali ke Daftar Layanan</Button>
        </Link>
      </div>
    );
  }

  const layanan = layananData[id as keyof typeof layananData];

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-300 rounded w-full max-w-3xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 text-white">
              <Link to="/layanan" className="inline-flex items-center text-blue-100 hover:text-white mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Layanan
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{layanan.title}</h1>
              <p className="text-xl text-blue-100 mb-6">{layanan.subtitle}</p>
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
                Konsultasi via WhatsApp
              </Button>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src={layanan.image} 
                alt={layanan.title} 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Tentang Layanan Ini</h2>
            <p className="text-lg text-gray-700 mb-8">{layanan.description}</p>
            
            <h3 className="text-2xl font-semibold mb-4">Fitur Utama</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {layanan.features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proses Kerja Kami</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Metodologi yang kami gunakan untuk memastikan kualitas dan kepuasan klien
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto">
            {layanan.process.map((step, index) => (
              <div key={index} className="text-center mb-8 md:mb-0 relative flex-1">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                {index < layanan.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-blue-200"></div>
                )}
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Paket Layanan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {layanan.pricing.map((tier, index) => (
              <div key={index} className={`border rounded-lg shadow-lg overflow-hidden ${tier.recommended ? 'border-blue-500 relative' : 'border-gray-200'}`}>
                {tier.recommended && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                    Direkomendasikan
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className={`text-2xl font-bold mb-6 ${tier.recommended ? 'text-blue-600' : ''}`}>{tier.price}</p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className={`h-5 w-5 mr-2 mt-0.5 ${tier.recommended ? 'text-blue-600' : 'text-green-600'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.recommended ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                    variant={tier.recommended ? 'default' : 'outline'}
                    onClick={handleWhatsAppClick}
                  >
                    Pilih Paket
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Siap Untuk Memulai?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami dan dapatkan solusi terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick} 
                className="bg-green-600 hover:bg-green-700"
              >
                Hubungi via WhatsApp
              </Button>
              <Link to="/kontak">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  onClick={handleContactClick}
                >
                  Form Kontak
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayananDetail;
