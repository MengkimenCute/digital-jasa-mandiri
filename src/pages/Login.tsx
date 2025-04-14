
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Website</span>
          </Link>
          <Link to="/" className="text-xl font-bold text-blue-600">
            TechConsult
          </Link>
        </div>
        
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Selamat Datang Kembali</h1>
          <p className="text-gray-600">Masuk untuk mengakses dashboard admin</p>
        </div>
        
        <LoginForm />
        
        <div className="mt-8 text-center text-sm text-gray-500 p-4 bg-gray-50 rounded-lg">
          <p className="font-medium mb-1">Untuk demo, gunakan:</p>
          <p>
            Email: admin@example.com<br />
            Password: password
          </p>
        </div>
      </div>
      
      <footer className="mt-8 w-full text-center text-sm text-white/70">
        <p>&copy; {new Date().getFullYear()} TechConsult. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
};

export default Login;
