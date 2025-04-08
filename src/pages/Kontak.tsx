
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Tampilkan notifikasi sukses dengan toast
    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih, kami akan segera menghubungi Anda.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });

    // Redirect ke WhatsApp (opsional)
    setTimeout(() => {
      const message = encodeURIComponent(
        `Halo, saya ${formData.name} dari ${formData.company}. ${formData.message}`
      );
      window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Halo, saya ingin bertanya tentang layanan Anda.");
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hubungi Kami</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Tim kami siap membantu Anda dengan solusi digital terbaik untuk bisnis Anda
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 inline-flex">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Telepon</h3>
                <p className="text-gray-600 mb-1">+62 812 3456 7890</p>
                <p className="text-gray-600">+62 21 123 4567</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 inline-flex">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-1">info@namaperusahaan.com</p>
                <p className="text-gray-600">support@namaperusahaan.com</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-6">
                <div className="mb-4 rounded-full bg-blue-100 p-3 inline-flex">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Lokasi</h3>
                <p className="text-gray-600 mb-1">Jl. Sudirman No. 123</p>
                <p className="text-gray-600">Jakarta Pusat, 10220</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Masukkan nama lengkap" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Masukkan email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor Telepon</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="Masukkan nomor telepon" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Perusahaan (Opsional)</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Masukkan nama perusahaan" 
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Masukkan subjek pesan" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tuliskan pesan Anda di sini..." 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full">Kirim Pesan</Button>
              </form>
            </div>
            
            {/* Map & WhatsApp CTA */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Lokasi Kami</h2>
                <div className="aspect-video w-full h-auto bg-gray-200 rounded-lg">
                  {/* Embed map here */}
                  <div className="h-full w-full flex items-center justify-center">
                    <p>Google Maps Embed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <MessageSquare className="h-10 w-10 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Butuh Respon Cepat?</h3>
                    <p className="text-gray-700 mb-4">
                      Hubungi kami langsung melalui WhatsApp untuk mendapatkan respon yang lebih cepat.
                    </p>
                    <Button 
                      onClick={handleWhatsAppClick} 
                      className="bg-green-600 hover:bg-green-700 w-full"
                    >
                      Hubungi via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senin - Jumat:</span>
                    <span className="font-medium">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sabtu:</span>
                    <span className="font-medium">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minggu & Hari Libur:</span>
                    <span className="font-medium">Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
