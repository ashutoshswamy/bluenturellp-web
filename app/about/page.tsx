"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Handshake, CheckCircle, Eye, Send, Target, Compass, ShoppingCart, Truck, Store, Building2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function About() {
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
      {/* 1. Hero / Intro Section */}
      <section className="relative py-24 lg:py-36">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-100/60 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-6 font-bold text-xs tracking-widest text-primary-700 uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              About Bluenture LLP
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-neutral-900 leading-[1.1] tracking-tight mb-8">
              Global Trade, <br/>
              <span className="text-gradient">Streamlined</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl">
              Bluenture LLP is a globally focused trading and sourcing company committed to simplifying cross-border commerce for businesses worldwide. We specialize in the reliable procurement, quality assurance, and timely delivery of high-demand commodities across international markets.
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative w-full min-h-[400px] lg:min-h-[520px] max-w-lg mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-[2rem] rotate-3 opacity-15 blur-xl"></div>
            <div className="absolute inset-0 z-10 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
            <div className="absolute inset-0 rounded-[2rem] border border-white/40 shadow-2xl overflow-hidden group flex items-center justify-center bg-white">
              <Image src="/logo.jpeg" alt="Bluenture LLP Logo" fill className="object-contain transition-transform duration-700 group-hover:scale-105 p-8" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="glass border border-neutral-100 p-12 rounded-3xl shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-8 shadow-sm">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-4">Our Mission</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To make global trade more transparent, efficient, and accessible by delivering quality commodities with reliability, speed, and complete process visibility.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-primary-900 text-white p-12 rounded-3xl shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-600/30 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/3"></div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md text-primary-300 flex items-center justify-center mb-8 border border-white/10 shadow-sm">
                <Compass size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-100/80 text-lg leading-relaxed">
                To become a trusted global trade partner known for ethical sourcing, operational excellence, and long-term value creation for clients across international markets.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      {/* 3. Why Choose Us */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-indigo-100/40 blur-3xl rounded-full mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-4">The Bluenture Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Why Choose Bluenture LLP?
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              With a strong supplier network and a process-driven approach, we help importers and distributors reduce risk, optimize costs, and ensure consistent supply.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {/* Card 1: Verified Supplier Network - Large Left */}
            <motion.div variants={itemVariants} className="md:col-span-2 group relative overflow-hidden bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-50/80 to-indigo-50/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col h-full md:w-3/4">
                <div className="w-16 h-16 rounded-[1.25rem] bg-blue-50 flex items-center justify-center text-blue-600 mb-8 border border-blue-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <ShieldCheck size={28} strokeWidth={2} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">Verified Supplier Network</h4>
                <p className="text-slate-600 leading-relaxed text-lg font-light">We work only with carefully vetted producers and manufacturers to ensure consistent quality and reliable fulfillment for every shipment.</p>
              </div>
            </motion.div>

            {/* Card 2: End-to-End Trade Support - Small Right */}
            <motion.div variants={itemVariants} className="md:col-span-1 group relative overflow-hidden bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/80 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 border border-emerald-100 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Handshake size={28} strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 tracking-tight">End-to-End <br/> Trade Support</h4>
                <p className="text-slate-600 leading-relaxed font-light mt-auto">From sourcing and quality checks to documentation and logistics coordination.</p>
              </div>
            </motion.div>

            {/* Card 3: Quality Assurance - Dark Focus Card */}
            <motion.div variants={itemVariants} className="md:col-span-1 group relative overflow-hidden bg-slate-900 rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white group-hover:text-slate-900 transition-all duration-500">
                  <CheckCircle size={28} strokeWidth={2} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white tracking-tight">Quality Assurance</h4>
                <p className="text-slate-400 leading-relaxed font-light mt-auto">Each shipment undergoes strict quality verification to meet international buyer standards.</p>
              </div>
            </motion.div>

            {/* Card 4: Transparent Communication - Wide Horizontal */}
            <motion.div variants={itemVariants} className="md:col-span-2 group relative overflow-hidden bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-200/60 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-amber-50/80 to-orange-50/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 h-full">
                <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-amber-50 flex items-center justify-center text-amber-600 border border-amber-100 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-sm mt-2 md:mt-0">
                  <Eye size={36} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">Radical Transparency</h4>
                  <p className="text-slate-600 leading-relaxed text-lg max-w-xl font-light">Our clients receive regular updates and full visibility throughout the procurement and shipping process. No hidden fees, no surprises.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. Industries We Serve */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">Industries We Serve</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-neutral-600 max-w-md mt-6 md:mt-0 text-lg"
            >
              Whether you are an importer, distributor, or institutional buyer, we provide scalable solutions tailored to your market requirements.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
          >
            {[
              { icon: ShoppingCart, label: "Importers & Wholesalers" },
              { icon: Truck, label: "Food Distributors" },
              { icon: Store, label: "Retail Chains" },
              { icon: Building2, label: "Institutional Buyers" },
              { icon: ShieldCheck, label: "Private Label Businesses" },
              { icon: Handshake, label: "Global Commodity Traders" },
            ].map((industry, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="flex items-center gap-4 p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <industry.icon size={20} className="opacity-80" />
                </div>
                <span className="font-semibold text-neutral-800 leading-snug">{industry.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="py-24 bg-neutral-50 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-900 to-primary-800 px-8 py-20 text-center shadow-[0_20px_50px_rgba(11,47,91,0.2)] border border-primary-700/50"
          >
            <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-10"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Work with Confidence</h2>
              <p className="text-xl text-primary-100/90 mb-10 font-light leading-relaxed">
                When you partner with Bluenture LLP, you gain a trade ally focused on consistency, transparency, and long-term value. Ready to streamline your global sourcing?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/quote" className="w-full sm:w-auto px-8 py-4 bg-white text-primary-900 hover:bg-neutral-100 font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  Request a Quote
                  <Send size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
