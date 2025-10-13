import custom from '../assets/products/custom.jpg';
import stitchmarker from '../assets/products/stitch-markers.jpg';

const products = [
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
    {
        id: 'stitch-marker',
        title: 'Handmade Stitch Markers',
        slug: 'stitch-marker',
        priceType: 'quote',
        price: null,
        short: 'Handmade stitch markers — contact for a quote.',
        description: 'Beautiful handmade stitch markers.',
        images: [stitchmarker],
    },
];

export default products;
