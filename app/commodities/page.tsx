import styles from './page.module.css';
import Link from 'next/link';
import { Leaf, Zap, Factory, ShoppingCart, Globe, CheckCircle, Headset } from 'lucide-react';
import { SlideUp as SlideUpAnim } from '@/components/animations/SlideUp';
import { FadeIn as FadeInAnim } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function Commodities() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <video 
            className={styles.heroVideo}
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/commodities-hero.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={`container ${styles.heroContainer}`}>
          <SlideUpAnim className={styles.heroContent}>
            <span className={`text-label ${styles.heroLabel}`}>
              TRADING EXCELLENCE
            </span>
            <h1 className={styles.heroTitle}>
              Our Commodities<br/>
              <span className={styles.heroTitleHighlight}>Portfolio</span>
            </h1>
            <p className={styles.heroDesc}>
              Connecting global markets with premium essential resources across four core<br/>
              industrial sectors.
            </p>
          </SlideUpAnim>
        </div>
      </section>

      {/* 2. Filter & Goods Section */}
      <section className={`section ${styles.goodsSection}`}>
        <div className="container">
          
          {/* Section Header */}
          <FadeInAnim className={styles.filterHeader}>
            <div className={styles.filterText}>
              <h2 className={styles.sectionTitle}>Diverse Range of Global Goods</h2>
              <p className={styles.sectionDesc}>
                Bluenture LLP specializes in the import and export of high-quality products. We<br/>
                bridge the gap between production heartlands and global consumption hubs.
              </p>
            </div>
          </FadeInAnim>

          {/* Detailed Cards Grid */}
          <StaggerContainer className={styles.cardsGrid}>
            <StaggerItem className={styles.detailCard}>
              <div className={`${styles.cardImage} ${styles.cardImageAgri}`}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <Leaf className={styles.cardIcon} size={20} strokeWidth={2} />
                  Agricultural
                </h3>
                <p className={styles.cardDesc}>
                  Grains, pulses, and organic produce sourced from certified sustainable farms globally.
                </p>
                <Link href="#" className={styles.learnMoreBtn}>
                  Learn More 
                  <span>→</span>
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem className={styles.detailCard}>
              <div className={`${styles.cardImage} ${styles.cardImageEnergy}`}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <Zap className={styles.cardIcon} size={20} strokeWidth={2} />
                  Energy & Minerals
                </h3>
                <p className={styles.cardDesc}>
                  High-grade ores, metallurgical coal, and refined energy solutions for industrial growth.
                </p>
                <Link href="#" className={styles.learnMoreBtn}>
                  Learn More 
                  <span>→</span>
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem className={styles.detailCard}>
              <div className={`${styles.cardImage} ${styles.cardImageIndustrial}`}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <Factory className={styles.cardIcon} size={20} strokeWidth={2} />
                  Industrial Materials
                </h3>
                <p className={styles.cardDesc}>
                  Essential base metals and chemical precursors for manufacturing and construction.
                </p>
                <Link href="#" className={styles.learnMoreBtn}>
                  Learn More 
                  <span>→</span>
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem className={styles.detailCard}>
              <div className={`${styles.cardImage} ${styles.cardImageConsumer}`}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  <ShoppingCart className={styles.cardIcon} size={20} strokeWidth={2} />
                  Consumer Goods
                </h3>
                <p className={styles.cardDesc}>
                  Fast-moving consumer goods and household essentials delivered to retail networks.
                </p>
                <Link href="#" className={styles.learnMoreBtn}>
                  Learn More 
                  <span>→</span>
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Bottom Stats */}
      <section className={styles.statsSection}>
        <StaggerContainer className={`container ${styles.statsContainer}`}>
          <StaggerItem className={styles.statBox}>
            <div className={styles.statIconWrapper}>
              <Globe size={24} strokeWidth={2} />
            </div>
            <h3 className={styles.statTitle}>50+ Countries</h3>
            <p className={styles.statDesc}>An expansive network reaching across every continent.</p>
          </StaggerItem>
          
          <StaggerItem className={styles.statBox}>
            <div className={styles.statIconWrapper}>
              <CheckCircle size={24} strokeWidth={2} />
            </div>
            <h3 className={styles.statTitle}>Quality Assured</h3>
            <p className={styles.statDesc}>Rigorous inspection and certification for every shipment.</p>
          </StaggerItem>
          
          <StaggerItem className={styles.statBox}>
            <div className={styles.statIconWrapper}>
              <Headset size={24} strokeWidth={2} />
            </div>
            <h3 className={styles.statTitle}>Expert Support</h3>
            <p className={styles.statDesc}>24/7 logistical and commercial advisory services.</p>
          </StaggerItem>
        </StaggerContainer>
      </section>
    </div>
  );
}
