import React, { useEffect } from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#070c1a] text-slate-900 dark:text-gray-300 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck className="text-[#135bec]" size={32} />
          <h1 className="text-4xl font-bold dark:text-white">Privacy Policy</h1>
        </div>

        <p className="mb-8 text-sm opacity-70">Last Updated: January 13, 2026</p>

        <section className="space-y-10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-[#232f48] rounded-2xl text-center">
              <Lock className="mx-auto mb-4 text-[#135bec]" />
              <h3 className="font-bold mb-2">Secure Storage</h3>
              <p className="text-xs">Data is encrypted via AES-256 protocols.</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-[#232f48] rounded-2xl text-center">
              <EyeOff className="mx-auto mb-4 text-[#135bec]" />
              <h3 className="font-bold mb-2">Zero Sale</h3>
              <p className="text-xs">We never sell your energy usage data.</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-[#232f48] rounded-2xl text-center">
              <ShieldCheck className="mx-auto mb-4 text-[#135bec]" />
              <h3 className="font-bold mb-2">GDPR Ready</h3>
              <p className="text-xs">Full control over your node data.</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold dark:text-white mb-4">Information We Collect</h2>
            <p>We collect your email address solely for "Sentinel Feature Stream" updates. If you choose to integrate a hardware node, we may collect grid performance data (voltage, frequency, and uptime).</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold dark:text-white mb-4">How We Use Your Data</h2>
            <p>Your information is used to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Send system updates regarding the Kenyan power grid integration.</li>
              <li>Verify your eligibility for Genesis Mining rewards.</li>
              <li>Improve our AI monitoring algorithms.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold dark:text-white mb-4">Contact Us</h2>
            <p>For any privacy concerns, reach out to our data protection officer at: <span className="text-[#135bec]">support@greatwall.energy</span></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;