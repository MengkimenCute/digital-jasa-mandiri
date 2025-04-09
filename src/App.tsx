
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import Layanan from "./pages/Layanan";
import LayananDetail from "./pages/LayananDetail";
import Portofolio from "./pages/Portofolio";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/layanan" element={<Layout><Layanan /></Layout>} />
          <Route path="/layanan/:id" element={<Layout><LayananDetail /></Layout>} />
          <Route path="/portofolio" element={<Layout><Portofolio /></Layout>} />
          <Route path="/tentang-kami" element={<Layout><TentangKami /></Layout>} />
          <Route path="/kontak" element={<Layout><Kontak /></Layout>} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
