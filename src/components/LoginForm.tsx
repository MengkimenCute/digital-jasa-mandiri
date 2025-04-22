
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn, Mail, Lock } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;
try {
  if (supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith('http')) {
    new URL(supabaseUrl);
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log("Supabase client berhasil dibuat");
  } else {
    console.warn("URL Supabase tidak valid atau kunci tidak tersedia:", { supabaseUrl, hasKey: !!supabaseAnonKey });
  }
} catch (error) {
  console.error("Error saat membuat Supabase client:", error);
}

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // For demo mode - always allow this test account
    if (email === "admin@example.com" && password === "password") {
      toast({
        title: "Login Demo Berhasil",
        description: "Anda telah berhasil login menggunakan akun demo.",
      });
      
      // Allow some time for the toast to be visible
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
      
      setLoading(false);
      return;
    }

    try {
      if (!supabase) {
        toast({
          title: "Konfigurasi Error",
          description: "Konfigurasi Supabase tidak lengkap. Silakan pastikan API key Supabase sudah diatur dengan benar.",
          variant: "destructive",
        });
        console.error("Supabase client tidak diinisialisasi. Periksa variabel lingkungan.");
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
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
              title: "Login Gagal",
              description: error.message,
              variant: "destructive",
            });
          }
        } else if (data.user) {
          toast({
            title: "Login Berhasil",
            description: "Selamat datang di dashboard admin.",
          });
          
          navigate("/admin");
        }
      }
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Tidak dapat terhubung ke server. Silakan coba lagi nanti.",
        variant: "destructive",
      });
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">Email</Label>
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
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Link
              to="/lupa-password"
              className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            >
              Lupa password?
            </Link>
          </div>
          
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-10"
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
            <span className="flex items-center justify-center gap-2">
              <LogIn size={18} />
              Masuk
            </span>
          )}
        </Button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Belum punya akun?{" "}
          <Link to="/register" className="text-blue-600 hover:text-blue-800 hover:underline">
            Daftar sekarang
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
