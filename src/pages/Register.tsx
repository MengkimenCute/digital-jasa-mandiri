
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import RegisterForm from "@/components/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <div className="flex items-center justify-between mb-8">
          <Link 
            to="/login" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Login</span>
          </Link>
        </div>
        
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Daftar Akun Baru</h1>
          <p className="text-gray-600">Silakan lengkapi data diri Anda</p>
        </div>
        
        <RegisterForm />
        
        <p className="mt-6 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-800 hover:underline">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
