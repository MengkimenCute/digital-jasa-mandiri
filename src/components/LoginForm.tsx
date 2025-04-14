
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff, LogIn, Mail, Lock } from "lucide-react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulasi login untuk frontend saja
      setTimeout(() => {
        if (email === "admin@example.com" && password === "password") {
          // Login berhasil (simulasi)
          toast({
            title: "Login Berhasil",
            description: "Selamat datang di dashboard admin.",
          });
          
          // Simpan token simulasi di localStorage
          localStorage.setItem("adminToken", "dummy-token-for-frontend-only");
          
          // Redirect ke dashboard admin
          navigate("/admin");
        } else {
          // Login gagal
          toast({
            title: "Login Gagal",
            description: "Email atau password salah. Silakan coba lagi.",
            variant: "destructive",
          });
        }
        setLoading(false);
      }, 1500);
    } catch (error) {
      toast({
        title: "Terjadi Kesalahan",
        description: "Tidak dapat terhubung ke server. Silakan coba lagi nanti.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
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
          <button
            type="button"
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              toast({
                title: "Reset Password",
                description: "Fitur reset password akan tersedia setelah backend diimplementasikan.",
              });
            }}
          >
            Lupa password?
          </button>
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
  );
};

export default LoginForm;
