import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bolt, Wallet, Menu, X, Moon, Sun } from 'lucide-react';
import { useEnergy } from '../global/EnergyContext';

const Header = () => {
    const { isWalletConnected, connectWallet, isDarkMode, toggleDarkMode } = useEnergy();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/service' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-100 dark:border-[#232f48] bg-white dark:bg-[#070c1a] transition-all">
            <div className="flex justify-center w-full px-4 md:px-10 py-3">
                <div className="flex items-center justify-between w-full max-w-7xl">

                    {/* Logo */}
                    <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 text-slate-900 dark:text-white">
                        <div className="w-8 h-8 rounded-lg bg-[#135bec] flex items-center justify-center text-white">
                            <Bolt size={18} fill="currentColor" />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">Great Wall</h2>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={scrollToTop}
                                className="text-sm font-bold text-slate-600 dark:text-gray-300 hover:text-[#135bec] dark:hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg text-slate-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#192233] transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <button
                            onClick={connectWallet}
                            className="hidden md:flex bg-[#135bec] hover:bg-blue-600 text-white h-10 px-5 rounded-lg text-sm font-bold items-center justify-center transition-all shadow-lg shadow-blue-500/20"
                        >
                            <Wallet size={16} className="mr-2" />
                            <span>{isWalletConnected ? "0x71C...4F2" : "Connect Wallet"}</span>
                        </button>

                        <button onClick={toggleMenu} className="md:hidden text-slate-900 dark:text-white p-2">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
                
                {/* Background Dimmer */}
                <div 
                    className={`absolute inset-0 bg-black/5 dark:bg-black/20 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
                    onClick={toggleMenu}
                />

                <div 
                    className={`absolute top-0 left-0 w-full h-1/2 bg-slate-200/90 dark:bg-[#192233]/95 shadow-2xl 
                        transition-transform duration-500 ease-in-out flex flex-col p-4 rounded-b-[2.5rem] 
                        border-b border-gray-200/20 dark:border-[#324467]/20 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
                    style={{ backdropFilter: 'none' }}
                >
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#135bec] flex items-center justify-center text-white">
                                <Bolt size={18} fill="currentColor" />
                            </div>
                            <span className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Great Wall</span>
                        </div>
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
                            © 2025 Great Wall Energy
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;