import MangoCard from '@/components/MangoCard';
import { mangoes } from '@/data/mango';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

export const metadata = { title: 'Seasonal Mangoes — Raasa | Sourced Fresh After Order' };

const mangoFacts = [
  { icon: '🥭', label: 'Origin', value: 'Direct from Andhra & Telangana Farms' },
  { icon: '✨', label: 'Ripening', value: '100% Calcium Carbide Free' },
  { icon: '📦', label: 'Packaging', value: 'Padded cartons to prevent bruising' },
  { icon: '🚚', label: 'Delivery', value: 'Every Sat & Sun' },
];

export default function SummerSpecialsPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero} style={{ background: `linear-gradient(rgba(59,13,13,0.65), rgba(59,13,13,0.65)), url('/hero_mango_page.png') center/cover no-repeat` }}>
        <div className="hero-deco">🥭</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Summer Specials</div>
        <h1 className="hero-title">The Mango Festival</h1>
        <p className="hero-sub">
          Naturally ripened on the tree. No carbide. No chemicals. We procure your mangoes directly from Andhra &amp; Telangana orchards <em>only after you place your order</em> — never from a warehouse.
        </p>
        <div className="hero-pill">
          <div className="hero-pill-line" />
          Naturally Ripened · Handpicked
        </div>
      </div>

      {/* Info strip */}
      <div className={styles.infoStrip}>
        {mangoFacts.map(f => (
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
          <div className="section-eyebrow">Browse & Add to Cart</div>
          <h2 className="section-title">Fresh Mango Varieties</h2>
          <div className="section-rule" style={{ background: 'var(--saffron)' }} />
          <p className={styles.headerNote}>
            Select a pack size, then click "Add to Cart" to start your order.
          </p>
        </div>
        <div className="products-grid">
          {mangoes.map(mango => (
            <MangoCard key={mango.id} mango={mango} />
          ))}
        </div>
      </section>


      {/* Fresh Commerce Promise */}
      <section style={{ background: 'linear-gradient(135deg, #1a0505 0%, var(--burg) 100%)', padding: '52px 5vw' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="section-eyebrow" style={{ color: 'rgba(245,217,138,0.6)' }}>The Raasa Promise</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 600, fontStyle: 'italic', color: 'var(--saff3)', margin: '12px 0 28px' }}>
            We source every mango after your order — not before.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { icon: '🚫', title: 'No Carbide', desc: 'We never use artificial ripening agents. Every mango ripens naturally on the tree.' },
              { icon: '📦', title: 'Made to Order', desc: 'We procure only after your order. Zero pre-stocking, zero warehouse.' },
              { icon: '🌿', title: 'Farm Direct', desc: 'Sourced straight from orchards in Andhra Pradesh and Telangana.' },
              { icon: '⏳', title: 'Seasonal Only', desc: 'Available only during the natural growing season. No off-season produce.' },
            ].map((item: { icon: string; title: string; desc: string }) => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(200,134,10,0.15)', borderRadius: '10px', padding: '20px 16px' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{item.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 600, color: 'var(--saff3)', marginBottom: '8px' }}>{item.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(250,246,238,0.6)', lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering note */}
      <div className={styles.orderNote}>
        <div className={styles.orderNoteInner}>
          <span style={{ fontSize: '1.4rem' }}>💬</span>
          <div>
            <strong>Bulk orders or corporate gifting?</strong> We offer special packaging for large orders.
            Ask us on{' '}
            <a href="https://wa.me/919849048999" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--saffron)', fontWeight: 600 }}>
              <WhatsAppIcon size={16} /> +91 98490 48999
            </a>{' '}
            for custom pricing.
          </div>
        </div>
      </div>
    </div>
  );
}
