// GST rates by product category, derived from cart item code prefix
export function getGstRate(code: string): number {
  if (code.startsWith('mng-'))     return 0;    // Fresh mangoes — 0%
  if (code.startsWith('ghee-'))    return 0.12;  // Ghee — 12%
  if (code.startsWith('pickle-'))  return 0.12;  // Pickles — 12%
  if (code.startsWith('juice-'))   return 0.12;  // Packed juices — 12%
  if (code.startsWith('honey-'))   return 0.05;  // Branded honey — 5%
  return 0;
}

export function getGstLabel(code: string): string {
  const rate = getGstRate(code);
  return rate === 0 ? 'GST Exempt' : `GST ${(rate * 100).toFixed(0)}%`;
}

export function calcItemGst(price: number, qty: number, code: string): number {
  return Math.round(price * qty * getGstRate(code));
}
