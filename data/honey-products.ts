import { GenericProduct } from '@/components/ProductCard';

export const honeyProducts: GenericProduct[] = [
  {
    id: 'honey-multiflora',
    name: 'Multiflora Raw Honey',
    subtitle: 'Raw · Unfiltered · Unprocessed',
    desc: 'Pure raw honey harvested from bees that forage across a diverse wildflower landscape. Never heated, never filtered — so all the natural enzymes, pollen, and goodness stay intact. Complex floral notes with a warm, rich finish.',
    emoji: '🍯',
    image: '/multiflora_honey_new.jpg',
    badges: ['Raw', 'Unfiltered', 'Unprocessed'],
    sizes: [
      { label: '500 g', price: 369 },
      { label: '1 kg',  price: 699 },
    ],
  },
  {
    id: 'honey-litchi',
    name: 'Litchi Honey',
    subtitle: 'Limited Edition · Seasonal Harvest',
    desc: 'A rare, sought-after varietal honey collected when bees exclusively visit litchi orchards in bloom. Delicately sweet with a subtle fruity undertone — light in colour, extraordinary in taste. Available only while stocks last.',
    emoji: '🍈',
    image: '/litchi_honey_new.jpg',
    badges: ['Pre-order Only', 'Limited Edition'],
    preorderNote: 'Pre-orders only — we procure fresh upon order. WhatsApp us to reserve yours.',
    sizes: [
      { label: '500 g', price: 569 },
    ],
  },
];
