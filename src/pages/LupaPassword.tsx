
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ResetPasswordForm from "@/components/ResetPasswordForm";

const LupaPassword = () => {
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
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Reset Password</h1>
          <p className="text-gray-600">Masukkan email Anda untuk menerima link reset password</p>
        </div>
        
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default LupaPassword;
