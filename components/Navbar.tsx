"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Globe, Search } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && pathname !== '/') return false;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return pathname === path;
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.leftSection}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Globe size={24} strokeWidth={2} />
            </div>
            BLUENTURE <span>LLP</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>Home</Link>
            <Link href="/commodities" className={`${styles.navLink} ${isActive('/commodities') ? styles.active : ''}`}>Commodities</Link>
            <Link href="/network" className={`${styles.navLink} ${isActive('/network') ? styles.active : ''}`}>Global Trade</Link>
            <Link href="/logistics" className={`${styles.navLink} ${isActive('/logistics') ? styles.active : ''}`}>Logistics</Link>
            <Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>About Us</Link>
          </nav>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.searchBarContainer}>
            <Search className={styles.searchIcon} size={16} strokeWidth={2} />
            <input 
              type="text" 
              placeholder="Search commodities..." 
              className={styles.searchInput}
            />
          </div>
          <Link href="/quote" className="btn btn-primary">Get a Quote</Link>

          {/* Mobile menu button */}
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ""}`}>
        <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link href="/commodities" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Commodities</Link>
        <Link href="/network" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Global Trade</Link>
        <Link href="/logistics" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Logistics</Link>
        <Link href="/about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
      </div>
    </header>
  );
}
