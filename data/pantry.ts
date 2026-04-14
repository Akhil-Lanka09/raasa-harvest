export type PantryProduct = {
  id: string;
  name: string;
  subtitle: string;
  desc: string;
  image: string;
  category: 'ghee';
  badges?: string[];
  comingSoon?: boolean;
  sizes: { label: string; price: number }[];
};

export const pantryProducts: PantryProduct[] = [
  /* ─── GHEE ─── */
  {
    id: 'ghee-buffalo',
    name: 'Pure Buffalo Ghee',
    subtitle: 'Traditional Bilona method',
    desc: 'Rich, aromatic buffalo ghee prepared using the ancient Bilona method. Deep golden colour with an intense buttery aroma — perfect for sweets, parathas, and dal tadka.',
    image: '/buffalo_ghee.jpg',
    category: 'ghee',
    badges: ['Premium', 'A2 Bilona'],
    sizes: [
      { label: '500 ml', price: 849 },
      { label: '1 litre', price: 1599 },
    ],
  },
  {
    id: 'ghee-cow',
    name: 'Pure Cow Ghee',
    subtitle: 'Desi Gir Cow A2 Ghee',
    desc: 'Light, golden desi cow ghee from A2 milk of Gir cows. Gentle nutty flavour, easy to digest. Ideal for everyday cooking, rice, rotis, and Ayurvedic use.',
    image: '/cow_ghee.png',
    category: 'ghee',
    badges: ['A2 Milk', 'Gir Cow'],
    comingSoon: true,
    sizes: [
      { label: '500 ml', price: 750 },
      { label: '1 litre', price: 1400 },
    ],
  },
];
