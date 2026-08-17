"use client";

import Link from 'next/link';
import { ArrowRight, Sprout, UtensilsCrossed, Package, Pickaxe, ShieldCheck, Search, Send } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

type Commodity = {
  icon: typeof Sprout;
  title: string;
  desc: string;
};

const commodities: Commodity[] = [
  {
    icon: Sprout,
    title: 'Agricultural Products',
    desc: 'Grains, pulses, and organic produce sourced directly from certified sustainable farms for global export.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Beverages',
    desc: 'Premium food commodities and beverages built for distributors and institutional buyers worldwide.',
  },
  {
    icon: Pickaxe,
    title: 'Raw Materials',
    desc: 'High-grade raw materials and industrial supplies supporting manufacturing operations across borders.',
  },
  {
    icon: Package,
    title: 'Consumer Goods',
    desc: 'Fast-moving consumer goods and household essentials delivered to retail networks worldwide.',
  },
];

const trustStats = [
  { value: '50+', label: 'Countries' },
  { value: '100%', label: 'Inspected' },
  { value: '4', label: 'Core Sectors' },
];

const process = [
  { icon: Search, title: 'Source', desc: 'We identify certified producers and verified suppliers across our global network.' },
  { icon: ShieldCheck, title: 'Verify', desc: 'Every shipment is inspected and quality-assured before it leaves origin.' },
  { icon: Send, title: 'Deliver', desc: 'Real-time tracking and dependable timelines get it to your door, on schedule.' },
];

export default function CommoditiesContent() {
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
      {/* 1. Hero — split layout, matching the Global Trade page */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-neutral-50 overflow-hidden" aria-label="Hero">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-200/40 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-100/60 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-neutral-900 leading-[1.1] tracking-tight mb-8">
              Everything We Trade,<br /><span className="text-gradient">Listed</span>.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-neutral-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Four sectors, dozens of commodities, one point of contact. Browse what we source, verify, and ship below.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-10">
              <Link
                href="/quote"
                target="_blank"
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Request a Quote
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-500">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start divide-x divide-neutral-200">
              {trustStats.map((stat) => (
                <div key={stat.label} className="px-6 first:pl-0 text-center lg:text-left">
                  <div className="text-3xl font-black text-neutral-900 tracking-tight">{stat.value}</div>
                  <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-[0.15em] mt-1.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative w-full lg:h-[550px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow max-w-[400px] max-h-[400px] m-auto"></div>
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-primary-500/10 m-auto"></div>
            <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-neutral-200 m-auto"></div>

            <div className="relative grid grid-cols-2 gap-5 md:gap-6 w-full max-w-[380px]">
              {commodities.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white shadow-xl border border-neutral-100 p-6 flex flex-col items-center text-center gap-3 animate-float"
                  style={{ animationDelay: `${i * 0.4}s`, transform: i % 2 === 0 ? 'rotate(-2deg)' : 'rotate(2deg)' }}
                >
                  <div className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-bold text-neutral-900 tracking-tight leading-tight">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Index — every sector, listed */}
      <section className="py-24 md:py-32 bg-white" aria-label="Commodities Index">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-primary-600 text-xs tracking-[0.2em] uppercase mb-3 block">Browse by Sector</span>
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">What We Source</h2>
            </div>
            <p className="text-neutral-500 font-light max-w-sm">Four sectors, sourced and verified end to end.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="border-t border-neutral-200"
          >
            {commodities.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex items-center gap-4 sm:gap-6 py-7 border-b border-neutral-200"
              >
                <div className="w-11 h-11 shrink-0 rounded-full bg-neutral-100 text-neutral-900 flex items-center justify-center">
                  <item.icon size={18} strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">{item.title}</h3>
                  <p className="text-neutral-500 font-light text-sm mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. How We Trade — a real three-step process, so the numbering earns its place */}
      <section className="py-20 md:py-28 bg-neutral-50 relative" aria-label="How We Trade">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-mono text-primary-600 tracking-[0.2em] text-xs uppercase mb-4 block">How We Trade</span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight leading-tight">From Origin to Your Door</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            <motion.div
              className="hidden md:block absolute top-7 left-[16.5%] right-[16.5%] h-px bg-neutral-200 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
            />
            {process.map((step, i) => (
              <motion.div key={step.title} variants={itemVariants} className="relative text-center group">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 * i + 0.1 }}
                  whileHover={{ scale: 1.1, rotate: -6 }}
                  className="relative z-10 w-14 h-14 mx-auto rounded-full bg-neutral-900 text-white flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary-600"
                >
                  <step.icon size={22} />
                </motion.div>
                <span className="font-mono text-xs tracking-[0.15em] text-primary-600 uppercase">Step {i + 1}</span>
                <h3 className="text-xl font-black text-neutral-900 tracking-tight mt-1 mb-3">{step.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Closing CTA — mirrors the site's signature: dark surface, white pill, blue circular arrow */}
      <section className="py-24 md:py-28 bg-neutral-50 relative" aria-label="Call to Action">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl bg-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6 p-10 md:p-12"
          >
            <div>
              <span className="font-mono text-primary-400 tracking-[0.2em] text-xs uppercase mb-3 block">Not Listed?</span>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">Looking for a tailored commodity?</h3>
              <p className="text-neutral-400 font-light leading-relaxed max-w-xl">
                Tell us your specifications and volumes — our trade specialists will source and quote it for you.
              </p>
            </div>
            <Link
              href="/quote"
              target="_blank"
              className="shrink-0 inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Request a Quote
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-500">
                <ArrowRight size={18} className="text-white" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
