"use client";

import { Send, Building2, Package, MapPin, Anchor, Mail, Phone, Globe, CheckCircle } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Quote() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-neutral-50 overflow-hidden">
      
      {/* Left Side: Image & Branding */}
      <div className="lg:w-[45%] bg-primary-900 relative flex flex-col justify-center px-8 py-20 lg:p-20 text-white min-h-[50vh] lg:min-h-screen z-10">
        <div className="absolute inset-0 bg-[url('/images/quote-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/80 to-transparent"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 max-w-lg pt-16 lg:pt-0"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 font-bold text-xs tracking-widest text-primary-200 uppercase shadow-xl">
             <Globe size={14} />
             Global Trade Partner
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-8">
            Streamline Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-indigo-300 text-6xl lg:text-7xl italic opacity-90">Sourcing.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg lg:text-xl text-primary-100/80 mb-12 font-light leading-relaxed">
            From procurement and quality assurance to documentation and logistics coordination, we simplify cross-border commerce with reliability, speed, and precision.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 border-t border-white/10 pt-8 mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                <CheckCircle size={24} />
              </div>
              <div>
                <h4 className="font-bold">Certified</h4>
                <p className="text-sm text-primary-200/60">Operations</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-bold">120+</h4>
                <p className="text-sm text-primary-200/60">Countries</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side: Form & Info */}
      <div className="lg:w-[55%] flex flex-col bg-white lg:rounded-l-[3rem] shadow-[-20px_0_40px_rgba(0,0,0,0.05)] relative z-20 pt-16 lg:pt-0">
        <div className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 lg:p-16 xl:p-24 overflow-y-auto no-scrollbar">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-12">
              <h2 className="text-4xl font-black text-neutral-900 mb-3 tracking-tight">Request a Custom Quote</h2>
              <p className="text-neutral-500 text-lg">Fill in the details below to receive a personalized logistics proposal.</p>
            </div>

            <form className="space-y-6">
              {/* Form Group */}
              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">Company Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400 group-focus-within:text-primary-600 transition-colors">
                    <Building2 size={20} />
                  </div>
                  <input type="text" placeholder="e.g. Global Trade Corp" className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white" />
                </div>
              </div>

              {/* Form Row */}
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

              {/* Form Row */}
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

              {/* Form Row */}
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

              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">Special Handling Requirements</label>
                <textarea 
                  className="w-full p-4 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all font-medium placeholder-neutral-400 hover:bg-white resize-none" 
                  placeholder="Temperature control, fragile goods, hazardous materials, etc."
                  rows={4}
                ></textarea>
              </div>

              <div className="pt-4">
                <button type="button" className="w-full py-5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-2xl shadow-xl shadow-primary-600/30 transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                  Submit Request
                  <Send size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* What happens next box */}
            <div className="mt-16 bg-neutral-50 border border-neutral-200 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">What happens next?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-black flex items-center justify-center mb-4">1</div>
                  <h4 className="font-bold text-neutral-900 mb-2">Analysis</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">Our logistics experts analyze your requirements and route feasibility.</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-black flex items-center justify-center mb-4">2</div>
                  <h4 className="font-bold text-neutral-900 mb-2">Quotation</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">Within 24 hours, you'll receive a detailed competitive quote via email.</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-black flex items-center justify-center mb-4">3</div>
                  <h4 className="font-bold text-neutral-900 mb-2">Onboarding</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">Upon approval, your dedicated account manager starts the process.</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
