
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Briefcase, Calendar, Edit, Plus, Trash, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JobPost {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  postedDate: string;
  applicants?: number;
}

const AdminKarir = () => {
  const [jobListings, setJobListings] = useState<JobPost[]>([
    {
      id: "software-engineer",
      title: "Software Engineer",
      location: "Jakarta",
      type: "Full-time",
      description: "Kami mencari Software Engineer berpengalaman untuk bergabung dengan tim pengembangan kami.",
      requirements: [
        "Minimal 2 tahun pengalaman sebagai Software Engineer",
        "Mahir dalam JavaScript, React, dan Node.js",
        "Memahami konsep RESTful API",
        "Terbiasa dengan Git dan workflow kolaboratif",
        "Dapat berkomunikasi dengan baik dalam tim"
      ],
      postedDate: "23 Maret 2025",
      applicants: 12
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      location: "Bandung",
      type: "Full-time",
      description: "Kami mencari UI/UX Designer kreatif untuk merancang antarmuka pengguna yang menarik.",
      requirements: [
        "Minimal 3 tahun pengalaman dalam UI/UX Design",
        "Mahir menggunakan Figma, Adobe XD, atau tools desain serupa",
        "Memiliki portofolio yang menunjukkan kemampuan desain UI/UX",
        "Memahami prinsip desain yang berpusat pada pengguna",
        "Kemampuan komunikasi yang baik dengan tim pengembangan"
      ],
      postedDate: "20 Maret 2025",
      applicants: 8
    },
    {
      id: "digital-marketer",
      title: "Digital Marketing Specialist",
      location: "Jakarta",
      type: "Full-time",
      description: "Kami mencari Digital Marketing Specialist untuk mengoptimalkan strategi pemasaran digital kami.",
      requirements: [
        "Minimal 2 tahun pengalaman dalam digital marketing",
        "Pemahaman mendalam tentang SEO, SEM, dan analitik web",
        "Pengalaman mengelola kampanye media sosial",
        "Kemampuan analitis yang kuat untuk mengukur kinerja kampanye",
        "Kreativitas dalam mengembangkan konten marketing"
      ],
      postedDate: "15 Maret 2025",
      applicants: 5
    }
  ]);
  
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<JobPost | null>(null);
  
  const [newJob, setNewJob] = useState<Partial<JobPost>>({
    title: "",
    location: "",
    type: "",
    description: "",
    requirements: [],
    postedDate: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
  });
  
  const [newRequirement, setNewRequirement] = useState("");
  
  const handleAddJob = () => {
    if (!newJob.title || !newJob.location || !newJob.type || !newJob.description || newJob.requirements?.length === 0) {
      toast({
        title: "Data Tidak Lengkap",
        description: "Mohon lengkapi semua field yang diperlukan.",
        variant: "destructive",
      });
      return;
    }
    
    const newJobPost: JobPost = {
      id: newJob.title?.toLowerCase().replace(/\s+/g, '-') || '',
      title: newJob.title || '',
      location: newJob.location || '',
      type: newJob.type || '',
      description: newJob.description || '',
      requirements: newJob.requirements || [],
      postedDate: newJob.postedDate || new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }),
      applicants: 0
    };
    
    setJobListings([...jobListings, newJobPost]);
    setIsAddDialogOpen(false);
    setNewJob({
      title: "",
      location: "",
      type: "",
      description: "",
      requirements: [],
      postedDate: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })
    });
    
    toast({
      title: "Lowongan Ditambahkan",
      description: `Lowongan ${newJobPost.title} berhasil ditambahkan.`,
    });
  };
  
  const handleEditJob = () => {
    if (!currentJob) return;
    
    const updatedJobs = jobListings.map(job => 
      job.id === currentJob.id ? currentJob : job
    );
    
    setJobListings(updatedJobs);
    setIsEditDialogOpen(false);
    setCurrentJob(null);
    
    toast({
      title: "Lowongan Diperbarui",
      description: `Lowongan ${currentJob.title} berhasil diperbarui.`,
    });
  };
  
  const handleDeleteJob = () => {
    if (!currentJob) return;
    
    const updatedJobs = jobListings.filter(job => job.id !== currentJob.id);
    
    setJobListings(updatedJobs);
    setIsDeleteDialogOpen(false);
    setCurrentJob(null);
    
    toast({
      title: "Lowongan Dihapus",
      description: `Lowongan ${currentJob.title} telah dihapus.`,
      variant: "destructive",
    });
  };
  
  const openEditDialog = (job: JobPost) => {
    setCurrentJob({...job});
    setIsEditDialogOpen(true);
  };
  
  const openDeleteDialog = (job: JobPost) => {
    setCurrentJob(job);
    setIsDeleteDialogOpen(true);
  };
  
  const addRequirement = () => {
    if (!newRequirement.trim()) return;
    
    if (isEditDialogOpen && currentJob) {
      setCurrentJob({
        ...currentJob,
        requirements: [...currentJob.requirements, newRequirement]
      });
    } else {
      setNewJob({
        ...newJob,
        requirements: [...(newJob.requirements || []), newRequirement]
      });
    }
    
    setNewRequirement("");
  };
  
  const removeRequirement = (index: number) => {
    if (isEditDialogOpen && currentJob) {
      const updatedRequirements = [...currentJob.requirements];
      updatedRequirements.splice(index, 1);
      setCurrentJob({
        ...currentJob,
        requirements: updatedRequirements
      });
    } else {
      const updatedRequirements = [...(newJob.requirements || [])];
      updatedRequirements.splice(index, 1);
      setNewJob({
        ...newJob,
        requirements: updatedRequirements
      });
    }
  };
  
  const totalJobs = jobListings.length;
  const totalApplicants = jobListings.reduce((sum, job) => sum + (job.applicants || 0), 0);
  const activeJobs = jobListings.length;
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manajemen Lowongan Pekerjaan</h1>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Lowongan
        </Button>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Lowongan</CardTitle>
            <Briefcase className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalJobs}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Pelamar</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalApplicants}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Lowongan Aktif</CardTitle>
            <Calendar className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeJobs}</div>
          </CardContent>
        </Card>
      </div>
      
      {/* Job Listings Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Posisi</TableHead>
              <TableHead>Lokasi</TableHead>
              <TableHead>Tipe</TableHead>
              <TableHead>Tanggal Posting</TableHead>
              <TableHead>Pelamar</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobListings.map((job) => (
              <TableRow key={job.id}>
                <TableCell className="font-medium">{job.title}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.type}</TableCell>
                <TableCell>{job.postedDate}</TableCell>
                <TableCell>{job.applicants || 0}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => openEditDialog(job)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="text-red-600"
                      onClick={() => openDeleteDialog(job)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
            {jobListings.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-4">
                  Tidak ada lowongan pekerjaan.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Add Job Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Tambah Lowongan Baru</DialogTitle>
            <DialogDescription>
              Isi detail lowongan pekerjaan baru di bawah ini.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Posisi</Label>
              <Input 
                id="title" 
                value={newJob.title || ''} 
                onChange={(e) => setNewJob({...newJob, title: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="location">Lokasi</Label>
              <Input 
                id="location" 
                value={newJob.location || ''} 
                onChange={(e) => setNewJob({...newJob, location: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="type">Tipe</Label>
              <Input 
                id="type" 
                value={newJob.type || ''} 
                onChange={(e) => setNewJob({...newJob, type: e.target.value})}
                placeholder="Full-time, Part-time, Contract"
              />
            </div>
            
            <div>
              <Label htmlFor="description">Deskripsi</Label>
              <textarea 
                id="description" 
                className="w-full min-h-[100px] p-2 border rounded-md"
                value={newJob.description || ''} 
                onChange={(e) => setNewJob({...newJob, description: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="requirements">Persyaratan</Label>
              <div className="flex gap-2 mb-2">
                <Input 
                  id="requirement" 
                  value={newRequirement} 
                  onChange={(e) => setNewRequirement(e.target.value)}
                  placeholder="Tambahkan persyaratan baru"
                />
                <Button type="button" variant="outline" onClick={addRequirement}>Tambah</Button>
              </div>
              
              <ul className="border rounded-md divide-y">
                {newJob.requirements?.map((req, index) => (
                  <li key={index} className="flex justify-between items-center p-2 hover:bg-gray-50">
                    <span>{req}</span>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeRequirement(index)}
                      className="text-red-500 h-6 w-6 p-0"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </li>
                ))}
                {(newJob.requirements?.length || 0) === 0 && (
                  <li className="p-2 text-gray-500 text-center">Belum ada persyaratan.</li>
                )}
              </ul>
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Batal
            </Button>
            <Button onClick={handleAddJob}>Simpan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Edit Job Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Lowongan</DialogTitle>
            <DialogDescription>
              Perbarui detail lowongan pekerjaan di bawah ini.
            </DialogDescription>
          </DialogHeader>
          
          {currentJob && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Posisi</Label>
                <Input 
                  id="edit-title" 
                  value={currentJob.title} 
                  onChange={(e) => setCurrentJob({...currentJob, title: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="location">Lokasi</Label>
                <Input 
                  id="edit-location" 
                  value={currentJob.location} 
                  onChange={(e) => setCurrentJob({...currentJob, location: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="type">Tipe</Label>
                <Input 
                  id="edit-type" 
                  value={currentJob.type} 
                  onChange={(e) => setCurrentJob({...currentJob, type: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="description">Deskripsi</Label>
                <textarea 
                  id="edit-description" 
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  value={currentJob.description} 
                  onChange={(e) => setCurrentJob({...currentJob, description: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="requirements">Persyaratan</Label>
                <div className="flex gap-2 mb-2">
                  <Input 
                    id="edit-requirement" 
                    value={newRequirement} 
                    onChange={(e) => setNewRequirement(e.target.value)}
                    placeholder="Tambahkan persyaratan baru"
                  />
                  <Button type="button" variant="outline" onClick={addRequirement}>Tambah</Button>
                </div>
                
                <ul className="border rounded-md divide-y">
                  {currentJob.requirements.map((req, index) => (
                    <li key={index} className="flex justify-between items-center p-2 hover:bg-gray-50">
                      <span>{req}</span>
                      <Button 
                        type="button" 
                        variant="ghost" 
                        size="sm"
                        onClick={() => removeRequirement(index)}
                        className="text-red-500 h-6 w-6 p-0"
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </li>
                  ))}
                  {currentJob.requirements.length === 0 && (
                    <li className="p-2 text-gray-500 text-center">Belum ada persyaratan.</li>
                  )}
                </ul>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
              Batal
            </Button>
            <Button onClick={handleEditJob}>Simpan Perubahan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Hapus Lowongan</DialogTitle>
            <DialogDescription>
              Apakah Anda yakin ingin menghapus lowongan ini? Tindakan ini tidak dapat dibatalkan.
            </DialogDescription>
          </DialogHeader>
          
          {currentJob && (
            <div className="border rounded-md p-4 mb-4 bg-gray-50">
              <p className="font-semibold">{currentJob.title}</p>
              <p className="text-sm text-gray-600">{currentJob.location} • {currentJob.type}</p>
            </div>
          )}
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Batal
            </Button>
            <Button variant="destructive" onClick={handleDeleteJob}>Hapus</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminKarir;
