import { GenericProduct } from '@/components/ProductCard';

export const juiceProducts: GenericProduct[] = [
  {
    id: 'juice-mango-pulp',
    name: 'Mango Pulp',
    subtitle: 'Cold-Pressed · No Sugar · No Additives',
    desc: 'Pure mango pulp made from hand-picked Andhra mangoes — nothing else. No sugar, no preservatives, no water added. Just the raw, rich sweetness of the fruit. Store in freezer; best consumed within 20 days.',
    emoji: '🥭',
    image: '/mango_juice.jpg',
    badges: ['No Sugar', 'No Additives', 'No Preservatives'],
    sizes: [
      { label: '250 ml', price: 89 },
      { label: '500 ml', price: 175 },
    ],
  },
  {
    id: 'juice-black-grape',
    name: 'Black Grape Juice',
    subtitle: 'Cold-Pressed · No Sugar · No Additives',
    desc: 'Rich, deep-coloured juice pressed from fresh black grapes. Naturally sweet with a slight tartness — loaded with antioxidants. Zero sugar, zero preservatives, zero additives. Store in freezer; stays fresh for up to 20 days.',
    emoji: '🍇',
    image: '/black_grape_juice.jpg',
    badges: ['No Sugar', 'No Additives', 'No Preservatives'],
    sizes: [
      { label: '250 ml', price: 79 },
      { label: '500 ml', price: 155 },
    ],
  },
];
