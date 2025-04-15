
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Laptop, MessageSquare, BarChart, Brush } from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from "@/components/FAQ";

const Layanan = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "website",
      title: t('common.website'),
      description: "Website responsif dan modern untuk kebutuhan bisnis Anda",
      icon: <Laptop className="h-12 w-12 text-blue-600" />,
      link: "/layanan/website",
      features: [
        "Desain responsif",
        "SEO-friendly",
        "CMS terintegrasi",
        "Keamanan tingkat tinggi",
        "Hosting dan domain management"
      ]
    },
    {
      id: "aplikasi",
      title: t('common.app'),
      description: "Aplikasi mobile & web yang disesuaikan dengan kebutuhan spesifik",
      icon: <Code className="h-12 w-12 text-blue-600" />,
      link: "/layanan/aplikasi",
      features: [
        "Aplikasi Android & iOS",
        "Aplikasi web berbasis SPA",
        "Integrasi API",
        "Backend development",
        "Database design & optimization"
      ]
    },
    {
      id: "konsultasi",
      title: t('common.consultation'),
      description: "Solusi dan strategi terbaik untuk transformasi digital bisnis Anda",
      icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
      link: "/layanan/konsultasi",
      features: [
        "Analisis kebutuhan IT",
        "Strategi transformasi digital",
        "Optimalisasi infrastruktur",
        "Audit keamanan",
        "Pelatihan tim"
      ]
    },
    {
      id: "seo",
      title: t('common.seo'),
      description: "Tingkatkan peringkat website Anda di mesin pencari",
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      link: "/layanan/seo",
      features: [
        "Analisis keyword",
        "On-page optimization",
        "Off-page strategy",
        "Content marketing",
        "Laporan performa berkala"
      ]
    },
    {
      id: "ui-ux",
      title: t('common.uiux'),
      description: "Desain intuitif yang meningkatkan engagement pengguna",
      icon: <Brush className="h-12 w-12 text-blue-600" />,
      link: "/layanan/ui-ux",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Visual design",
        "User testing",
        "Design system"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Berapa lama waktu yang dibutuhkan untuk membuat sebuah website?",
      answer: "Waktu pengembangan website bervariasi tergantung kompleksitas dan kebutuhan. Website sederhana dapat selesai dalam 2-4 minggu, website bisnis dalam 1-2 bulan, dan website dengan fitur kompleks seperti e-commerce atau aplikasi web dapat membutuhkan 2-4 bulan."
    },
    {
      question: "Apakah TechConsult menyediakan layanan maintenance setelah website/aplikasi selesai?",
      answer: "Ya, kami menyediakan paket maintenance yang mencakup update berkala, backup, keamanan, dan dukungan teknis. Kami juga menawarkan SLA (Service Level Agreement) untuk memastikan sistem Anda berjalan optimal."
    },
    {
      question: "Berapa biaya untuk mengembangkan aplikasi mobile?",
      answer: "Biaya pengembangan aplikasi mobile sangat bervariasi tergantung kompleksitas, platform target (iOS/Android/keduanya), dan fitur yang dibutuhkan. Kami menawarkan konsultasi gratis untuk memberikan estimasi biaya yang lebih akurat sesuai kebutuhan bisnis Anda."
    },
    {
      question: "Apakah TechConsult dapat mengintegrasikan sistem yang sudah ada dengan sistem baru?",
      answer: "Ya, kami berpengalaman dalam mengintegrasikan sistem yang sudah ada dengan solusi baru. Tim kami akan melakukan analisis mendalam terhadap sistem yang sudah berjalan dan merancang solusi integrasi yang efisien dan efektif."
    },
    {
      question: "Bagaimana proses kerja TechConsult dalam mengembangkan sebuah proyek?",
      answer: "Proses pengembangan kami mengikuti metodologi Agile yang meliputi: (1) Discovery & Requirements Gathering, (2) Design & Planning, (3) Development iteratif, (4) Testing & QA, (5) Deployment, dan (6) Post-launch support. Kami akan berkomunikasi secara berkala dan melibatkan Anda dalam setiap tahap penting."
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('pages.services.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('pages.services.description')}
          </p>
        </div>
        
        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <Card key={service.id} className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardHeader>
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <CardTitle className="text-2xl font-bold text-center">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link to={service.link}>
                  <Button>
                    {t('common.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Process Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('pages.services.process.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('pages.services.process.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('pages.services.process.steps.consultation.title')}</h3>
              <p className="text-gray-600">
                {t('pages.services.process.steps.consultation.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('pages.services.process.steps.development.title')}</h3>
              <p className="text-gray-600">
                {t('pages.services.process.steps.development.description')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('pages.services.process.steps.implementation.title')}</h3>
              <p className="text-gray-600">
                {t('pages.services.process.steps.implementation.description')}
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-20">
          <FAQ 
            title={t('pages.services.faq.title')} 
            description={t('pages.services.faq.description')}
            items={faqItems} 
          />
        </div>
        
        {/* CTA Section */}
        <div className="bg-blue-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('pages.services.cta.title')}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('pages.services.cta.description')}
          </p>
          <Link to="/kontak">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              {t('pages.services.cta.button')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layanan;
