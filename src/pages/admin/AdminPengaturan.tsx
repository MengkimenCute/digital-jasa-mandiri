
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/hooks/use-toast";
import { Save, RefreshCw, ShieldCheck, Palette, Globe } from "lucide-react";

const AdminPengaturan = () => {
  const [websiteName, setWebsiteName] = useState("TechConsult");
  const [email, setEmail] = useState("admin@example.com");
  const [phone, setPhone] = useState("+62 812-3456-7890");
  const [address, setAddress] = useState("Jl. Teknologi No. 123, Jakarta");
  
  const [enableNotifications, setEnableNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Monitor changes
  useEffect(() => {
    setHasChanges(true);
  }, [websiteName, email, phone, address, enableNotifications, darkMode, maintenanceMode]);

  const handleSaveGeneral = () => {
    setIsSaving(true);
    
    // Simulasi penyimpanan data
    setTimeout(() => {
      toast({
        title: "Pengaturan Disimpan",
        description: "Pengaturan umum telah diperbarui",
      });
      setHasChanges(false);
      setIsSaving(false);
    }, 800);
  };

  const handleSaveAppearance = () => {
    setIsSaving(true);
    
    // Simulasi penyimpanan data
    setTimeout(() => {
      toast({
        title: "Pengaturan Disimpan",
        description: "Pengaturan tampilan telah diperbarui",
      });
      setHasChanges(false);
      setIsSaving(false);
    }, 800);
  };

  const handleChangePassword = () => {
    setIsSaving(true);
    
    // Simulasi penyimpanan data
    setTimeout(() => {
      toast({
        title: "Pengaturan Disimpan",
        description: "Password telah diperbarui",
      });
      setIsSaving(false);
    }, 800);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pengaturan</h1>
        {hasChanges && (
          <div className="text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full flex items-center">
            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            Perubahan belum disimpan
          </div>
        )}
      </div>
      
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">Umum</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">Tampilan</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="hidden sm:inline">Keamanan</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="general">
          <Card className="border border-gray-200 shadow-sm bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="bg-gray-50 bg-opacity-50 border-b border-gray-100">
              <CardTitle>Pengaturan Umum</CardTitle>
              <CardDescription>
                Sesuaikan informasi umum website Anda di sini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <Label htmlFor="website-name">Nama Website</Label>
                <Input 
                  id="website-name" 
                  value={websiteName} 
                  onChange={(e) => setWebsiteName(e.target.value)} 
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Kontak</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input 
                    id="phone" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Alamat</Label>
                <Input 
                  id="address" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 bg-opacity-50 border-t border-gray-100 flex justify-between">
              {hasChanges && <span className="text-sm text-gray-500">Klik tombol untuk menyimpan perubahan</span>}
              <Button 
                onClick={handleSaveGeneral} 
                disabled={isSaving || !hasChanges}
                className="transition-all"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Simpan Perubahan
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance">
          <Card className="border border-gray-200 shadow-sm bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="bg-gray-50 bg-opacity-50 border-b border-gray-100">
              <CardTitle>Pengaturan Tampilan</CardTitle>
              <CardDescription>
                Sesuaikan tampilan website Anda di sini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications" className="text-base font-medium">Notifikasi</Label>
                  <p className="text-sm text-gray-500">
                    Aktifkan notifikasi pada dashboard
                  </p>
                </div>
                <Switch
                  id="notifications"
                  checked={enableNotifications}
                  onCheckedChange={setEnableNotifications}
                />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode" className="text-base font-medium">Dark Mode</Label>
                  <p className="text-sm text-gray-500">
                    Aktifkan mode gelap pada tampilan
                  </p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance" className="text-base font-medium">Mode Pemeliharaan</Label>
                  <p className="text-sm text-gray-500">
                    Aktifkan mode pemeliharaan website
                  </p>
                </div>
                <Switch
                  id="maintenance"
                  checked={maintenanceMode}
                  onCheckedChange={setMaintenanceMode}
                />
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 bg-opacity-50 border-t border-gray-100 flex justify-between">
              {hasChanges && <span className="text-sm text-gray-500">Klik tombol untuk menyimpan perubahan</span>}
              <Button 
                onClick={handleSaveAppearance} 
                disabled={isSaving || !hasChanges}
                className="transition-all"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Simpan Perubahan
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card className="border border-gray-200 shadow-sm bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="bg-gray-50 bg-opacity-50 border-b border-gray-100">
              <CardTitle>Keamanan</CardTitle>
              <CardDescription>
                Kelola pengaturan keamanan akun Anda di sini.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">Password Saat Ini</Label>
                <Input 
                  id="current-password" 
                  type="password" 
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Password Baru</Label>
                  <Input 
                    id="new-password" 
                    type="password" 
                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Konfirmasi Password</Label>
                  <Input 
                    id="confirm-password" 
                    type="password" 
                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 text-blue-700 rounded-lg">
                <p className="text-sm">
                  Pastikan password baru Anda minimal 8 karakter dan mengandung huruf besar, huruf kecil, angka, dan simbol.
                </p>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 bg-opacity-50 border-t border-gray-100">
              <Button 
                onClick={handleChangePassword}
                disabled={isSaving}
                className="transition-all"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    Ganti Password
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPengaturan;
