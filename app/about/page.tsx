import styles from './page.module.css';
import Link from 'next/link';
import { ShieldCheck, Clock, CheckCircle, Send } from 'lucide-react';
import { SlideUp as SlideUpAnim } from '@/components/animations/SlideUp';
import { FadeIn as FadeInAnim } from '@/components/animations/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/animations/Stagger';

export default function About() {
  return (
    <div className={styles.main}>
      {/* 1. Hero / Mission Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContainer}`}>
          <SlideUpAnim className={styles.heroContent}>
            <span className={`text-label ${styles.heroLabel} blue-bg`}>ABOUT BLUENTURE LLP</span>
            <h1 className={styles.heroTitle}>
              Bridging the Gap Between<br/>
              <span className={styles.heroTitleHighlight}>Global Markets</span>
            </h1>
            <p className={styles.heroDesc}>
              Founded on the principles of integrity and operational excellence, Bluenture LLP has evolved into a premier international trade organization. We specialize in the seamless distribution of high-value commodities worldwide.
            </p>
          </SlideUpAnim>
        </div>
      </section>

      {/* 2. Core Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <SlideUpAnim className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <p className={styles.sectionDesc}>The foundational principles that guide every transaction and partnership at Bluenture.</p>
          </SlideUpAnim>

          <StaggerContainer className={styles.valuesGrid}>
            <StaggerItem className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <ShieldCheck size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.valueTitle}>Uncompromising Integrity</h3>
              <p className={styles.valueDesc}>We conduct our business with the highest ethical standards, ensuring transparency and trust in every international transaction and partnership we forge.</p>
            </StaggerItem>

            <StaggerItem className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Clock size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.valueTitle}>Operational Speed</h3>
              <p className={styles.valueDesc}>In global trade, time is critical. We leverage advanced logistics networks and streamlined customs processes to accelerate delivery without sacrificing quality.</p>
            </StaggerItem>

            <StaggerItem className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <CheckCircle size={24} strokeWidth={2} />
              </div>
              <h3 className={styles.valueTitle}>Assured Quality</h3>
              <p className={styles.valueDesc}>From agricultural goods to industrial materials, we implement rigorous inspection protocols to ensure all commodities meet strict international standards.</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Global Team Placeholder */}
      <section className={styles.teamSection}>
        <div className={`container ${styles.teamContainer}`}>
          <SlideUpAnim className={styles.teamText}>
             <h2 className={styles.sectionTitle}>A Network Backed by Exceptional Talent</h2>
             <p className={styles.teamDesc}>
               Our greatest asset is our globally distributed team of trade experts, logistics engineers, and regulatory compliance specialists. Operating across 45 regional hubs, the Bluenture team possesses the local knowledge necessary to navigate complex international markets while maintaining our unified global standard of excellence.
             </p>
             <Link href="/careers" className="btn btn-secondary">Join Our Team</Link>
          </SlideUpAnim>
          <FadeInAnim className={styles.teamGraphics} delay={0.2}>
            <div className={styles.teamGraphicBlock}>
              {/* Abstract representation of global team */}
              <div className={styles.peopleGrid}>
                <div className={styles.personCircle}></div>
                <div className={styles.personCircle}></div>
                <div className={styles.personCircle}></div>
                <div className={styles.personCircle}></div>
                <div className={styles.personCircle}></div>
                <div className={styles.personCircle}></div>
              </div>
            </div>
          </FadeInAnim>
        </div>
      </section>

      {/* 4. Global Reach Summary */}
      <section className={styles.reachSection}>
        <div className="container">
           <SlideUpAnim className={styles.reachBanner}>
             <div className={styles.reachContent}>
               <h2>Ready to Partner with Bluenture?</h2>
               <p>Connect with our corporate team to discuss long-term commodity sourcing or logistics partnerships.</p>
             </div>
             <div className={styles.reachAction}>
               <Link href="/contact" className="btn btn-primary">
                 Contact Our HQ
                 <Send size={16} strokeWidth={2} style={{marginLeft: '0.5rem'}} />
               </Link>
             </div>
           </SlideUpAnim>
        </div>
      </section>

    </div>
  );
}
