'use client';
import { useState } from 'react';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import styles from './page.module.css';

const contactMethods = [
  {
    icon: 'wa',
    title: 'WhatsApp Order',
    desc: "Fastest way to order. Send us your cart items and we'll confirm within minutes.",
    cta: 'Open WhatsApp',
    href: 'https://wa.me/919849048999?text=Hi%20Raasa%2C%20I%27d%20like%20to%20place%20an%20order.',
    color: '#25d366',
    bg: '#f0fdf4',
  },
  {
    icon: '📞',
    title: 'Call Us',
    desc: 'Prefer to speak? Call us between 8 AM – 8 PM, any day of the week.',
    cta: 'Call Now',
    href: 'tel:+919849048999',
    color: 'var(--saffron)',
    bg: 'var(--saff4)',
  },
];

const deliveryZones = [
  'Banjara Hills', 'Jubilee Hills', 'Madhapur', 'Gachibowli',
  'Hitech City', 'Kondapur', 'Miyapur', 'Kukatpally',
  'Ameerpet', 'Somajiguda', 'SR Nagar', 'Begumpet',
  'Secunderabad', 'Uppal', 'LB Nagar', 'Dilsukhnagar',
];

type FaqItem = { q: string; a: React.ReactNode };

const faqItems: FaqItem[] = [
  {
    q: 'When do you deliver?',
    a: 'We deliver every Saturday and Sunday. Place your order before Friday 8 PM to be included in the weekend delivery.',
  },
  {
    q: 'What is the minimum order value?',
    a: 'Minimum order is ₹200. Free delivery on orders above ₹500.',
  },
  {
    q: 'How fresh are the vegetables?',
    a: "All products are sourced or prepared fresh after your order — nothing is pre-stocked and dispatched — directly from our farm partners in Andhra & Telangana.",
  },
  {
    q: 'Can I customise a box?',
    a: "Absolutely! WhatsApp us with your requirements and we'll build a custom box for you.",
  },
  {
    q: 'Do you accept returns?',
    a: "If any item is unsatisfactory, we'll replace it in your next delivery or issue a credit note.",
  },
  {
    q: 'What if there is an issue with my delivery?',
    a: (
      <>
        If you face any issue — wrong items, missing products, or delays — reach out immediately on{' '}
        <a
          href="https://wa.me/919849048999?text=Hi%20Raasa%2C%20I%20have%20an%20issue%20with%20my%20delivery."
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#25d366', fontWeight: 600 }}
        >
          WhatsApp +91 98490 48999
        </a>
        . We resolve all delivery issues within the same day.
      </>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Raasa! I'd like to enquire:\n\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919849048999?text=${msg}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <div className={styles.hero}>
        <div className="hero-deco">📞</div>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Get in Touch</div>
        <h1 className="hero-title">Order & Contact</h1>
        <p className="hero-sub">
          We're here to help you experience real, fresh food. Available 7 days a week, 8 AM to 8 PM.
          WhatsApp is the fastest way to reach us.
        </p>
        <a
          href="https://wa.me/919849048999"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginTop: '8px', width: 'fit-content' }}
        >
          <WhatsAppIcon /> &nbsp;WhatsApp Now
        </a>
      </div>

      {/* Contact methods */}
      <section className="page-section">
        <div className={styles.header}>
          <div className="section-eyebrow">Reach Us</div>
          <h2 className="section-title">How to Order</h2>
          <div className="section-rule" />
        </div>
        <div className={styles.methodsGrid}>
          {contactMethods.map(m => (
            <a
              key={m.title}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.methodCard}
              style={{ background: m.bg, borderColor: m.color + '33' }}
            >
              <div className={styles.methodIcon}>
                {m.icon === 'wa' ? <WhatsAppIcon size={28} /> : m.icon}
              </div>
              <h3 className={styles.methodTitle}>{m.title}</h3>
              <p className={styles.methodDesc}>{m.desc}</p>
              <span className={styles.methodCta} style={{ color: m.color }}>{m.cta} →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Order Form */}
      <section className={styles.formSection}>
        <div className={styles.formWrap}>
          <div className={styles.formHeader}>
            <div className="section-eyebrow">Send an Enquiry</div>
            <h2 className="section-title">Place an Order</h2>
            <div className="section-rule" />
            <p style={{ fontSize: '0.85rem', color: 'var(--tm)', marginTop: '-8px' }}>
              Fill in your details below — this will open WhatsApp with your enquiry pre-filled.
            </p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.fieldRow}>
              <div className="field-group" style={{ flex: 1 }}>
                <label className="field-label" htmlFor="name">Your Name *</label>
                <input
                  className="field-input" id="name" type="text" required
                  placeholder="e.g. Priya Reddy"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="field-group" style={{ flex: 1 }}>
                <label className="field-label" htmlFor="phone">Phone Number *</label>
                <input
                  className="field-input" id="phone" type="tel" required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                />
              </div>
            </div>
            <div className="field-group">
              <label className="field-label" htmlFor="address">Delivery Address</label>
              <input
                className="field-input" id="address" type="text"
                placeholder="Flat 4B, Sunrise Apartments, Banjara Hills, Hyderabad — 500034"
                value={form.address}
                onChange={e => setForm(f => ({ ...f, address: e.target.value }))}
              />
            </div>
            <div className="field-group">
              <label className="field-label" htmlFor="message">Your Order / Message *</label>
              <textarea
                className="field-input field-textarea" id="message" required
                placeholder={"e.g. I'd like:\n- Sona Masoori 5 kg (RICE-SM-5K)\n- Weekly Essential Veg Box (VEG-WEB-L)\n- Daily Fruit Box (FRT-DFB-L)"}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center', background: '#3a9e6f', color: '#fff' }}>
              {sent ? '✅ Opening WhatsApp…' : <><WhatsAppIcon /> &nbsp;Send via WhatsApp</>}
            </button>
          </form>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="page-section" style={{ background: 'var(--card)', borderTop: '1px solid rgba(59,13,13,0.06)' }}>
        <div className="section-eyebrow">We Deliver To</div>
        <h2 className="section-title">Delivery Areas</h2>
        <div className="section-rule" />
        <div className={styles.zonesGrid}>
          {deliveryZones.map(zone => (
            <div key={zone} className={styles.zoneChip}>📍 {zone}</div>
          ))}
        </div>
        <p style={{ marginTop: '20px', fontSize: '0.82rem', color: 'var(--tl)' }}>
          Don&apos;t see your area? WhatsApp us — we&apos;re expanding coverage every week.
        </p>
      </section>

      {/* FAQ */}
      <section className="page-section">
        <div className="section-eyebrow">Common Questions</div>
        <h2 className="section-title">FAQ</h2>
        <div className="section-rule" />
        <div className={styles.faqList}>
          {faqItems.map(item => (
            <div key={item.q} className={styles.faqItem}>
              <div className={styles.faqQ}>Q: {item.q}</div>
              <div className={styles.faqA}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
