
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulasi proses login
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulasi cek kredensial (sementara hardcoded untuk admin)
      if (email === "admin@example.com" && password === "admin123") {
        // Simulasi menyimpan token JWT di localStorage (implementasi sebenarnya nanti dengan backend)
        localStorage.setItem("auth_token", "sample_jwt_token");
        localStorage.setItem("user_role", "admin");
        
        toast({
          title: "Login Berhasil",
          description: "Selamat datang kembali di dashboard admin.",
        });
        
        // Redirect ke dashboard admin
        navigate("/admin/dashboard");
      } else {
        toast({
          title: "Login Gagal",
          description: "Email atau password salah. Silakan coba lagi.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Admin Login</h2>
          <p className="mt-2 text-gray-600">
            Masuk ke dashboard admin untuk mengelola konten website.
          </p>
        </div>
        
        <Card className="border-none shadow-xl">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Masukkan kredensial Anda untuk mengakses dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                    Lupa password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Login"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Untuk demo, gunakan: <span className="font-medium">admin@example.com / admin123</span>
            </p>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center">
          <Button variant="link" onClick={() => navigate("/")}>
            Kembali ke Beranda
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
