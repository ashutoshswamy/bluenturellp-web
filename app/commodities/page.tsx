"use client";

import { Leaf, ShoppingCart, Globe, CheckCircle, Pickaxe, UtensilsCrossed } from 'lucide-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Commodities() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/commodities-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary-900/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-50/20 md:from-neutral-50/30 via-transparent to-neutral-900/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-primary-100 uppercase">Trading Excellence</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Our Commodities Portfolio
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-primary-100/90 max-w-2xl font-light leading-relaxed">
              Connecting global markets with premium essential resources across key industrial sectors.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. Filter & Goods Section */}
      <section className="py-24 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">Diverse Range of Global Goods</h2>
            <p className="text-lg text-neutral-600">
              Bluenture LLP specializes in the import and export of high-quality products. We bridge the gap between production heartlands and global consumption hubs.
            </p>
          </motion.div>

          {/* Detailed Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Agricultural */}
            <motion.div variants={itemVariants} className="group glass rounded-[2rem] overflow-hidden border border-neutral-200 hover:border-primary-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
              <div className="h-48 bg-neutral-200 relative overflow-hidden">
                <Image src="/images/agricultural_realistic.png" alt="Agricultural products — grains, pulses, and organic produce" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-sm border border-emerald-200">
                  <Leaf size={24} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Agricultural Products</h3>
                <p className="text-neutral-600 flex-1 leading-relaxed">
                  Grains, pulses, and organic produce sourced from certified sustainable farms globally.
                </p>
              </div>
            </motion.div>

            {/* Food & Beverages */}
            <motion.div variants={itemVariants} className="group glass rounded-[2rem] overflow-hidden border border-neutral-200 hover:border-primary-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
              <div className="h-48 bg-neutral-200 relative overflow-hidden">
                <Image src="/images/food_beverages_realistic.png" alt="Food and beverages — artisan bread, fruits, olive oil, and coffee" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 shadow-sm border border-amber-200">
                  <UtensilsCrossed size={24} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Food & Beverages</h3>
                <p className="text-neutral-600 flex-1 leading-relaxed">
                  Premium food products and beverages including oils, coffee, spices, and gourmet specialties.
                </p>
              </div>
            </motion.div>

            {/* Raw Materials */}
            <motion.div variants={itemVariants} className="group glass rounded-[2rem] overflow-hidden border border-neutral-200 hover:border-primary-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
              <div className="h-48 bg-neutral-200 relative overflow-hidden">
                <Image src="/images/raw_materials_realistic.png" alt="Raw Materials minimal abstraction" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-6 shadow-sm border border-slate-200">
                  <Pickaxe size={24} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Raw Materials</h3>
                <p className="text-neutral-600 flex-1 leading-relaxed">
                  High-grade raw materials and industrial supplies supporting robust manufacturing growth operations.
                </p>
              </div>
            </motion.div>

            {/* Consumer Goods */}
            <motion.div variants={itemVariants} className="group glass rounded-[2rem] overflow-hidden border border-neutral-200 hover:border-primary-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
              <div className="h-48 bg-neutral-200 relative overflow-hidden">
                <Image src="/images/consumer_goods_realistic.png" alt="Consumer goods minimal abstraction" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 shadow-sm border border-indigo-200">
                  <ShoppingCart size={24} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Consumer Goods</h3>
                <p className="text-neutral-600 flex-1 leading-relaxed">
                  Fast-moving consumer goods and household essentials delivered to retail networks.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Bottom Stats */}
      <section className="py-24 bg-primary-900 text-white relative border-y border-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900 via-primary-800 to-primary-900"></div>
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-primary-300 mb-6 shadow-xl">
                <Globe size={40} />
              </div>
              <h3 className="text-4xl font-black mb-3">50+ Countries</h3>
              <p className="text-primary-100/70 text-lg">An expansive network reaching across every continent.</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-emerald-400 mb-6 shadow-xl">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-4xl font-black mb-3">Quality Assured</h3>
              <p className="text-primary-100/70 text-lg">Rigorous inspection and certification for every shipment.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
