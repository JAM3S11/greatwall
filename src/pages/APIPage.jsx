import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Terminal, ChevronRight, Lock, Globe, Copy, Cpu } from 'lucide-react';

const APIPage = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050a18] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* DIV BG GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#135bec 1.5px, transparent 1.5px), linear-gradient(90deg, #135bec 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-[#135bec] text-xs font-bold uppercase tracking-wider">
            <Cpu size={12} className="animate-pulse" /> 
            Feature Coming Soon
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-slate-200 tracking-tighter leading-none">
            PROGRAM THE <br />
            <span className="text-[#135bec]">ENERGY</span> GRID.
          </h1>
          
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-md">
            The Great Wall API is currently in private beta. Soon, developers will be able to programmatically access grid data and build the future of decentralized power.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-white dark:bg-[#0d1425]/70 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-[#324467] flex-1 min-w-[200px]">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-blue-800/50 flex items-center justify-center text-slate-400">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 dark:text-slate-200 uppercase">Endpoint</p>
                <p className="text-sm font-mono text-slate-900 dark:text-slate-400">api.greatwall.energy</p>
              </div>
            </div>
          </div>

          <Link to="/" className="inline-flex items-center gap-2 font-bold text-[#135bec] hover:gap-4 transition-all group">
            Return back <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#135bec] to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0d1117] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden">
            {/* Window Header */}
            <div className="bg-[#161b22] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-[10px] font-mono text-slate-500 flex items-center gap-2 uppercase tracking-widest">
                <Terminal size={12} /> API_Handshake_Initial_v1
              </div>
              <Copy size={14} className="text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>

            <div className="p-6 font-mono text-sm sm:text-base overflow-x-auto">
              <div className="flex gap-4">
                <span className="text-slate-600 select-none">1</span>
                <p className="text-pink-400">curl <span className="text-slate-300">--request</span> GET</p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none">2</span>
                <p className="text-slate-300 ml-4">--url <span className="text-green-400">'https://api.greatwall.energy/v1'</span></p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600 select-none">3</span>
                <p className="text-slate-300 ml-4">--header <span className="text-green-400">'Authorization: Bearer KEY'</span></p>
              </div>
              
              {/* Animated Feature Coming Soon Line */}
              <div className="mt-6 flex gap-4 border-l-2 border-[#135bec] pl-4">
                <span className="text-slate-600 select-none">4</span>
                <p className="text-[#135bec] font-bold">
                  // Feature coming soon{dots}
                </p>
              </div>
              
              <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                   Status: 503 Deployment Pending
                </div>
                <p className="text-blue-200/60 text-xs leading-relaxed italic">
                  "The Sentinel API Gateway is currently under internal stress testing. 
                  SDKs for Python and JavaScript are being compiled."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* STATUS SECTION PING */}
      <div className="absolute bottom-14 left-10 hidden md:block mb-1.5">
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#135bec] animate-ping"></div>
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-200 uppercase tracking-[0.3em]">
                Protocol Status: Development Phase
            </p>
        </div>
      </div>
    </div>
  );
};

export default APIPage;