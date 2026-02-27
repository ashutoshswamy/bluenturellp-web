import styles from './page.module.css';
import { Send, Building2, Package, MapPin, Anchor, Mail, Phone } from 'lucide-react';
import { SlideUp as SlideUpAnim } from '@/components/animations/SlideUp';

export default function Quote() {
  return (
    <div className={styles.main}>
      <div className={styles.splitLayout}>
        
        {/* Left Side: Image & Branding */}
        <div className={styles.leftPane}>
          <div className={styles.leftContent}>
            <div className={styles.partnerBadge}>
               <GlobeIcon className={styles.badgeIcon} />
               GLOBAL LOGISTICS PARTNER
            </div>
            <h1 className={styles.leftTitle}>
              Powering Your<br/>
              Global Supply Chain.
            </h1>
            <p className={styles.leftDesc}>
              From agricultural commodities to industrial raw materials, we bridge the gap between global demand and supply with precision logistics.
            </p>
            
            <div className={styles.trustBadges}>
              <div className={styles.trustBadge}>
                <CheckCircleIcon className={styles.trustIcon} />
                <span>Certified Operations</span>
              </div>
              <div className={styles.trustBadge}>
                <GlobeIcon className={styles.trustIcon} />
                <span>120+ Countries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form & Info */}
        <div className={styles.rightPane}>
          <div className={styles.formContainer}>
            
            <SlideUpAnim>
              <div className={styles.formHeader}>
                <h2>Request a Custom Quote</h2>
                <div className={styles.formHeaderRight}>
                  <p>Fill in the details below to receive a personalized logistics proposal.</p>
                  <div className={styles.stepIndicator}>
                    Step 1 of 2
                  </div>
                </div>
                {/* Progress bar mimicking reference */}
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
              </div>

              <form className={styles.quoteForm}>
                <div className={styles.formGroup}>
                  <label>Company Name</label>
                  <div className={styles.inputWrapper}>
                    <Building2 className={styles.inputIcon} />
                    <input type="text" placeholder="e.g. Global Trade Corp" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <div className={styles.inputWrapper}>
                      <Mail className={styles.inputIcon} />
                      <input type="email" placeholder="you@company.com" className={styles.input} />
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label>Contact Number</label>
                    <div className={styles.inputWrapper}>
                      <Phone className={styles.inputIcon} />
                      <input type="tel" placeholder="+1 (555) 000-0000" className={styles.input} />
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Commodity Type</label>
                    <div className={styles.inputWrapper}>
                      <Package className={styles.inputIcon} />
                      <select className={`${styles.input} ${styles.select}`}>
                        <option value="">Select Commodity</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="metals">Metals</option>
                        <option value="energy">Energy</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label>Estimated Volume (Tons)</label>
                    <div className={styles.inputWrapper}>
                      <Package className={styles.inputIcon} />
                      <input type="number" placeholder="e.g. 500" className={styles.input} />
                    </div>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Port of Origin</label>
                    <div className={styles.inputWrapper}>
                      <MapPin className={styles.inputIcon} />
                      <input type="text" placeholder="City or Port Name" className={styles.input} />
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label>Destination Port</label>
                    <div className={styles.inputWrapper}>
                      <Anchor className={styles.inputIcon} />
                      <input type="text" placeholder="City or Port Name" className={styles.input} />
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Special Handling Requirements</label>
                  <textarea 
                    className={styles.textarea} 
                    placeholder="Temperature control, fragile goods, hazardous materials, etc."
                    rows={4}
                  ></textarea>
                </div>

                <div className={styles.formActions}>
                  <button type="button" className={`btn btn-primary ${styles.submitBtn}`}>
                    Submit Request
                    <Send size={16} />
                  </button>
                  <button type="button" className={`btn ${styles.saveBtn}`}>
                    Save for Later
                  </button>
                </div>
              </form>

              {/* What happens next box */}
              <div className={styles.infoBox}>
                <h3>What happens next?</h3>
                <div className={styles.infoSteps}>
                  <div className={styles.infoStep}>
                    <div className={styles.stepNum}>1</div>
                    <h4>Analysis</h4>
                    <p>Our logistics experts analyze your requirements and route feasibility.</p>
                  </div>
                  <div className={styles.infoStep}>
                    <div className={styles.stepNum}>2</div>
                    <h4>Quotation</h4>
                    <p>Within 24 hours, you'll receive a detailed competitive quote via email.</p>
                  </div>
                  <div className={styles.infoStep}>
                    <div className={styles.stepNum}>3</div>
                    <h4>Onboarding</h4>
                    <p>Upon approval, your dedicated account manager starts the process.</p>
                  </div>
                </div>
              </div>
              
              {/* Footer contact details */}
              <div className={styles.contactFooter}>
                <div className={styles.contactBlock}>
                   <span className={styles.contactLabel}>DIRECT SUPPORT</span>
                   <span className={styles.contactValue}>+1 (555) 890-2344</span>
                </div>
                <div className={styles.contactBlock}>
                   <span className={styles.contactLabel}>EMAIL INQUIRY</span>
                   <span className={styles.contactValue}>quotes@bluenture.com</span>
                </div>
              </div>
            </SlideUpAnim>

          </div>
        </div>
      </div>
    </div>
  );
}


// Simple icons since Lucide's Globe/CheckCircle have style clashes sometimes
function GlobeIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
}

function CheckCircleIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}
