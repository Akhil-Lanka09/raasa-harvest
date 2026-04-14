import ProductCard from '@/components/ProductCard';
import { pickleProducts } from '@/data/pickles';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

export const metadata = { title: 'Pickles — Raasa' };

const pickleFacts = [
  { icon: '🌶️', label: 'Spice Level', value: 'Authentic Andhra heat' },
  { icon: '🛢️', label: 'Oil', value: 'Cold-pressed peanut oil' },
  { icon: '🍳', label: 'Made To Order', value: 'Each batch prepared after you order' },
  { icon: '🚫', label: 'Additives', value: 'Zero preservatives' },
  { icon: '🚚', label: 'Delivery', value: 'Every Sat & Sun' },
];

export default function PicklesPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero} style={{ background: `linear-gradient(rgba(50,16,4,0.60), rgba(50,16,4,0.60)), url('/hero_pickles_page.png') center/cover no-repeat` }}>
        <div className="hero-deco">🫙</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Handmade & Authentic</div>
        <h1 className="hero-title">Andhra Pickles</h1>
        <p className="hero-sub">
          Six authentic Andhra pickles — made fresh in small batches using cold-pressed peanut oil,
          whole spices, zero preservatives, made fresh to order. The real taste of Andhra on your table.
        </p>
        <div className="hero-pill">
          <div className="hero-pill-line" />
          Small Batch · Stone Ground · No Preservatives
        </div>
      </div>

      {/* Info strip */}
      <div className={styles.infoStrip}>
        {pickleFacts.map(f => (
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
          <div className="section-eyebrow">Made Fresh, Delivered Fresh</div>
          <h2 className="section-title">Our Pickle Range</h2>
          <div className="section-rule" style={{ background: 'var(--saffron)' }} />
          <p className={styles.headerNote}>
            Available in 250 g, 500 g, and 1 kg — perfect for home use, gifting, or stocking up. Each batch prepared fresh after you order.
          </p>
        </div>
        <div className={styles.productGrid}>
          {pickleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>


      {/* Made to Order */}
      <section style={{ background: 'var(--card)', borderTop: '1px solid rgba(59,13,13,0.07)', padding: '52px 5vw' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-eyebrow">Our Process</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, color: 'var(--td)', margin: '8px 0 16px' }}>Made Fresh After You Order</h2>
          <div className="section-rule" style={{ margin: '0 auto 28px' }} />
          <p style={{ fontSize: '0.9rem', color: 'var(--tm)', lineHeight: 1.75, maxWidth: '620px', margin: '0 auto 32px' }}>
            Our pickles are not manufactured in advance and stocked in warehouses. Each batch is prepared
            in small quantities using fresh ingredients — cold-pressed peanut oil, whole spices, and
            seasonal produce — <strong>only after your order is confirmed</strong>.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            {['No Preservatives', 'Cold-Pressed Oil', 'Small Batch', 'Made to Order'].map((tag: string) => (
              <span key={tag} className="badge green" style={{ padding: '6px 14px', fontSize: '0.72rem' }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering note */}
      <div className={styles.orderNote}>
        <div className={styles.orderNoteInner}>
          <span style={{ fontSize: '1.4rem' }}>💬</span>
          <div>
            <strong>Want a custom mix or bulk order?</strong> WhatsApp us at{' '}
            <a href="https://wa.me/919849048999" target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--saffron)', fontWeight: 600 }}>
              <WhatsAppIcon size={16} /> +91 98490 48999
            </a>{' '}
            and we&apos;ll sort it out.
          </div>
        </div>
      </div>
    </div>
  );
}
