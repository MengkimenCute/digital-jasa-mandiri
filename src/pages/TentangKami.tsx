import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Check, Users, MessageSquare, Award, Linkedin, Github, Twitter } from "lucide-react";

const stats = [
  { label: "Tahun Pengalaman", value: "5+" },
  { label: "Klien Puas", value: "50+" },
  { label: "Proyek Selesai", value: "100+" },
  { label: "Tim Profesional", value: "15+" }
];

const values = [
  { 
    title: "Inovasi", 
    icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    description: "Kami selalu mencari cara baru dan lebih baik untuk menyelesaikan masalah melalui teknologi."
  },
  { 
    title: "Kualitas", 
    icon: <Check className="h-6 w-6 text-blue-600" />,
    description: "Kami berkomitmen untuk menghasilkan pekerjaan berkualitas tinggi yang memenuhi standar industri."
  },
  { 
    title: "Kolaborasi", 
    icon: <Users className="h-6 w-6 text-blue-600" />,
    description: "Kami percaya bahwa kerja sama yang baik dengan klien adalah kunci keberhasilan proyek."
  },
  { 
    title: "Integritas", 
    icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    description: "Kami menjalankan bisnis dengan kejujuran, transparansi, dan etika yang kuat."
  }
];

const team = [
  {
    name: "Budi Santoso",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    bio: "Budi memiliki pengalaman lebih dari 10 tahun dalam industri teknologi. Ia memulai karir sebagai developer dan kini memimpin perusahaan dengan visi yang jelas.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Siti Rahma",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    bio: "Siti adalah ahli teknologi dengan latar belakang di Google. Ia memimpin tim pengembangan dan memastikan standar kualitas tertinggi.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Arief Pratama",
    role: "Lead UI/UX Designer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    bio: "Arief adalah desainer yang berpengalaman dengan mata tajam untuk detail. Ia menciptakan desain yang tidak hanya indah tetapi juga mudah digunakan.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "Dewi Anggraini",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    bio: "Dewi ahli dalam mengelola proyek kompleks dan memastikan pengiriman tepat waktu. Ia adalah penghubung utama antara tim dan klien.",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

const TentangKami = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tentang Kami</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Mengenal lebih dekat dengan tim profesional di balik solusi digital Anda
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Solusi Digital Untuk Era Modern</h2>
              <p className="text-lg text-gray-700 mb-6">
                Didirikan pada tahun 2018, perusahaan kami berfokus pada penyediaan solusi teknologi terbaik untuk bisnis berbagai skala. Dengan tim yang berpengalaman dan berdedikasi, kami berkomitmen untuk membantu bisnis Anda bertransformasi di era digital.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Kami percaya bahwa teknologi yang tepat dapat memberdayakan bisnis untuk mencapai potensi penuh mereka. Itulah mengapa kami selalu berupaya untuk menghadirkan solusi yang tidak hanya inovatif, tetapi juga praktis dan efektif.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/layanan">
                  <Button>Pelajari Layanan Kami</Button>
                </Link>
                <Link to="/portofolio">
                  <Button variant="outline">Lihat Portofolio</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Tim kami sedang bekerja" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white py-4 px-6 rounded-lg shadow-lg">
                <p className="text-lg font-bold">Visi Kami</p>
                <p>Menjadi partner terpercaya dalam transformasi digital bagi bisnis Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prinsip yang mengarahkan setiap aspek pekerjaan kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-none shadow-lg p-2">
                <CardContent className="pt-6">
                  <div className="mb-4 rounded-full bg-blue-100 p-3 inline-flex">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Orang-orang berbakat di balik kesuksesan setiap proyek
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="flex gap-4 justify-center">
                      <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.social.github} className="text-gray-600 hover:text-gray-900">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={member.social.twitter} className="text-gray-600 hover:text-blue-400">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apa Kata Klien Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni dari klien yang telah mempercayakan proyek mereka kepada kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg p-2">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Tim profesional yang sangat membantu. Mereka tidak hanya mengembangkan website yang bagus, tetapi juga memberikan saran strategis yang berharga."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" 
                    alt="Ahmad Fadli" 
                    className="rounded-full h-12 w-12 mr-4"
                  />
                  <div>
                    <p className="font-bold">Ahmad Fadli</p>
                    <p className="text-sm text-gray-600">CEO, PT Maju Bersama</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg p-2">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Kami sangat puas dengan aplikasi yang dikembangkan. Fitur-fiturnya sesuai dengan kebutuhan bisnis kami dan sangat mudah digunakan."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                    alt="Rina Wijaya" 
                    className="rounded-full h-12 w-12 mr-4"
                  />
                  <div>
                    <p className="font-bold">Rina Wijaya</p>
                    <p className="text-sm text-gray-600">Manajer, CV Teknologi Andalan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg p-2">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500 mr-1" />
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Proses pengembangan yang sangat transparan dan komunikatif. Tim selalu responsif terhadap perubahan dan umpan balik."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                    alt="Dodi Prakoso" 
                    className="rounded-full h-12 w-12 mr-4"
                  />
                  <div>
                    <p className="font-bold">Dodi Prakoso</p>
                    <p className="text-sm text-gray-600">Direktur, PT Sukses Makmur</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Siap Bekerja Sama dengan Kami?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Diskusikan kebutuhan bisnis Anda dengan tim ahli kami sekarang.
            </p>
            <Button 
              size="lg" 
              onClick={() => {
                const message = encodeURIComponent("Halo, saya ingin bekerja sama dengan tim Anda untuk proyek saya.");
                window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
              }}
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              Mulai Konsultasi
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKami;
