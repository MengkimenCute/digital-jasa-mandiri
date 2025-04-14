
import { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Promotion from "./Promotion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showPromotion, setShowPromotion] = useState(true);
  
  // Data contoh untuk promo
  const currentPromotion = {
    title: "Promo Spesial Website",
    description: "Dapatkan diskon untuk pembuatan website company profile",
    discount: "25% OFF",
    code: "WEBSITE25",
    expiryDate: "2025-05-30", // Tanggal akhir promo
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {showPromotion && (
          <div className="container mx-auto px-4 py-4">
            <Promotion 
              {...currentPromotion}
              className="mb-6"
            />
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
