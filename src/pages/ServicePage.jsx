import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Wrench, Cpu, CheckCircle2, ArrowRight, Layers, Zap } from 'lucide-react';

const ServicePage = () => {
  const services = [
    { title: "Real-Time Monitor", desc: "Visual dashboards tracking voltage, current, and total consumption in real-time. Instantly spot inefficiencies.", icon: <Activity size={24} /> },
    { title: "AI Sentinel", desc: "Machine learning algorithms that predict outages before they happen. Receive SMS and email alerts for anomalies.", icon: <Cpu size={24} /> },
    { title: "Smart Repairs", desc: "Log maintenance tickets directly from the dashboard. Track technician arrival and repair verification on-chain.", icon: <Wrench size={24} /> },
    { title: "Web3 Certified", desc: "Mint immutable NFTs representing your green energy usage. Prove compliance to regulators transparently.", icon: <ShieldCheck size={24} /> }
  ];

  return (
    <motion.div 
      initial={{ y: 1, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white dark:bg-[#050a18] text-slate-900 min-h-screen relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-[#135bec]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        {/* SECTION 1: SERVICES HERO */}
        <section className="py-24 px-8 border-b border-slate-100 dark:border-slate-500/30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0}} 
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-6">
                <Zap size={12} className="fill-current" /> Ecosystem Tools
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut"}}
                className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-slate-900 dark:text-white">
                Advanced Tools for <br/>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-500">
                  Next-Gen Energy.
                </motion.span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="text-slate-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                Deploy AI-driven monitoring and Web3 certification to secure your grid's future. 
                The Great Wall suite empowers Kenya's energy leaders with actionable data.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="flex gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#135bec] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 active:scale-95">
                  Explore Services
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white dark:bg-[#192233] text-slate-700 dark:text-white border border-slate-200 dark:border-[#324467] hover:bg-gray-100 dark:hover:bg-[#232f48] px-8 py-4 rounded-xl font-bold transition-all shadow-sm">
                  View Documentation
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="md:w-1/2 bg-slate-50 dark:bg-[#0a1124] p-6 rounded-2xl border border-slate-200 dark:border-[#232f48] shadow-xl relative overflow-hidden group">
               <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-3 left-6 flex items-center gap-2 z-20">
                  <div className="w-2 h-2 rounded-full bg-[#135bec] animate-pulse"></div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#135bec] dark:text-slate-100">Live Grid Status</span>
               </motion.div>
               <motion.img 
                initial={{ scale: 1.1, filter: "blur(10px)", opacity: 0 }}
                whileInView={{ scale: 1, filter: "blur(0px)", opacity: 0.8 }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Data Visualization" 
                className="rounded-lg duration-700 shadow-inner mt-1 group-hover:scale-105 transition-all ease-in-out"
               />
               <div className="mt-4 flex justify-between items-center text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-100 font-semibold">
                  <span>Efficiency: 94.2%</span>
                  <span>Nairobi Node #42</span>
               </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: CORE SERVICES GRID */}
        <section className="py-24 px-8 bg-slate-50/50 dark:bg-[#070d1d]/10">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-100px" }} 
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Core Ecosystem Services</h2>
              <p className="text-slate-500 dark:text-slate-100 max-w-2xl mx-auto">Our modular platform allows you to adopt the specific tools you need, from basic monitoring to full blockchain integration.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-50px" }} 
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-[#0d1425]/70 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/50 hover:border-[#135bec] hover:shadow-2xl hover:shadow-blue-500/5 transition-all cursor-pointer group flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-800/60 flex items-center justify-center text-[#135bec] mb-6 group-hover:scale-110 transition-transform border border-blue-100 dark:border-blue-900/30">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#135bec] transition-colors dark:text-white">{s.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-100 leading-relaxed mb-6 flex-grow">{s.desc}</p>
                  <div className="flex items-center text-xs font-bold text-[#135bec] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Configure <ArrowRight size={14} className="ml-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: WORKFLOW INTEGRATION */}
        <section className="py-24 px-8 border-t border-slate-100 dark:border-slate-500/30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">Workflow Integration</motion.h2>
              <div className="space-y-8">
                {[
                  { step: "1", title: "Connect Infrastructure", desc: "Install IoT meters or connect existing API endpoints to the Great Wall ingestion engine." },
                  { step: "2", title: "AI Analysis", desc: "Our neural networks establish baseline patterns and begin monitoring for anomalies immediately." },
                  { step: "3", title: "Blockchain Verification", desc: "Verified clean energy packets are minted on-chain, creating a tradable or auditable certificate." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full border border-[#135bec] dark:border-[#213e7c] flex items-center justify-center text-[#135bec] text-xs font-bold shrink-0 bg-blue-50">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-slate-800 dark:text-slate-200">{item.title}</h4>
                      <p className="text-slate-500 dark:text-gray-300/80 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="md:w-1/2 grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#192233] p-8 rounded-2xl border border-slate-200 dark:border-[#324467] text-center flex flex-col items-center justify-center gap-2 shadow-sm">
                 <Layers className="text-[#135bec] mb-2" />
                 <span className="text-2xl font-bold text-slate-900 dark:text-white">2.5k+</span>
                 <span className="text-[10px] text-slate-400 dark:text-slate-100 uppercase font-bold tracking-widest">Sensors Active</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#192233] p-8 rounded-2xl border border-slate-200 dark:border-[#324467] text-center flex flex-col items-center justify-center gap-2 shadow-sm">
                 <CheckCircle2 className="text-emerald-500 mb-2" />
                 <span className="text-2xl font-bold text-slate-900 dark:text-white">99.9%</span>
                 <span className="text-[10px] text-slate-400 dark:text-slate-100 uppercase font-bold tracking-widest">Uptime</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-2 bg-gradient-to-br from-[#135bec] to-blue-700 p-8 rounded-2xl shadow-xl text-white">
                 <h4 className="text-xl font-bold mb-2">Ready to Optimize?</h4>
                 <p className="text-blue-100 text-sm mb-6 max-w-xs">Join the leading energy providers in Kenya using Great Wall to modernize infrastructure.</p>
                 <motion.button 
                   whileTap={{ scale: 0.95 }}
                   className="bg-white text-[#135bec] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-50 transition-all shadow-md">
                   Start Free Trial
                 </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ServicePage;