import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bolt, Wallet, Menu, X } from 'lucide-react';
import { useEnergy } from '../global/EnergyContext';

const Header = () => {
    const { isWalletConnected, connectWallet } = useEnergy();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Reusable scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/service' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white transition-all">
            <div className="flex justify-center w-full px-4 md:px-10 py-3">
                <div className="flex items-center justify-between w-full max-w-7xl">

                    {/* Logo */}
                    <Link to="/" onClick={scrollToTop} className="flex items-center gap-2 text-slate-900">
                        <div className="w-8 h-8 rounded-lg bg-[#135bec] flex items-center justify-center text-white">
                            <Bolt size={18} fill="currentColor" />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">Great Wall</h2>
                    </Link>

                    {/* DESKTOP NAV LINKS */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={scrollToTop}
                                className="text-sm font-bold text-slate-600 hover:text-[#135bec] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={connectWallet}
                            className="hidden md:flex bg-[#135bec] hover:bg-blue-600 text-white h-10 px-5 rounded-lg text-sm font-bold items-center justify-center transition-all shadow-lg shadow-blue-500/20"
                        >
                            <Wallet size={16} className="mr-2" />
                            <span>{isWalletConnected ? "0x71C...4F2" : "Connect Wallet"}</span>
                        </button>

                        <button onClick={toggleMenu} className="md:hidden text-slate-900 p-2">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* FULL-SCREEN WHITE MOBILE MENU */}
            <div className={`fixed inset-0 z-[100] md:hidden bg-white transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
                
                <div className="flex flex-col h-full w-full p-6">
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-[#135bec] flex items-center justify-center text-white">
                                <Bolt size={18} fill="currentColor" />
                            </div>
                            <span className="text-xl font-bold text-slate-900">Great Wall</span>
                        </div>
                        <button onClick={toggleMenu} className="p-2 bg-slate-100 rounded-full text-slate-900">
                            <X size={24} />
                        </button>
                    </div>

                    <nav className="flex flex-col items-center justify-center flex-grow gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => { toggleMenu(); scrollToTop(); }}
                                className="text-4xl font-black text-slate-900 hover:text-[#135bec] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-auto space-y-4 pb-10">
                        <button
                            onClick={() => { connectWallet(); toggleMenu(); scrollToTop(); }}
                            className="w-full bg-[#135bec] text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-500/20"
                        >
                            <Wallet size={20} />
                            {isWalletConnected ? "0x71C...4F2" : "Connect Wallet"}
                        </button>
                        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                            © 2025 Great Wall Energy
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;