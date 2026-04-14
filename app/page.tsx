import Link from 'next/link';
import Image from 'next/image';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import HeroSlider from '@/components/HeroSlider';
import styles from './page.module.css';

const trustBadges = [
  { icon: '⭐', label: '4.8 Rating', sub: 'Customer Reviews' },
  { icon: '🌿', label: '100% Natural', sub: 'No Additives' },
  { icon: '🛡', label: 'No Chemicals', sub: 'Chemical-Free' },
  { icon: '🚚', label: 'Farm to Home', sub: 'Weekend Delivery' },
];

const categories = [
  { href: '/summer-specials', emoji: '🥭', title: 'Seasonal Mangoes', benefit: 'Naturally ripened. No carbide. Straight from the orchard.', image: '/hero_mango_page.png', badge: 'Seasonal', imgPos: 'right bottom' },
  { href: '/special-products', emoji: '🧈', title: 'A2 Ghee', benefit: 'Pure bilona-method ghee from desi cows & buffalo.', image: '/hero_ghee_page.png', badge: null, imgPos: 'left center' },
  { href: '/honey', emoji: '🍯', title: 'Raw Honey', benefit: 'Unheated, unfiltered. Natural enzymes intact.', image: '/hero_honey_page.png', badge: null, imgPos: 'center center' },
  { href: '/pickles', emoji: '🫙', title: 'Traditional Pickles', benefit: 'Andhra-style pickles. Made fresh. No preservatives.', image: '/hero_pickles_page.png', badge: null, imgPos: 'center bottom' },
  { href: '/juices', emoji: '🧃', title: 'Fresh Juices', benefit: 'Cold-pressed. No sugar. Freeze-stored up to 20 days.', image: '/hero_juices_page.png', badge: null, imgPos: 'right center' },
];

const processSteps = [
  { num: '01', title: 'You Place Order', desc: 'Browse our catalogue and choose what you need.' },
  { num: '02', title: 'We Source Fresh', desc: 'We procure directly from farms after your order — nothing is pre-stocked.' },
  { num: '03', title: 'Prepared with Care', desc: 'Ghee, pickles & juices are made fresh — never manufactured in advance.' },
  { num: '04', title: 'Quality Checked', desc: 'Every item is hand-sorted and inspected before packing.' },
  { num: '05', title: 'Delivered to You', desc: 'Freshly packed and delivered to your doorstep every weekend.' },
];

const featuredProducts = [
  { id: 'f1', name: 'Banganapalli Mangoes', benefit: 'The King of Andhra — sweet, fibre-free, naturally ripened', price: '₹300', unit: '/ 6 pcs', emoji: '🥭', image: '/mango_banganapalli.jpg', badge: 'Best Seller', href: '/summer-specials' },
  { id: 'f2', name: 'Pure Buffalo Ghee', benefit: 'Traditional Bilona method — rich, aromatic, deeply golden', price: '₹849', unit: '/ 500 ml', emoji: '🧈', image: '/buffalo_ghee.jpg', badge: 'Premium', href: '/special-products' },
  { id: 'f3', name: 'Litchi Honey', benefit: 'Seasonal varietal honey — delicate, rare, extraordinary taste', price: '₹569', unit: '/ 500 g', emoji: '🍯', image: '/litchi_honey_new.jpg', badge: 'Limited', href: '/honey' },
  { id: 'f4', name: 'Gongura Pickle', benefit: 'The pride of Andhra — tangy sorrel with deep lingering heat', price: '₹159', unit: '/ 250 g', emoji: '🫙', image: '/gongura_pickle.jpg', badge: 'No Preservatives', href: '/pickles' },
];

const testimonials = [
  { text: 'The Banganapalli mangoes were unbelievably sweet. You can taste the difference — these are REAL farm mangoes, not warehouse stock.', author: 'Priya R.', location: 'Banjara Hills', emoji: '🥭' },
  { text: 'The ghee smells exactly like what my grandmother used to make. I had forgotten what real bilona ghee tastes like. Worth every rupee.', author: 'Kiran M.', location: 'Jubilee Hills', emoji: '🧈' },
  { text: 'Ordered the Gongura pickle and it arrived fresh. No preservative smell, no artificial colour. Just the real thing. Reordering every week.', author: 'Suresh B.', location: 'Kondapur', emoji: '🫙' },
];

export default function Home() {
  return (
    <div className="page-enter">

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* FRESH vs QUICK COMMERCE */}
      <section className={styles.compare}>
        <div className={styles.compareInner}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <div className="section-eyebrow">Why We&apos;re Different</div>
            <h2 className="section-title">Fresh Commerce, Not Quick Commerce</h2>
            <div className="section-rule" style={{ margin: '12px auto 0' }} />
          </div>
          <div className={styles.compareGrid}>
            <div className={styles.compareCard} data-bad>
              <div className={styles.compareCardLabel} data-bad>Quick Commerce</div>
              <ul className={styles.compareList}>
                {['Stored in cold warehouses for days','Sourced in bulk weeks in advance','Fast but not truly fresh','Mass-produced with preservatives','Optimised for speed, not quality'].map(item => (
                  <li key={item} className={styles.compareItem}><span className={styles.compareCross}>✗</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.vsCircle}>VS</div>
            <div className={styles.compareCard} data-good>
              <div className={styles.compareCardLabel} data-good>Raasa · Fresh Commerce</div>
              <ul className={styles.compareList}>
                {['Sourced from farms after your order','Made fresh — ghee, pickles, juices','Naturally ripened, never forced','Zero preservatives, zero chemicals','Delivered with care, not in minutes'].map(item => (
                  <li key={item} className={styles.compareItem}><span className={styles.compareCheck}>✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className={styles.categories}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-eyebrow">What We Offer</div>
          <h2 className="section-title">Our Categories</h2>
          <div className="section-rule" style={{ margin: '12px auto 0' }} />
        </div>
        <div className={styles.catGrid}>
          {categories.map((cat, i) => (
            <Link key={cat.href} href={cat.href} className={`${styles.catCard} ${i === 0 ? styles.catFeatured : ''}`}>
              <div className={styles.catImageWrap}>
                <Image src={cat.image} alt={cat.title} fill style={{ objectFit: 'cover', objectPosition: cat.imgPos }} />
                <div className={styles.catOverlay} />
                {cat.badge && <span className={styles.catBadge}>{cat.badge}</span>}
              </div>
              <div className={styles.catContent}>
                <span className={styles.catEmoji}>{cat.emoji}</span>
                <h3 className={styles.catTitle}>{cat.title}</h3>
                <p className={styles.catBenefit}>{cat.benefit}</p>
                <span className={styles.catArrow}>Shop Now →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MANGO HIGHLIGHT */}
      <section className={styles.mangoHL}>
        <div className={styles.mangoHLInner}>
          <div className={styles.mangoHLText}>
            <div className="hero-eyebrow" style={{ color: 'rgba(245,217,138,0.6)', marginBottom: '12px' }}>Seasonal · Limited · Farm-Direct</div>
            <h2 className={styles.mangoHLTitle}>Seasonal Mangoes —<br /><em>Straight From the Farm</em></h2>
            <div className={styles.mangoPoints}>
              {[
                ['🌿', 'Naturally ripened on the tree'],
                ['🚫', 'No carbide, no chemicals, no artificial ripening'],
                ['📦', 'Sourced from farms only after your order'],
                ['⏳', 'Limited seasonal availability — order while stocks last'],
              ].map(([icon, text]) => (
                <div key={text} className={styles.mangoPoint}><span>{icon}</span><span>{text}</span></div>
              ))}
            </div>
            <Link href="/summer-specials" className="btn-primary" style={{ marginTop: '8px' }}>Order Mangoes Now</Link>
          </div>
          <div className={styles.mangoHLImage}>
            <Image src="/mango_banganapalli.jpg" alt="Banganapalli Mangoes" fill style={{ objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process}>
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <div className="section-eyebrow">Our Process</div>
          <h2 className="section-title">How Raasa Works</h2>
          <div className="section-rule" style={{ margin: '12px auto 0' }} />
          <p style={{ marginTop: '16px', color: 'var(--tm)', maxWidth: '480px', margin: '16px auto 0', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Every order triggers a fresh sourcing chain — from your screen to the farm and back to your table.
          </p>
        </div>
        <div className={styles.processSteps}>
          {processSteps.map((step, i) => (
            <div key={step.num} className={styles.processStep}>
              <div className={styles.processNum}>{step.num}</div>
              {i < processSteps.length - 1 && <div className={styles.processConnector} />}
              <h3 className={styles.processTitle}>{step.title}</h3>
              <p className={styles.processDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className={styles.featured}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-eyebrow">Hand-Picked for You</div>
          <h2 className="section-title">Featured Products</h2>
          <div className="section-rule" style={{ margin: '12px auto 0' }} />
        </div>
        <div className={styles.featuredGrid}>
          {featuredProducts.map(p => (
            <Link key={p.id} href={p.href} className={styles.featuredCard}>
              <div className={styles.featuredImgWrap}>
                <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
                {p.badge && <span className={`badge gold ${styles.featuredBadge}`}>{p.badge}</span>}
              </div>
              <div className={styles.featuredBody}>
                <div className={styles.featuredEmoji}>{p.emoji}</div>
                <h3 className={styles.featuredName}>{p.name}</h3>
                <p className={styles.featuredBenefit}>{p.benefit}</p>
                <div className={styles.featuredFooter}>
                  <span className={styles.featuredPrice}>{p.price}<span className={styles.featuredUnit}>{p.unit}</span></span>
                  <span className={styles.featuredCta}>View →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link href="/summer-specials" className="btn-secondary">Browse All Products</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.testimonials}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="section-eyebrow">What Customers Say</div>
          <h2 className="section-title">Tasted the Difference</h2>
          <div className="section-rule" style={{ margin: '12px auto 0' }} />
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.testimonialEmoji}>{t.emoji}</div>
              <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>{t.author}</strong>
                <span className={styles.testimonialLoc}>&nbsp;· {t.location}</span>
              </div>
              <div className={styles.testimonialStars}>⭐⭐⭐⭐⭐</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY PREVIEW */}
      <section className={styles.storyPreview}>
        <div className={styles.storyPreviewInner}>
          <div className="section-eyebrow" style={{ color: 'rgba(245,217,138,0.55)' }}>Our Story</div>
          <h2 className={styles.storyTitle}>&ldquo;Freshness That<br />Takes Time.&rdquo;</h2>
          <p className={styles.storyText}>
            In a world of 10-minute deliveries and warehouse-stored groceries, we decided
            to do things differently. While others ship from a shelf, we source from the earth.
          </p>
          <Link href="/about" className="btn-primary">Read Our Full Story</Link>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className={styles.waBanner}>
        <div className={styles.waBannerInner}>
          <div className="hero-eyebrow" style={{ textAlign: 'center' }}>Ready to Order?</div>
          <h2 className={styles.waTitle}>Order via WhatsApp — Fast &amp; Personal</h2>
          <p className={styles.waSub}>
            Browse, pick what you need, and message us directly.
            We deliver fresh every Saturday &amp; Sunday in Hyderabad.
          </p>
          <a href="https://wa.me/919849048999" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: '#3a9e6f', color: '#fff' }}>
            <WhatsAppIcon /> &nbsp;WhatsApp Us Now
          </a>
        </div>
      </section>

    </div>
  );
}
