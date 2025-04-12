
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

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

const Karir = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredJobs = jobListings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Lowongan Pekerjaan</h1>
          <p className="text-lg text-gray-600 mb-8">
            Bergabunglah dengan tim kami dan kembangkan karir Anda dalam lingkungan yang inovatif dan inklusif.
          </p>
          
          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Cari lowongan berdasarkan posisi atau lokasi..."
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{job.title}</CardTitle>
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
                <CardContent>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                </CardContent>
                <CardFooter className="flex justify-end border-t pt-4">
                  <Link to={`/karir/${job.id}`}>
                    <Button className="flex items-center">
                      Lihat Detail
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Tidak ada lowongan yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Karir;
