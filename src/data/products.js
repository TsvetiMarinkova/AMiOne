import scarf from '../assets/products/scarf.jpg';
import hat from '../assets/products/hat.jpg';
import custom from '../assets/products/custom.jpg';

const products = [
    {
        id: 'cozy-alpaca-scarf',
        title: 'Cozy Alpaca Scarf',
        slug: 'cozy-alpaca-scarf',
        priceType: 'fixed',
        price: 85,
        short: 'Soft hand-knit alpaca scarf — warm, elegant, lightweight.',
        description: 'Hand-knit alpaca scarf, available in a range of colours...',
        images: [scarf],
    },
    {
        id: 'chunky-knit-hat',
        title: 'Chunky Knit Hat',
        slug: 'chunky-knit-hat',
        priceType: 'fixed',
        price: 35,
        short: 'Cozy chunky hat, quick knit, custom colours available.',
        description: 'A chunky beanie made from high-quality wool...',
        images: [hat],
    },
    {
        id: 'custom-order',
        title: 'Commissioned Piece (Custom)',
        slug: 'commissioned-piece',
        priceType: 'quote',
        price: null,
        short: 'Custom orders — contact for a quote.',
        description: 'Have a special idea? Kaye takes commissions for bespoke pieces...',
        images: [custom],
    },
];

export default products;
