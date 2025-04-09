
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash, PlusCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const servicesData = [
  {
    id: "website",
    title: "Pembuatan Website",
    clients: 24,
    projects: 16,
    revenue: "Rp 120.000.000"
  },
  {
    id: "aplikasi",
    title: "Pengembangan Aplikasi",
    clients: 12,
    projects: 8,
    revenue: "Rp 240.000.000"
  },
  {
    id: "konsultasi",
    title: "Konsultasi IT",
    clients: 18,
    projects: 20,
    revenue: "Rp 90.000.000"
  },
  {
    id: "seo",
    title: "Optimasi SEO",
    clients: 15,
    projects: 15,
    revenue: "Rp 75.000.000"
  },
  {
    id: "ui-ux",
    title: "Desain UI/UX",
    clients: 10,
    projects: 12,
    revenue: "Rp 60.000.000"
  }
];

const AdminLayanan = () => {
  const [services, setServices] = useState(servicesData);

  const handleEdit = (id: string) => {
    toast({
      title: "Edit Layanan",
      description: `Edit layanan dengan ID: ${id}`,
    });
    // Implementasi edit nanti akan dihubungkan dengan backend
  };

  const handleDelete = (id: string) => {
    toast({
      title: "Hapus Layanan",
      description: `Layanan dengan ID: ${id} telah dihapus`,
      variant: "destructive",
    });
    
    // Filter layanan yang dihapus (simulasi)
    setServices(services.filter(service => service.id !== id));
  };

  const handleAdd = () => {
    toast({
      title: "Tambah Layanan Baru",
      description: "Form tambah layanan akan tersedia setelah backend diimplementasikan",
    });
    // Implementasi tambah layanan nanti akan dihubungkan dengan backend
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manajemen Layanan</h1>
        <Button onClick={handleAdd}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Layanan
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader className="pb-2">
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>ID: {service.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Klien:</span>
                  <span className="font-medium">{service.clients}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Proyek:</span>
                  <span className="font-medium">{service.projects}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Pendapatan:</span>
                  <span className="font-medium">{service.revenue}</span>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleEdit(service.id)}
                  >
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => handleDelete(service.id)}
                  >
                    <Trash className="h-4 w-4 mr-1" /> Hapus
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminLayanan;
