"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Globe as GlobeIcon, CheckCircle, ShieldCheck, Eye, Handshake, Sprout, UtensilsCrossed, Package, Pickaxe } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Globe } from '@/components/ui/cobe-globe';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);

export default function HomeContent() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const rightContainer2Ref = useRef<HTMLDivElement>(null);
  const leftContainer2Ref = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const containers = [
        rightContainerRef.current,
        leftContainerRef.current,
        rightContainer2Ref.current,
        leftContainer2Ref.current,
      ];

      // GPU hint only while the drop is in flight; stripped on completion
      // so it doesn't sit on four static elements for the rest of the page.
      gsap.set(containers, { willChange: 'transform, opacity' });

      const tl = gsap.timeline({
        onComplete: () => gsap.set(containers, { clearProps: 'willChange' }),
      });

      tl.fromTo(
        rightContainerRef.current,
        { y: -500, opacity: 0, rotate: 12 },
        { y: 0, opacity: 1, rotate: 4, duration: 1.4, ease: 'power4.out' },
        0.1
      )
        .fromTo(
          leftContainerRef.current,
          { y: -500, opacity: 0, rotate: -12 },
          { y: 0, opacity: 1, rotate: -4, duration: 1.4, ease: 'power4.out' },
          0.25
        )
        .fromTo(
          rightContainer2Ref.current,
          { y: -500, opacity: 0, rotate: 10 },
          { y: 0, opacity: 1, rotate: 5, duration: 1.4, ease: 'power4.out' },
          0.4
        )
        .fromTo(
          leftContainer2Ref.current,
          { y: -500, opacity: 0, rotate: -10 },
          { y: 0, opacity: 1, rotate: -5, duration: 1.4, ease: 'power4.out' },
          0.55
        )
        .fromTo(
          heroTextRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' },
          0.8
        );
    },
    { scope: heroSectionRef }
  );

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
      <section ref={heroSectionRef} className="relative min-h-[85vh] md:min-h-[820px] lg:min-h-[900px] flex flex-col items-center justify-center overflow-hidden pt-32 pb-32 bg-neutral-50" aria-label="Hero">
        {/* Dropping container images */}
        <div
          ref={rightContainerRef}
          className="hidden md:block absolute -right-[128px] lg:-right-[176px] top-40 lg:top-48 w-[320px] lg:w-[440px] origin-top opacity-0 pointer-events-none select-none z-10"
        >
          <Image
            src="/container2.png"
            alt="Shipping container"
            width={1672}
            height={941}
            className="w-full h-auto"
            priority
          />
        </div>
        <div
          ref={leftContainerRef}
          className="hidden md:block absolute -left-[128px] lg:-left-[168px] top-56 lg:top-64 w-[320px] lg:w-[420px] origin-top opacity-0 pointer-events-none select-none z-10"
        >
          <Image
            src="/container1.png"
            alt="Shipping container"
            width={1774}
            height={887}
            className="w-full h-auto"
            priority
          />
        </div>
        <div
          ref={rightContainer2Ref}
          className="hidden md:block absolute -right-[120px] lg:-right-[160px] top-[384px] lg:top-[490px] w-[300px] lg:w-[400px] origin-top opacity-0 pointer-events-none select-none"
        >
          <Image
            src="/container4.png"
            alt="Shipping container"
            width={1774}
            height={887}
            className="w-full h-auto"
            priority
          />
        </div>
        <div
          ref={leftContainer2Ref}
          className="hidden md:block absolute -left-[112px] lg:-left-[152px] top-[424px] lg:top-[516px] w-[280px] lg:w-[380px] origin-top opacity-0 pointer-events-none select-none"
        >
          <Image
            src="/container3.png"
            alt="Shipping container"
            width={1672}
            height={941}
            className="w-full h-auto"
            priority
          />
        </div>

        <div ref={heroTextRef} className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center opacity-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-900 leading-[1.05] tracking-tight mb-6">
            Precision-Driven Delivery,<br />Anytime, Anywhere
          </h1>

          <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            From sourcing to shipment, Bluenture LLP delivers reliable trading and logistics solutions for high-demand commodities, on time, every time.
          </p>

          <Link
            href="/commodities"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Commodities
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-500">
              <ArrowRight size={18} />
            </span>
          </Link>

          <p className="mt-14 text-sm font-medium text-neutral-400 tracking-wide">
            Trusted by 500+ Enterprise Partners Worldwide
          </p>
        </div>
      </section>

      {/* 2. Our Expertise Section - Bento Grid */}
      <section className="py-24 md:py-32 bg-neutral-50 relative" aria-label="Our Expertise">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:flex justify-between items-end gap-8"
          >
            <div>
              <span className="text-primary-600 font-bold tracking-widest text-sm uppercase mb-3 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.05]">
                Reliable Sourcing for<br />Global Markets
              </h2>
            </div>
            <p className="text-neutral-500 font-light max-w-md mt-6 md:mt-0 text-lg leading-relaxed">
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
            <motion.div variants={itemVariants} className="md:col-span-2 group overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[380px]">
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image src="/images/agricultural_realistic.png" alt="Agricultural Products — grains, pulses, and organic produce for global export" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-start">
                <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-5"><Sprout size={22} /></div>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight mb-3">Agricultural Products</h3>
                <p className="text-neutral-500 font-light leading-relaxed max-w-lg">Premium grains, pulses, and organic produce sourced directly from certified sustainable farms tailored for global export.</p>
              </div>
            </motion.div>

            {/* Bento Card 2 */}
            <motion.div variants={itemVariants} className="group overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[380px]">
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image src="/images/food_beverages_realistic.png" alt="Food and beverages — oils, coffee, spices, and gourmet specialties" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-start">
                <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-5"><UtensilsCrossed size={22} /></div>
                <h3 className="text-xl font-black text-neutral-900 tracking-tight mb-3">Food & Beverages</h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed">High-quality food commodities built for distributors and institutional buyers.</p>
              </div>
            </motion.div>

            {/* Bento Card 3 */}
            <motion.div variants={itemVariants} className="group overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[380px]">
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image src="/images/consumer_goods_realistic.png" alt="Consumer goods — household essentials for retail networks worldwide" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-start">
                <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-5"><Package size={22} /></div>
                <h3 className="text-xl font-black text-neutral-900 tracking-tight mb-3">Consumer Goods</h3>
                <p className="text-neutral-500 font-light text-sm leading-relaxed">Fast-moving consumer goods and household essentials for retail networks worldwide.</p>
              </div>
            </motion.div>

            {/* Bento Card 4 - Large */}
            <motion.div variants={itemVariants} className="md:col-span-2 group overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col min-h-[380px]">
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <Image src="/images/raw_materials_realistic.png" alt="Raw materials — industrial supplies for manufacturing operations" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-start">
                <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center mb-5"><Pickaxe size={22} /></div>
                <h3 className="text-2xl font-black text-neutral-900 tracking-tight mb-3">Raw Materials</h3>
                <p className="text-neutral-500 font-light leading-relaxed max-w-lg">High-grade raw materials supporting robust industrial and manufacturing growth operations across borders.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Full Width CTA Banner — mirrors the hero button: dark surface, pill CTA, blue circular arrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full mt-6 relative overflow-hidden rounded-2xl bg-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6 p-10 md:p-12"
          >
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">Looking for tailored commodities?</h3>
              <p className="text-neutral-400 font-light leading-relaxed max-w-xl">
                Explore our complete catalog and discover how we can optimize your global sourcing and supply chain capabilities.
              </p>
            </div>
            <Link
              href="/commodities"
              className="relative z-10 shrink-0 inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-white hover:bg-neutral-100 text-neutral-900 font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            >
              Explore Catalog
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-500">
                <ArrowRight size={18} className="text-white" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 3. Reliability Network Section */}
      <section className="py-28 md:py-36 bg-[#060B14] text-white relative overflow-hidden" aria-label="Global Reliability Network">
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
                icon: GlobeIcon,
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
      <section className="py-24 bg-white" aria-label="Why Choose Bluenture">
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
      <section className="py-24 bg-neutral-50 relative p-6" aria-label="Call to Action">
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
