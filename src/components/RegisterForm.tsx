
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
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

const RegisterForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  
  // Offline/demo mode toggle
  const [offlineMode, setOfflineMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // If offline mode is enabled or Supabase client isn't available, use demo mode
      if (offlineMode || !supabase) {
        // Simulate registration delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast({
          title: "Demo Mode",
          description: `Registrasi simulasi berhasil untuk ${formData.name} (${formData.email})`,
        });
        
        // After successful demo registration, navigate to login page
        setTimeout(() => navigate("/login"), 2000);
        return;
      }

      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            name: formData.name,
            role: 'user', // Default role for new users
          }
        }
      });

      if (signUpError) {
        // Handle connection errors specifically
        if (signUpError.message.includes("Failed to fetch") || 
            signUpError.message === "NetworkError" || 
            signUpError.message.includes("Network Error")) {
          toast({
            title: "Koneksi Error",
            description: "Gagal terhubung ke layanan autentikasi. Periksa koneksi internet Anda atau coba lagi nanti.",
            variant: "destructive",
          });
          // Suggest offline mode
          setOfflineMode(true);
        } else {
          toast({
            title: "Registrasi Gagal",
            description: signUpError.message,
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "Registrasi Berhasil",
          description: "Silakan cek email Anda untuk verifikasi.",
        });
        navigate("/login");
      }
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Tidak dapat melakukan registrasi. Silakan coba lagi nanti.",
        variant: "destructive",
      });
      // Suggest offline mode
      setOfflineMode(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Show offline mode banner when activated */}
      {offlineMode && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md text-amber-800 text-sm">
          <p className="font-medium">Mode Demo Aktif</p>
          <p className="text-xs mt-1">
            Aplikasi berjalan dalam mode demo. Data tidak akan disimpan ke database.
          </p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="name"
              type="text"
              placeholder="Nama lengkap"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="nama@perusahaan.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="pl-10"
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {!offlineMode && (
          <div className="text-right">
            <button 
              type="button" 
              onClick={() => setOfflineMode(true)} 
              className="text-xs text-blue-600 hover:underline"
            >
              Gunakan mode demo
            </button>
          </div>
        )}

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
            "Daftar"
          )}
        </Button>
      </form>

      {/* Demo mode info */}
      {offlineMode && (
        <div className="mt-4 p-3 bg-gray-50 border border-gray-100 rounded-md text-xs text-gray-500">
          <p>Dalam mode demo, registrasi akan disimulasikan tanpa terhubung ke server.</p>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
