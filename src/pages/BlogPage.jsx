import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Cpu, ArrowLeft, ChevronRight, Share2 } from 'lucide-react';

const BlogPage = () => {
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < 3 ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const terminalLines = [
    "> Initializing Sentinel AI Blog Node...",
    "> Indexing Decentralized Energy Protocols...",
    "> Fetching Tokenomics Whitepaper v2...",
    "> Finalizing Grid-Status visualizer..."
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050a18] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* BG */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#135bec 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="z-10 w-full max-w-3xl">
        
        {/* Orbital Spinner */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Outer Ring */}
          <div className="absolute w-32 h-32 rounded-full border border-dashed border-blue-200 animate-[spin_10s_linear_infinite]"></div>
          {/* Inner Rotating Glow */}
          <div className="w-24 h-24 rounded-full border-t-4 border-[#135bec] animate-spin shadow-[0_0_20px_rgba(19,91,236,0.2)]"></div>
          <Cpu size={32} className="absolute text-[#135bec]" />
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tighter mb-4">
            THE GRID <span className="text-[#135bec]">BLOG</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-200 font-medium text-lg max-w-xl mx-auto">
            Decentralized energy intelligence, AI grid optimization, and the future of power in East Africa.
          </p>
        </div>

        {/* TERMINAL BOX */}
        <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800 mb-10 overflow-hidden relative">
          <div className="flex gap-2 mb-4 border-b border-slate-800 pb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          
          <div className="font-mono text-sm space-y-2">
            {terminalLines.map((line, idx) => (
              <p key={idx} className={`transition-all duration-500 ${idx <= loadingStep ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                <span className="text-blue-400 font-bold">sentinel@greatwall</span>
                <span className="text-slate-400">:</span>
                <span className="text-green-400">~</span>
                <span className="text-white ml-2">{line}</span>
              </p>
            ))}
            {loadingStep === 3 && (
              <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-300 animate-pulse flex items-center gap-2">
                  <Terminal size={14} /> System standby: Deployment schedule to be stated.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-100 dark:border-[#324467]/20 pt-8">
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-400 dark:text-slate-200 hover:text-[#135bec] transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Return back
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full dark:bg-[#192233] border border-slate-200 dark:border-[#324467] text-slate-600 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-[#232f48] transition-all">
              <Share2 size={16} /> Share Grid
            </button>
            <button className="bg-[#135bec] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
              Notify Me
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;