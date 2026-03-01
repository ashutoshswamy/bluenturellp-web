"use client";

import Link from 'next/link';
import { ArrowRight, Ship, Plane, FileCheck, Warehouse } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Logistics() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen pt-24 bg-neutral-50 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6 font-bold text-xs tracking-widest text-indigo-700 uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              End-To-End Supply Chain
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-neutral-900 leading-[1.1] tracking-tight mb-8">
              Precision Logistics for<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-primary-600">Global Commodities</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl mb-10">
              We provide seamless, integrated logistics solutions designed specifically for the complexities of international commodity trading.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/quote" className="inline-flex px-8 py-4 bg-primary-900 text-white font-bold rounded-xl shadow-xl shadow-primary-900/20 hover:bg-neutral-900 hover:-translate-y-1 transition-all duration-300 items-center justify-center gap-2 group">
                Get Logistics Quote
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square"
          >
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4">
               <div className="bg-primary-100 rounded-[2rem] row-span-2 col-span-1 overflow-hidden relative group shadow-lg">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/60 z-10"></div>
                 <Ship className="absolute bottom-6 left-6 text-white z-20" size={48} />
               </div>
               <div className="bg-indigo-100 rounded-[2rem] row-span-1 col-span-1 overflow-hidden relative group shadow-lg">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/60 z-10"></div>
                 <Plane className="absolute bottom-6 left-6 text-white z-20" size={36} />
               </div>
               <div className="bg-emerald-100 rounded-[2rem] row-span-1 col-span-1 overflow-hidden relative group shadow-lg">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/60 z-10"></div>
                 <Warehouse className="absolute bottom-6 left-6 text-white z-20" size={36} />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Core Logistics Services */}
      <section className="py-24 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">Our Core Logistics Services</h2>
            <p className="text-lg text-neutral-600">
              Comprehensive solutions engineered to move high-value and bulk commodities efficiently.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Ocean Freight */}
            <motion.div variants={itemVariants} className="glass p-8 rounded-3xl border border-neutral-200 hover:border-primary-200 hover:shadow-xl transition-all duration-300 flex items-start gap-6 group bg-white">
              <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 shadow-sm border border-primary-100 group-hover:scale-110 transition-transform">
                <Ship size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Ocean Freight Cargo</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Handling bulk carriers, tankers, and FCL/LCL container shipping across all major international trade routes with guaranteed space allocations.
                </p>
              </div>
            </motion.div>
            
            {/* Air Cargo */}
            <motion.div variants={itemVariants} className="glass p-8 rounded-3xl border border-neutral-200 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 flex items-start gap-6 group bg-white">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm border border-indigo-100 group-hover:scale-110 transition-transform">
                <Plane size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Air Cargo Transit</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Expedited, high-security air freight for time-critical, high-value, or perishable commodities requiring immediate global delivery.
                </p>
              </div>
            </motion.div>
            
            {/* Customs */}
            <motion.div variants={itemVariants} className="glass p-8 rounded-3xl border border-neutral-200 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 flex items-start gap-6 group bg-white">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform">
                <FileCheck size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Customs & Compliance</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Expert brokerage services navigating complex international trade regulations, minimizing delays, and optimizing duty and tax burdens.
                </p>
              </div>
            </motion.div>
            
            {/* Warehousing */}
            <motion.div variants={itemVariants} className="glass p-8 rounded-3xl border border-neutral-200 hover:border-amber-200 hover:shadow-xl transition-all duration-300 flex items-start gap-6 group bg-white">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 shadow-sm border border-amber-100 group-hover:scale-110 transition-transform">
                <Warehouse size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">Secure Warehousing</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Strategically located, climate-controlled, and high-security storage facilities tailored for sensitive and high-value commodities.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Optimize Your Supply Chain Today</h2>
            <p className="text-xl text-primary-100/90 mb-10 font-light leading-relaxed">
              Let our logistics experts engineer a custom routing and transportation strategy for your commodities.
            </p>
            <Link href="/contact" className="inline-flex px-8 py-4 bg-white text-primary-900 font-bold rounded-xl shadow-lg hover:bg-neutral-100 hover:scale-105 transition-all duration-300">
              Speak with a Logistics Specialist
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
