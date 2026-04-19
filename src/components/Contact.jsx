import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');

    // IMPORTANT: Replace these placeholder strings with your actual EmailJS credentials
    // You can find these in your EmailJS dashboard: https://dashboard.emailjs.com/
    const SERVICE_ID = 'service_xmp3lje';
    const TEMPLATE_ID = 'template_ebydo6b';
    const PUBLIC_KEY = 'KRT5V5qn0lKTti5_A';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          // Reset success message after 5 seconds
          setTimeout(() => setStatus('idle'), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
          setErrorMessage(error?.text || 'Invalid template, service issue, or unauthorized.');
          // Reset error message after 5 seconds
          setTimeout(() => {
            setStatus('idle');
            setErrorMessage('');
          }, 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-dark-lighter/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-gray-400 font-light tracking-wide">Open to professional opportunities and collaborations</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 flex flex-col"
          >
            <div className="glass p-8 rounded-2xl border border-white/5 group hover:border-primary/50 transition-all duration-500 gold-glow-hover flex-grow flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:text-champagne transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                <Mail size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3 group-hover:text-champagne transition-colors">Email Inquiries</h3>
              <p className="text-gray-400 mb-8 font-light leading-relaxed">
                Feel free to reach out for professional opportunities, formulations, or consulting.
              </p>
              <a href="mailto:contact.sudiksha1@gmail.com" className="text-primary hover:text-champagne text-lg font-medium transition-colors break-all">
                contact.sudiksha1@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 glass p-8 md:p-12 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors duration-500"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2 tracking-wide">Your Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="name"
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors font-light"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2 tracking-wide">Your Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="email"
                    required
                    className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors font-light"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 tracking-wide">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors font-light"
                  placeholder="Professional Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 tracking-wide">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none font-light"
                  placeholder="How can I assist you?"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-primary-light bg-primary/10 p-4 rounded-lg border border-primary/20">
                  <CheckCircle size={20} className="shrink-0" />
                  <span className="text-sm font-medium tracking-wide">Message sent successfully!</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-softpink bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                  <AlertCircle size={20} className="shrink-0" />
                  <span className="text-sm font-medium tracking-wide">Failed to send message: {errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="group w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-dark via-primary to-primary-light text-dark rounded-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    Sending...
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
