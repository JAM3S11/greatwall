import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, MapPin, Zap, Network, Coins, MemoryStick, ShieldCheck, Wallet, TrendingUp, Globe, Leaf, Lock, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useEnergy } from '../global/EnergyContext'; 
import { motion } from 'framer-motion';
import { NumberTicker } from '@/components/ui/number-ticker';

const HomePage = () => {
  const { isWalletConnected, anomalyAlert } = useEnergy();
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ y: 1, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeOut", staggerChildren: 0.5 }}
      className="bg-white dark:bg-[#050a18] text-slate-900 dark:text-white">
      
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
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex-1 text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0}}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-[#135bec] animate-pulse"></span>
                {isWalletConnected ? "Node Active: 0x...4F2" : "Live on Nairobi Testnet"}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0}}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-5xl lg:text-7xl font-bold tracking-tighter leading-tight">
                Powering Kenya's <br/>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-400">
                  Future with AI
                </motion.span> & Web3
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="text-lg text-slate-600 dark:text-gray-400 mt-6 max-w-xl">
                Great Wall is the first decentralized energy management protocol. Optimize consumption, earn rewards, and contribute to a sustainable grid.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/login")}
                  className="h-12 px-8 bg-[#135bec] text-white rounded-lg font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20 transition-all hover:scale-105">
                  {isWalletConnected ? "Access Dashboard" : "Get Started"} <ArrowRight size={18} />
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/whitepaper')}
                  className="h-12 px-8 bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#324467] rounded-lg font-bold hover:bg-gray-50 dark:hover:bg-[#232f48] transition-colors">
                  Read Whitepaper
                </motion.button>
              </motion.div>
            </motion.div>
            {/* Right Side */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="flex-1 relative group">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                <motion.img 
                  initial={{ scale: 1.1, filter: "blur(10px)" }}
                  animate={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2 }}
                  src="https://images.unsplash.com/photo-1596005554384-d293674c91d7?q=80&w=1198&auto=format&fit=crop" 
                  alt="Nairobi Energy" 
                  className="w-full h-[450px] object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100" 
                />
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  <span className="text-[10px] font-mono text-white uppercase tracking-tighter">Live Feed: Node_04</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-white/5 p-5 rounded-xl border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-white text-sm font-bold">
                      <MapPin size={16} className="text-[#135bec]" /> 
                      <span className="tracking-wide">Nairobi, Kenya</span>
                    </div>
                    <motion.div 
                      animate={{ opacity: [0.4, 1.0, 0.4] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-[10px] text-blue-400 font-mono">
                      SECURE_PROTOCOL_V4.
                    </motion.div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] text-gray-400 font-mono uppercase">
                      <span>Current Grid Load</span>
                      <motion.span
                        key={isWalletConnected}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        {isWalletConnected ? 'Optimization Active' : '75.4% Capacity'}
                      </motion.span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
                      <motion.div initial={{ width: 0 }}
                        animate={{ width: isWalletConnected ? '100%' : '75%' }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-gradient-to-r from-[#135bec] to-blue-400"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Quick Stats */}
      <section className="py-12 border-y border-gray-200 dark:border-[#232f48] bg-white dark:bg-[#0f141e]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Energy Managed', val: 10540, suffix: 'kWh', icon: Zap },
            { label: 'Active Nodes', val: 528, suffix: 'Online', icon: Network },
            { label: 'Token Price', val: 1.24, prefix: '$', suffix: '(+4.2%)', icon: Coins, decimalPlaces: 2 }
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px"}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" }}
              whileTap={{ scale: 0.98 }}
              key={i} className="flex items-center gap-5 p-6 rounded-xl bg-gray-50 dark:bg-[#192233] border border-gray-100 dark:border-[#324467] hover:shadow-md transition-shadow">
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0]}}
                transition={{ duration: 0.5 }}
                className="p-3 bg-[#135bec]/10 rounded-lg text-[#135bec]">
                <stat.icon size={24} />
              </motion.div>
              <div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (i * 0.1) + 0.3 }}
                  className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: (i * 0.1) + 0.4 }}
                  className="text-2xl font-bold">
                  <NumberTicker 
                    value={stat.val}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimalPlaces={stat.decimalPlaces ?? 0}
                    className='text-2xl font-bold gap-1'
                   />
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Ecosystem Pillars Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0b0f17]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-4">
              Our Core Strategy
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Key Pillars of our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-400">Ecosystem</span>
            </h2>
          </motion.div>

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
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? "-30" : "30"}}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.2, type: "spring", bounce: 0.4}}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-2xl bg-white dark:bg-[#192233] border border-gray-100 dark:border-[#324467] hover:border-[#135bec] transition-all duration-300">
                <motion.div 
                  whileHover={{ scale: 1.02, rotate: 5 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                  <pillar.icon size={28} />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#135bec] transition-colors">{pillar.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1}}
                  transition={{ delay: (i * 0.2) + 0.5, duration: 0.8 }}
                  className="absolute top-4 right-8 text-6xl font-black text-gray-100 dark:text-white/5 pointer-events-none select-none">
                  0{i + 1}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-[#0f141e]">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Join the <span className="text-[#135bec]">Great Wall</span> Network
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Follow these simple steps to start optimizing your energy and earning rewards.
            </p>
          </motion.div>

          <div className="relative">
            {/* Desktop Connector Line */}
            <motion.div 
              initial={{ scaleX: 0, opacity: 0 }}
              whileHover={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut"}}
              className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></motion.div>

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
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (i * 0.2), type: "spring", stiffness: 100 }}
                  className="relative flex flex-col items-center text-center group">
                  {/* Step Number Badge */}
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="w-24 h-24 rounded-full bg-white dark:bg-[#192233] border-4 border-gray-50 dark:border-[#0b0f17] flex items-center justify-center mb-6 shadow-xl relative z-10 group-hover:border-[#135bec] transition-all duration-500">
                    <item.icon size={32} className="text-[#135bec]" />
                    <motion.span 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (i * 0.2) + 0.4 }}
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#135bec] text-white text-xs font-bold flex items-center justify-center border-2 border-white dark:border-[#192233]">
                      <NumberTicker value={item.step} />
                    </motion.span>
                  </motion.div>

                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: (i * 0.2) + 0.3 }}
                    className="text-lg font-bold mb-2">
                    {item.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: (i * 0.2) + 0.3 }}
                    className="text-sm text-gray-500 dark:text-gray-400 px-4 leading-relaxed">
                    {item.desc}
                  </motion.p>
                  
                  {i < 3 && (
                    <div className="md:hidden my-4 text-blue-500/30">
                      <ArrowRight className="rotate-90" size={24} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(19, 91, 236, 0.3)"}}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="group flex items-center gap-3 px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/40 transition-all active:scale-95">
              Ready to Connect? <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 5. Why Choose Great Wall */}
      <section className="py-24 bg-gray-50 dark:bg-[#0b0f17]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-4">
              Why Choose Great Wall
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-400">Energy Future</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Join thousands of households and businesses already saving money while contributing to Kenya's sustainable energy grid.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Save Up to 40%", desc: "Reduce your monthly electricity bills through AI-optimized consumption patterns and peak-hour shifting.", icon: TrendingUp },
              { title: "Zero Investment", desc: "No upfront costs. Simply connect your smart meter and start earning rewards immediately.", icon: Globe },
              { title: "Carbon Neutral", desc: "Contribute to Kenya's 100% renewable energy goals and reduce your carbon footprint.", icon: Leaf },
              { title: "Secure & Private", desc: "Your data is encrypted on the blockchain. Total transparency with complete privacy.", icon: Lock }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#192233] border border-gray-100 dark:border-[#324467] hover:border-[#135bec] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[#135bec]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="text-[#135bec]" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI Sentinel Technology */}
      <section className="py-24 bg-white dark:bg-[#0f141e]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-4">
                AI Sentinel Technology
              </div>
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Powered by <span className="text-[#135bec]">Advanced AI</span> & Blockchain
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#135bec]/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="text-[#135bec]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">AI Sentinel Engine</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Our proprietary machine learning models analyze consumption patterns in real-time, predicting demand spikes up to 24 hours in advance with 99.2% accuracy.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#135bec]/10 flex items-center justify-center flex-shrink-0">
                    <Network className="text-[#135bec]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Nairobi Testnet Blockchain</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Built on Ethereum-compatible infrastructure, every energy transaction is recorded immutably, ensuring complete transparency and trust.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#135bec]/10 flex items-center justify-center flex-shrink-0">
                    <Lock className="text-[#135bec]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Military-Grade Security</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">End-to-end encryption, multi-signature wallets, and continuous security audits protect your data and assets around the clock.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#135bec]/20 to-blue-400/10 p-8 border border-[#135bec]/20">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "AI Accuracy", value: "99.2%", sub: "Prediction Rate" },
                    { label: "Response Time", value: "<50ms", sub: "Real-time" },
                    { label: "Block Time", value: "2.5s", sub: "Fast Confirmations" },
                    { label: "Uptime", value: "99.99%", sub: "Always On" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 rounded-xl bg-white dark:bg-[#192233] border border-gray-100 dark:border-[#324467]">
                      <p className="text-xs text-gray-500 uppercase mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-[#135bec]">{stat.value}</p>
                      <p className="text-[10px] text-gray-400">{stat.sub}</p>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 p-4 rounded-xl bg-[#135bec]/10 border border-[#135bec]/20">
                  <p className="text-xs text-gray-500 uppercase mb-2">Live Network Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-mono">All Systems Operational</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Partners */}
      <section className="py-24 bg-gray-50 dark:bg-[#0b0f17]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-4">
              Our Partners
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-400">Industry Leaders</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: "Kenya Power", icon: Zap },
              { name: "REA", icon: Network },
              { name: "UN Energy", icon: Award },
              { name: "World Bank", icon: Users },
              { name: "Africa Dev Bank", icon: Globe },
              { name: "KPLC", icon: Zap }
            ].map((partner, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white dark:bg-[#192233] border border-gray-100 dark:border-[#324467] hover:border-[#135bec] transition-all cursor-pointer">
                <partner.icon className="text-gray-400 dark:text-gray-500" size={28} />
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-white dark:bg-[#0f141e]">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-4">
              FAQ
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              Frequently Asked <span className="text-[#135bec]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "What is Great Wall?", a: "Great Wall is Kenya's first decentralized energy management protocol that combines AI technology with blockchain to optimize energy consumption, reduce costs, and reward users for contributing to grid stability." },
              { q: "How does AI optimization work?", a: "Our AI Sentinel Engine analyzes your energy consumption patterns in real-time and automatically optimizes usage to reduce waste. It predicts demand spikes up to 24 hours in advance with 99.2% accuracy." },
              { q: "How do I start earning rewards?", a: "Simply connect your smart meter or IoT device to our platform through the dashboard. You'll start earning Great Wall tokens immediately for every kilowatt-hour saved." },
              { q: "Is this service available in my area?", a: "Great Wall is currently live on the Nairobi Testnet and expanding across Kenya. Contact our support team to check availability in your region." },
              { q: "How much can I save on my energy bills?", a: "Users typically save up to 40% on their monthly electricity bills through AI-optimized consumption patterns and peak-hour shifting. Actual savings depend on your usage habits." }
            ].map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 bg-gray-50 dark:bg-[#0b0f17]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#135bec]">Transform</span> Your Energy Future?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join over 10,000+ households already saving money and contributing to Kenya's sustainable energy grid. Start your journey today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20">
              Get Started Now <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/whitepaper')}
              className="px-8 py-4 bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#324467] text-slate-900 dark:text-white rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-[#232f48] transition-colors">
              Read Whitepaper
            </motion.button>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            Need help? Contact our support team at support@greatwall.energy
          </p>
        </motion.div>
      </section>
    </motion.div>
  );
};

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-200 dark:border-[#324467] rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left bg-gray-50 dark:bg-[#192233] hover:bg-gray-100 dark:hover:bg-[#232f48] transition-colors">
        <span className="font-semibold text-slate-900 dark:text-white pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-[#135bec]" size={20} /> : <ChevronDown className="text-gray-400" size={20} />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden">
        <p className="p-5 pt-0 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
