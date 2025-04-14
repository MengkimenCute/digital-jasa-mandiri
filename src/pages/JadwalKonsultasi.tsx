
import { useState } from "react";
import ConsultationScheduler from "@/components/ConsultationScheduler";
import SocialShare from "@/components/SocialShare";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Users, CheckCircle, Clock } from "lucide-react";

const JadwalKonsultasi = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Jadwalkan Konsultasi</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Konsultasikan kebutuhan bisnis digital Anda dengan tim ahli kami. 
            Kami siap membantu menemukan solusi terbaik untuk masalah Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <CalendarDays className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Pilih Waktu Fleksibel</h3>
              <p className="text-gray-600 text-sm">
                Pilih tanggal dan waktu yang sesuai dengan jadwal Anda.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Tim Ahli Berpengalaman</h3>
              <p className="text-gray-600 text-sm">
                Konsultasi dengan tim yang berpengalaman dalam beragam solusi teknologi.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Solusi yang Tepat</h3>
              <p className="text-gray-600 text-sm">
                Dapatkan rekomendasi dan solusi yang sesuai dengan kebutuhan bisnis Anda.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4">Jadwalkan Konsultasi Anda</h2>
          <p className="text-gray-600 mb-6">
            Pilih tanggal dan waktu yang tersedia untuk diskusi dengan tim ahli kami. 
            Konsultasi berlangsung selama 30 menit via online meeting.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="flex items-center gap-2 text-blue-600">
              <Clock className="h-5 w-5" />
              <span>Durasi: 30 menit</span>
            </div>
            <ConsultationScheduler />
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">Bagikan informasi ini</h3>
          <div className="flex justify-center">
            <SocialShare 
              title="Jadwalkan konsultasi gratis dengan tim ahli TechConsult" 
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalKonsultasi;
