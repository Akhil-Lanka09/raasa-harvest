import Link from 'next/link';
import WhatsAppIcon from './WhatsAppIcon';
import styles from './Footer.module.css';

const productLinks = [
  { href: '/summer-specials', label: '🥭 Mangoes' },
  { href: '/special-products', label: '🧈 Ghee' },
  { href: '/honey', label: '🍯 Honey' },
  { href: '/pickles', label: '🫙 Pickles' },
  { href: '/juices', label: '🧃 Juices' },
];

const infoLinks = [
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
  { href: '/cart', label: 'Cart' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.brandName}>Raasa</div>
          <div className={styles.brandTag}>Fresh Commerce · Hyderabad</div>
          <a
            href="https://wa.me/919849048999"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
          >
            <WhatsAppIcon size={13} /> WhatsApp Order
          </a>
        </div>

        {/* Products */}
        <div>
          <div className={styles.colTitle}>Products</div>
          <div className={styles.linkList}>
            {productLinks.map(l => (
              <Link key={l.href} href={l.href} className={styles.footerLink}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className={styles.colTitle}>Info</div>
          <div className={styles.linkList}>
            {infoLinks.map(l => (
              <Link key={l.href} href={l.href} className={styles.footerLink}>
                {l.label}
              </Link>
            ))}
            <a href="tel:+919849048999" className={styles.footerLink}>
              📞 +91 98490 48999
            </a>
          </div>
        </div>

        {/* Delivery */}
        <div className={styles.deliveryBox}>
          <div className={styles.deliveryLabel}>Delivery</div>
          <div className={styles.deliveryDays}>Sat & Sun</div>
          <div className={styles.deliveryNote}>Order by Fri 8 PM</div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <span className={styles.quote}>&ldquo;We don&apos;t keep stock. We keep promises.&rdquo;</span>
        <span className={styles.copy}>© 2025 Raasa · Hyderabad</span>
      </div>
    </footer>
  );
}
