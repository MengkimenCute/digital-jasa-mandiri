
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock, ArrowLeft, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface JobPost {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  postedDate: string;
}

const jobListings: JobPost[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    location: "Jakarta",
    type: "Full-time",
    description: "Kami mencari Software Engineer berpengalaman untuk bergabung dengan tim pengembangan kami. Tanggung jawab utama meliputi pengembangan aplikasi web dan mobile.",
    requirements: [
      "Minimal 2 tahun pengalaman sebagai Software Engineer",
      "Mahir dalam JavaScript, React, dan Node.js",
      "Memahami konsep RESTful API",
      "Terbiasa dengan Git dan workflow kolaboratif",
      "Dapat berkomunikasi dengan baik dalam tim"
    ],
    postedDate: "23 Maret 2025"
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    location: "Bandung",
    type: "Full-time",
    description: "Kami mencari UI/UX Designer kreatif untuk merancang antarmuka pengguna yang menarik dan intuitif untuk berbagai proyek digital kami.",
    requirements: [
      "Minimal 3 tahun pengalaman dalam UI/UX Design",
      "Mahir menggunakan Figma, Adobe XD, atau tools desain serupa",
      "Memiliki portofolio yang menunjukkan kemampuan desain UI/UX",
      "Memahami prinsip desain yang berpusat pada pengguna",
      "Kemampuan komunikasi yang baik dengan tim pengembangan"
    ],
    postedDate: "20 Maret 2025"
  },
  {
    id: "digital-marketer",
    title: "Digital Marketing Specialist",
    location: "Jakarta",
    type: "Full-time",
    description: "Kami mencari Digital Marketing Specialist untuk mengoptimalkan strategi pemasaran digital kami, termasuk SEO, SEM, dan media sosial.",
    requirements: [
      "Minimal 2 tahun pengalaman dalam digital marketing",
      "Pemahaman mendalam tentang SEO, SEM, dan analitik web",
      "Pengalaman mengelola kampanye media sosial",
      "Kemampuan analitis yang kuat untuk mengukur kinerja kampanye",
      "Kreativitas dalam mengembangkan konten marketing"
    ],
    postedDate: "15 Maret 2025"
  }
];

const KarirDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobPost | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  
  useEffect(() => {
    const foundJob = jobListings.find(job => job.id === id);
    if (foundJob) {
      setJob(foundJob);
    } else {
      navigate("/karir");
    }
  }, [id, navigate]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !resume) {
      toast({
        title: "Formulir Tidak Lengkap",
        description: "Mohon lengkapi semua field yang diperlukan.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulasi pengiriman lamaran
    toast({
      title: "Lamaran Terkirim",
      description: `Terima kasih, ${name}! Lamaran Anda untuk posisi ${job?.title} telah diterima.`,
    });
    
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setResume(null);
  };
  
  if (!job) {
    return <div className="container mx-auto px-4 py-12 text-center">Memuat...</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button 
          variant="outline" 
          className="mb-6 flex items-center"
          onClick={() => navigate("/karir")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Lowongan
        </Button>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{job.title}</CardTitle>
            <CardDescription>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-1" />
                  <span>{job.postedDate}</span>
                </div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Deskripsi Pekerjaan</h3>
              <p className="text-gray-700">{job.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Persyaratan</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6">Lamar Posisi Ini</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap *
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Resume/CV (PDF) *
              </label>
              <input
                id="resume"
                type="file"
                accept=".pdf"
                onChange={(e) => e.target.files && setResume(e.target.files[0])}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Pesan (Opsional)
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows={4}
              ></textarea>
            </div>
            
            <Button type="submit" className="flex items-center">
              <Send className="mr-2 h-4 w-4" />
              Kirim Lamaran
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KarirDetail;
