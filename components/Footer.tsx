"use client";

import Link from "next/link";
import { Globe, Linkedin, Twitter } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        
        {/* Brand / Logo Column */}
        <div className={styles.footerBrand}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Globe size={24} strokeWidth={2} />
            </div>
            BLUENTURE <span>LLP</span>
          </Link>
          <p className={styles.brandDesc}>
            A premier international trade organization specializing in global logistics and multi sector commodity distribution.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <Linkedin size={18} strokeWidth={2} />
            </a>
            <a href="#" aria-label="Twitter" className={styles.socialIcon}>
              <Twitter size={18} strokeWidth={2} />
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className={styles.linkGroup}>
          <h3 className={styles.groupHeading}>Quick Links</h3>
          <Link href="/commodities">Commodities Index</Link>
          <Link href="#">Trade Financing</Link>
          <Link href="/network">Supply Chain Map</Link>
          <Link href="#">Investor Relations</Link>
        </div>
        
        {/* Our Offices */}
        <div className={styles.linkGroup}>
          <h3 className={styles.groupHeading}>Our Offices</h3>
          <p className={styles.officeItem}>
            <span className={styles.officePoint}></span>
            London HQ
          </p>
          <p className={styles.officeItem}>
            <span className={styles.officePoint}></span>
            Singapore Regional
          </p>
          <p className={styles.officeItem}>
            <span className={styles.officePoint}></span>
            Dubai Hub
          </p>
          <p className={styles.officeItem}>
            <span className={styles.officePoint}></span>
            Mumbai Operations
          </p>
        </div>

      </div>
      
      <div className={styles.footerBottom}>
        <div className={`container ${styles.footerBottomContent}`}>
          <p>&copy; {currentYear} BLUENTURE LLP. ALL RIGHTS RESERVED.</p>
          <div className={styles.legalLinks}>
            <Link href="#">PRIVACY POLICY</Link>
            <Link href="#">TERMS OF SERVICE</Link>
            <Link href="#">COMPLIANCE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
