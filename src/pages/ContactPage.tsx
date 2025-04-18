
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Layout from "@/components/layout/Layout";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your message has been sent! We'll get back to you soon.");
  };

  return (
    <Layout>
      <div className="py-16">
        <div className="chrono-container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4 text-center"
          >
            Contact Us
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-chronoGray-dark max-w-3xl mx-auto text-center mb-16"
          >
            Have a question or need assistance? We're here to help.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-medium mb-6">Get in Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      className="w-full px-4 py-2 border border-chronoGray-light rounded-md" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-chronoGray-light rounded-md resize-none" 
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="chrono-button-primary flex items-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-chronoGray-light/10 p-3 rounded-full">
                        <MapPin size={24} className="text-chronoBlue" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Visit Us</h3>
                        <address className="not-italic text-chronoGray-dark">
                          123 Tech Plaza, Silicon Valley<br />
                          San Francisco, CA 94107
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="bg-chronoGray-light/10 p-3 rounded-full">
                        <Phone size={24} className="text-chronoBlue" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Call Us</h3>
                        <p className="text-chronoGray-dark">
                          <a href="tel:+11234567890" className="hover:text-chronoBlue">+1 (123) 456-7890</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="bg-chronoGray-light/10 p-3 rounded-full">
                        <Mail size={24} className="text-chronoBlue" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email Us</h3>
                        <p className="text-chronoGray-dark">
                          <a href="mailto:support@chrono.com" className="hover:text-chronoBlue">support@chrono.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm overflow-hidden h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1034366469145!2d-122.41941272392031!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1ae38761a3%3A0x7aea1f3157ebf036!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1681144620029!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chrono Store Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
