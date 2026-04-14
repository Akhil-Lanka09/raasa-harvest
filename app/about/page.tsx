import Link from 'next/link';
import styles from './page.module.css';

const values = [
  { icon: '🌿', title: 'Freshness', desc: 'Nothing is pre-stocked. Every product is sourced or made after your order.' },
  { icon: '🤝', title: 'Honesty', desc: 'We tell you exactly where your food comes from and how it is made.' },
  { icon: '🏺', title: 'Tradition', desc: 'We preserve age-old methods — bilona ghee, hand-pickled vegetables, raw unprocessed honey.' },
];

const teamValues = [
  { title: 'No Warehouses', sub: 'Ever', icon: '🏭' },
  { title: 'Farm Sourced', sub: 'After Every Order', icon: '🌾' },
  { title: 'No Preservatives', sub: 'In Any Product', icon: '🚫' },
  { title: 'Traditional Methods', sub: 'Always', icon: '🏺' },
];

export default function AboutPage() {
  return (
    <div className="page-enter">

      {/* HERO */}
      <div className={styles.hero}>
        <div className="hero-rule" style={{ background: 'var(--saffron)', marginBottom: '20px' }} />
        <div className="hero-eyebrow">Our Story</div>
        <h1 className={styles.heroTitle}>
          Freshness That<br />
          <em>Takes Time.</em>
        </h1>
        <p className={styles.heroSub}>
          We aren&apos;t a Quick Commerce company. We are a Fresh Commerce company.
        </p>
      </div>

      {/* MAIN STORY */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.storyTextBlock}>
            <p>
              In a world of 10-minute deliveries and warehouse-stored groceries, we decided to do things
              differently. We aren&apos;t a &ldquo;Quick Commerce&rdquo; company — we are a <strong>Fresh Commerce</strong> company.
            </p>
            <p>
              While others ship from a shelf, we source from the earth. When you order our mangoes
              or honey, we don&apos;t reach for a box in a warehouse; we procure them fresh from the source
              specifically for you. Our Ghee, juices, and pickles aren&apos;t mass-produced; they are made
              with love and care <em>only after your order hits our system</em>.
            </p>
            <p>
              Why do our prices vary? Because every product has a story. Some are seasonal gifts from
              nature that we keep affordable; others are artisanal crafts that take time, patience, and
              premium ingredients to perfect.
            </p>
            <p>
              We believe in trust. That&apos;s why we&apos;ve built a seamless shopping experience and offer COD,
              so you can feel the quality in your hands before you pay. We don&apos;t keep stock.
              We keep promises. Freshly sourced. Freshly made. Delivered with love.
            </p>
          </div>

          <div className={styles.storyStats}>
            {teamValues.map(v => (
              <div key={v.title} className={styles.statCard}>
                <div className={styles.statIcon}>{v.icon}</div>
                <div className={styles.statTitle}>{v.title}</div>
                <div className={styles.statSub}>{v.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className={styles.mvSection}>
        <div className={styles.mvGrid}>
          <div className={styles.mvCard}>
            <div className={styles.mvIcon}>🎯</div>
            <div className="section-eyebrow">Our Mission</div>
            <h2 className={styles.mvTitle}>Bring authentic, chemical-free food back to Indian homes.</h2>
            <p className={styles.mvDesc}>
              We source directly from farmers and artisans across Andhra Pradesh and Telangana,
              cutting out every middleman so you get the real thing — fresh, honest, and pure.
            </p>
          </div>
          <div className={styles.mvCard}>
            <div className={styles.mvIcon}>🌱</div>
            <div className="section-eyebrow">Our Vision</div>
            <h2 className={styles.mvTitle}>Build a trusted fresh commerce ecosystem in India.</h2>
            <p className={styles.mvDesc}>
              A future where choosing fresh, natural food is as easy as tapping a button —
              and where every farmer and artisan gets a fair, direct relationship with the consumer.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.valuesSection}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-eyebrow">What We Stand For</div>
          <h2 className="section-title">Our Values</h2>
          <div className="section-rule" style={{ margin: '12px auto 0' }} />
        </div>
        <div className={styles.valuesGrid}>
          {values.map(v => (
            <div key={v.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY FRESH COMMERCE */}
      <section className={styles.freshSection}>
        <div className={styles.freshInner}>
          <div className="section-eyebrow" style={{ color: 'rgba(245,217,138,0.6)' }}>The Raasa Way</div>
          <h2 className={styles.freshTitle}>Why &ldquo;Fresh Commerce&rdquo;?</h2>
          <div className={styles.freshGrid}>
            {[
              { q: 'Why no warehouse?', a: 'Warehousing food — even in cold storage — degrades flavour, texture, and nutritional value. Freshness cannot be stored. It must be procured.' },
              { q: 'Why does it take time?', a: 'A mango needs to ripen on the tree. Ghee needs to be churned from curd. Pickles need the right spice blend made fresh. Quality cannot be rushed.' },
              { q: 'Why COD & WhatsApp?', a: 'We believe you should taste and trust before you commit fully. That\'s why we accept Cash on Delivery and keep a human, WhatsApp-first ordering experience.' },
            ].map(item => (
              <div key={item.q} className={styles.freshFaqItem}>
                <div className={styles.freshFaqQ}>{item.q}</div>
                <div className={styles.freshFaqA}>{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 5vw', textAlign: 'center', background: 'var(--ivory2)' }}>
        <div className="section-eyebrow">Ready to Experience It?</div>
        <h2 className="section-title" style={{ margin: '0 auto 24px' }}>
          Taste the Raasa Difference
        </h2>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/summer-specials" className="btn-primary">🥭 Shop Mangoes</Link>
          <Link href="/special-products" className="btn-secondary">All Products</Link>
          <Link href="/contact" className="btn-tertiary">📞 Contact Us</Link>
        </div>
      </section>

    </div>
  );
}
