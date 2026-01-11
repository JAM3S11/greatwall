import React, { useRef, useState } from 'react';
import { Bolt, Send, TwitterIcon, Code, Github, Loader2} from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Footer = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Function to ensure scroll to top (extra safety)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const sendEmailForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
    )
    .then(() => {
      setIsSubmitting(false);
      toast.success("Thank you! We will keep you updated on the latest news.", { 
        duration: 4000, 
        position: "top-right", 
        style: {
          background: '#0d1425', // Matches your dark theme
          color: '#fff',
          border: '1px solid #135bec', // Your blue branding
          borderRadius: '16px',
          fontSize: '14px',
          fontWeight: 'bold',
        },
        iconTheme: {
          primary: '#135bec',
          secondary: '#fff',
        },
      });
      e.target.reset();
      scrollToTop();
    }, () => {
      setIsSubmitting(false);
      toast.error("Network error. Please try again later.", {
        duration: 5000,
        position: "top-center"
      });
    });
  }

  return (
    <footer className="bg-white dark:bg-[#070c1a] border-t border-gray-200 dark:border-[#232f48] pt-16 pb-8 transition-colors duration-300">
      <div className="px-4 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-[#135bec] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Bolt size={18} fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Great Wall</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed">
              Democratizing energy access through AI and Blockchain technology to build a resilient, sustainable power grid for Kenya.
            </p>
          </div>

          {/* Company Column - Updated to use Link */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-gray-300">
              <li>
                <Link to="/about" onClick={scrollToTop} className="hover:text-[#135bec] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/service" onClick={scrollToTop} className="hover:text-[#135bec] transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="hover:text-[#135bec] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-gray-300">
              <li><Link to="/blog" onClick={scrollToTop} className="hover:text-[#135bec] transition-colors">Blog</Link></li>
              <li><Link to="/api" onClick={scrollToTop} className="hover:text-[#135bec] transition-colors">API Documentation</Link></li>
              <li><Link to="/whitepaper" onClick={scrollToTop} className="hover:text-[#135bec] transition-colors">Whitepaper</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-gray-500 dark:text-gray-100 mb-4">Get the latest on grid status and token rewards.</p>
            <form ref={form} onSubmit={sendEmailForm} className='space-y-2'>
              <div className="flex gap-2">
                <input 
                  name="user_email"
                  className="bg-gray-100 border border-gray-200 text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all" 
                  placeholder="Email address" 
                  type="email"
                  required
                />
                <button disabled={isSubmitting} className="bg-[#135bec] hover:bg-[#135bec]/90 text-white px-4 py-2 rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                  {isSubmitting ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-[#232f48] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-500 dark:text-gray-300 uppercase tracking-widest font-medium">
            © 2026 Great Wall Energy. AI Sentinel Protected.
          </p>
          
          <div className="flex gap-6 text-gray-400 dark:text-slate-100">
            <a href="https://github.com/JAM3S11/greatwall.git" target="_blank" rel="noopener noreferrer" className="hover:text-[#135bec] transition-colors"><Github size={20} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#135bec] transition-colors"><TwitterIcon size={20} /></a>
            <Link to="/" onClick={scrollToTop} className="hover:text-[#135bec] transition-colors"><Code size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;