"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname === '/quote') return null;

  return (
    <footer className="relative bg-neutral-900 border-t border-neutral-800 text-neutral-300 overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/30 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl shadow-[0_0_15px_rgba(57,166,214,0.3)] transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logo.jpeg" 
                  alt="Bluenture LLP Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                BLUENTURE <span className="font-light text-primary-400">LLP</span>
              </span>
            </Link>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              A globally focused trading and sourcing company committed to simplifying cross-border commerce for businesses worldwide.
            </p>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-500"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+15558902344" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-primary-400" />
                  </span>
                  +1 (555) 890-2344
                </a>
              </li>
              <li>
                <a href="mailto:quotes@bluenture.com" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-primary-400" />
                  </span>
                  quotes@bluenture.com
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>&copy; {currentYear} BLUENTURE LLP. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
