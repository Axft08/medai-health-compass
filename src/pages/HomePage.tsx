
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChatInterface from "@/components/chat/ChatInterface";
import ChatSuggestions from "@/components/chat/ChatSuggestions";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Activity, Brain, PlusCircle, Shield, MessageSquare, Clock } from "lucide-react";

const HomePage = () => {
  const [chatQuery, setChatQuery] = useState("");
  
  const handleSuggestionClick = (suggestion: string) => {
    setChatQuery(suggestion);
    
    // Find the chat input and focus it
    const inputElement = document.querySelector("input[placeholder='Type your health question...']") as HTMLInputElement;
    if (inputElement) {
      inputElement.value = suggestion;
      inputElement.focus();
      
      // Create and dispatch an input event
      const event = new Event("input", { bubbles: true });
      inputElement.dispatchEvent(event);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-medai-dark">
                  Your AI-powered guide to better health decisions
                </h1>
                <p className="text-lg text-gray-600">
                  MedAI Health Compass helps you navigate your health journey with AI-powered insights, 
                  symptom analysis, and personalized recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-medai-primary hover:bg-medai-dark" asChild>
                    <Link to="/signup">
                      Get Started
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/login">
                      Try Demo
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-medai-secondary opacity-5 rounded-full rotate-12"></div>
                <Card className="shadow-lg">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-medai-primary" />
                      MedAI Assistant
                    </CardTitle>
                    <CardDescription>Ask a health question</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="chat-container" style={{ height: "300px" }}>
                      <ChatInterface />
                    </div>
                    <ChatSuggestions onSuggestionClick={handleSuggestionClick} />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How MedAI Helps You</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our AI-powered platform provides valuable health insights while maintaining the highest standards of privacy and medical accuracy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Brain className="h-12 w-12 text-medai-primary mb-2" />
                  <CardTitle>Smart Symptom Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Describe your symptoms and receive AI-powered insights about possible causes and recommended next steps.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Activity className="h-12 w-12 text-medai-secondary mb-2" />
                  <CardTitle>Personalized Health Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get customized diet, exercise, and medication schedules based on your health profile and goals.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-medai-dark mb-2" />
                  <CardTitle>Secure & Private</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    End-to-end encryption and strict privacy controls keep your sensitive health information protected.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <PlusCircle className="h-12 w-12 text-red-500 mb-2" />
                  <CardTitle>Medical Knowledge Base</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Access reliable information about medicines, conditions, and treatments from trusted medical sources.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-green-500 mb-2" />
                  <CardTitle>Health Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Monitor your health metrics over time and receive insights on improving your overall wellbeing.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <MessageSquare className="h-12 w-12 text-purple-500 mb-2" />
                  <CardTitle>24/7 Digital Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Ask health questions anytime and get instant, medically-informed responses from our AI assistant.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="bg-medai-primary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to take control of your health?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Create your free account today and start your journey to better health with MedAI's intelligent guidance.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-medai-primary hover:bg-gray-100" asChild>
              <Link to="/signup">
                Get Started — It's Free
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
