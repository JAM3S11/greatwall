import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, MapPin, Zap, Network, Coins, MemoryStick, ShieldCheck, Wallet } from 'lucide-react';
import { useEnergy } from '../global/EnergyContext'; 

const HomePage = () => {
  const { isWalletConnected, anomalyAlert } = useEnergy();
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white">
      
      {/* 1. AI Alert Notification */}
      {anomalyAlert && (
        <div className="bg-red-600 text-white p-3 text-center text-sm font-bold animate-pulse">
          ⚠️ AI Sentinel Alert: {anomalyAlert}
        </div>
      )}

      {/* 2. Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 px-4 py-16 md:py-28 flex justify-center">
          <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-16">
            {/* Left Side */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#135bec] animate-pulse"></span>
                {isWalletConnected ? "Node Active: 0x...4F2" : "Live on Nairobi Testnet"}
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight">
                Powering Kenya's <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-400">Future with AI</span> & Web3
              </h1>
              <p className="text-lg text-slate-600 dark:text-gray-400 mt-6 max-w-xl">
                Great Wall is the first decentralized energy management protocol. Optimize consumption, earn rewards, and contribute to a sustainable grid.
              </p>
              <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
                <button 
                  onClick={() => navigate("/login")}
                  className="h-12 px-8 bg-[#135bec] text-white rounded-lg font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20 transition-all hover:scale-105">
                  {isWalletConnected ? "Access Dashboard" : "Get Started"} <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => navigate('/whitepaper')}
                  className="h-12 px-8 bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#324467] rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-[#232f48] transition-colors">
                  Read Whitepaper
                </button>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex-1 relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1596005554384-d293674c91d7?q=80&w=1198&auto=format&fit=crop" 
                  alt="Nairobi Energy" 
                  className="w-full h-[450px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100" 
                />
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-[10px] font-mono text-white uppercase tracking-tighter">Live Feed: Node_04</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-white/5 p-5 rounded-xl border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-white text-sm font-bold">
                      <MapPin size={16} className="text-[#135bec]" /> 
                      <span className="tracking-wide">Nairobi, Kenya</span>
                    </div>
                    <div className="text-[10px] text-blue-400 font-mono">SECURE_PROTOCOL_V4.2</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] text-gray-400 font-mono uppercase">
                      <span>Current Grid Load</span>
                      <span>{isWalletConnected ? 'Optimization Active' : '75.4% Capacity'}</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
                      <div className={
                        `h-full bg-gradient-to-r from-[#135bec] to-blue-400 transition-all duration-1000 ease-out 
                        ${isWalletConnected ? 'w-full' : 'w-[75%]'}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Stats */}
      <section className="py-12 border-y border-gray-200 dark:border-[#232f48] bg-white dark:bg-[#0f141e]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Energy Managed', val: '10,540 kWh', icon: Zap },
            { label: 'Active Nodes', val: '528 Online', icon: Network },
            { label: 'Token Price', val: '$1.24 (+4.2%)', icon: Coins }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-5 p-6 rounded-xl bg-gray-50 dark:bg-[#192233] border border-gray-100 dark:border-[#324467] hover:shadow-md transition-shadow">
              <div className="p-3 bg-[#135bec]/10 rounded-lg text-[#135bec]"><stat.icon size={24} /></div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Ecosystem Pillars Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0b0f17]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-4">
              Our Core Strategy
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Key Pillars of our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-400">Ecosystem</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: "AI Sentinel Efficiency", 
                  desc: "Our neural networks predict demand spikes with 99.2% accuracy.", 
                  icon: ShieldCheck 
                },
                { title: "Blockchain Transparency", 
                  desc: "Every watt managed is recorded on the Nairobi Testnet.", 
                  icon: Network 
                },
                { title: "Tokenized Rewards", 
                  desc: "Earn Great Wall tokens for reducing consumption.", 
                  icon: Wallet 
                }
            ].map((pillar, i) => (
              <div key={i} className="group relative p-8 rounded-2xl bg-white dark:bg-[#192233] border border-gray-100 dark:border-[#324467] hover:border-[#135bec] transition-all duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                  <pillar.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#135bec] transition-colors">{pillar.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                <span className="absolute top-4 right-8 text-6xl font-black text-gray-100 dark:text-white/5 pointer-events-none select-none">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-[#0f141e]">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Join the <span className="text-[#135bec]">Great Wall</span> Network
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Follow these simple steps to start optimizing your energy and earning rewards.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                {
                  step: "01",
                  title: "Connect Device",
                  desc: "Link your smart meter or IoT device to our secure protocol.",
                  icon: MemoryStick
                },
                {
                  step: "02",
                  title: "AI Optimization",
                  desc: "Our AI Sentinel analyzes your patterns to reduce waste automatically.",
                  icon: Zap
                },
                {
                  step: "03",
                  title: "Grid Contribution",
                  desc: "Share excess power back to the local grid during peak demand.",
                  icon: Network
                },
                {
                  step: "04",
                  title: "Earn Rewards",
                  desc: "Receive Great Wall tokens directly into your Web3 wallet.",
                  icon: Coins
                }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center group">
                  {/* Step Number Badge */}
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-[#192233] border-4 border-gray-50 dark:border-[#0b0f17] flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:border-[#135bec] transition-all duration-500">
                    <item.icon size={32} className="text-[#135bec]" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#135bec] text-white text-xs font-bold flex items-center justify-center border-2 border-white dark:border-[#192233]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 px-4 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {i < 3 && (
                    <div className="md:hidden my-4 text-blue-500/30">
                      <ArrowRight className="rotate-90" size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <button 
              onClick={() => navigate("/login")}
              className="group flex items-center gap-3 px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/40 transition-all active:scale-95">
              Ready to Connect? <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;