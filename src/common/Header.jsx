import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bolt, Wallet, Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useEnergy } from '../global/EnergyContext';

const Header = () => {
    const { isWalletConnected, connectWallet, isDarkMode, toggleDarkMode } = useEnergy();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/service', hasDropdown: true },
        { name: 'Whitepaper', path: '/whitepaper' },
        { name: 'Contact', path: '/contact' },
    ];

    const serviceLinks = [
        { name: 'Energy Monitoring', path: '/service#monitoring' },
        { name: 'AI Sentinel', path: '/service#ai-sentinel' },
        { name: 'Smart Maintenance', path: '/service#maintenance' },
        { name: 'Green Certification', path: '/service#certification' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-gray-100 dark:border-[#232f48] bg-white/80 dark:bg-[#070c1a]/80 backdrop-blur-lg transition-all">
                <div className="flex justify-center w-full px-4 md:px-6 py-3">
                    <div className="flex items-center justify-between w-full max-w-7xl">

                        {/* Logo */}
                        <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 text-slate-900 dark:text-white group">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#135bec] to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                                <Bolt size={20} fill="currentColor" />
                            </div>
                            <div className="hidden sm:block">
                                <h2 className="text-lg font-bold tracking-tight">Great Wall</h2>
                                <p className="text-[10px] text-gray-400 -mt-1 uppercase tracking-wider">Energy Protocol</p>
                            </div>
                        </Link>

                        {/* DESKTOP NAV */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative">
                                    {link.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                                    isActive(link.path) 
                                                        ? 'text-[#135bec] bg-blue-50 dark:bg-[#135bec]/10' 
                                                        : 'text-slate-600 dark:text-gray-300 hover:text-[#135bec] hover:bg-gray-50 dark:hover:bg-[#192233]'
                                                }`}
                                            >
                                                {link.name} <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            
                                            {/* Services Dropdown */}
                                            {isServicesOpen && (
                                                <div className="absolute top-full left-0 mt-2 w-56 py-2 bg-white dark:bg-[#192233] rounded-xl border border-gray-100 dark:border-[#324467] shadow-xl shadow-gray-200/20 dark:shadow-black/20 overflow-hidden">
                                                    {serviceLinks.map((service) => (
                                                        <Link
                                                            key={service.name}
                                                            to={service.path}
                                                            onClick={() => { setIsServicesOpen(false); scrollToTop(); }}
                                                            className="block px-4 py-3 text-sm text-slate-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-[#135bec]/10 hover:text-[#135bec] transition-colors"
                                                        >
                                                            {service.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={scrollToTop}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                                isActive(link.path) 
                                                    ? 'text-[#135bec] bg-blue-50 dark:bg-[#135bec]/10' 
                                                    : 'text-slate-600 dark:text-gray-300 hover:text-[#135bec] hover:bg-gray-50 dark:hover:bg-[#192233]'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Right Side */}
                        <div className="flex items-center gap-2">
                            {/* Dark Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className="p-2.5 rounded-lg text-slate-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#192233] transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>

                            {/* Wallet Button */}
                            <button
                                onClick={connectWallet}
                                className="hidden sm:flex bg-[#135bec] hover:bg-blue-600 text-white h-10 px-5 rounded-lg text-sm font-bold items-center justify-center transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                            >
                                <Wallet size={16} className="mr-2" />
                                <span>{isWalletConnected ? "0x71C...4F2" : "Connect"}</span>
                            </button>

                            {/* Mobile Controls */}
                            <div className="flex items-center gap-2 lg:hidden">
                                <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
                                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 z-[100] lg:hidden transition-all ${isMenuOpen ? 'visible' : 'invisible'}`}>
                
                {/* Background Dimmer */}
                <div 
                    className={`absolute inset-0 bg-black/5 dark:bg-black/20 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
                    onClick={toggleMenu}
                />

                <div 
                    className={`absolute top-0 left-0 w-full h-3/4 bg-slate-200/90 dark:bg-[#192233]/95 shadow-2xl 
                        transition-transform duration-500 ease-in-out flex flex-col p-4 rounded-b-[2.5rem] 
                        border-b border-gray-200/20 dark:border-[#324467]/20 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                    style={{ backdropFilter: 'none' }}
                >
                    <div className="flex items-center justify-between mb-5">
                        <Link to="/" onClick={() => { toggleMenu(); scrollToTop(); }} className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#135bec] flex items-center justify-center text-white">
                                <Bolt size={18} fill="currentColor" />
                            </div>
                            <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Great Wall</span>
                        </Link>
                        <button onClick={toggleMenu} className="p-2 bg-white/50 dark:bg-[#0f141e]/50 rounded-full text-slate-900 dark:text-white shadow-sm border border-gray-200/20 dark:border-[#324467]/20">
                            <X size={20} />
                        </button>
                    </div>

                    <nav className="flex flex-col items-center justify-center flex-grow gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => { toggleMenu(); scrollToTop(); }}
                                className="text-base font-bold text-slate-800 dark:text-gray-200 hover:text-[#135bec] dark:hover:text-blue-400 transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto space-y-4 pb-4">
                        <button
                            onClick={toggleDarkMode}
                            className="w-full bg-gray-100 dark:bg-[#0f141e] text-slate-700 dark:text-gray-300 py-3 mt-3 rounded-xl font-bold text-sm flex items-center justify-center gap-3 border border-gray-200 dark:border-[#324467]"
                        >
                            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                        </button>
                        <button
                            onClick={() => { connectWallet(); toggleMenu(); scrollToTop(); }}
                            className="w-full bg-[#135bec] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20"
                        >
                            <Wallet size={18} />
                            {isWalletConnected ? "0x71C...4F2" : "Connect Wallet"}
                        </button>
                        <p className="text-center text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">
                            © 2026 Great Wall Energy
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
