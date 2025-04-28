
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg mb-6 text-white/80">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100/60 border border-dark-200 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30 transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100/60 border border-dark-200 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30 transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-100/60 border border-dark-200 rounded-md focus:outline-none focus:ring-1 focus:ring-white/30 transition-colors resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 border border-white rounded-md hover:bg-white/5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.1)'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="self-center"
          >
            <div className="glow-card p-8 flex flex-col items-center">
              <h3 className="text-xl font-bold italic mb-6">Connect with me</h3>
              
              <div className="flex space-x-6 mb-6">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-dark-200 rounded-full hover:border-white/40 transition-all hover:scale-110"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Github className="w-5 h-5" />
                </a>
                
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-dark-200 rounded-full hover:border-white/40 transition-all hover:scale-110"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Twitter className="w-5 h-5" />
                </a>
                
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-dark-200 rounded-full hover:border-white/40 transition-all hover:scale-110"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-white/70 mb-1">Or email me at:</p>
                <a 
                  href="mailto:john@example.com" 
                  className="text-white hover:underline hover:text-white/90 transition-colors"
                >
                  john@example.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
