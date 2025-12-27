import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bolt, Wallet, Menu, X, Sun, Moon } from 'lucide-react';
import { useEnergy } from '../global/EnergyContext';

const Header = () => {
  const { isWalletConnected, connectWallet } = useEnergy();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/service' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-[#232f48] bg-white dark:bg-[#0b1019] transition-all">
      <div className="flex justify-center w-full px-4 md:px-10 py-3">
        <div className="flex items-center justify-between w-full max-w-7xl">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-slate-900 dark:text-white">
            <div className="w-8 h-8 rounded-lg bg-[#135bec] flex items-center justify-center text-white">
              <Bolt size={18} fill="currentColor" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">Great Wall</h2>
          </Link>

          {/* DESKTOP NAV LINKS (Visible only on Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-[#135bec] dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-slate-600 dark:text-yellow-400">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop Connect Wallet Button */}
            <button 
              onClick={connectWallet}
              className="hidden md:flex bg-[#135bec] hover:bg-blue-600 text-white h-10 px-5 rounded-lg text-sm font-bold items-center justify-center transition-all shadow-lg shadow-blue-500/20"
            >
              <Wallet size={16} className="mr-2" />
              <span>{isWalletConnected ? "0x71C...4F2" : "Connect Wallet"}</span>
            </button>

            {/* Hamburger Button (Hidden on Desktop) */}
            <button onClick={toggleMenu} className="md:hidden text-slate-900 dark:text-white p-2">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER SYSTEM */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={toggleMenu}
        />
        
        <div className={`absolute right-0 top-0 h-full w-[280px] bg-white dark:bg-[#111827] shadow-2xl p-6 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
            <span className="font-bold text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest">Menu</span>
            <button onClick={toggleMenu} className="p-1 text-slate-500 dark:text-slate-400 hover:text-red-500">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={toggleMenu}
                className="text-lg font-semibold text-slate-800 dark:text-white py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-[#135bec] transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4">
            <button 
              onClick={() => { connectWallet(); toggleMenu(); }}
              className="w-full bg-[#135bec] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-transform"
            >
              <Wallet size={18} />
              {isWalletConnected ? "0x71C...4F2" : "Connect Wallet"}
            </button>
            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">
              © 2025 Great Wall Energy
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;