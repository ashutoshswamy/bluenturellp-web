import styles from './page.module.css';
import Link from 'next/link';
import { ArrowRight, Search, Globe, Ship, Plane, FileCheck, Check, ChevronRight } from 'lucide-react';
import { SlideUp as SlideUpAnim } from '@/components/animations/SlideUp';
import { FadeIn as FadeInAnim } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function Network() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <SlideUpAnim className={styles.heroContent}>
            <span className={`text-label ${styles.heroLabel} blue-bg`}>GLOBAL OPERATIONS</span>
            <h1 className={styles.heroTitle}>
              Global Logistics &<br/>
              <span className={styles.heroTitleHighlight}>Trade Network</span>
            </h1>
            <p className={styles.heroDesc}>
              Connecting markets across continents with reliable sea freight,<br/>
              air transit, and comprehensive customs expertise. We move<br/>
              commodities with precision.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#" className="btn btn-primary">
                Explore Our Routes
                <ArrowRight className="btn-icon" size={16} strokeWidth={2} />
              </Link>
              <Link href="#" className={`btn ${styles.btnLightGray}`}>Regional Offices</Link>
            </div>
          </SlideUpAnim>
          <FadeInAnim className={styles.heroGraphic} delay={0.2}>
            <div className={styles.graphicBlock}></div>
          </FadeInAnim>
        </div>
      </section>


      {/* 3. Capabilities Section */}
      <section className={styles.capabilitiesSection}>
        <div className="container">
          <SlideUpAnim className={styles.capabilitiesHeader}>
            <h2 className={styles.sectionTitle}>Logistics Capabilities</h2>
            <p className={styles.sectionDesc}>Our integrated service network ensures your commodities move from source to destination without friction.</p>
          </SlideUpAnim>
          
          <StaggerContainer className={styles.capabilitiesGrid}>
            <StaggerItem className={styles.capCard}>
              <div className={styles.capIcon}>
                <Ship size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.capTitle}>Sea Freight</h3>
              <p className={styles.capDesc}>Bulk carriers and container shipping for major commodities. We handle full container loads (FCL) and less than container loads (LCL).</p>
              <ul className={styles.capList}>
                <li>
                  <Check className={styles.checkIcon} size={16} strokeWidth={3} />
                  Major port access
                </li>
                <li>
                  <Check className={styles.checkIcon} size={16} strokeWidth={3} />
                  Refrigerated cargo
                </li>
              </ul>
              <Link href="#" className={styles.learnMoreLink}>Learn More <ChevronRight size={14} strokeWidth={2} /></Link>
            </StaggerItem>

            <StaggerItem className={styles.capCard}>
              <div className={styles.capIcon}>
                <Plane size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.capTitle}>Air Transit</h3>
              <p className={styles.capDesc}>Time-sensitive air cargo solutions for high-value and perishable commodities with global airport-to-airport coverage.</p>
              <ul className={styles.capList}>
                <li>
                  <Check className={styles.checkIcon} size={16} strokeWidth={3} />
                  Express door-to-door
                </li>
                <li>
                  <Check className={styles.checkIcon} size={16} strokeWidth={3} />
                  Cargo consolidation
                </li>
              </ul>
              <Link href="#" className={styles.learnMoreLink}>Learn More <ChevronRight size={14} strokeWidth={2} /></Link>
            </StaggerItem>

            <StaggerItem className={styles.capCard}>
              <div className={styles.capIcon}>
                <FileCheck size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.capTitle}>Customs Brokerage</h3>
              <p className={styles.capDesc}>Complex regulatory navigation and compliance for import-export activities across different jurisdictions and tariff codes.</p>
              <ul className={styles.capList}>
                <li>
                  <Check className={styles.checkIcon} size={16} strokeWidth={3} />
                  Duty & Tax optimization
                </li>
                <li>
                  <Check className={styles.checkIcon} size={16} strokeWidth={3} />
                  Documentation management
                </li>
              </ul>
              <Link href="#" className={styles.learnMoreLink}>Learn More <ChevronRight size={14} strokeWidth={2} /></Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Bottom Blue Stats Banner */}
      <section className={styles.blueBanner}>
        <StaggerContainer className={`container ${styles.bannerContainer}`}>
          <StaggerItem className={styles.bannerStat}>
            <h2 className={styles.bannerNumber}>120<span className={styles.bannerPlus}>+</span></h2>
            <p className={styles.bannerLabel}>COUNTRIES SERVED</p>
          </StaggerItem>
          <StaggerItem className={styles.bannerStat}>
            <h2 className={styles.bannerNumber}>2,500<span className={styles.bannerPlus}>+</span></h2>
            <p className={styles.bannerLabel}>ANNUAL SHIPMENTS</p>
          </StaggerItem>
          <StaggerItem className={styles.bannerStat}>
            <h2 className={styles.bannerNumber}>45</h2>
            <p className={styles.bannerLabel}>REGIONAL HUBS</p>
          </StaggerItem>
          <StaggerItem className={styles.bannerStat}>
            <h2 className={styles.bannerNumber}>24/7</h2>
            <p className={styles.bannerLabel}>OPS MONITORING</p>
          </StaggerItem>
        </StaggerContainer>
      </section>
    </div>
  );
}
