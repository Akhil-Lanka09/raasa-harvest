'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { getGstRate, calcItemGst } from '@/lib/gst';
import styles from './page.module.css';

export default function CartPage() {
  const { items, removeItem, updateQty, total, count, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="page-enter">
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🛒</div>
          <h2 className={styles.emptyTitle}>Your cart is empty</h2>
          <p className={styles.emptyDesc}>
            Browse our catalogue and add items to get started.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link href="/summer-specials" className="btn-primary">🥭 Summer Specials</Link>
            <Link href="/honey" className="btn-secondary">🍯 Honey</Link>
            <Link href="/pickles" className="btn-secondary">🫙 Pickles</Link>
          </div>
        </div>
      </div>
    );
  }

  const subtotal = total;
  const totalGst = items.reduce((sum, i) => sum + calcItemGst(i.price, i.qty, i.code), 0);
  const grandTotal = subtotal + totalGst;

  const gstBreakdown: Record<string, number> = {};
  items.forEach(i => {
    const rate = getGstRate(i.code);
    if (rate > 0) {
      const label = `GST ${(rate * 100).toFixed(0)}%`;
      gstBreakdown[label] = (gstBreakdown[label] || 0) + calcItemGst(i.price, i.qty, i.code);
    }
  });

  const waMsg = encodeURIComponent(
    `Hi Raasa! I'd like to place an order:\n\n` +
    items.map(i => {
      const gst = calcItemGst(i.price, i.qty, i.code);
      const rate = getGstRate(i.code);
      const gstLine = rate > 0 ? ` + ₹${gst} GST (${(rate * 100).toFixed(0)}%)` : ' (GST Exempt)';
      return `- ${i.name} (${i.size}) × ${i.qty} = ₹${i.price * i.qty}${gstLine}  [${i.code}]`;
    }).join('\n') +
    `\n\nSubtotal: ₹${subtotal}` +
    (totalGst > 0 ? `\nGST: ₹${totalGst}` : '') +
    `\nGrand Total: ₹${grandTotal}\n\nPlease confirm availability and delivery.`
  );

  return (
    <div className="page-enter">
      <div className={styles.hero} style={{ background: "var(--burg)" }}>
        <div className="hero-rule" style={{ background: 'var(--saffron)' }} />
        <div className="hero-eyebrow">Your Selection</div>
        <h1 className="hero-title">Shopping Cart</h1>
        <p className="hero-sub">
          {count} item{count !== 1 ? 's' : ''} · Subtotal ₹{subtotal}
        </p>
      </div>

      <section className="page-section">
        <div className={styles.layout}>

          <div className={styles.itemsList}>
            <div className={styles.listHeader}>
              <h2 className={styles.listTitle}>Cart Items</h2>
              <button className={styles.clearBtn} onClick={clearCart}>Clear all</button>
            </div>

            {items.map(item => {
              const rate = getGstRate(item.code);
              const gstAmt = calcItemGst(item.price, item.qty, item.code);
              return (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-emoji">{item.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-sub">{item.size} · {item.code}</div>
                    <div className="cart-item-price" style={{ marginTop: '4px' }}>
                      ₹{item.price} × {item.qty} = <strong>₹{item.price * item.qty}</strong>
                      {rate > 0
                        ? <span style={{ marginLeft: '6px', fontSize: '0.72rem', color: 'var(--tl)' }}>+ ₹{gstAmt} GST ({(rate * 100).toFixed(0)}%)</span>
                        : <span style={{ marginLeft: '6px', fontSize: '0.72rem', color: 'var(--sage)' }}>GST exempt</span>
                      }
                    </div>
                  </div>
                  <div className={styles.qtyControl}>
                    <button className={styles.qtyBtn} onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                    <span className={styles.qtyNum}>{item.qty}</span>
                    <button className={styles.qtyBtn} onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeItem(item.id)} title="Remove">✕</button>
                </div>
              );
            })}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryTitle}>Order Summary</div>

            <div className={styles.summaryRows}>
              {items.map(item => (
                <div key={item.id} className={styles.summaryRow}>
                  <span>{item.name} ({item.size}) ×{item.qty}</span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <div className={styles.summaryDivider} />

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            {Object.entries(gstBreakdown).map(([label, amt]) => (
              <div key={label} className={styles.summaryRow}>
                <span>{label}</span>
                <span>₹{amt}</span>
              </div>
            ))}

            <div className={styles.summaryDivider} />

            <div className={styles.summaryTotal}>
              <span>Grand Total</span>
              <span>₹{grandTotal}</span>
            </div>

            <a
              href={`https://wa.me/919849048999?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', marginTop: '16px', display: 'block' }}
            >
              <WhatsAppIcon /> Order via WhatsApp
            </a>
          </div>

        </div> {/* ✅ FIXED: layout closed */}
      </section>

      <section style={{ background: 'var(--mintbg)', padding: '28px 5vw' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap' }}>
          {[
            { icon: '🌿', text: 'Freshly sourced after order' },
            { icon: '🚫', text: 'No preservatives' },
            { icon: '🚚', text: 'Delivered Sat & Sun' },
            { icon: '💰', text: 'Cash on Delivery available' },
          ].map(item => (
            <div key={item.text}>
              {item.icon} {item.text}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}