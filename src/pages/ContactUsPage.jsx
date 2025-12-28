import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/react';

const querys = ["General Inquiry", "Technical Support", "Parternship"];

const SelectPane = ({ value, onChange, options }) => (
  <Listbox value={value} onChange={onChange}>
    <div className='relative mt-1'>
      <ListboxButton className="relative w-full cursor-pointer rounded-lg py-3 pl-4 pr-10 bg-slate-50 border border-slate-200 hover:border-primary/50 transition-colors focus:outline-none">
        <span className='block truncate text-slate-400 font-normal text-left'>
          {value ? value : "Select query"}
        </span>
        <span className='absolute inset-y-0 right-0 flex items-center pr-2'>
          <ChevronDown className='w-4 h-4 text-gray-400' />
        </span>
      </ListboxButton>
      <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
        <ListboxOptions className="absolute z-50 mt-1 max-h-40 w-full overflow-auto rounded-lg bg-white text-base shadow-2xl ring-1 ring-blue-300 ring-opacity-5 focus:outline-none sm:text-sm">
          {options.map((queue, i) => (
            <ListboxOption 
              key={i}
              className={({ active }) => `relative cursor-default select-none py-3 pl-10 pr-4 ${active ? 'bg-blue-50 text-blue-500' : 'text-gray-900'}`}
              value={queue}
            >
              <span className='block, truncate'>{queue}</span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
)

const ContactUsPage = () => {
  const [selectedQuery, setSelectedQuery] = useState(querys[0]);

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-hidden">
      
      {/* Background Subtle Accents */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#135bec]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        {/* SECTION 1: CONTACT HERO & FORM */}
        <section className="py-24 px-8 border-b border-slate-100">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Information */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#135bec] text-[10px] font-extrabold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#135bec] animate-pulse"></span>
                Nairobi Support Hub
              </div>
              <h1 className="text-5xl font-bold tracking-tight leading-tight mb-6">
                Powering Kenya’s <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#135bec] to-blue-500">
                  Future. Let’s Talk.
                </span>
              </h1>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md">
                Whether you need AI-driven energy insights or have questions about our Web3 protocol, our team is ready to assist.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 group hover:border-[#135bec]/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#135bec]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Email Us</p>
                    <p className="font-semibold text-slate-700">support@greatwall.ke{" "}/{" "} <span className='text-sm text-gray-400 italic tracking-[0.03em] font-medium'>jdndirangu2020@gmail.com</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 group hover:border-[#135bec]/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#135bec]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Call Us</p>
                    <p className="font-semibold text-slate-700">+254 716 041 419</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200 group hover:border-[#135bec]/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#135bec]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Visit HQ</p>
                    <p className="font-semibold text-slate-700 text-sm">Great Wall Tower, Nairobi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 relative">
              <h3 className="text-xl font-bold mb-8 text-slate-800">Send us a message</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all" />
                  <input type="text" placeholder="Company" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all" />
                {/* <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none text-slate-500">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select> */}
                <SelectPane value={selectedQuery} onChange={setSelectedQuery} options={querys} />
                <textarea placeholder="How can we help you scale your energy infrastructure?" rows="4" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#135bec]/20 focus:border-[#135bec] transition-all"></textarea>
                <button className="w-full bg-[#135bec] text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;