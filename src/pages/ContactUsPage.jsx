import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/react';

const queryOptions = ["General Inquiry", "Technical Support", "Partnership"];

const SelectPane = ({ value, onChange, options }) => (
  <Listbox value={value} onChange={onChange}>
    <div className='relative mt-1'>
      <ListboxButton className="relative w-full cursor-pointer rounded-xl py-4 pl-4 pr-10 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#135bec]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#135bec]/20">
        <span className={`block truncate text-left ${value ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
          {value ? value : "Select query"}
        </span>
        <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
          <ChevronDown className='w-5 h-5 text-gray-400' />
        </span>
      </ListboxButton>
      <Transition 
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <ListboxOptions className="absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-xl bg-white dark:bg-[#0c162f] py-1 text-base shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-slate-200 dark:border-white/10">
          {options.map((option, i) => (
            <ListboxOption 
              key={i}
              className={({ active }) => `relative cursor-pointer select-none py-3 pl-10 pr-4 transition-colors ${active ? 'bg-blue-50 dark:bg-blue-500/20 text-[#135bec] dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'}`}
              value={option}
            >
              {({ selected }) => (
                <>
                  <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>
                    {option}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#135bec]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#135bec]" />
                    </span>
                  ) : null}
                </>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
);

const ContactUsPage = () => {
  const [selectedQuery, setSelectedQuery] = useState(queryOptions[0]);
  const [status, setStatus] = useState("");

  const handleForm = async (event) => {
    event.preventDefault();
    setStatus("Sending....");

    const formData = new FormData(event.target);
    
    formData.append("query_type", selectedQuery);
    formData.append("access_key", import.meta.env.VITE_GREATWALL_HUB_CONTACT_FORM);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if(data.success){
        setStatus("Message sent successfully!");
        event.target.reset();
        setSelectedQuery(queryOptions[0]);
      } else {
        setStatus(data.message);
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut"}}
      className="bg-white dark:bg-[#050a18] text-slate-900 dark:text-white min-h-screen relative overflow-hidden">
      
      {/* Background Subtle Accents */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#135bec]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <section className="py-24 px-8 border-b border-slate-100 dark:border-[#324467]/20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/50 text-[#135bec] text-[10px] font-extrabold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#135bec] animate-pulse"></span>
                Nairobi Support Hub
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl font-bold tracking-tight leading-tight mb-6">
                Powering Kenya’s <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-500">
                  Future. Let’s Talk.
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-500 dark:text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
                I focus on writing clean, maintainable, and readable code that makes building and improving products feel smooth and enjoyable.
              </motion.p>
              
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email Us', val: 'support@greatwall.ke', sub: 'jdndirangu2020@gmail.com' },
                  { icon: Phone, label: 'Call Us', val: '+254 716 041 419' },
                  { icon: MapPin, label: 'Visit HQ', val: 'Great Wall Tower, Nairobi' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (idx * 0.1) }}
                    className="flex items-center gap-4 bg-slate-50 dark:bg-[#0d1425]/70 p-5 rounded-2xl border border-slate-200 dark:border-[#324467] group hover:border-[#135bec]/30 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-800/50 flex items-center justify-center text-[#135bec]">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{item.label}</p>
                      <p className="font-semibold text-slate-700 dark:text-slate-200">
                        {item.val} {item.sub && <span className='text-xs text-gray-400 block font-normal'>{item.sub}</span>}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-[#0d1425]/70 p-10 rounded-3xl border border-slate-200 dark:border-blue-800/50 shadow-2xl shadow-slate-200/50 dark:shadow-none relative">
              <h3 className="text-xl font-bold mb-8 text-slate-800 dark:text-slate-100">Send us a message</h3>
              <form onSubmit={handleForm} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input name='name' type="text" placeholder="Name" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all dark:text-white" required />
                  <input name='company' type="text" placeholder="Company" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all dark:text-white" required />
                </div>
                <input name='email' type="email" placeholder="Email Address" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all dark:text-white" required />
                
                <SelectPane value={selectedQuery} onChange={setSelectedQuery} options={queryOptions} />
                
                <textarea name='message' placeholder="How can we help you scale your energy infrastructure?" rows="4" className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all dark:text-white" required></textarea>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='submit' 
                  className="w-full bg-[#135bec] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95">
                  Send Message <Send size={18} />
                </motion.button>
                
                {status && (
                  <motion.p 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-sm font-medium mt-4 ${status.includes("successfully") ? "text-green-500" : "text-blue-500"}`}>
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default ContactUsPage;