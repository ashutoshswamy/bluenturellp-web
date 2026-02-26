import styles from './page.module.css';
import Link from 'next/link';
import { ArrowRight, Ship, Plane, FileCheck, Warehouse } from 'lucide-react';
import { SlideUp as SlideUpAnim } from '@/components/animations/SlideUp';
import { FadeIn as FadeInAnim } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function Logistics() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <SlideUpAnim className={styles.heroContent}>
            <span className={`text-label ${styles.heroLabel} blue-bg`}>END-TO-END SUPPLY CHAIN</span>
            <h1 className={styles.heroTitle}>
              Precision Logistics for<br/>
              <span className={styles.heroTitleHighlight}>Global Commodities</span>
            </h1>
            <p className={styles.heroDesc}>
              We provide seamless, integrated logistics solutions designed specifically<br/>
              for the complexities of international commodity trading.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/quote" className="btn btn-primary">
                Get Logistics Quote
                <ArrowRight className="btn-icon" size={16} strokeWidth={2} />
              </Link>
            </div>
          </SlideUpAnim>
          <FadeInAnim className={styles.heroGraphic} delay={0.2}>
            <div className={styles.imageGrid}>
              <div className={styles.gridImage1}></div>
              <div className={styles.gridImage2}></div>
            </div>
          </FadeInAnim>
        </div>
      </section>

      {/* 2. Core Logistics Services */}
      <section className={`section ${styles.servicesSection}`}>
        <div className="container">
          <SlideUpAnim className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Core Logistics Services</h2>
            <p className={styles.sectionDesc}>Comprehensive solutions engineered to move high-value and bulk commodities efficiently.</p>
          </SlideUpAnim>

          <StaggerContainer className={styles.servicesList}>
            <StaggerItem className={styles.serviceItem}>
              <div className={styles.serviceIconWrap}>
                <Ship size={28} strokeWidth={2} />
              </div>
              <div className={styles.serviceText}>
                <h3>Ocean Freight Cargo</h3>
                <p>Handling bulk carriers, tankers, and FCL/LCL container shipping across all major international trade routes with guaranteed space allocations.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem className={styles.serviceItem}>
              <div className={styles.serviceIconWrap}>
                <Plane size={28} strokeWidth={2} />
              </div>
              <div className={styles.serviceText}>
                <h3>Air Cargo Transit</h3>
                <p>Expedited, high-security air freight for time-critical, high-value, or perishable commodities requiring immediate global delivery.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem className={styles.serviceItem}>
              <div className={styles.serviceIconWrap}>
                <FileCheck size={28} strokeWidth={2} />
              </div>
              <div className={styles.serviceText}>
                <h3>Customs & Compliance</h3>
                <p>Expert brokerage services navigating complex international trade regulations, minimizing delays, and optimizing duty and tax burdens.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem className={styles.serviceItem}>
              <div className={styles.serviceIconWrap}>
                <Warehouse size={28} strokeWidth={2} />
              </div>
              <div className={styles.serviceText}>
                <h3>Secure Warehousing</h3>
                <p>Strategically located, climate-controlled, and high-security storage facilities tailored for sensitive and high-value commodities.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Bottom CTA Banner */}
      <section className={styles.ctaSection}>
        <div className="container">
          <SlideUpAnim className={styles.ctaBanner}>
            <h2 className={styles.ctaTitle}>Optimize Your Supply Chain Today</h2>
            <p className={styles.ctaDesc}>
              Let our logistics experts engineer a custom routing and transportation strategy for your commodities.
            </p>
            <Link href="/contact" className="btn btn-white">
              Speak with a Logistics Specialist
            </Link>
          </SlideUpAnim>
        </div>
      </section>
    </div>
  );
}
