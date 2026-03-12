import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Cpu, Globe, Zap, Network, Coins, Award, Users, TrendingUp, Leaf, Lock, ArrowRight, ChevronDown, ChevronUp, Battery, Gauge, Activity, Wallet, Clock, CheckCircle, BarChart3, Handshake, Globe2 } from 'lucide-react';
import { useNavigate } from 'react-router';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut"}}
      className="bg-white dark:bg-[#050a18] text-slate-900 dark:text-white min-h-screen relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        {/* HERO HEADER */}
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
              Powering Kenya's Future with <br/>
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

        {/* WHAT WE OFFER */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h3 className="text-3xl font-bold">What We Offer</h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></motion.div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Energy Optimization",
                  description: "Our AI Sentinel Engine analyzes your consumption patterns and automatically optimizes energy usage to reduce waste and lower costs.",
                  icon: Cpu,
                  features: ["Real-time monitoring", "Automated optimization", "99.2% prediction accuracy"]
                },
                {
                  title: "Blockchain Energy Tracking",
                  description: "Every kilowatt-hour is recorded on the Nairobi Testnet, creating immutable records for complete transparency.",
                  icon: Network,
                  features: ["Immutable records", "Fraud prevention", "Transparent billing"]
                },
                {
                  title: "Tokenized Rewards",
                  description: "Earn Great Wall tokens for energy saved and grid contributions. Trade, hold, or use for platform benefits.",
                  icon: Coins,
                  features: ["Instant rewards", "Governance voting", "Exchange tradable"]
                }
              ].map((offer, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-2xl bg-gray-50 dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800 hover:border-[#135bec] transition-all">
                  <div className="w-14 h-14 rounded-xl bg-[#135bec]/10 flex items-center justify-center mb-6 text-[#135bec]">
                    <offer.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{offer.title}</h4>
                  <p className="text-slate-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">{offer.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {offer.features.map((feature, idx) => (
                      <span key={idx} className="flex items-center gap-1 px-2 py-1 bg-[#135bec]/10 text-[#135bec] text-xs rounded-full">
                        <CheckCircle size={12} /> {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className="py-20 px-8 bg-gray-50 dark:bg-[#070d1d]/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h3 className="text-3xl font-bold">Key Features</h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></motion.div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Gauge, title: "Real-time Monitoring", desc: "Track energy consumption in real-time via smart dashboard" },
                { icon: Battery, title: "Smart Battery", desc: "Store excess energy and discharge during peak hours" },
                { icon: Activity, title: "Grid Analytics", desc: "Advanced analytics for grid load management" },
                { icon: Wallet, title: "Easy Withdrawals", desc: "Withdraw tokens anytime to your Web3 wallet" },
                { icon: Clock, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
                { icon: BarChart3, title: "Usage Reports", desc: "Detailed monthly and yearly consumption reports" },
                { icon: Handshake, title: "Peer Trading", desc: "Trade energy directly with other users" },
                { icon: Globe2, title: "Multi-region", desc: "Expand across East Africa seamlessly" }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-lg bg-[#135bec]/10 flex items-center justify-center flex-shrink-0 text-[#135bec]">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                    <p className="text-xs text-gray-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
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
                and consumption through decentralized data verification, making clean energy accessible and 
                profitable for all Kenyans.
              </motion.p>
            </motion.div>

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
                where energy is a transparent, peer-to-peer asset that empowers communities, reduces 
                carbon emissions, and drives sustainable economic growth across Africa.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-8 bg-gray-50 dark:bg-[#070d1d]/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h3 className="text-3xl font-bold">How It Works</h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></motion.div>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Connect", desc: "Link your smart meter or IoT device to our secure protocol", icon: Network },
                { step: "02", title: "Analyze", desc: "AI monitors your consumption patterns 24/7", icon: Activity },
                { step: "03", title: "Optimize", desc: "Automatic optimization reduces waste and costs", icon: Zap },
                { step: "04", title: "Earn", desc: "Receive token rewards for savings and contributions", icon: Coins }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center">
                  <div className="w-20 h-20 rounded-full bg-[#135bec] flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <item.icon className="mx-auto text-[#135bec] mb-3" size={24} />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TOKENOMICS */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h3 className="text-3xl font-bold">Tokenomics</h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></motion.div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6">
                {[
                  { label: "Total Supply", value: "100,000,000 GW" },
                  { label: "Public Sale", value: "30%" },
                  { label: "Team & Development", value: "20%" },
                  { label: "Rewards Pool", value: "35%" },
                  { label: "Partners & Advisors", value: "15%" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-gray-50 dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800">
                    <span className="font-medium">{item.label}</span>
                    <span className="font-bold text-[#135bec]">{item.value}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#135bec]/20 to-blue-400/10 border border-[#135bec]/20">
                <h4 className="text-xl font-bold mb-4">Token Utility</h4>
                <ul className="space-y-3">
                  {[
                    "Payment for energy services",
                    "Governance voting rights",
                    "Staking for network rewards",
                    "Discounted platform fees",
                    "Referral bonus rewards"
                  ].map((util, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm">{util}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY SPECS */}
        <section className="py-20 px-8 bg-gray-50 dark:bg-[#070d1d]/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h3 className="text-3xl font-bold">Technology Specifications</h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></motion.div>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: "AI Accuracy", value: "99.2%", desc: "Prediction Rate" },
                { label: "Response Time", value: "<50ms", desc: "Real-time Processing" },
                { label: "Block Time", value: "2.5s", desc: "Fast Confirmations" },
                { label: "Network Uptime", value: "99.99%", desc: "Always Available" }
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800 text-center">
                  <p className="text-xs text-gray-500 uppercase mb-2">{spec.label}</p>
                  <p className="text-3xl font-bold text-[#135bec]">{spec.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{spec.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h3 className="text-3xl font-bold">Our Core Values</h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></motion.div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "AI Analysis", desc: "Predictive algorithms that prevent grid overloads and optimize energy distribution in real-time.", icon: Cpu },
                { title: "On-Chain Trust", desc: "Immutable logs stored on the Nairobi Testnet ensure transparent billing and verifiable usage data.", icon: Shield },
                { title: "Sustainability", desc: "Promoting green energy through efficient distribution and rewarding conservation efforts.", icon: Globe }
              ].map((pillar, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  key={idx} className="text-center p-8 bg-gray-50 dark:bg-[#0d1425] rounded-2xl border border-gray-100 dark:border-gray-800">
                  <div className="mx-auto w-14 h-14 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full mb-6 text-[#135bec]">
                    <pillar.icon size={30} />
                  </div>
                  <h4 className="font-bold text-xl mb-3">{pillar.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-gray-500 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-20 px-8 bg-gray-50 dark:bg-[#070d1d]/50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h3 className="text-3xl font-bold">Our Partners</h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></motion.div>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white dark:bg-[#0d1425] border border-gray-100 dark:border-gray-800 hover:border-[#135bec] transition-all cursor-pointer">
                  <partner.icon className="text-gray-400" size={28} />
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">{partner.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16">
              <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1.5 w-20 bg-gradient-to-r from-[#135bec] to-blue-400 mx-auto mt-4 rounded-full"></motion.div>
            </motion.div>

            <div className="space-y-4">
              {[
                { q: "What makes Great Wall different from traditional energy providers?", a: "Unlike traditional energy providers, Great Wall uses AI to optimize your consumption in real-time and blockchain to ensure complete transparency. You earn token rewards for saving energy and contributing to grid stability - something traditional providers don't offer." },
                { q: "How secure is the blockchain technology?", a: "Our Nairobi Testnet uses Ethereum-compatible infrastructure with military-grade encryption. Every energy transaction is recorded immutably, preventing fraud and ensuring complete transparency in billing." },
                { q: "What is the Great Wall token and its utility?", a: "The Great Wall token (GW) is the native cryptocurrency of our ecosystem. It can be used for: payment of energy services, governance voting rights, staking for network rewards, discounted platform fees, and referral bonuses." },
                { q: "How is the AI Sentinel Engine trained?", a: "Our AI models are trained on historical energy consumption data from thousands of households and businesses across Kenya. The system continuously learns and improves its predictions, achieving 99.2% accuracy in demand forecasting." },
                { q: "Can businesses benefit from Great Wall?", a: "Absolutely! Great Wall is ideal for businesses of all sizes. Our AI optimization can significantly reduce operational energy costs, and companies can also participate in grid stabilization programs to earn additional revenue." }
              ].map((faq, i) => (
                <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-8 bg-gray-50 dark:bg-[#070d1d]/50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Join the Energy Revolution?</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">Start saving on your energy bills while contributing to a sustainable future.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="px-8 py-4 bg-[#135bec] text-white rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-blue-500/20">
                Get Started <ArrowRight size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/whitepaper')}
                className="px-8 py-4 bg-white dark:bg-[#192233] border border-gray-200 dark:border-[#324467] text-slate-900 dark:text-white rounded-xl font-bold hover:bg-gray-50 dark:hover:bg-[#232f48] transition-colors">
                Read Whitepaper
              </motion.button>
            </div>
          </motion.div>
        </section>
      </div>
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
      className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left bg-white dark:bg-[#0d1425] hover:bg-gray-50 dark:hover:bg-[#142030] transition-colors">
        <span className="font-semibold text-slate-900 dark:text-white pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-[#135bec] flex-shrink-0" size={20} /> : <ChevronDown className="text-gray-400 flex-shrink-0" size={20} />}
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

export default AboutPage;
