import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import DashboardLayout from "./components/DashboardLayout";
import Index from "./pages/Index";
import Layanan from "./pages/Layanan";
import LayananDetail from "./pages/LayananDetail";
import Portofolio from "./pages/Portofolio";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import Karir from "./pages/Karir";
import KarirDetail from "./pages/KarirDetail";
import JadwalKonsultasi from "./pages/JadwalKonsultasi";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import LupaPassword from "./pages/LupaPassword";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-right" closeButton />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/layanan" element={<Layout><Layanan /></Layout>} />
          <Route path="/layanan/:id" element={<Layout><LayananDetail /></Layout>} />
          <Route path="/portofolio" element={<Layout><Portofolio /></Layout>} />
          <Route path="/tentang-kami" element={<Layout><TentangKami /></Layout>} />
          <Route path="/kontak" element={<Layout><Kontak /></Layout>} />
          <Route path="/karir" element={<Layout><Karir /></Layout>} />
          <Route path="/karir/:id" element={<Layout><KarirDetail /></Layout>} />
          <Route path="/jadwal-konsultasi" element={<Layout><JadwalKonsultasi /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/lupa-password" element={<LupaPassword />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/admin/layanan" element={<DashboardLayout><AdminLayanan /></DashboardLayout>} />
          <Route path="/admin/pengguna" element={<DashboardLayout><AdminPengguna /></DashboardLayout>} />
          <Route path="/admin/blog" element={<DashboardLayout><AdminBlog /></DashboardLayout>} />
          <Route path="/admin/karir" element={<DashboardLayout><AdminKarir /></DashboardLayout>} />
          <Route path="/admin/pengaturan" element={<DashboardLayout><AdminPengaturan /></DashboardLayout>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
