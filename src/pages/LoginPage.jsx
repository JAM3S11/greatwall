import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, ShieldCheck } from 'lucide-react';

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f17] flex flex-col items-center justify-center p-6 transition-colors duration-500">
      
      <div className="absolute top-10 left-10">
        <Link to="/" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </div>

      <div className="w-full max-w-[400px]">
        
        <div className="flex flex-col items-center mb-12">
          <div className="w-12 h-12 bg-[#135bec] rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/20 mb-6">
            <Zap size={24} className="text-white" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Sentinel Hub
          </h1>
          <p className="text-slate-500 dark:text-gray-400 mt-2 font-medium">
            Enter your credentials to manage your node.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <input 
              type="text" 
              disabled
              placeholder="Email or Sentinel ID" 
              className="w-full h-14 px-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-slate-400 cursor-not-allowed placeholder:text-slate-300 dark:placeholder:text-gray-600 transition-all"
            />
          </div>

          <div className="space-y-2">
            <input 
              type="password" 
              disabled
              placeholder="Security Password" 
              className="w-full h-14 px-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-slate-400 cursor-not-allowed placeholder:text-slate-300 dark:placeholder:text-gray-600 transition-all"
            />
          </div>

          <div className="pt-2">
            <button className="relative w-full h-14 bg-[#135bec] text-white rounded-2xl font-bold text-sm shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all overflow-hidden group">
               <span className="relative z-10">Coming Soon</span>

               <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10">
                <ShieldCheck size={14} className="text-[#135bec]" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">v4.2 Encryption Active</span>
            </div>
            
            <p className="text-xs text-slate-400 font-medium">
                Don't have an account? <span className="text-[#135bec] cursor-not-allowed font-bold">Join Waitlist</span>
            </p>
        </div>
      </div>

      {/* Subtle Background Accent */}
      <div className="fixed bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  );
};

export default LoginPage;