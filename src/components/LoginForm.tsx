
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulasi login untuk frontend saja
      // Ini nanti akan diganti dengan panggilan API ke backend
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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Login Admin</CardTitle>
        <CardDescription>
          Masukkan kredensial Anda untuk mengakses dashboard admin.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="nama@perusahaan.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800"
                onClick={(e) => {
                  e.preventDefault();
                  toast({
                    title: "Reset Password",
                    description: "Fitur reset password akan tersedia setelah backend diimplementasikan.",
                  });
                }}
              >
                Lupa password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginForm;
