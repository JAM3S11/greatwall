import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Wrench, Cpu, ArrowRight, Layers, Zap, Battery, Gauge, Network, Coins, Lock, Clock, BarChart3, Bell, Smartphone, Cloud, FileCheck, TrendingUp } from 'lucide-react';

const ServicePage = () => {
  return (
    <motion.div 
      initial={{ y: 1, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="bg-white dark:bg-[#050a18] text-slate-900 dark:text-white min-h-screen relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="py-24 px-8 border-b border-gray-200 dark:border-gray-800/50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0}} 
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#135bec] text-xs font-bold uppercase mb-6">
                <Zap size={12} className="fill-current" /> Our Services
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut"}}
                className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-500">Energy Solutions</span> for Kenya
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                className="text-slate-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                Great Wall provides a complete suite of AI-powered energy management services designed specifically for Kenya's unique energy challenges. From real-time monitoring to blockchain-verified certifications.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="flex flex-wrap gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#135bec] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20">
                  Explore Services <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="lg:w-1/2 relative">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                <motion.img 
                  initial={{ scale: 1.1, filter: "blur(10px)" }}
                  whileInView={{ scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1 }}
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
                  alt="Energy Dashboard" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-white uppercase">Live Dashboard</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-white/10 p-4 rounded-xl border border-white/20">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-xs uppercase">Energy Saved</p>
                      <p className="text-white font-bold text-xl">2,450 kWh</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white text-xs uppercase">Efficiency</p>
                      <p className="text-green-400 font-bold text-xl">94.2%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* MAIN SERVICES */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Everything you need to optimize, monitor, and certify your energy consumption with cutting-edge technology.
              </p>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800 hover:border-[#135bec] transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#135bec]/10 flex items-center justify-center text-[#135bec] flex-shrink-0">
                    <Activity size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Real-Time Energy Monitoring</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      Track voltage, current, and total consumption in real-time through intuitive visual dashboards. Instantly spot inefficiencies and optimize your energy usage patterns.
                    </p>
                    <ul className="space-y-2">
                      {["Live voltage & current tracking", "Consumption analytics", "Historical data reports", "Mobile app notifications"].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#135bec]"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800 hover:border-[#135bec] transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#135bec]/10 flex items-center justify-center text-[#135bec] flex-shrink-0">
                    <Cpu size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">AI Sentinel Engine</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      Our proprietary machine learning algorithms predict outages before they happen. Receive proactive alerts via SMS and email for any anomalies in your grid.
                    </p>
                    <ul className="space-y-2">
                      {["99.2% prediction accuracy", "24-hour demand forecasting", "Automated optimization", "Anomaly detection alerts"].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#135bec]"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800 hover:border-[#135bec] transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#135bec]/10 flex items-center justify-center text-[#135bec] flex-shrink-0">
                    <Wrench size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Smart Maintenance</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      Log maintenance tickets directly from the dashboard. Track technician arrival times and verify repairs on-chain for complete transparency.
                    </p>
                    <ul className="space-y-2">
                      {["Digital maintenance tickets", "Technician tracking", "On-chain verification", "Repair history logs"].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#135bec]"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Service 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-gray-50 dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800 hover:border-[#135bec] transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-[#135bec]/10 flex items-center justify-center text-[#135bec] flex-shrink-0">
                    <ShieldCheck size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">Web3 Green Certification</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      Mint immutable NFTs representing your green energy usage. Prove compliance to regulators transparently with blockchain-verified certificates.
                    </p>
                    <ul className="space-y-2">
                      {["NFT energy certificates", "Regulatory compliance proof", "Tradable carbon credits", "Immutable audit trail"].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#135bec]"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ADDITIONAL FEATURES */}
        <section className="py-24 px-8 bg-gray-50 dark:bg-[#070d1d]/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Additional Features</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Enhanced capabilities to maximize your energy efficiency and savings.
              </p>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Battery, title: "Smart Battery", desc: "Energy storage optimization" },
                { icon: Gauge, title: "Load Balancing", desc: "Automatic power distribution" },
                { icon: Bell, title: "Smart Alerts", desc: "Customizable notifications" },
                { icon: Smartphone, title: "Mobile App", desc: "iOS & Android support" },
                { icon: Cloud, title: "Cloud Sync", desc: "Real-time data backup" },
                { icon: TrendingUp, title: "Analytics", desc: "AI-powered insights" },
                { icon: FileCheck, title: "Reports", desc: "Detailed monthly reports" },
                { icon: Lock, title: "Secure Access", desc: "End-to-end encryption" }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-white dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800 text-center hover:border-[#135bec] transition-all">
                  <feature.icon className="mx-auto text-[#135bec] mb-3" size={28} />
                  <h4 className="font-bold mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Get started with Great Wall services in three simple steps.
              </p>
              <div className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Connect", desc: "Install IoT meters or connect existing API endpoints to the Great Wall ingestion engine.", icon: Network },
                { step: "02", title: "Analyze", desc: "Our neural networks establish baseline patterns and begin monitoring for anomalies immediately.", icon: BarChart3 },
                { step: "03", title: "Certify", desc: "Verified clean energy packets are minted on-chain, creating a tradable or auditable certificate.", icon: FileCheck }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800">
                  <div className="w-16 h-16 rounded-full bg-[#135bec] flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <item.icon className="mx-auto text-[#135bec] mb-3" size={28} />
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-24 px-8 bg-gray-50 dark:bg-[#070d1d]/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: "2,500+", label: "Active Sensors", icon: Layers },
                { value: "99.9%", label: "Uptime", icon: Clock },
                { value: "40%", label: "Avg. Savings", icon: TrendingUp },
                { value: "24/7", label: "Support", icon: ShieldCheck }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800 text-center">
                  <stat.icon className="mx-auto text-[#135bec] mb-3" size={28} />
                  <p className="text-4xl font-bold text-[#135bec] mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your Energy?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Join hundreds of households and businesses already saving with Great Wall's AI-powered energy solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20">
                Get Started <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default ServicePage;
