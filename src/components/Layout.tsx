
import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Footer from "./Footer";
import Promotion from "./Promotion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const [showPromotion, setShowPromotion] = useState(true);
  
  // Sample promotion data
  const currentPromotion = {
    title: "Special Website Promo",
    description: "Get a discount on company profile website development",
    discount: "25% OFF",
    code: "WEBSITE25",
    expiryDate: "2025-05-30", // Promo end date
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
