"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Building2, Package, MapPin, Anchor, Phone, Globe, ShieldCheck, Clock, FileText } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function QuoteContent() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactNumber: '',
    commodityType: '',
    volume: '',
    portOfOrigin: '',
    destinationPort: '',
    specialRequirements: '',
  });

  // Draft manifest number for the live preview ticket — cosmetic only. Generated
  // client-side after mount (not in render) since Math.random() during SSR would
  // produce a different value than the client and trigger a hydration mismatch.
  const [manifestNo, setManifestNo] = useState('BLU-QT-···');
  useEffect(() => {
    setManifestNo(`BLU-QT-${Math.floor(100 + Math.random() * 900)}`);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const lines = [
      `📋 *QUOTE REQUEST — BLUENTURE LLP*`,
      ``,
      `🏢 *Company:* ${formData.companyName || 'N/A'}`,
      `📞 *Contact:* ${formData.contactNumber || 'N/A'}`,
      ``,
      `📦 *Commodity:* ${formData.commodityType || 'N/A'}`,
      `⚖️ *Volume:* ${formData.volume ? formData.volume + ' Tons' : 'N/A'}`,
      ``,
      `🚢 *Origin Port:* ${formData.portOfOrigin || 'N/A'}`,
      `🏁 *Destination Port:* ${formData.destinationPort || 'N/A'}`,
    ];

    if (formData.specialRequirements.trim()) {
      lines.push(``, `📝 *Special Requirements:*`, formData.specialRequirements.trim());
    }

    const message = lines.join('\n');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919146086655?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const steps = [
    { n: '01', title: 'Analysis', desc: 'Our logistics experts analyze your requirements and route feasibility.' },
    { n: '02', title: 'Quotation', desc: "Within 24 hours, you'll receive a detailed competitive quote via WhatsApp." },
    { n: '03', title: 'Onboarding', desc: 'Upon approval, your dedicated account manager starts the process.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 overflow-hidden">

      {/* Hero Header */}
      <section className="relative bg-neutral-900 pt-32 pb-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 mb-10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="inline-flex items-center gap-2.5 font-mono text-primary-300 text-xs tracking-[0.2em] uppercase mb-6">
              <span className="w-8 h-px bg-gradient-to-r from-primary-400/80 to-transparent"></span>
              Manifest · Quote Request
            </motion.span>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Request a <br />
              Custom Quote
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
              From procurement and quality assurance to documentation and logistics coordination — get a personalized proposal tailored to your trade requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form Section — overlapping the hero */}
      <section className="relative -mt-16 lg:-mt-20 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start"
          >
            {/* Left: form card */}
            <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-neutral-100 overflow-hidden">
              {/* Trust indicators bar */}
              <div className="bg-neutral-50 border-b border-dashed border-neutral-200 px-8 py-5">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500">
                  <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-primary-500" />Verified Suppliers</span>
                  <span className="hidden sm:inline text-neutral-300">·</span>
                  <span className="flex items-center gap-2"><Clock size={14} className="text-primary-500" />24hr Response</span>
                  <span className="hidden sm:inline text-neutral-300">·</span>
                  <span className="flex items-center gap-2"><FileText size={14} className="text-primary-500" />No Commitment</span>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-8 lg:p-12">
                <div className="mb-10">
                  <h2 className="text-3xl lg:text-4xl font-black text-neutral-900 mb-3 tracking-tight">Tell Us About Your Needs</h2>
                  <p className="text-neutral-500 text-lg">Fill in the details below and submit via WhatsApp. Our trade specialists will prepare a tailored proposal.</p>
                </div>

                <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
                  {/* Company Name */}
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Company Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                        <Building2 size={20} />
                      </div>
                      <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="e.g. Global Trade Corp" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Contact Number</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                        <Phone size={20} />
                      </div>
                      <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="+91 98765 43210" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-dashed border-neutral-200"></div>

                  {/* Commodity & Volume Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Commodity Type</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                          <Package size={20} />
                        </div>
                        <select name="commodityType" value={formData.commodityType} onChange={handleChange} className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium hover:bg-white appearance-none cursor-pointer">
                          <option value="">Select Commodity</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Food & Beverages">Food & Beverages</option>
                          <option value="Energy & Minerals">Energy & Minerals</option>
                          <option value="Consumer Goods">Consumer Goods</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Estimated Volume (Tons)</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                          <Package size={20} />
                        </div>
                        <input type="number" name="volume" value={formData.volume} onChange={handleChange} placeholder="e.g. 500" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                      </div>
                    </div>
                  </div>

                  {/* Origin & Destination Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Port of Origin</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                          <MapPin size={20} />
                        </div>
                        <input type="text" name="portOfOrigin" value={formData.portOfOrigin} onChange={handleChange} placeholder="City or Port Name" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-2">Destination Port</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                          <Anchor size={20} />
                        </div>
                        <input type="text" name="destinationPort" value={formData.destinationPort} onChange={handleChange} placeholder="City or Port Name" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                      </div>
                    </div>
                  </div>

                  {/* Special Requirements */}
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Special Handling Requirements</label>
                    <textarea
                      className="w-full p-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white resize-none"
                      placeholder="Temperature control, fragile goods, hazardous materials, etc."
                      rows={4}
                      name="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  {/* Submit via WhatsApp */}
                  <div className="pt-2">
                    <button type="button" onClick={handleSubmit} className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xl shadow-emerald-600/20 transition-all duration-300 flex items-center justify-center gap-3 group transform hover:-translate-y-1">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Send via WhatsApp
                      <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: live manifest preview — fills in as the form is completed, echoing the boarding-pass ticket used elsewhere on the site */}
            <div className="lg:sticky lg:top-28 rounded-[1.5rem] bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden font-mono text-neutral-500">
              <div className="px-7 py-7">
                <div className="flex items-start justify-between mb-7">
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase mb-2">Manifest No.</div>
                    <div className="text-lg text-white tracking-wide">{manifestNo}</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] uppercase text-amber-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
                    Draft
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-[10px] tracking-[0.15em] uppercase mb-1.5">Shipper</div>
                  <div className="text-sm text-white font-bold truncate">{formData.companyName || '—'}</div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-7">
                  <div>
                    <div className="text-[10px] tracking-[0.15em] uppercase mb-1.5">Cargo</div>
                    <div className="text-sm text-white font-bold truncate">{formData.commodityType || '—'}</div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.15em] uppercase mb-1.5">Weight</div>
                    <div className="text-sm text-white font-bold">{formData.volume ? `${formData.volume} MT` : '—'}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-2">
                  <span>ORIGIN</span>
                  <Globe size={14} className="text-primary-400" />
                  <span>DESTINATION</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-bold tracking-wide mb-8">
                  <span className="truncate max-w-[35%]">{formData.portOfOrigin || 'TBD'}</span>
                  <span className="flex-1 border-t border-dashed border-neutral-700"></span>
                  <span className="truncate max-w-[35%] text-right">{formData.destinationPort || 'TBD'}</span>
                </div>

                {/* Barcode texture */}
                <div
                  className="h-8 w-full opacity-70"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 5px, currentColor 5px, currentColor 6px, transparent 6px, transparent 10px)',
                    color: 'var(--color-neutral-400)',
                  }}
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </motion.div>

          {/* What happens next */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 bg-white rounded-[2rem] border border-neutral-100 shadow-sm px-8 lg:px-12 py-10"
          >
            <span className="font-mono text-primary-600 font-medium tracking-[0.2em] text-xs uppercase mb-4 block text-center">Process</span>
            <h3 className="text-2xl font-black text-neutral-900 mb-8 text-center tracking-tight">What happens next?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-neutral-200">
              {steps.map((step) => (
                <div key={step.n} className="text-center px-6 py-6 sm:py-0 first:pt-0">
                  <div className="font-mono text-3xl font-black text-primary-500/30 mb-3">{step.n}</div>
                  <h4 className="font-bold text-neutral-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
