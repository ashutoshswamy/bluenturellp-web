"use client";

import { Ship, Plane, FileCheck, Check } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Globe } from '@/components/ui/cobe-globe';

export default function NetworkContent() {
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
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-neutral-900 leading-[1.1] tracking-tight mb-8">
              Global Trade <br/>
              <span className="text-gradient">Network</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-xl mb-10">
              Connecting markets across continents with reliable sea freight, air transit, and comprehensive trade expertise. We move commodities with precision.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative w-full lg:h-[550px] flex items-center justify-center"
          >
            {/* Layered glows behind globe — no ring outlines on this light bg, they read as clutter instead of depth */}
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[110px] animate-pulse-slow max-w-[440px] max-h-[440px] m-auto"></div>
            <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-[80px] max-w-[340px] max-h-[340px] m-auto"></div>

            <div className="relative w-full max-w-[420px] aspect-square group [mask-image:radial-gradient(circle,white_45%,transparent_72%)]">
              <div className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700 drop-shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                <Globe
                  markers={[
                    { id: "mumbai", location: [19.076, 72.8777], label: "Mumbai" },
                    { id: "dubai", location: [25.2048, 55.2708], label: "Dubai" },
                    { id: "singapore", location: [1.3521, 103.8198], label: "Singapore" },
                    { id: "london", location: [51.5074, -0.1278], label: "London" },
                    { id: "newyork", location: [40.7128, -74.006], label: "New York" },
                    { id: "shanghai", location: [31.2304, 121.4737], label: "Shanghai" },
                    { id: "rotterdam", location: [51.9244, 4.4777], label: "Rotterdam" },
                    { id: "capetown", location: [-33.9249, 18.4241], label: "Cape Town" },
                    { id: "sydney", location: [-33.8688, 151.2093], label: "Sydney" },
                    { id: "saopaulo", location: [-23.5505, -46.6333], label: "São Paulo" },
                    { id: "tokyo", location: [35.6762, 139.6503], label: "Tokyo" },
                    { id: "istanbul", location: [41.0082, 28.9784], label: "Istanbul" },
                    { id: "hongkong", location: [22.3193, 114.1694], label: "Hong Kong" },
                    { id: "losangeles", location: [34.0522, -118.2437], label: "Los Angeles" },
                    { id: "hamburg", location: [53.5511, 9.9937], label: "Hamburg" },
                    { id: "lagos", location: [6.5244, 3.3792], label: "Lagos" },
                    { id: "jakarta", location: [-6.2088, 106.8456], label: "Jakarta" },
                    { id: "riyadh", location: [24.7136, 46.6753], label: "Riyadh" },
                  ]}
                  arcs={[
                    { id: "mumbai-dubai", from: [19.076, 72.8777], to: [25.2048, 55.2708] },
                    { id: "mumbai-singapore", from: [19.076, 72.8777], to: [1.3521, 103.8198] },
                    { id: "dubai-london", from: [25.2048, 55.2708], to: [51.5074, -0.1278] },
                    { id: "london-newyork", from: [51.5074, -0.1278], to: [40.7128, -74.006] },
                    { id: "singapore-shanghai", from: [1.3521, 103.8198], to: [31.2304, 121.4737] },
                    { id: "mumbai-shanghai", from: [19.076, 72.8777], to: [31.2304, 121.4737] },
                    { id: "london-rotterdam", from: [51.5074, -0.1278], to: [51.9244, 4.4777] },
                    { id: "dubai-capetown", from: [25.2048, 55.2708], to: [-33.9249, 18.4241] },
                    { id: "singapore-sydney", from: [1.3521, 103.8198], to: [-33.8688, 151.2093] },
                    { id: "newyork-saopaulo", from: [40.7128, -74.006], to: [-23.5505, -46.6333] },
                    { id: "shanghai-tokyo", from: [31.2304, 121.4737], to: [35.6762, 139.6503] },
                    { id: "dubai-istanbul", from: [25.2048, 55.2708], to: [41.0082, 28.9784] },
                    { id: "shanghai-hongkong", from: [31.2304, 121.4737], to: [22.3193, 114.1694] },
                    { id: "newyork-losangeles", from: [40.7128, -74.006], to: [34.0522, -118.2437] },
                    { id: "rotterdam-hamburg", from: [51.9244, 4.4777], to: [53.5511, 9.9937] },
                    { id: "dubai-lagos", from: [25.2048, 55.2708], to: [6.5244, 3.3792] },
                    { id: "singapore-jakarta", from: [1.3521, 103.8198], to: [-6.2088, 106.8456] },
                    { id: "dubai-riyadh", from: [25.2048, 55.2708], to: [24.7136, 46.6753] },
                  ]}
                  baseColor={[0.06, 0.09, 0.16]}
                  markerColor={[0.13, 0.83, 0.93]}
                  arcColor={[0.13, 0.83, 0.93]}
                  glowColor={[0.13, 0.6, 0.93]}
                  dark={1}
                  mapBrightness={6}
                  diffuse={1.2}
                />
              </div>
            </div>
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
              <h3 className="text-2xl font-bold mb-4 text-white">Ocean Freight</h3>
              <p className="text-neutral-400 mb-8 flex-1 leading-relaxed font-light text-[15px]">
                Navigating the complexities of bulk and container shipping through our trusted global partners. We coordinate FCL and LCL shipments, ensuring your cargo moves efficiently across the water via the world&apos;s leading carriers.
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
                When time is your most valuable asset, we orchestrate the fastest routes for your critical cargo. We facilitate specialized handling for perishables and high-security transport for luxury commodities via our global airline partners.
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
              <h3 className="text-2xl font-bold mb-4 text-white">Global Logistics Network</h3>
              <p className="text-neutral-400 mb-8 flex-1 leading-relaxed font-light text-[15px]">
                Connecting markets across continents through a premier network of sea, air, and customs partners. We move your commodities with precision.
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
