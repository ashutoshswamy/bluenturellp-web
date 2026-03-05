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
              Global Trade <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">Network</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl mb-10">
              Connecting markets across continents with reliable sea freight, air transit, and comprehensive trade expertise. We move commodities with precision.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-800 bg-[#060B14] flex items-center justify-center"
          >
            {/* Layered glows behind globe */}
            <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow max-w-[400px] max-h-[400px] m-auto"></div>
            <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[70px] max-w-[300px] max-h-[300px] m-auto"></div>
            
            {/* Concentric rings */}
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-cyan-500/10 m-auto"></div>
            <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-slate-700/30 m-auto"></div>
            <div className="absolute w-[440px] h-[440px] md:w-[600px] md:h-[600px] rounded-full border border-slate-700/15 m-auto"></div>
            
            {/* Pulsing accent ring */}
            <div className="absolute w-[320px] h-[320px] md:w-[440px] md:h-[440px] rounded-full border border-cyan-500/20 m-auto animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>

            <div className="relative w-full max-w-[420px] aspect-square group [mask-image:radial-gradient(circle,white_45%,transparent_72%)]">
              <div className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                <Image 
                  src="/images/blue_plexus_globe.png" 
                  alt="Global Trade Network" 
                  fill 
                  className="object-contain animate-[spin_120s_linear_infinite] drop-shadow-[0_0_40px_rgba(34,211,238,0.2)]" 
                  priority
                />
              </div>
            </div>
            <div className="absolute inset-0 z-10 ring-1 ring-inset ring-white/5 rounded-[2rem] pointer-events-none"></div>
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
              <h2 className="text-4xl md:text-5xl font-black mb-6">Trade Capabilities</h2>
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Sea Freight */}
            <motion.div variants={itemVariants} className="bg-[#0b101a] border border-neutral-800/80 rounded-[2rem] p-8 lg:p-10 hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#131b2b] flex items-center justify-center text-white mb-8 shadow-sm border border-neutral-800">
                <Ship size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Sea Freight</h3>
              <p className="text-neutral-400 mb-8 flex-1 leading-relaxed font-light text-[15px]">
                Bulk carriers and container shipping for major commodities. We handle full container loads (FCL) and less than container loads (LCL).
              </p>
              <ul className="space-y-4 mb-2 text-neutral-300 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="text-cyan-400 shrink-0" size={16} strokeWidth={2.5} />
                  <span className="font-medium text-neutral-300">Major port access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-cyan-400 shrink-0" size={16} strokeWidth={2.5} />
                  <span className="font-medium text-neutral-300">Refrigerated cargo</span>
                </li>
              </ul>
            </motion.div>

            {/* Air Transit */}
            <motion.div variants={itemVariants} className="bg-[#0b101a] border border-neutral-800/80 rounded-[2rem] p-8 lg:p-10 hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#181b31] flex items-center justify-center text-indigo-400 mb-8 shadow-sm border border-indigo-900/30">
                <Plane size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Air Transit</h3>
              <p className="text-neutral-400 mb-8 flex-1 leading-relaxed font-light text-[15px]">
                Time-sensitive air cargo solutions for high-value and perishable commodities with global airport-to-airport coverage.
              </p>
              <ul className="space-y-4 mb-2 text-neutral-300 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="text-indigo-400 shrink-0" size={16} strokeWidth={2.5} />
                  <span className="font-medium text-neutral-300">Express door-to-door</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-indigo-400 shrink-0" size={16} strokeWidth={2.5} />
                  <span className="font-medium text-neutral-300">Cargo consolidation</span>
                </li>
              </ul>
            </motion.div>

            {/* Land Transport (New 3rd Card) */}
            <motion.div variants={itemVariants} className="bg-[#0b101a] border border-neutral-800/80 rounded-[2rem] p-8 lg:p-10 hover:-translate-y-2 transition-all duration-300 flex flex-col group relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-14 h-14 rounded-2xl bg-[#11241f] flex items-center justify-center text-emerald-400 mb-8 shadow-sm border border-emerald-900/30">
                <FileCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Customs & Clearing</h3>
              <p className="text-neutral-400 mb-8 flex-1 leading-relaxed font-light text-[15px]">
                Comprehensive customs brokerage and compliance services ensuring smooth cross-border movement of all commodities.
              </p>
              <ul className="space-y-4 mb-2 text-neutral-300 text-sm">
                <li className="flex items-center gap-3">
                  <Check className="text-emerald-400 shrink-0" size={16} strokeWidth={2.5} />
                  <span className="font-medium text-neutral-300">Regulatory compliance</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-emerald-400 shrink-0" size={16} strokeWidth={2.5} />
                  <span className="font-medium text-neutral-300">Tariff classification</span>
                </li>
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}
