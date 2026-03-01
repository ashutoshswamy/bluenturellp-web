"use client";

import Link from 'next/link';
import { ArrowRight, Ship, Plane, FileCheck, Check } from 'lucide-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Network() {
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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-200/40 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-6 font-bold text-xs tracking-widest text-primary-700 uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              Global Operations
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-neutral-900 leading-[1.1] tracking-tight mb-8">
              Global Logistics &<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Trade Network</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl mb-10">
              Connecting markets across continents with reliable sea freight, air transit, and comprehensive customs expertise. We move commodities with precision.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link href="#" className="px-8 py-4 bg-primary-600 text-white font-bold rounded-xl shadow-lg shadow-primary-600/30 hover:bg-primary-700 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                Explore Our Routes
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#" className="px-8 py-4 bg-white text-neutral-800 border border-neutral-200 font-bold rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 flex items-center justify-center">
                Regional Offices
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/40"
          >
            <div className="absolute inset-0 z-10 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
            <Image
              src="/images/global_logistics_minimal.png"
              alt="Global Logistics & Trade Network"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Capabilities Section */}
      <section className="py-24 bg-neutral-900 text-white relative">
        <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:flex justify-between items-end gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">Logistics Capabilities</h2>
            </div>
            <p className="text-lg text-neutral-400 max-w-lg mb-2">
              Our integrated service network ensures your commodities move from source to destination without friction.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Sea Freight */}
            <motion.div variants={itemVariants} className="glass-dark border border-neutral-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center text-primary-400 mb-6 shadow-md border border-neutral-700">
                <Ship size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sea Freight</h3>
              <p className="text-neutral-400 mb-8 flex-1 leading-relaxed">
                Bulk carriers and container shipping for major commodities. We handle full container loads (FCL) and less than container loads (LCL).
              </p>
              <ul className="space-y-4 mb-8 text-neutral-300 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="text-primary-500 shrink-0 mt-0.5" size={18} strokeWidth={3} />
                  <span>Major port access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-primary-500 shrink-0 mt-0.5" size={18} strokeWidth={3} />
                  <span>Refrigerated cargo</span>
                </li>
              </ul>
            </motion.div>

            {/* Air Transit */}
            <motion.div variants={itemVariants} className="glass-dark border border-neutral-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center text-indigo-400 mb-6 shadow-md border border-neutral-700">
                <Plane size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Air Transit</h3>
              <p className="text-neutral-400 mb-8 flex-1 leading-relaxed">
                Time-sensitive air cargo solutions for high-value and perishable commodities with global airport-to-airport coverage.
              </p>
              <ul className="space-y-4 mb-8 text-neutral-300 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="text-indigo-400 shrink-0 mt-0.5" size={18} strokeWidth={3} />
                  <span>Express door-to-door</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-indigo-400 shrink-0 mt-0.5" size={18} strokeWidth={3} />
                  <span>Cargo consolidation</span>
                </li>
              </ul>
            </motion.div>

            {/* Customs Brokerage */}
            <motion.div variants={itemVariants} className="glass-dark border border-neutral-800 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-neutral-800 flex items-center justify-center text-emerald-400 mb-6 shadow-md border border-neutral-700">
                <FileCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customs Brokerage</h3>
              <p className="text-neutral-400 mb-8 flex-1 leading-relaxed">
                Complex regulatory navigation and compliance for import-export activities across different jurisdictions and tariff codes.
              </p>
              <ul className="space-y-4 mb-8 text-neutral-300 text-sm">
                <li className="flex items-start gap-3">
                  <Check className="text-emerald-400 shrink-0 mt-0.5" size={18} strokeWidth={3} />
                  <span>Duty & Tax optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-emerald-400 shrink-0 mt-0.5" size={18} strokeWidth={3} />
                  <span>Documentation management</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
