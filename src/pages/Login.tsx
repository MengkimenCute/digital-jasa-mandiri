
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Kembali ke Website</span>
            </Link>
            <Link to="/" className="text-xl font-bold text-blue-600">
              TechConsult
            </Link>
          </div>
          
          <LoginForm />
          
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Untuk demo, gunakan: <br />
              Email: admin@example.com <br />
              Password: password
            </p>
          </div>
        </div>
      </div>
      
      <footer className="mt-auto py-6 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} TechConsult. Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
};

export default Login;
