
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;
try {
  if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
    new URL(supabaseUrl);
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } else {
    console.warn("URL Supabase tidak valid atau kunci tidak tersedia:", { supabaseUrl, hasKey: !!supabaseAnonKey });
  }
} catch (error) {
  console.error("Error saat membuat Supabase client:", error);
}

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!supabase) {
        toast({
          title: "Konfigurasi Error",
          description: "Konfigurasi Supabase tidak lengkap. Silakan pastikan API key Supabase sudah diatur dengan benar.",
          variant: "destructive",
        });
        
        // Demo mode
        if (email) {
          toast({
            title: "Demo Mode",
            description: "Email reset password simulasi telah dikirim ke " + email,
          });
        }
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/reset-password-confirmation`,
        });

        if (error) {
          if (error.message.includes("Failed to fetch") || error.message === "NetworkError") {
            toast({
              title: "Koneksi Error",
              description: "Gagal terhubung ke layanan autentikasi. Periksa koneksi internet Anda atau coba lagi nanti.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Gagal Mengirim Reset Password",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Email Terkirim",
            description: "Silakan cek email Anda untuk instruksi reset password.",
          });
          setEmail("");
        }
      }
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Tidak dapat mengirim email reset password. Silakan coba lagi nanti.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            id="email"
            type="email"
            placeholder="nama@perusahaan.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="pl-10"
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 h-11"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Memproses...
          </span>
        ) : (
          "Kirim Link Reset Password"
        )}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
