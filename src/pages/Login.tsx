
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl px-6 py-8 animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/" 
            className="flex items-center text-white hover:text-blue-200 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Website</span>
          </Link>
          <Link to="/" className="text-xl font-bold text-white">
            TechConsult
          </Link>
        </div>
        
        <LoginForm />
        
        <div className="mt-8 text-center text-sm text-gray-200">
          <p>
            Untuk demo, gunakan: <br />
            Email: admin@example.com <br />
            Password: password
          </p>
        </div>
      </div>
      
      <footer className="absolute bottom-4 w-full text-center text-sm text-white/70">
        <p>&copy; {new Date().getFullYear()} TechConsult. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
};

export default Login;
