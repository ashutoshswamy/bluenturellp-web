"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Commodities", path: "/commodities" },
    { name: "Global Trade", path: "/network" },
    { name: "Logistics", path: "/logistics" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled 
            ? "py-3 glass shadow-lg border-b border-white/20" 
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/logo.jpeg" 
                alt="Bluenture LLP Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-primary-900' : 'text-neutral-900 md:text-white drop-shadow-md'}`}>
              BLUENTURE <span className="font-light">LLP</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary-500 ${
                  isActive(link.path) 
                    ? scrolled ? "text-primary-600" : "text-primary-400" 
                    : scrolled ? "text-neutral-600" : "text-neutral-200"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/quote" 
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-primary-800 rounded-full overflow-hidden transition-all hover:bg-primary-900 hover:scale-105 hover:shadow-[0_0_20px_rgba(11,47,91,0.3)]"
            >
              <span className="relative z-10">Get a Quote</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-neutral-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-6 px-6 flex flex-col shadow-2xl"
          >
            <nav className="flex flex-col gap-6 text-xl font-medium">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link 
                    href={link.path} 
                    className={`block transition-colors ${isActive(link.path) ? "text-primary-600" : "text-neutral-700 hover:text-primary-500"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6 pt-6 border-t border-neutral-200"
              >
                <Link 
                  href="/quote" 
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary-800 rounded-lg shadow-md hover:bg-primary-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
