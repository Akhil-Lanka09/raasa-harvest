'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/',                 label: 'Home' },
  { href: '/summer-specials',  label: '🥭 Mangoes' },
  { href: '/special-products', label: '🧈 Ghee' },
  { href: '/pickles',          label: '🫙 Pickles' },
  { href: '/honey',            label: '🍯 Honey' },
  { href: '/juices',           label: '🧃 Juices' },
  { href: '/about',            label: 'Our Story' },
  { href: '/contact',          label: 'Order' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoMain}>Raasa</span>
          <span className={styles.logoSub}>Fresh Commerce · Hyderabad</span>
        </Link>

        {/* Desktop nav */}
        <div className={styles.tabs}>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.tab} ${pathname === item.href ? styles.active : ''}`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/cart"
            className={`${styles.tab} ${pathname === '/cart' ? styles.active : ''}`}
          >
            🛒&nbsp;Cart
            {count > 0 && <span className={styles.cartBadge}>{count}</span>}
          </Link>

          <Link
            href={user ? '/profile' : '/login'}
            className={`${styles.tab} ${(pathname === '/profile' || pathname === '/login') ? styles.active : ''}`}
          >
            👤&nbsp;{user ? user.name.split(' ')[0] : 'Sign In'}
          </Link>
        </div>

        {/* Mobile: cart count + hamburger */}
        <div className={styles.mobileRight}>
          <Link href="/cart" className={styles.mobileCart} aria-label={`Cart, ${count} items`}>
            🛒{count > 0 && <span className={styles.cartBadge}>{count}</span>}
          </Link>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen1 : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen2 : ''}`} />
            <span className={`${styles.burgerLine} ${menuOpen ? styles.burgerOpen3 : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className={styles.drawer} onClick={closeMenu}>
          <div className={styles.drawerInner} onClick={e => e.stopPropagation()}>
            <div className={styles.drawerLogo}>
              <span className={styles.drawerLogoMain}>Raasa</span>
              <span className={styles.drawerLogoSub}>Fresh Commerce · Hyderabad</span>
            </div>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.drawerLink} ${pathname === item.href ? styles.drawerActive : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/cart" className={`${styles.drawerLink} ${pathname === '/cart' ? styles.drawerActive : ''}`} onClick={closeMenu}>
              🛒 Cart {count > 0 && <span className={styles.cartBadge}>{count}</span>}
            </Link>
            <Link href={user ? '/profile' : '/login'} className={`${styles.drawerLink} ${(pathname === '/profile' || pathname === '/login') ? styles.drawerActive : ''}`} onClick={closeMenu}>
              👤 {user ? user.name.split(' ')[0] : 'Sign In'}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
