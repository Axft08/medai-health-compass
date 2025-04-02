
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="mb-4">
                At MedAI Health Compass, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect information about you in various ways:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Personal Data:</strong> Name, email address, and other contact information you provide when creating an account.
                </li>
                <li>
                  <strong>Health Information:</strong> Symptoms, conditions, medications, and other health-related information you share with our AI assistant.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our application, including chat interactions, features used, and time spent.
                </li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-4">We may use the information we collect for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To personalize your experience with our AI assistant</li>
                <li>To improve our algorithms and health recommendations</li>
                <li>To communicate with you about your account or use of our Service</li>
                <li>To detect, prevent and address technical or security issues</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>End-to-end encryption for all health-related conversations</li>
                <li>Secure storage of personal data using industry-standard encryption</li>
                <li>Regular security audits and vulnerability testing</li>
                <li>Strict access controls for employee access to user data</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Your Data Rights</h2>
              <p className="mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your personal data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at privacy@medaihealth.com.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">HIPAA Compliance</h2>
              <p className="mb-4">
                While MedAI Health Compass strives to maintain standards consistent with healthcare privacy regulations, we are not a covered entity under HIPAA (Health Insurance Portability and Accountability Act). However, we implement security measures and privacy controls inspired by HIPAA requirements to protect your health information.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-2">Email: privacy@medaihealth.com</p>
              <p>Last Updated: {new Date().toLocaleDateString()}</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
