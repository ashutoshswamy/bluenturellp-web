"use client";

import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck, Handshake, CheckCircle, Eye, Target, Compass,
  ShoppingCart, Truck, Store, Building2, ArrowRight,
} from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function AboutContent() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const whyChoose = [
    {
      icon: ShieldCheck,
      title: 'Verified Supplier Network',
      desc: 'We work only with carefully vetted producers and manufacturers to ensure consistent quality and reliable fulfillment for every shipment.',
    },
    {
      icon: Handshake,
      title: 'End-to-End Trade Support',
      desc: 'From sourcing and quality checks to documentation and logistics coordination, one point of contact carries your order the whole way.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      desc: 'Each shipment undergoes strict quality verification to meet international buyer standards before it ever reaches a port.',
    },
    {
      icon: Eye,
      title: 'Radical Transparency',
      desc: 'Regular updates and full visibility through procurement and shipping — no hidden fees, no surprises on the manifest.',
    },
  ];

  const industries = [
    { icon: ShoppingCart, label: "Importers & Wholesalers" },
    { icon: Truck, label: "Food Distributors" },
    { icon: Store, label: "Retail Chains" },
    { icon: Building2, label: "Institutional Buyers" },
    { icon: ShieldCheck, label: "Private Label Businesses" },
    { icon: Handshake, label: "Global Commodity Traders" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero — split layout, matching the Global Trade page */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-white overflow-hidden" aria-label="Hero">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-200/40 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.25em] text-primary-600 uppercase">A Registered Trade Partnership</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-neutral-900 leading-[1.1] tracking-tight mb-8">
              Global Trade, <br />
              <span className="text-gradient">Carried With Care</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg lg:text-xl text-neutral-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              Bluenture LLP is a globally focused trading and sourcing house committed to simplifying cross-border commerce — procurement, quality assurance, and delivery, so every shipment arrives exactly as promised.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative w-full lg:h-[550px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-[100px] animate-pulse-slow max-w-[440px] max-h-[440px] m-auto"></div>
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-primary-500/10 m-auto"></div>
            <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-neutral-200 m-auto"></div>

            <div className="relative w-full max-w-[300px] aspect-square rounded-3xl bg-white border border-neutral-200 shadow-xl p-10 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image src="/logo.jpeg" alt="Bluenture LLP" fill className="object-contain" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="pt-8 pb-16 md:pt-16 md:pb-24 bg-neutral-50 relative" aria-label="Mission and Vision">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 grid grid-cols-1 md:grid-cols-2"
          >
            <motion.div variants={itemVariants} className="bg-white p-10 lg:p-14">
              <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-8"><Target size={22} /></div>
              <p className="text-2xl lg:text-3xl font-black text-neutral-900 tracking-tight leading-snug mb-4">
                Make global trade transparent, efficient, and accessible.
              </p>
              <p className="text-neutral-500 font-light leading-relaxed">
                We deliver quality commodities with reliability, speed, and complete process visibility — so partners never have to wonder where a shipment stands.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-primary-900 p-10 lg:p-14">
              <div className="w-12 h-12 rounded-full bg-white/10 text-primary-300 flex items-center justify-center mb-8"><Compass size={22} /></div>
              <p className="text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug mb-4">
                A trusted trade partner, market after market.
              </p>
              <p className="text-primary-100/70 font-light leading-relaxed">
                Known for ethical sourcing, operational excellence, and long-term value for clients across international markets.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Us — read as the articles of a partnership agreement, since Bluenture literally is one */}
      <section className="py-20 md:py-28 bg-[#060B14] text-white relative overflow-hidden" aria-label="Why Choose Bluenture">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">Why Partners Choose Bluenture LLP</h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              A strong supplier network and a process-driven approach — built to help importers and distributors reduce risk, optimize cost, and keep supply consistent.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="border-t border-white/10"
          >
            {whyChoose.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="flex items-start gap-6 sm:gap-10 py-8 border-b border-white/10"
              >
                <div className="w-11 h-11 shrink-0 rounded-full bg-white/10 text-primary-400 flex items-center justify-center">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white tracking-tight mb-2">{item.title}</h3>
                  <p className="text-neutral-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Industries We Serve — a quiet chip row, not a third stacked card grid */}
      <section className="py-20 md:py-28 bg-neutral-50 relative" aria-label="Industries We Serve">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 md:flex justify-between items-end gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight leading-tight">Industries We Serve</h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-neutral-500 font-light max-w-md mt-6 md:mt-0 text-lg leading-relaxed">
              Whether you&apos;re an importer, distributor, or institutional buyer, we scale to your market&apos;s requirements.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {industries.map((industry) => (
              <motion.div
                key={industry.label}
                variants={itemVariants}
                className="flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-white border border-neutral-200 shadow-sm hover:border-primary-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 shrink-0 rounded-full bg-neutral-900 text-white flex items-center justify-center"><industry.icon size={15} /></div>
                <span className="font-semibold text-neutral-900 text-sm leading-snug">{industry.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Closing CTA — mirrors the site's signature: dark surface, white pill, blue circular arrow */}
      <section className="pb-24 md:pb-28 bg-neutral-50 relative" aria-label="Call to Action">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl bg-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6 p-10 md:p-12"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">Work With Confidence</h3>
              <p className="text-neutral-400 font-light leading-relaxed max-w-xl">
                Partner with Bluenture LLP for a trade ally focused on consistency, transparency, and long-term value.
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
