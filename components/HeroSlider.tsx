'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

const slides = [
  {
    href: '/summer-specials',
    src: '/hero_mango_page.png',
    accent: '#c8860a',
    badge: '🌿 Fresh Commerce · Not Quick Commerce',
    title: 'Freshness',
    titleEm: 'That Takes Time.',
    subtitle: "We don't store. We source and prepare only after you order. 9 premium mango varieties — naturally ripened, farm-fresh.",
    cta: 'Explore Mangoes',
    ctaSecondary: { href: '/special-products', label: 'Shop All' },
  },
  {
    href: '/pickles',
    src: '/hero_pickles_page.png',
    accent: '#c8860a',
    badge: '🫙 Handmade & Authentic',
    title: 'Andhra Pickles',
    titleEm: 'Made Fresh.',
    subtitle: 'Made in small batches using cold-pressed peanut oil, whole spices, zero preservatives. The real taste of Andhra on your table.',
    cta: 'Shop Pickles',
    ctaSecondary: null,
  },
  {
    href: '/honey',
    src: '/hero_honey_page.png',
    accent: '#e8a020',
    badge: '🍯 Pure · Raw · Unprocessed',
    title: 'Raasa Honey',
    titleEm: 'Straight From the Hive.',
    subtitle: 'Never heated, never filtered, never adulterated. Two exquisite varieties, each with its own character.',
    cta: 'Shop Honey',
    ctaSecondary: null,
  },
  {
    href: '/special-products',
    src: '/hero_ghee_page.png',
    accent: '#c8860a',
    badge: '🧈 Pure & Traditional',
    title: 'Premium Ghee',
    titleEm: 'The Bilona Way.',
    subtitle: 'Hand-churned from A2 milk using the ancient Bilona method — nothing added, nothing removed. The way ghee has been made for centuries.',
    cta: 'Shop Ghee',
    ctaSecondary: null,
  },
  {
    href: '/juices',
    src: '/hero_juices_page.png',
    accent: '#3a9e6f',
    badge: '🧃 Cold-Pressed · Pure · Natural',
    title: 'Raw Juices',
    titleEm: 'Just Fruit. Nothing Else.',
    subtitle: 'No sugar, no preservatives, no additives — cold-pressed and frozen fresh to lock in every bit of flavour.',
    cta: 'Shop Juices',
    ctaSecondary: null,
  },
];

const trustBadges = [
  { icon: '⭐', label: '4.8 Rating', sub: 'Customer Reviews' },
  { icon: '🌿', label: '100% Natural', sub: 'No Additives' },
  { icon: '🛡', label: 'No Chemicals', sub: 'Chemical-Free' },
  { icon: '🚚', label: 'Farm to Home', sub: 'Weekend Delivery' },
];

const INTERVAL = 4000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length);
        setVisible(true);
      }, 350);
    }, INTERVAL);
    return () => clearInterval(t);
  }, []);

  const goTo = (i: number) => {
    if (i === current) return;
    setVisible(false);
    setTimeout(() => { setCurrent(i); setVisible(true); }, 300);
  };

  const slide = slides[current];

  return (
    <section className={styles.slider}>
      {/* Image layer */}
      <div className={`${styles.imgWrap} ${visible ? styles.imgVisible : styles.imgHidden}`}>
        <Image
          src={slide.src}
          alt={slide.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div className={styles.overlay} />

      {/* Text content — bottom left like old hero */}
      <div className={`${styles.textContent} ${visible ? styles.ctaVisible : styles.ctaHidden}`}>
        <span className={styles.badge} style={{ borderColor: `${slide.accent}55`, background: `${slide.accent}20` }}>
          {slide.badge}
        </span>
        <h1 className={styles.slideTitle}>
          {slide.title}<br />
          <em>{slide.titleEm}</em>
        </h1>
        <p className={styles.slideSubtitle}>{slide.subtitle}</p>
        <div className={styles.ctaRow}>
          <Link href={slide.href} className={styles.ctaPrimary}>
            {slide.cta}
          </Link>
          {slide.ctaSecondary && (
            <Link
              href={slide.ctaSecondary.href}
              className={styles.ctaSecondaryBtn}
              style={{ color: 'var(--saff3)', borderColor: 'rgba(245,217,138,0.4)' }}
            >
              {slide.ctaSecondary.label}
            </Link>
          )}
        </div>
        <div className={styles.trustStrip}>
          {trustBadges.map(b => (
            <div key={b.label} className={styles.trustBadge}>
              <span className={styles.trustIcon}>{b.icon}</span>
              <div>
                <div className={styles.trustLabel}>{b.label}</div>
                <div className={styles.trustSub}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {slides.map((s, i) => (
          <button
            key={s.href}
            onClick={() => goTo(i)}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            style={i === current ? { background: slide.accent, borderColor: slide.accent } : {}}
            aria-label={`Go to ${s.title}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className={styles.progressBar}>
        <div key={`${current}-bar`} className={styles.progressFill} style={{ background: slide.accent }} />
      </div>
    </section>
  );
}
