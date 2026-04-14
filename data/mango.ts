export type MangoVariety = {
  id: string;
  name: string;
  desc: string;
  image: string;
  packs: { size: number; price: number; discount?: number }[];
  badges?: string[];
};

export const mangoes: MangoVariety[] = [
  {
    id: 'mng-banganapalli',
    name: 'Banganapalli',
    desc: 'The King of Mangoes from Andhra Pradesh. Sweet, fibre-free, and highly sought-after. Perfect for eating fresh or making thick milkshakes.',
    image: '/mango_banganapalli.jpg',
    badges: ['Best Seller', 'Andhra Origin'],
    packs: [
      { size: 6,  price: 300 },
      { size: 12, price: 549 },
      { size: 30, price: 2499 },
    ],
  },
  {
    id: 'mng-alphonso',
    name: 'Alphonso',
    desc: 'India\'s most celebrated mango — deep saffron flesh, rich buttery sweetness, and an unforgettable aroma. The gold standard of mango season.',
    image: '/mango_alphonso.png',
    badges: ['Premium', 'GI Tagged'],
    packs: [
      { size: 6,  price: 300 },
      { size: 12, price: 549 },
      { size: 30, price: 2499 },
    ],
  },
  {
    id: 'mng-himampasand',
    name: 'Himampasand',
    desc: 'Often called Imam Pasand. Exceptionally sweet, large in size, with a very thin skin and small seed. A true connoisseur\'s delight.',
    image: '/mango_himampasand.jpg',
    badges: ['Premium'],
    packs: [
      { size: 6,  price: 300 },
      { size: 12, price: 549 },
      { size: 30, price: 2499 },
    ],
  },
  {
    id: 'mng-nuziveedu',
    name: 'Nuziveedu Sweet',
    desc: 'A prized variety from the Krishna-Guntur belt. Extremely sweet, fibre-free flesh with a distinctive rich taste. A local legend.',
    image: '/mango_rumani.jpg',
    badges: ['Andhra Origin'],
    packs: [
      { size: 6,  price: 300 },
      { size: 12, price: 549 },
      { size: 30, price: 2499 },
    ],
  },
  {
    id: 'mng-chinna-rasalu',
    name: 'Chinna Rasalu',
    desc: 'Extremely sweet and juicy, known for its strong aroma. Perfect for squeezing and drinking the juice directly from the fruit.',
    image: '/mango_chinna_rasalu.jpg',
    badges: ['Juice Special'],
    packs: [
      { size: 6,  price: 300 },
      { size: 12, price: 549 },
      { size: 30, price: 2499 },
    ],
  },
  {
    id: 'mng-pedda-rasalu',
    name: 'Pedda Rasalu',
    desc: 'The larger variant of Rasalu mangoes. Extremely juicy with a unique sweet-tangy flavour profile that lingers on the palate.',
    image: '/mango_pedda_rasalu.jpg',
    packs: [
      { size: 6,  price: 300 },
      { size: 12, price: 549 },
      { size: 30, price: 2499 },
    ],
  },
  {
    id: 'mng-jalalu',
    name: 'Raw Mangoes Jalalu',
    desc: 'A distinct, elongated raw mango variety known for its unique flavour and excellent keeping quality. Great for making pickles or eating with salt and chilli.',
    image: '/mango_jalalu.jpg',
    packs: [
      { size: 6,  price: 300 },
      { size: 12, price: 549 },
      { size: 30, price: 2499 },
    ],
  },
  {
    id: 'mng-cheruku-rasam',
    name: 'Raw Mangoes Rasalu',
    desc: '"Cheruku" means Sugarcane. Extraordinarily sweet with abundant juice. A beloved summer staple across Telugu states.',
    image: '/mango_cheruku_rasam.jpg',
    badges: ['Juice Special'],
    packs: [
      { size: 6,  price: 300 },
      { size: 12, price: 549 },
      { size: 30, price: 2499 },
    ],
  },
  {
    id: 'mng-natu-kai',
    name: 'Natu Mangoes',
    desc: 'Local, rustic farm mangoes. Unmatched authentic countryside aroma, excellent for regional pickles, traditional curries, and everyday eating.',
    image: '/mango_natu_kai.jpg',
    badges: ['Rustic', 'Local Farm'],
    packs: [
      { size: 6,  price: 200 },
      { size: 12, price: 400 },
      { size: 30, price: 2100 },
    ],
  },
];
