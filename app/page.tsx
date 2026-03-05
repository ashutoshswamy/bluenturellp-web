"use client";

import Link from 'next/link';
import { ArrowRight, Globe, CheckCircle, ShieldCheck, Eye, Handshake, Sprout, UtensilsCrossed, Package, Pickaxe } from 'lucide-react';
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
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Global Trade, Streamlined.
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
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Bento Card 1 - Large */}
            <motion.div variants={itemVariants} className="md:col-span-2 group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col min-h-[380px] border border-neutral-100">
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image src="/images/agricultural_realistic.png" alt="Agricultural Products" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-start bg-white">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100 shadow-sm"><Sprout size={24} /></div>
                <h3 className="text-2xl font-serif font-extrabold text-neutral-900 mb-3">Agricultural Products</h3>
                <p className="text-neutral-700 font-medium leading-relaxed max-w-lg">Premium grains, pulses, and organic produce sourced directly from certified sustainable farms tailored for global export.</p>
              </div>
            </motion.div>

            {/* Bento Card 2 */}
            <motion.div variants={itemVariants} className="group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col min-h-[380px] border border-neutral-100">
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image src="/images/food_beverages_realistic.png" alt="Food & Beverages" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-start bg-white">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-5 border border-amber-100 shadow-sm"><UtensilsCrossed size={24} /></div>
                <h3 className="text-xl font-serif font-extrabold text-neutral-900 mb-3">Food & Beverages</h3>
                <p className="text-neutral-700 text-sm font-medium leading-relaxed">High-quality food commodities built for distributors and institutional buyers.</p>
              </div>
            </motion.div>

            {/* Bento Card 3 */}
            <motion.div variants={itemVariants} className="group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col min-h-[380px] border border-neutral-100">
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image src="/images/consumer_goods_realistic.png" alt="Consumer Goods" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-start bg-white">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5 border border-indigo-100 shadow-sm"><Package size={24} /></div>
                <h3 className="text-xl font-serif font-extrabold text-neutral-900 mb-3">Consumer Goods</h3>
                <p className="text-neutral-700 text-sm font-medium leading-relaxed">Fast-moving consumer goods and household essentials for retail networks worldwide.</p>
              </div>
            </motion.div>

            {/* Bento Card 4 - Large */}
            <motion.div variants={itemVariants} className="md:col-span-2 group overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col min-h-[380px] border border-neutral-100">
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image src="/images/raw_materials_realistic.png" alt="Raw Materials" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-start bg-white">
                <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-600 flex items-center justify-center mb-5 border border-slate-200 shadow-sm"><Pickaxe size={24} /></div>
                <h3 className="text-2xl font-serif font-extrabold text-neutral-900 mb-3">Raw Materials</h3>
                <p className="text-neutral-700 font-medium leading-relaxed max-w-lg">High-grade raw materials supporting robust industrial and manufacturing growth operations across borders.</p>
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
      <section className="py-28 md:py-36 bg-[#060B14] text-white relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik00MCAwaS00MHY0MGg0MFYweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMUUyOTNCIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4=')] opacity-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        {/* Top accent gradient border */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50"></div>

        {/* Large ambient glow behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none"></div>

        {/* Floating accent dots */}
        <div className="absolute top-20 left-[15%] w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-[10%] w-1 h-1 bg-blue-400/30 rounded-full animate-pulse-slow [animation-delay:1s]"></div>
        <div className="absolute bottom-32 left-[8%] w-1 h-1 bg-cyan-300/25 rounded-full animate-pulse-slow [animation-delay:2s]"></div>
        <div className="absolute bottom-20 right-[20%] w-1.5 h-1.5 bg-blue-500/30 rounded-full animate-pulse-slow [animation-delay:0.5s]"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">

          {/* Main 2-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-20">
            
            {/* Left Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:pr-12 xl:pr-20"
            >
              <span className="inline-flex items-center gap-2.5 text-cyan-300/80 font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
                <span className="w-8 h-px bg-gradient-to-r from-cyan-400/80 to-transparent"></span>
                Global Reach
              </span>
              
              <h2 className="text-5xl md:text-[3.75rem] font-extrabold mb-8 leading-[1.08] tracking-tight">
                A Network Built on <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-500">Reliability</span>
              </h2>
              
              <p className="text-[#8892B0] text-lg font-light mb-10 leading-relaxed max-w-xl">
                Bluenture LLP supports clients across multiple international markets, enabling seamless trade flows between trusted suppliers and global buyers. We navigate complexities so you don&apos;t have to.
              </p>

              {/* Stats row */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-wrap gap-8 md:gap-12 pt-8 border-t border-slate-800/80"
              >
                {[
                  { value: "15+", label: "Countries Served" },
                  { value: "200+", label: "Verified Suppliers" },
                  { value: "99%", label: "On-Time Delivery" },
                ].map((stat, idx) => (
                  <div key={idx} className="group cursor-default">
                    <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight group-hover:text-cyan-300 transition-colors duration-300">{stat.value}</div>
                    <div className="text-xs font-semibold tracking-widest uppercase text-slate-500 group-hover:text-slate-400 transition-colors duration-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative lg:h-[650px] flex items-center justify-center"
            >
              {/* Layered glows behind globe */}
              <div className="absolute inset-0 bg-cyan-500/8 rounded-full blur-[120px] animate-pulse-slow max-w-[450px] max-h-[450px] m-auto"></div>
              <div className="absolute inset-0 bg-blue-600/6 rounded-full blur-[80px] max-w-[350px] max-h-[350px] m-auto"></div>
              
              {/* Concentric rings */}
              <div className="absolute w-[300px] h-[300px] md:w-[440px] md:h-[440px] rounded-full border border-cyan-500/10 m-auto"></div>
              <div className="absolute w-[400px] h-[400px] md:w-[580px] md:h-[580px] rounded-full border border-slate-800/30 m-auto"></div>
              <div className="absolute w-[480px] h-[480px] md:w-[700px] md:h-[700px] rounded-full border border-slate-800/15 m-auto"></div>
              
              {/* Pulsing accent ring */}
              <div className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] rounded-full border border-cyan-500/20 m-auto animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>

              <div className="relative w-full max-w-[480px] aspect-square group [mask-image:radial-gradient(circle,white_45%,transparent_72%)]">
                <div className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                  <Image 
                    src="/images/blue_plexus_globe.png" 
                    alt="Global Trade Network" 
                    fill 
                    className="object-contain animate-spin-reverse drop-shadow-[0_0_40px_rgba(34,211,238,0.15)]" 
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature Cards Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              { 
                icon: Globe, 
                title: "Verified Supplier Network", 
                desc: "Carefully vetted producers and manufacturers ensuring strict adherence to consistent quality and sustainability standards.",
                gradient: "from-cyan-500/20 to-cyan-600/5"
              },
              { 
                icon: CheckCircle, 
                title: "Trade Compliance", 
                desc: "Rigorous adherence to international trade standards, export regulations, and cross-border documentary requirements.",
                gradient: "from-blue-500/20 to-blue-600/5"
              },
              { 
                icon: ShieldCheck, 
                title: "Logistics Coordination", 
                desc: "End-to-end supply chain management bridging procurement, warehousing, and timely last-mile delivery worldwide.",
                gradient: "from-indigo-500/20 to-indigo-600/5"
              },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-cyan-400 mb-5 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-500">
                    <feature.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-white tracking-wide">{feature.title}</h4>
                  <p className="text-[#8892B0] text-sm font-light leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
