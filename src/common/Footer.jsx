import React from 'react';
import { Bolt, Send, TwitterIcon, Code, Github} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#050a18] border-t border-gray-200 dark:border-[#1e293b]/50 pt-16 pb-8 transition-colors duration-300">
      <div className="px-4 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <div className="w-8 h-8 rounded-lg bg-[#135bec] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Bolt size={18} fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Great Wall</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
              Democratizing energy access through AI and Blockchain technology to build a resilient, sustainable power grid for Kenya.
            </p>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-gray-400">
              <li><a href="/about" className="hover:text-[#135bec] transition-colors">About Us</a></li>
              <li><a href="/service" className="hover:text-[#135bec] transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-[#135bec] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600 dark:text-gray-400">
              <li><a className="hover:text-[#135bec] transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-[#135bec] transition-colors" href="#">API Documentation</a></li>
              <li><a className="hover:text-[#135bec] transition-colors" href="#">Whitepaper</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-5 text-sm uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-gray-500 mb-4">Get the latest on grid status and token rewards.</p>
            <div className="flex gap-2">
              <input 
                className="bg-gray-100 dark:bg-[#0d1425] border border-gray-200 dark:border-[#324467] text-sm rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all" 
                placeholder="Email address" 
                type="email"
              />
              <button className="bg-[#135bec] hover:bg-[#135bec]/90 text-white px-4 py-2 rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-[#1e293b]/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-500 dark:text-gray-500 uppercase tracking-widest font-medium">
            © 2025 Great Wall Energy. AI Sentinel Protected.
          </p>
          
          <div className="flex gap-6 text-gray-400 dark:text-gray-500">
            <a href="#" className="hover:text-[#135bec] transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-[#135bec] transition-colors"><TwitterIcon size={20} /></a>
            <a href="/" className="hover:text-[#135bec] transition-colors"><Code size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;