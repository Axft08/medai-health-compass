
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-medai-primary flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-bold text-xl text-medai-dark">MedAI</span>
              <span className="text-medai-secondary font-medium">Health Compass</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              MedAI Health Compass provides AI-powered health information and guidance. 
              Always consult a healthcare professional for medical advice.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-medai-primary">Home</Link></li>
              <li><Link to="/dashboard" className="hover:text-medai-primary">Dashboard</Link></li>
              <li><Link to="/privacy" className="hover:text-medai-primary">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/terms" className="hover:text-medai-primary">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-medai-primary">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-medai-primary">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} MedAI Health Compass. All rights reserved.</p>
          <p className="mt-2">
            MedAI is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
