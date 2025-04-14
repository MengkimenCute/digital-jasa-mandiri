
import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

// Waktu konsultasi yang tersedia
const availableTimes = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"
];

// Jenis layanan
const serviceTypes = [
  "Konsultasi Website", 
  "Pengembangan Aplikasi", 
  "Optimasi SEO",
  "UI/UX Design",
  "Konsultasi IT Umum"
];

const ConsultationScheduler = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string | undefined>(undefined);
  const [notes, setNotes] = useState("");

  // Menghitung tanggal minimum (hari ini) dan maksimum (30 hari ke depan)
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

  // Periksa apakah form telah lengkap
  const isFormComplete = date && time && name && email && phone && service;

  const handleSubmit = () => {
    if (!isFormComplete) return;
    
    // Format data yang akan dikirim ke server nanti
    const formattedDate = date?.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    // Tampilkan toast sebagai konfirmasi (untuk contoh, aslinya nanti mengirim ke server)
    toast({
      title: "Jadwal konsultasi berhasil dibuat!",
      description: `Konsultasi ${service} dijadwalkan pada ${formattedDate} pukul ${time}. Kami akan menghubungi Anda untuk konfirmasi.`,
    });
    
    // Reset form dan tutup dialog
    setDate(undefined);
    setTime(undefined);
    setName("");
    setEmail("");
    setPhone("");
    setService(undefined);
    setNotes("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Calendar className="h-4 w-4" />
          Jadwalkan Konsultasi
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>Jadwalkan Konsultasi Online</DialogTitle>
          <DialogDescription>
            Pilih tanggal dan waktu yang tersedia untuk konsultasi dengan tim ahli kami.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 gap-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="date">Pilih Tanggal</Label>
            <div className="border rounded-md p-3">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={{ before: today, after: maxDate }}
                initialFocus
              />
            </div>
          </div>
          
          {date && (
            <div className="space-y-2">
              <Label htmlFor="time">Pilih Waktu</Label>
              <Select value={time} onValueChange={setTime}>
                <SelectTrigger id="time">
                  <SelectValue placeholder="Pilih waktu konsultasi" />
                </SelectTrigger>
                <SelectContent>
                  {availableTimes.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t} WIB
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="service">Jenis Layanan</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Pilih jenis layanan" />
              </SelectTrigger>
              <SelectContent>
                {serviceTypes.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Masukkan nama lengkap Anda"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="email@contoh.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">No. Telepon</Label>
              <Input 
                id="phone" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                placeholder="08xxxxxxxxxx"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Catatan (Opsional)</Label>
            <Input 
              id="notes" 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
              placeholder="Tambahkan catatan atau detail tambahan"
            />
          </div>
        </div>

        <DialogFooter>
          <Button 
            type="submit" 
            onClick={handleSubmit}
            disabled={!isFormComplete}
          >
            Jadwalkan Sekarang
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationScheduler;
