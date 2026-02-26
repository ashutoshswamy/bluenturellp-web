import styles from './page.module.css';
import Link from 'next/link';
import { ArrowRight, Globe, CheckCircle, ShieldCheck, Clock, CreditCard } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';
import { SlideUp as SlideUpAnim } from '@/components/animations/SlideUp';
import { FadeIn as FadeInAnim } from '@/components/animations/FadeIn';

export default function Home() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <SlideUpAnim className={styles.heroContent}>
            <span className={`text-label ${styles.heroLabel}`}>
              <span className={styles.labelDot}></span>
              GLOBAL WHITE EXPORT LEADER
            </span>
            <h1 className={styles.heroTitle}>
              Global Trade,<br/>
              <span className={styles.heroTitleItalic}>Simplified.</span>
            </h1>
            <p className={styles.heroDesc}>
              Bluenture LLP provides seamless end-to-end logistics and commodity sourcing.<br/>
              We connect global markets with integrity, speed, and precision.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/commodities" className="btn btn-primary">
                Explore Commodities
                <ArrowRight className="btn-icon" size={16} strokeWidth={2} />
              </Link>
              <Link href="/logistics" className="btn btn-secondary">Our Logistics</Link>
            </div>
          </SlideUpAnim>
        </div>

        {/* 2. Overlying Stats Bar */}
        <div className={`container ${styles.statsContainer}`}>
          <FadeInAnim delay={0.3} className={styles.statsBar}>
            <div className={styles.statItem}>
              <h2 className={styles.statNumber}>50<span className={styles.statPlus}>+</span></h2>
              <p className={styles.statLabel}>COUNTRIES REACHED</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <h2 className={styles.statNumber}>100<span className={styles.statPlus}>+</span></h2>
              <p className={styles.statLabel}>COMMODITIES TRADED</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <h2 className={styles.statNumber}>1.2M</h2>
              <p className={styles.statLabel}>ANNUAL TONNAGE</p>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <h2 className={styles.statNumber}>500<span className={styles.statPlus}>+</span></h2>
              <p className={styles.statLabel}>GLOBAL CLIENTS</p>
            </div>
          </FadeInAnim>
        </div>
      </section>

      {/* 3. Our Expertise Section */}
      <section className={`section ${styles.expertiseSection}`}>
        <div className="container">
          <div className={styles.expertiseHeader}>
            <div className={styles.expertiseTitleArea}>
              <span className="text-label" style={{color: 'var(--color-primary)'}}>OUR EXPERTISE</span>
              <h2 className={styles.sectionTitle}>Diversified Portfolios for Global<br/>Markets</h2>
            </div>
            <div className={styles.expertiseDescArea}>
              <p className={styles.sectionDesc}>
                We specialize in the strategic sourcing and<br/>
                distribution of high-demand commodities across<br/>
                multiple sectors.
              </p>
            </div>
          </div>

          <StaggerContainer className={styles.expertiseGrid}>
            <StaggerItem className={styles.expertiseCard}>
              <div className={`${styles.cardImage} ${styles.cardImageAgri}`}></div>
              <h3 className={styles.cardTitle}>Agricultural Products</h3>
              <p className={styles.cardDesc}>Premium grains, pulses, and organic fertilizers sourced from elite farms.</p>
            </StaggerItem>
            <StaggerItem className={styles.expertiseCard}>
              <div className={`${styles.cardImage} ${styles.cardImageMetals}`}></div>
              <h3 className={styles.cardTitle}>Industrial Metals</h3>
              <p className={styles.cardDesc}>High-grade steel, copper, and aluminum for manufacturing and construction.</p>
            </StaggerItem>
            <StaggerItem className={styles.expertiseCard}>
              <div className={`${styles.cardImage} ${styles.cardImageEnergy}`}></div>
              <h3 className={styles.cardTitle}>Energy Resources</h3>
              <p className={styles.cardDesc}>Fossil fuels and sustainable energy solutions for industrial growth.</p>
            </StaggerItem>
            <StaggerItem className={styles.expertiseCard}>
              <div className={`${styles.cardImage} ${styles.cardImageGoods}`}></div>
              <h3 className={styles.cardTitle}>Consumer Goods</h3>
              <p className={styles.cardDesc}>Fast retail commodities including textiles, electronics, and daily essentials.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Reliability Network Section */}
      <section className={styles.networkSection}>
        <div className={`container ${styles.networkContainer}`}>
          <SlideUpAnim className={styles.networkContent}>
            <span className="text-label" style={{color: 'var(--color-primary)'}}>GLOBAL PRESENCE</span>
            <h2 className={styles.networkTitle}>A Network Built on<br/>Reliability</h2>
            <p className={styles.networkDesc}>
              From the ports of Singapore to the industrial hubs of Europe,<br/>
              Bluenture LLP maintains a physical presence in key trade<br/>
              corridors worldwide.
            </p>
            
            <div className={styles.networkFeatures}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <Globe size={20} strokeWidth={2} />
                </div>
                <div className={styles.featureText}>
                  <h4>24/7 Logistics Support</h4>
                  <p>Real-time tracking and multilingual coordination.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <CheckCircle size={20} strokeWidth={2} />
                </div>
                <div className={styles.featureText}>
                  <h4>Compliance & Standards</h4>
                  <p>Adhering to ISO 9001 and international trade laws.</p>
                </div>
              </div>
            </div>
          </SlideUpAnim>
          <FadeInAnim className={styles.networkImageContainer} delay={0.2}>
            <div className={styles.mapHighlight}></div>
            {/* Map illustration using CSS generic placeholder shapes due to no direct assets */}
            <div className={styles.mapPlaceholder}></div>
          </FadeInAnim>
        </div>
      </section>

      {/* 5. The Bluenture Advantage */}
      <section className={`section ${styles.advantageSection}`}>
        <div className="container">
          <div className={styles.advantageHeader}>
            <span className="text-label" style={{color: 'var(--color-primary)'}}>THE BLUENTURE ADVANTAGE</span>
            <h2 className={styles.sectionTitle}>Why Global Businesses Trust Us</h2>
          </div>
          
          <div className={styles.advantageGrid}>
            <div className={styles.advCard}>
              <div className={styles.advIcon}>
                <ShieldCheck size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.advTitle}>Integrity & Trust</h3>
              <p className={styles.advDesc}>Transparent negotiations and long-term partnership commitment.</p>
            </div>
            <div className={styles.advCard}>
              <div className={styles.advIcon}>
                <Clock size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.advTitle}>Logistical Speed</h3>
              <p className={styles.advDesc}>Proprietary routing algorithms to ensure your cargo arrives on time.</p>
            </div>
            <div className={styles.advCard}>
              <div className={styles.advIcon}>
                <CreditCard size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.advTitle}>Flexible Financing</h3>
              <p className={styles.advDesc}>Customized credit lines and payment terms to scale your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <section className={styles.ctaWrapper}>
        <div className={`container`}>
          <SlideUpAnim className={styles.ctaBanner}>
            <h2 className={styles.ctaTitle}>Ready to expand your market reach?</h2>
            <p className={styles.ctaDesc}>
              Join hundreds of global partners who trust Bluenture LLP for their<br/>
              commodity sourcing and logistics needs.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/quote" className="btn btn-white">Start Your Quote</Link>
              <Link href="/contact" className="btn btn-dark">Talk to an Expert</Link>
            </div>
          </SlideUpAnim>
        </div>
      </section>
    </div>
  );
}
