
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ChatInterface from "@/components/chat/ChatInterface";
import ChatHistory from "@/components/dashboard/ChatHistory";
import HealthMetrics from "@/components/dashboard/HealthMetrics";
import { isAuthenticated, getUser } from "@/lib/auth";

const DashboardPage = () => {
  const navigate = useNavigate();
  const user = getUser();
  
  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold mb-6">
            Welcome, {user.name || user.email.split('@')[0]}
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Health Assistant</h2>
                  <div className="chat-container">
                    <ChatInterface />
                  </div>
                </CardContent>
              </Card>
              
              <HealthMetrics />
            </div>
            
            <div className="space-y-8">
              <ChatHistory />
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Medical Disclaimer</h2>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>
                      MedAI Health Compass provides health information for educational purposes only.
                    </p>
                    <p>
                      The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                    <p>
                      Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
