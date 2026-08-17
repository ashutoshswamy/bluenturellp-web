"use client";

import Link from 'next/link';
import { useRef, useState, useEffect, SyntheticEvent } from 'react';
import { ArrowRight, Globe as GlobeIcon, CheckCircle, ShieldCheck, Eye, Handshake, Sprout, UtensilsCrossed, Package, Pickaxe } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import type { gsap } from 'gsap';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Code-split + mount only once scrolled near — this globe is a WebGL canvas
// with an 18-marker/9-arc render loop that otherwise starts fighting the
// hero's GSAP drop-in animation for the main thread on every cold load,
// even though it's off-screen at that point.
const Globe = dynamic(() => import('@/components/ui/cobe-globe').then((m) => m.Globe), { ssr: false });

// gsap + ScrollTrigger + @gsap/react is ~144K of JS. Statically importing it
// here put it in this page's hydration-critical bundle: on a cold reload the
// browser has to fetch/parse/execute that chunk before hydration completes,
// competing on the main thread with the very drop-in animation it drives —
// that's the "smooth on client nav, laggy on hard reload" split (client nav
// reuses the already-parsed chunk). Deferring it to its own dynamically
// loaded chunk lets the server-rendered hero markup (unaffected — still in
// the initial HTML, no CLS/SEO cost) hydrate first.
const HeroGsapController = dynamic(() => import('@/components/HeroGsapController'), { ssr: false });

type ExpertiseItem = {
  code: string;
  icon: typeof Sprout;
  title: string;
  desc: string;
  image: string;
};

const expertiseItems: ExpertiseItem[] = [
  {
    code: 'AGR · 01',
    icon: Sprout,
    title: 'Agricultural Products',
    desc: 'Premium grains, pulses, and organic produce sourced directly from certified sustainable farms.',
    image: '/images/agricultural_realistic.png',
  },
  {
    code: 'F&B · 02',
    icon: UtensilsCrossed,
    title: 'Food & Beverages',
    desc: 'High-quality food commodities built for distributors and institutional buyers.',
    image: '/images/food_beverages_realistic.png',
  },
  {
    code: 'CNG · 03',
    icon: Package,
    title: 'Consumer Goods',
    desc: 'Fast-moving consumer goods and household essentials for retail networks worldwide.',
    image: '/images/consumer_goods_realistic.png',
  },
  {
    code: 'RAW · 04',
    icon: Pickaxe,
    title: 'Raw Materials',
    desc: 'High-grade raw materials supporting industrial and manufacturing operations across borders.',
    image: '/images/raw_materials_realistic.png',
  },
];

export default function HomeContent() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const leftContainerRef = useRef<HTMLDivElement>(null);
  const rightContainerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const expertiseCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<ReturnType<typeof gsap.timeline> | null>(null);
  const loadedCountRef = useRef(0);
  const CONTAINER_IMAGE_COUNT = 2;

  // Containers should only drop once the LoadingScreen has actually revealed
  // the site — otherwise they animate in behind the loading overlay and the
  // user never sees the drop. heroReadyRef flips true once both the images
  // are decoded and the loading screen has fired its "site:loaded" event;
  // HeroGsapController checks it on mount to cover the race where that
  // happens before the (dynamically imported) controller is even mounted.
  const siteLoadedRef = useRef(false);
  const heroReadyRef = useRef(false);

  const globeSectionRef = useRef<HTMLDivElement>(null);
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const el = globeSectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowGlobe(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onSiteLoaded = () => {
      siteLoadedRef.current = true;
      if (loadedCountRef.current >= CONTAINER_IMAGE_COUNT) {
        heroReadyRef.current = true;
        tlRef.current?.play();
      } else {
        // Safety net: don't leave the hero blank forever if an image stalls.
        setTimeout(() => {
          heroReadyRef.current = true;
          tlRef.current?.play();
        }, 1500);
      }
    };
    window.addEventListener('site:loaded', onSiteLoaded);
    return () => window.removeEventListener('site:loaded', onSiteLoaded);
  }, []);

  // 'load' fires once bytes are fetched, but the browser may still decode
  // the bitmap on first paint — synchronously, on the main thread, right as
  // GSAP starts animating transform. That's the stutter on reload. Forcing
  // decode() here moves that cost off the animation's critical path.
  const handleContainerImageLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const markLoaded = () => {
      loadedCountRef.current += 1;
      if (loadedCountRef.current >= CONTAINER_IMAGE_COUNT && siteLoadedRef.current) {
        heroReadyRef.current = true;
        tlRef.current?.play();
      }
    };
    if (typeof img.decode === 'function') {
      img.decode().then(markLoaded).catch(markLoaded);
    } else {
      markLoaded();
    }
  };

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
          className="hidden md:block absolute -right-[128px] lg:-right-[176px] top-56 lg:top-64 w-[320px] lg:w-[440px] origin-top opacity-0 pointer-events-none select-none z-10"
        >
          <Image
            src="/container2.png"
            alt="Shipping container"
            width={1672}
            height={941}
            sizes="440px"
            className="w-full h-auto"
            priority
            onLoad={handleContainerImageLoad}
          />
        </div>
        <div
          ref={leftContainerRef}
          className="hidden md:block absolute -left-[128px] lg:-left-[168px] top-72 lg:top-80 w-[320px] lg:w-[420px] origin-top opacity-0 pointer-events-none select-none z-10"
        >
          <Image
            src="/container1.png"
            alt="Shipping container"
            width={1774}
            height={887}
            sizes="420px"
            className="w-full h-auto"
            priority
            onLoad={handleContainerImageLoad}
          />
        </div>

        <div ref={heroTextRef} className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center opacity-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-900 leading-[1.05] tracking-tight mb-6">
            Sourcing, Simplified.<br />Delivered Globally.
          </h1>

          <p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Reliable commodity trading, without the friction.
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

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-neutral-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-primary-500" />
              <span className="text-sm font-medium">Quality-assured sourcing</span>
            </div>
            <div className="flex items-center gap-2">
              <GlobeIcon size={16} className="text-primary-500" />
              <span className="text-sm font-medium">Cross-border logistics</span>
            </div>
            <div className="flex items-center gap-2">
              <Handshake size={16} className="text-primary-500" />
              <span className="text-sm font-medium">Trusted trade partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Expertise Section — commodity manifest ledger */}
      <section className="py-24 md:py-32 bg-neutral-50 relative" aria-label="Our Expertise">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:flex justify-between items-end gap-8"
          >
            <div>
              <span className="font-mono text-primary-600 font-medium tracking-[0.2em] text-xs uppercase mb-3 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.05]">
                Reliable Sourcing for<br />Global Markets
              </h2>
            </div>
            <p className="text-neutral-500 font-light max-w-md mt-6 md:mt-0 text-lg leading-relaxed">
              We specialize in the reliable procurement and quality assurance of high-demand commodities across international markets.
            </p>
          </motion.div>

          <div ref={journeyRef} className="relative">
            {/* Cargo rail — track + scroll-filled progress, standing in for the manifest's paper trail. Desktop only. */}
            <div className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-neutral-200" aria-hidden="true"></div>
            <div
              ref={railRef}
              className="hidden md:block absolute left-0 top-2 bottom-2 w-px bg-primary-500 origin-top"
              style={{ transform: 'scaleY(0)' }}
              aria-hidden="true"
            ></div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative z-10"
            >
              {expertiseItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  ref={(el) => { expertiseCardRefs.current[i] = el; }}
                  variants={itemVariants}
                  className="group relative grid grid-cols-[auto_1fr] md:grid-cols-[100px_1fr_auto] items-center gap-x-6 gap-y-4 border-b border-dashed border-neutral-300 last:border-b-0 border-l-2 border-l-transparent pl-6 md:pl-12 pr-2 py-10 md:py-12 transition-colors duration-300"
                >
                  {/* Rail checkpoint dot */}
                  <span className="rail-dot hidden md:block absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-neutral-300 bg-neutral-50 transition-colors duration-300"></span>

                  <div className="hidden md:flex flex-col gap-3 items-start">
                    <div className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                      <item.icon size={20} />
                    </div>
                  </div>

                  <div className="col-start-1 md:col-start-2 row-start-1 md:row-start-auto flex md:hidden items-center gap-3 mb-1">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-neutral-900 text-white flex items-center justify-center"><item.icon size={18} /></div>
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <h3 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight mb-2">{item.title}</h3>
                    <p className="text-neutral-500 font-light text-sm md:text-base leading-relaxed max-w-md">{item.desc}</p>
                  </div>

                  <div className="col-span-2 md:col-span-1 relative w-full md:w-40 h-40 md:h-32 rounded-xl overflow-hidden bg-neutral-100 border border-dashed border-neutral-300">
                    <Image src={item.image} alt={`${item.title} — sourced and shipped by Bluenture LLP`} fill sizes="(min-width: 768px) 160px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Full Width CTA Banner — mirrors the hero button: dark surface, pill CTA, blue circular arrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="w-full mt-16 md:mt-20 relative overflow-hidden rounded-2xl bg-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-6 p-10 md:p-12"
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

              <div ref={globeSectionRef} className="relative w-full max-w-[480px] aspect-square group [mask-image:radial-gradient(circle,white_45%,transparent_72%)]">
                <div className="absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-700 drop-shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                  {showGlobe && <Globe
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
                  />}
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

      {/* 4. The Bluenture Advantage — presented as a verification ledger, not a card grid */}
      <section className="py-24 md:py-32 bg-white" aria-label="Why Choose Bluenture">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left: intro */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.05] mb-6">
                  Trusted by<br /><span className="text-gradient">Global Buyers</span>
                </h2>
                <p className="text-neutral-500 font-light text-lg leading-relaxed max-w-sm">
                  Every claim below is backed by process, not promises — the same checks a buyer runs before signing.
                </p>
              </div>
            </div>

            {/* Right: verification ledger */}
            <div className="lg:col-span-7">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="border-t border-neutral-200"
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
                    className="group grid grid-cols-[1fr_auto] items-start gap-5 sm:gap-8 py-8 px-2 -mx-2 rounded-lg border-b border-neutral-200 hover:bg-primary-50/40 transition-colors duration-300"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                      <p className="text-neutral-500 font-light leading-relaxed">{feature.desc}</p>
                    </div>
                    <feature.icon
                      className="text-neutral-300 group-hover:text-primary-500 group-hover:scale-110 transition-all duration-300 shrink-0 mt-1"
                      size={22}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA — framed as the shipping manifest for the buyer's own trade route */}
      <section className="py-24 md:py-32 bg-neutral-50 relative" aria-label="Call to Action">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-neutral-900 border border-neutral-800 shadow-2xl grid grid-cols-1 lg:grid-cols-[1fr_auto]"
          >
            {/* Abstract glow, kept subtle behind the copy only */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>

            {/* Left: copy + CTA, left-aligned */}
            <div className="relative z-10 px-8 py-16 md:px-14 md:py-20">
              <span className="font-mono text-primary-400 text-xs tracking-[0.2em] uppercase mb-5 block">Ready to Ship</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.05] max-w-lg">
                Your next shipment starts here.
              </h2>
              <p className="text-lg text-neutral-400 mb-10 font-light max-w-md leading-relaxed">
                Tell us the route and the commodity — our trade specialists handle sourcing, quality checks, and delivery from there.
              </p>
              <Link href="/quote" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 hover:bg-neutral-100 font-bold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1">
                Request a Quote
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: manifest stub — boarding-pass-style ticket, torn from the CTA panel */}
            <div className="relative z-10 flex items-center justify-center px-8 py-12 lg:w-80 lg:border-l border-dashed border-neutral-700">
              {/* Perforation cutouts on the seam, desktop only */}
              <div className="hidden lg:block absolute -left-3 top-0 w-6 h-6 rounded-full bg-neutral-50"></div>
              <div className="hidden lg:block absolute -left-3 bottom-0 w-6 h-6 rounded-full bg-neutral-50"></div>

              <div className="w-full max-w-[240px] lg:max-w-none font-mono text-neutral-500">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase mb-2">Manifest No.</div>
                    <div className="text-xl text-white tracking-wide">BLU-000-GLB</div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-500/40 bg-primary-500/10 px-2.5 py-1 text-[9px] font-bold tracking-[0.15em] uppercase text-primary-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-400"></span>
                    Confirmed
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-2">
                  <span>ORIGIN</span>
                  <GlobeIcon size={14} className="text-primary-400" />
                  <span>MARKET</span>
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-bold tracking-wide mb-6">
                  <span>SRC</span>
                  <span className="flex-1 border-t border-dashed border-neutral-700"></span>
                  <span>YOU</span>
                </div>

                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.15em] border-t border-dashed border-neutral-700 pt-4 mb-6">
                  <div>
                    <div className="mb-1 text-neutral-500">Class</div>
                    <div className="text-neutral-300 font-bold">Priority</div>
                  </div>
                  <div className="text-right">
                    <div className="mb-1 text-neutral-500">Issued</div>
                    <div className="text-neutral-300 font-bold">On Request</div>
                  </div>
                </div>

                {/* Barcode texture */}
                <div
                  className="h-8 w-full opacity-70"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 5px, currentColor 5px, currentColor 6px, transparent 6px, transparent 10px)',
                    color: 'var(--color-neutral-400)',
                  }}
                  aria-hidden="true"
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rendered last on purpose. React attaches refs and fires layout effects
          in a single depth-first commit pass, so a controller placed above the
          elements it animates runs its useGSAP before their refs are attached —
          gsap.set(null) then throws. Mounting it after every target it touches
          (hero containers, hero text, journey/squiggle) guarantees the refs are
          populated by the time its effects run. */}
      <HeroGsapController
        heroSectionRef={heroSectionRef}
        rightContainerRef={rightContainerRef}
        leftContainerRef={leftContainerRef}
        heroTextRef={heroTextRef}
        tlRef={tlRef}
        heroReadyRef={heroReadyRef}
        journeyRef={journeyRef}
        expertiseCardRefs={expertiseCardRefs}
        railRef={railRef}
      />
    </div>
  );
}
