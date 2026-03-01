"use client";

import Link from 'next/link';
import { ArrowRight, Globe, CheckCircle, ShieldCheck, Eye, Handshake } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-transparent to-neutral-50/20 md:to-neutral-50/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center md:text-left">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-primary-100 uppercase">Global Trading & Sourcing</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Cross-Border Commerce, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100 italic font-medium opacity-90">Simplified.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-primary-100/80 mb-10 max-w-2xl font-light leading-relaxed">
              Bluenture LLP specializes in reliable procurement, quality assurance, and timely delivery of high-demand commodities across international markets.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/commodities" className="w-full sm:w-auto px-8 py-4 bg-primary-500 hover:bg-primary-400 text-white font-bold rounded-lg shadow-[0_0_30px_rgba(57,166,214,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(57,166,214,0.5)] flex items-center justify-center gap-2">
                Explore Commodities
                <ArrowRight size={18} />
              </Link>
              <Link href="/about" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                Why Bluenture
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Expertise Section - Bento Grid */}
      <section className="py-24 bg-neutral-50 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:flex justify-between items-end gap-8"
          >
            <div>
              <span className="text-primary-600 font-bold tracking-widest text-sm uppercase mb-3 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
                Reliable Sourcing for <br/><span className="text-gradient">Global Markets</span>
              </h2>
            </div>
            <p className="text-neutral-600 max-w-md mt-6 md:mt-0 text-lg">
              We specialize in the reliable procurement and quality assurance of high-demand commodities across international markets.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
          >
            {/* Bento Card 1 - Large */}
            <motion.div variants={itemVariants} className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-xl border border-neutral-100 hover-lift min-h-[300px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/agricultural_minimal.png" alt="Agricultural Products" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/60 to-neutral-900/10 z-10"></div>
              
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform transition-transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-emerald-400 mb-4 border border-white/20 text-2xl shadow-lg">🌱</div>
                <h3 className="text-2xl font-bold text-white mb-2">Agricultural Products</h3>
                <p className="text-neutral-300 max-w-md">Premium grains, pulses, and organic produce sourced directly from certified sustainable farms tailored for global export.</p>
              </div>
            </motion.div>

            {/* Bento Card 2 */}
            <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-xl border border-neutral-100 hover-lift min-h-[300px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/food_beverage_minimal.png" alt="Food & Beverages" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/50 to-neutral-900/10 z-10"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-400 mb-4 border border-white/20 text-2xl shadow-lg">🥫</div>
                <h3 className="text-xl font-bold text-white mb-2">Food & Beverages</h3>
                <p className="text-neutral-300 text-sm">High-quality food commodities built for distributors and institutional buyers.</p>
              </div>
            </motion.div>

            {/* Bento Card 3 */}
            <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-xl border border-neutral-800 hover-lift min-h-[300px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/consumer_goods_minimal.png" alt="Consumer Goods" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/60 to-neutral-900/10 z-10"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-indigo-400 mb-4 border border-white/20 text-2xl shadow-lg">📦</div>
                <h3 className="text-xl font-bold text-white mb-2">Consumer Goods</h3>
                <p className="text-neutral-300 text-sm">Fast-moving consumer goods and household essentials for retail networks worldwide.</p>
              </div>
            </motion.div>

            {/* Bento Card 4 - Large */}
            <motion.div variants={itemVariants} className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-neutral-900 shadow-xl border border-neutral-100 hover-lift min-h-[300px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/energy_minimal.png" alt="Energy & Minerals" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/95 via-neutral-900/60 to-neutral-900/10 z-10"></div>
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform transition-transform duration-500">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-amber-400 mb-4 border border-white/20 text-2xl shadow-lg">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-2">Energy & Minerals</h3>
                <p className="text-neutral-300 max-w-md">High-grade ores, metallurgical coal, and refined energy solutions powering industrial growth worldwide.</p>
              </div>
            </motion.div>

          </motion.div>
          
          {/* Full Width CTA Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full mt-8 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-900 via-primary-800 to-indigo-900 shadow-[0_20px_50px_rgba(11,47,91,0.2)] border border-primary-700/50 flex flex-col sm:flex-row items-center justify-between p-10 md:p-12 hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10 mb-6 sm:mb-0">
              <h3 className="text-3xl font-black text-white mb-3">Looking for tailored commodities?</h3>
              <p className="text-primary-100/90 text-lg font-light leading-relaxed max-w-xl">
                Explore our complete catalog and discover how we can optimize your global sourcing and supply chain capabilities.
              </p>
            </div>
            <Link href="/commodities" className="relative z-10 shrink-0 px-8 py-4 bg-white text-primary-900 font-bold rounded-xl shadow-[0_5px_20px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3 group-hover:bg-neutral-50 group-hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center">
              Explore Catalog
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. Reliability Network Section */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden border-t border-neutral-800 border-b">
        <div className="absolute inset-0 bg-[url('/textures/cubes.png')] opacity-5"></div>
        <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary-400 font-bold tracking-widest text-sm uppercase mb-3 block">Global Reach</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              A Network Built on <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-white">Reliability</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed max-w-lg">
              Bluenture LLP supports clients across multiple international markets, enabling seamless trade flows between trusted suppliers and global buyers. We navigate complexities so you don&apos;t have to.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-primary-400 shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Verified Supplier Network</h4>
                  <p className="text-neutral-500">Carefully vetted producers and manufacturers ensuring strict adherence to consistent quality and sustainability.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-primary-400 shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Trade Compliance</h4>
                  <p className="text-neutral-500">Rigorous adherence to international trade standards, export regulations, and cross-border documentary requirements.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square w-full max-w-lg mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/50 to-primary-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full border border-neutral-800/50 flex items-center justify-center p-8">
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border border-white/5 group-hover:border-primary-500/30 transition-colors duration-700">
                  <Image src="/images/network_reliability_minimal.png" alt="Global Network Reliability" fill className="object-cover transition-transform duration-[20s] group-hover:scale-110 ease-linear" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. The Bluenture Advantage */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary-600 font-bold tracking-widest text-sm uppercase mb-3 block">Why Choose Bluenture</span>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Why Global Businesses <br/><span className="text-gradient">Trust Us</span>
            </h2>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "Verified Network", desc: "We work only with carefully vetted producers to ensure absolute consistent quality." },
              { icon: Handshake, title: "End-to-End Support", desc: "From sourcing and quality checks to documentation and final logistics coordination." },
              { icon: CheckCircle, title: "Quality Assurance", desc: "Each shipment undergoes strict quality verification to meet exact international standards." },
              { icon: Eye, title: "Full Transparency", desc: "Regular updates, live tracking visibility, and open communication throughout the process." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-neutral-50 shadow-sm border border-neutral-100 hover:bg-white hover:shadow-xl hover:border-primary-100 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-neutral-100 flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 group-hover:text-primary-500 transition-all duration-300 relative z-10">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed relative z-10">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="py-24 bg-neutral-50 relative p-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-neutral-900 px-8 py-20 text-center shadow-2xl glass-dark border border-neutral-800"
          >
            {/* Abstract glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-600/30 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to streamline your global sourcing?</h2>
              <p className="text-xl text-neutral-300 mb-10 font-light">
                Connect with our trade specialists today to discuss your specific requirements and receive a tailored quotation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/quote" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
                  Request a Quote
                </Link>
                <Link href="/about" className="w-full sm:w-auto px-8 py-4 bg-neutral-800 text-white hover:bg-neutral-700 font-semibold rounded-xl border border-neutral-700 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
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
