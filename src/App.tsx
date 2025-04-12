
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
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import AdminLayanan from "./pages/admin/AdminLayanan";
import AdminPengguna from "./pages/admin/AdminPengguna";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminPengaturan from "./pages/admin/AdminPengaturan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" closeButton />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/layanan" element={<Layout><Layanan /></Layout>} />
          <Route path="/layanan/:id" element={<Layout><LayananDetail /></Layout>} />
          <Route path="/portofolio" element={<Layout><Portofolio /></Layout>} />
          <Route path="/tentang-kami" element={<Layout><TentangKami /></Layout>} />
          <Route path="/kontak" element={<Layout><Kontak /></Layout>} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/admin/layanan" element={<DashboardLayout><AdminLayanan /></DashboardLayout>} />
          <Route path="/admin/pengguna" element={<DashboardLayout><AdminPengguna /></DashboardLayout>} />
          <Route path="/admin/blog" element={<DashboardLayout><AdminBlog /></DashboardLayout>} />
          <Route path="/admin/pengaturan" element={<DashboardLayout><AdminPengaturan /></DashboardLayout>} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
