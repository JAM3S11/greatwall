import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, Lock, ArrowLeft, FileText, Download, Zap } from 'lucide-react';

const WhitePaperPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-[#050a18] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* BG */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#135bec] rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-400 rounded-full blur-[100px]" />
      </div>

      <div className="z-10 w-full max-w-2xl text-center">
        
        {/* Security Hex Indicator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative inline-flex items-center justify-center mb-10">
          <div className="absolute inset-0 rounded-3xl border border-slate-100 dark:border-gray-500 rotate-12 scale-110"></div>
          <div className="absolute inset-0 rounded-3xl border border-blue-50 dark:border-gray-200 border-dashed animate-[spin_20s_linear_infinite]"></div>
          <div className="w-20 h-20 rounded-3xl bg-slate-900 flex items-center justify-center text-white shadow-2xl">
            <Lock size={32} className="text-blue-400 animate-pulse" />
          </div>
        </motion.div>

        {/* Branding & Status */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-600 text-[10px] font-black uppercase tracking-[0.2em]">
            <ShieldAlert size={14} /> Security Protocol: Active
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-black text-slate-900 dark:text-slate-200 tracking-tighter">
            WHITEPAPER <span className="text-[#135bec]">2.0</span>
          </motion.h1>
        </div>

        {/* Coming Soon Message Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-50 dark:bg-[#0d1425]/70 border border-slate-100 dark:border-[#324467] rounded-3xl p-8 mb-10 relative overflow-hidden">
            <div className="relative z-10">
                <p className="text-xl font-bold text-slate-800 dark:text-slate-300 mb-2">Technical Manuscript Under Seal</p>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-md mx-auto mb-6">
                    The comprehensive roadmap for the Great Wall Sentinel Network is currently undergoing final peer review and legal compliance audit.
                </p>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-block px-8 py-4 bg-white dark:bg-white/5 border-2 border-[#135bec] rounded-2xl shadow-xl shadow-blue-500/10">
                    <span className="text-3xl font-black text-[#135bec] uppercase tracking-widest">
                        Coming Soon
                    </span>
                </motion.div>
            </div>

            {/* Faded Document Text Pattern (The "Blueprint" look) */}
            <div className="absolute inset-0 opacity-[0.05] select-none pointer-events-none p-4 font-mono text-[8px] text-left dark:text-gray-100/30">
                [SECTION 01: TOKENOMICS] ... Initializing grid-balancing algorithms for decentralized nodes ... 
                [SECTION 02: AI SENTINEL] ... Real-time load analysis via neural mesh networking ...
                [SECTION 03: REGULATORY] ... Compliance with East African energy mandates ...
                [SECTION 04: SECURITY] ... Proof-of-Energy verification protocols ...
            </div>
        </motion.div>

        {/* Footer Actions */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-400 dark:text-slate-200 hover:text-[#135bec] transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to GW
          </Link>
          <div className="hidden sm:block w-px h-6 bg-slate-200 dark:bg-gray-600"></div>
          <div className="flex items-center gap-2 text-slate-400 dark:text-slate-200 font-bold text-xs uppercase tracking-widest">
            <Zap size={14} className="text-[#135bec]" /> Deployment to be stated
          </div>
        </motion.div>

      </div>

      {/* Modern Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 right-10 opacity-30 hidden lg:block">
        <div className="flex items-center gap-4 border-l-2 border-slate-200 dark:border-gray-400 pl-4">
            <FileText size={40} className="text-slate-400 dark:text-gray-400" />
            <div className="text-left">
                <p className="text-[10px] font-black text-slate-400 dark:text-gray-300/80 uppercase tracking-widest">Doc Reference</p>
                <p className="text-xs font-mono text-slate-600 dark:text-gray-100/50">GW-WP-SENTINEL-2026</p>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WhitePaperPage;