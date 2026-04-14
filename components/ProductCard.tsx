'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './PantryCard.module.css';

export type GenericProduct = {
  id: string;
  name: string;
  subtitle: string;
  desc: string;
  emoji: string;
  image?: string;
  badges?: string[];
  preorderNote?: string;
  sizes: { label: string; price: number }[];
};

export default function ProductCard({ product }: { product: GenericProduct }) {
  const { addItem } = useCart();
  const [selectedIdx, setSelectedIdx] = useState(0);

  const size = product.sizes[selectedIdx];

  const handleAdd = () => {
    addItem({
      id: `${product.id}-${size.label.replace(/\s/g, '')}`,
      name: `${product.name} (${size.label})`,
      price: size.price,
      size: size.label,
      emoji: product.emoji,
      code: product.id,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap} style={!product.image ? { display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', background: 'var(--ivory2)' } : {}}>
        {product.image
          ? <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
          : <span>{product.emoji}</span>
        }
        {product.badges && (
          <div className={styles.badges}>
            {product.badges.map(b => (
              <span key={b} className="badge gold">{b}</span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.subtitle}>{product.subtitle}</div>
        <p className={styles.desc}>{product.desc}</p>

        <div className={styles.sizes}>
          {product.sizes.map((s, idx) => (
            <button
              key={s.label}
              onClick={() => setSelectedIdx(idx)}
              className={`${styles.sizeBtn} ${idx === selectedIdx ? styles.sizeActive : ''}`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {product.preorderNote && (
          <div style={{ background: 'var(--saff4)', border: '1px solid rgba(200,134,10,0.25)', borderRadius: '4px', padding: '10px 12px', fontSize: '0.76rem', color: 'var(--tm)', lineHeight: '1.5', marginBottom: '12px' }}>
            🕐 {product.preorderNote}
          </div>
        )}
        <div className={styles.footer}>
          <div className={styles.priceWrap}>
            <span className={styles.price}>₹{size.price}</span>
          </div>
          <button onClick={handleAdd} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
