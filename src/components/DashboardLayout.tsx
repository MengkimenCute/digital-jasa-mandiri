
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Home, Newspaper, Settings, LayoutDashboard, Users, FileText, LogOut, Briefcase } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  
  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    toast({
      title: "Berhasil Logout",
      description: "Anda telah keluar dari dashboard admin.",
    });
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:block">
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <h2 className="font-bold text-xl text-blue-600">TechConsult</h2>
            <p className="text-gray-500 text-sm">Admin Dashboard</p>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => navigate("/admin")}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => navigate("/admin/layanan")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Layanan
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => navigate("/admin/karir")}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Lowongan Kerja
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => navigate("/admin/pengguna")}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Pengguna
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => navigate("/admin/blog")}
                >
                  <Newspaper className="mr-2 h-4 w-4" />
                  Blog
                </Button>
              </li>
              <li>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start" 
                  onClick={() => navigate("/admin/pengaturan")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Pengaturan
                </Button>
              </li>
            </ul>
          </nav>
          
          <div className="p-4 border-t">
            <Button 
              variant="outline" 
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
      
      {/* Mobile Sidebar */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white md:hidden">
        <div className="grid h-16 grid-cols-6">
          <Button variant="ghost" className="justify-center" onClick={() => navigate("/admin")}>
            <div className="flex flex-col items-center">
              <LayoutDashboard className="h-5 w-5" />
              <span className="text-xs">Dashboard</span>
            </div>
          </Button>
          
          <Button variant="ghost" className="justify-center" onClick={() => navigate("/admin/layanan")}>
            <div className="flex flex-col items-center">
              <FileText className="h-5 w-5" />
              <span className="text-xs">Layanan</span>
            </div>
          </Button>
          
          <Button variant="ghost" className="justify-center" onClick={() => navigate("/admin/karir")}>
            <div className="flex flex-col items-center">
              <Briefcase className="h-5 w-5" />
              <span className="text-xs">Karir</span>
            </div>
          </Button>
          
          <Button variant="ghost" className="justify-center" onClick={() => navigate("/admin/pengguna")}>
            <div className="flex flex-col items-center">
              <Users className="h-5 w-5" />
              <span className="text-xs">Pengguna</span>
            </div>
          </Button>
          
          <Button variant="ghost" className="justify-center" onClick={() => navigate("/admin/blog")}>
            <div className="flex flex-col items-center">
              <Newspaper className="h-5 w-5" />
              <span className="text-xs">Blog</span>
            </div>
          </Button>
          
          <Button variant="ghost" className="justify-center" onClick={handleLogout}>
            <div className="flex flex-col items-center">
              <LogOut className="h-5 w-5" />
              <span className="text-xs">Logout</span>
            </div>
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="flex-1 p-8 md:ml-0 pb-20 md:pb-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
