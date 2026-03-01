"use client";

import { Send, Building2, Package, MapPin, Anchor, Mail, Phone, Globe, CheckCircle, ShieldCheck, Clock } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Quote() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 overflow-hidden">
      
      {/* Hero Header */}
      <section className="relative bg-primary-900 pt-32 pb-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-5"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 font-bold text-xs tracking-widest text-primary-200 uppercase shadow-xl">
              <Globe size={14} />
              Global Trade Partner
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Request a <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-indigo-300 italic font-medium opacity-90">Custom Quote</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-primary-100/80 max-w-2xl mx-auto font-light leading-relaxed">
              From procurement and quality assurance to documentation and logistics coordination — get a personalized proposal tailored to your trade requirements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form Section - overlapping the hero */}
      <section className="relative -mt-16 lg:-mt-20 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-neutral-100 overflow-hidden"
          >
            {/* Trust indicators bar */}
            <div className="bg-neutral-50 border-b border-neutral-100 px-8 py-5">
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-500" />
                  <span className="font-medium">Verified Suppliers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary-500" />
                  <span className="font-medium">Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-indigo-500" />
                  <span className="font-medium">No Commitment Required</span>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8 lg:p-12 xl:p-16">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-black text-neutral-900 mb-3 tracking-tight">Tell Us About Your Needs</h2>
                <p className="text-neutral-500 text-lg">Fill in the details below and our trade specialists will prepare a tailored proposal.</p>
              </div>

              <form className="space-y-8">
                {/* Company Name - Full Width */}
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">Company Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                      <Building2 size={20} />
                    </div>
                    <input type="text" placeholder="e.g. Global Trade Corp" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Email Address</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                        <Mail size={20} />
                      </div>
                      <input type="email" placeholder="you@company.com" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Contact Number</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                        <Phone size={20} />
                      </div>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-neutral-100"></div>

                {/* Commodity & Volume Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Commodity Type</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                        <Package size={20} />
                      </div>
                      <select className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium hover:bg-white appearance-none cursor-pointer">
                        <option value="">Select Commodity</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="food">Food & Beverages</option>
                        <option value="energy">Energy & Minerals</option>
                        <option value="consumer">Consumer Goods</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Estimated Volume (Tons)</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                        <Package size={20} />
                      </div>
                      <input type="number" placeholder="e.g. 500" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
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
                      <input type="text" placeholder="City or Port Name" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">Destination Port</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                        <Anchor size={20} />
                      </div>
                      <input type="text" placeholder="City or Port Name" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                    </div>
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">Special Handling Requirements</label>
                  <textarea 
                    className="w-full p-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white resize-none" 
                    placeholder="Temperature control, fragile goods, hazardous materials, etc."
                    rows={4}
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button type="button" className="w-full py-5 bg-primary-900 hover:bg-neutral-900 text-white font-bold rounded-2xl shadow-xl shadow-primary-900/20 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                    Submit Request
                    <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

            {/* What happens next - inside card */}
            <div className="bg-neutral-50 border-t border-neutral-100 px-8 lg:px-12 xl:px-16 py-10">
              <h3 className="text-xl font-bold text-neutral-900 mb-8 text-center">What happens next?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 font-black flex items-center justify-center mb-4 mx-auto text-lg shadow-sm">1</div>
                  <h4 className="font-bold text-neutral-900 mb-2">Analysis</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">Our logistics experts analyze your requirements and route feasibility.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 font-black flex items-center justify-center mb-4 mx-auto text-lg shadow-sm">2</div>
                  <h4 className="font-bold text-neutral-900 mb-2">Quotation</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">Within 24 hours, you&apos;ll receive a detailed competitive quote via email.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 font-black flex items-center justify-center mb-4 mx-auto text-lg shadow-sm">3</div>
                  <h4 className="font-bold text-neutral-900 mb-2">Onboarding</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">Upon approval, your dedicated account manager starts the process.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
