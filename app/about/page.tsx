"use client";

import Link from 'next/link';
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
      <section className="relative py-20 lg:py-32">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-200/50 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-100/60 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="md:w-1/2"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-200 mb-6 font-bold text-xs tracking-widest text-primary-700 uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              About Bluenture LLP
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-neutral-900 leading-[1.1] tracking-tight mb-8">
              Simplifying <br/>
              <span className="text-gradient">Cross-Border Commerce</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl">
              Bluenture LLP is a globally focused trading and sourcing company committed to simplifying cross-border commerce for businesses worldwide. We specialize in the reliable procurement, quality assurance, and timely delivery of high-demand commodities across international markets.
            </motion.p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative w-full aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-3xl rotate-6 opacity-20 blur-lg"></div>
            <div className="absolute inset-0 glass rounded-3xl border border-white/40 shadow-2xl flex items-center justify-center p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <Compass size={160} strokeWidth={1} className="text-primary-800/10" />
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
      <section className="py-24 bg-neutral-900 relative text-white border-y border-neutral-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Why Choose Bluenture LLP?</h2>
            <p className="text-xl text-neutral-400 font-light leading-relaxed">
              With a strong supplier network and a process-driven approach, we help importers and distributors reduce risk, optimize costs, and ensure consistent supply.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "Verified Supplier Network", desc: "We work only with carefully vetted producers and manufacturers to ensure consistent quality and reliable fulfillment." },
              { icon: Handshake, title: "End-to-End Trade Support", desc: "From sourcing and quality checks to documentation and logistics coordination, we manage the complete trade lifecycle." },
              { icon: CheckCircle, title: "Quality Assurance", desc: "Each shipment undergoes strict quality verification to meet international standards and buyer specifications." },
              { icon: Eye, title: "Transparent Communication", desc: "Our clients receive regular updates and full visibility throughout the procurement and shipping process." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-dark p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
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
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            
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
                <Link href="/quote" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                  Speak to a Trade Expert
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
