import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Cpu, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut"}}
      className="bg-white dark:bg-[#050a18] text-slate-900 dark:text-white min-h-screen relative overflow-hidden">
      
      {/* HomePage-style Glow Effects */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        {/* SECTION 1: HERO HEADER */}
        <section className="py-24 px-8 border-b border-gray-200 dark:border-gray-800/50">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#135bec] animate-pulse"></span>
              About Great Wall
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Powering Kenya’s Future with <br/>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-400">
                Intelligent Energy
              </motion.span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut"}}
              className="text-slate-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto text-lg italic leading-relaxed">
              Great Wall leverages predictive AI to manage and verify Kenya's green energy future, ensuring every watt is accounted for and optimized.
            </motion.p>
          </div>
        </section>

        {/* SECTION 2: MISSION & VISION */}
        <section className="py-20 px-8 bg-gray-50 dark:bg-[#070d1d]/50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut"}}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-[#0d1425] p-10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#135bec]/50 transition-all duration-300 shadow-xl">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200}}
                className="w-12 h-12 bg-[#135bec]/10 rounded-lg flex items-center justify-center mb-6 text-[#135bec] group-hover:scale-110 transition-transform">
                <Target size={28} />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold mb-4">Our Mission</motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-600 dark:text-gray-400 leading-relaxed">
                To provide transparent, AI-driven energy monitoring that empowers households and businesses 
                to track every watt consumed in real-time. We aim to bridge the gap between energy production 
                and consumption through decentralized data verification.
              </motion.p>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-[#0d1425] p-10 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-400/50 transition-all duration-300 shadow-xl">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                <Eye size={28} />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-bold mb-4">Our Vision</motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-600 dark:text-gray-400 leading-relaxed">
                Building a decentralized grid where energy is verified on-chain, eliminating fraud 
                and supporting universal electricity access across the region. We envision a future 
                where energy is a transparent, peer-to-peer asset.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: CORE PILLARS / VALUES */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h3 className="text-3xl font-bold">Why We Exist</h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></motion.div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "AI Analysis", 
                  desc: "Predictive algorithms that prevent grid overloads.", 
                  icon: Cpu 
                },
                { 
                  title: "On-Chain Trust", 
                  desc: "Immutable logs for transparent billing and usage.", 
                  icon: Shield 
                },
                { 
                  title: "Sustainability", 
                  desc: "Promoting green energy through efficient distribution.", 
                  icon: Globe 
                },
              ].map((pillar, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.5  }}
                  whileHover={{ y: -8 }}
                  key={idx} className="text-center p-8 bg-white dark:bg-[#0d1425]/50 rounded-2xl border border-gray-100 dark:border-gray-800/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mx-auto w-14 h-14 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-full mb-6 text-[#135bec]">
                    <pillar.icon size={30} />
                  </div>
                  <h4 className="font-bold text-xl mb-3">{pillar.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;