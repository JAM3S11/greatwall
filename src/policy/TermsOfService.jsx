import React, { useEffect } from 'react';
import { ShieldCheck, Scale, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#070c1a] text-slate-900 dark:text-gray-300 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Scale className="text-[#135bec]" size={32} />
          <h1 className="text-4xl font-bold dark:text-white">Terms of Service</h1>
        </div>
        
        <p className="mb-8 text-sm opacity-70">Last Updated: January 13, 2026</p>

        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p>By accessing the Great Wall Sentinel network, you agree to be bound by these Terms. If you do not agree, please do not use our services or join the network node list.</p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-[#135bec] p-6 rounded-r-lg">
            <h2 className="text-xl font-semibold dark:text-white mb-4 flex items-center gap-2">
              <AlertTriangle size={20} className="text-[#135bec]" />
              Energy & Blockchain Disclaimer
            </h2>
            <p>Great Wall Energy provides AI-driven monitoring for power grids. We do not guarantee 100% uptime of the physical energy grid. Token rewards and "Genesis Mining Privileges" are subject to network participation and market volatility.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold dark:text-white mb-4">2. Sentinel Node Participation</h2>
            <p>Users registering as "Sentinel Nodes" are participating in a decentralized energy monitoring initiative. You are responsible for maintaining the security of the email and credentials associated with your node.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold dark:text-white mb-4">3. Prohibited Conduct</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Attempting to bypass grid monitoring security protocols.</li>
              <li>Providing false information during registration.</li>
              <li>Using the platform for any illegal energy trading activities in Kenya or elsewhere.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;