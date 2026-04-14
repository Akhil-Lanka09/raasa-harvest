import HoneyCard from '@/components/HoneyCard';
import { honeyProducts } from '@/data/honey-products';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

export const metadata = { title: 'Honey — Raasa' };

const honeyFacts = [
  { icon: '🐝', label: 'Source', value: 'Directly from apiaries' },
  { icon: '🌡️', label: 'Processing', value: 'Never heated' },
  { icon: '🚫', label: 'Additives', value: 'Zero adulterants' },
  { icon: '🚚', label: 'Delivery', value: 'Every Sat & Sun' },
];

export default function HoneyPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero} style={{ background: `linear-gradient(rgba(30,20,0,0.55), rgba(30,20,0,0.55)), url('/hero_honey_page.png') center/cover no-repeat` }}>
        <div className="hero-deco">🍯</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Pure · Raw · Unprocessed</div>
        <h1 className="hero-title">Raasa Honey</h1>
        <p className="hero-sub">
          Real honey straight from the hive — never heated, never filtered, never adulterated.
          Two exquisite varieties, each with its own character and story.
        </p>
        <div className="hero-pill">
          <div className="hero-pill-line" />
          Single-Origin · Cold Extracted · Chemical Free
        </div>
      </div>

      {/* Info strip */}
      <div className={styles.infoStrip}>
        {honeyFacts.map(f => (
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
          <div className="section-eyebrow">Two Varieties, One Standard</div>
          <h2 className="section-title">Our Honey Range</h2>
          <div className="section-rule" style={{ background: 'var(--saffron)' }} />
          <p className={styles.headerNote}>
            Both varieties are raw and unprocessed. The Litchi Honey is a limited seasonal edition — get it while it lasts.
          </p>
        </div>
        <div className={styles.productRow}>
          {honeyProducts.map(product => (
            <HoneyCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* What makes it raw? */}
      <section className={styles.rawSection}>
        <div className={styles.rawInner}>
          <div className="section-eyebrow" style={{ textAlign: 'center' }}>Why Raw?</div>
          <h2 className="section-title" style={{ margin: '0 auto 16px', textAlign: 'center' }}>Honey the way nature made it</h2>
          <div className="section-rule" style={{ margin: '0 auto 32px', background: 'var(--saffron)' }} />
          <div className={styles.rawGrid}>
            {[
              { icon: '🌡️', title: 'Never Heated', desc: 'Commercial honey is pasteurised, killing all enzymes and beneficial compounds. Ours never crosses room temperature.' },
              { icon: '🌿', title: 'Pollen Intact', desc: 'Natural pollen granules and propolis remain in every jar — the very things that make honey nutritionally valuable.' },
              { icon: '🧫', title: 'Live Enzymes', desc: 'Raw honey contains diastase, invertase, and glucose oxidase — enzymes that are destroyed by heating.' },
              { icon: '✅', title: 'No Additives', desc: 'No sugar syrup, no water, no artificial flavours. 100% pure honey. Crystallisation is a sign of purity, not spoilage.' },
            ].map(item => (
              <div key={item.title} className={styles.rawCard}>
                <div className={styles.rawIcon}>{item.icon}</div>
                <h4 className={styles.rawTitle}>{item.title}</h4>
                <p className={styles.rawDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Sourced to Order */}
      <section style={{ background: 'linear-gradient(135deg, #1e1200 0%, #3d2800 100%)', padding: '52px 5vw' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', alignItems: 'center' }}>
          <div>
            <div className="section-eyebrow" style={{ color: 'rgba(245,217,138,0.55)' }}>The Raasa Way</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 600, fontStyle: 'italic', color: 'var(--saff3)', margin: '8px 0 16px' }}>
              Honey procured fresh, only after your order.
            </h2>
            <p style={{ fontSize: '0.87rem', color: 'rgba(250,246,238,0.6)', lineHeight: 1.75 }}>
              We don&#39;t keep large stocks. We work with our apiary partners and source
              fresh batches specifically to fulfil customer orders. No bulk storage, no old stock.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: '🐝', text: 'Direct from apiaries' },
              { icon: '❄️', text: 'Never heated or pasteurised' },
              { icon: '🚫', text: 'Zero sugar syrup added' },
              { icon: '📦', text: 'Packed after order' },
            ].map((item: { icon: string; text: string }) => (
              <div key={item.text} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(200,134,10,0.15)', borderRadius: '8px', padding: '14px 12px', fontSize: '0.78rem', color: 'rgba(245,217,138,0.75)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{item.icon}</span><span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order note */}
      <div className={styles.orderNote}>
        <div className={styles.orderNoteInner}>
          <span style={{ fontSize: '1.4rem' }}>💬</span>
          <div>
            <strong>Gift packing or bulk orders?</strong> WhatsApp us at{' '}
            <a href="https://wa.me/919849048999" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--saffron)', fontWeight: 600 }}>
              <WhatsAppIcon size={16} /> +91 98490 48999
            </a>{' '}
            for custom pricing and packaging.
          </div>
        </div>
      </div>
    </div>
  );
}
