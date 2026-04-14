import ProductCard from '@/components/ProductCard';
import { juiceProducts } from '@/data/juices';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

export const metadata = { title: 'Raw Juices — Raasa' };

const juiceFacts = [
  { icon: '🧃', label: 'Method', value: 'Cold-pressed, no heat' },
  { icon: '🚫', label: 'Additives', value: 'No sugar · No preservatives' },
  { icon: '❄️', label: 'Shelf Life', value: '20 days in freezer' },
  { icon: '🚚', label: 'Delivery', value: 'Every Sat & Sun' },
];

export default function JuicesPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero} style={{ background: `linear-gradient(rgba(0,26,14,0.55), rgba(0,26,14,0.55)), url('/hero_juices_page.png') center/cover no-repeat` }}>
        <div className="hero-deco">🧃</div>
        <div className="hero-rule" style={{ background: '#3a9e6f' }} />
        <div className="hero-eyebrow">Cold-Pressed · Pure · Natural</div>
        <h1 className="hero-title">Raw Juices</h1>
        <p className="hero-sub">
          Just fruit. Nothing else. No sugar, no preservatives, no additives — cold-pressed and
          frozen fresh to lock in every bit of flavour and nutrition.
        </p>
        <div className="hero-pill">
          <div className="hero-pill-line" />
          No Sugar · No Preservatives · Freeze & Enjoy for 20 Days
        </div>
      </div>

      {/* Info strip */}
      <div className={styles.infoStrip}>
        {juiceFacts.map(f => (
          <div key={f.label} className={styles.infoItem}>
            <span className={styles.infoIcon}>{f.icon}</span>
            <div>
              <div className={styles.infoLabel}>{f.label}</div>
              <div className={styles.infoValue}>{f.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Products */}
      <section className="page-section">
        <div className={styles.header}>
          <div className="section-eyebrow">100% Fruit, Zero Compromise</div>
          <h2 className="section-title">Our Juice Range</h2>
          <div className="section-rule" style={{ background: 'var(--saffron)' }} />
          <p className={styles.headerNote}>
            Available in 250 ml and 500 ml. Store in the freezer — best consumed within 20 days of delivery.
          </p>
        </div>
        <div className={styles.productRow}>
          {juiceProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Freshness note */}
      <section className={styles.freshnessSection}>
        <div className={styles.freshnessInner}>
          <div className={styles.freshnessLeft}>
            <div className="section-eyebrow">Storage Guide</div>
            <h2 className="section-title">How to store your juice</h2>
            <div className="section-rule" style={{ background: 'var(--saffron)', marginBottom: '24px' }} />
            <div className={styles.storageSteps}>
              {[
                { step: '01', text: 'Your juice is delivered frozen or chilled.' },
                { step: '02', text: 'Move straight to the freezer on delivery day.' },
                { step: '03', text: 'Thaw in the fridge overnight before use.' },
                { step: '04', text: 'Consume within 20 days for peak freshness.' },
              ].map(s => (
                <div key={s.step} className={styles.storageStep}>
                  <span className={styles.stepNum}>{s.step}</span>
                  <span className={styles.stepText}>{s.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.freshnessRight}>
            <div className={styles.freshnessCard}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
              <h4 className={styles.freshnessTitle}>What you won&apos;t find in our juices</h4>
              <ul className={styles.freshnessList}>
                <li>No added sugar or sweeteners</li>
                <li>No preservatives (chemical or natural)</li>
                <li>No artificial flavours or colours</li>
                <li>No water dilution</li>
                <li>No concentrate — always fresh-pressed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Fresh Promise */}
      <section style={{ background: 'var(--mintbg)', borderTop: '1px solid rgba(30,58,47,0.1)', padding: '40px 5vw' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', fontStyle: 'italic', color: 'var(--forest)', lineHeight: 1.5 }}>
            &ldquo;Every bottle of juice is pressed from fruits sourced after your order. We never keep pre-pressed stock.&rdquo;
          </p>
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {['Cold-Pressed', 'No Sugar', 'No Preservatives', 'No Additives', 'Made to Order'].map((tag: string) => (
              <span key={tag} className="badge green" style={{ padding: '5px 12px' }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Order note */}
      <div className={styles.orderNote}>
        <div className={styles.orderNoteInner}>
          <span style={{ fontSize: '1.4rem' }}>💬</span>
          <div>
            <strong>Stocking up or ordering for events?</strong> WhatsApp us at{' '}
            <a href="https://wa.me/919849048999" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--saffron)', fontWeight: 600 }}>
              <WhatsAppIcon size={16} /> +91 98490 48999
            </a>{' '}
            for bulk pricing.
          </div>
        </div>
      </div>
    </div>
  );
}
