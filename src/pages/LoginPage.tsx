
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { isAuthenticated } from "@/lib/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 bg-gray-50">
        <LoginForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
