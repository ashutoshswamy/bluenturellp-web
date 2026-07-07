"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

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
                <a href="tel:+919146086655" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-primary-400" />
                  </span>
                  +91 91460 86655
                </a>
              </li>
              <li>
                <a href="https://wa.me/919146086655" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>&copy; {currentYear} BLUENTURE LLP. ALL RIGHTS RESERVED.</p>
          <p>
            Made by{" "}
            <a
              href="https://anahat-entertainment.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              Anahat Entertainment
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
