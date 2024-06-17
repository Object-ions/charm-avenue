const products = [
  {
    name: 'Two Butterfly pendant',
    category: 'necklaces',
    tags: ['18K rose gold', 'Diamond', 'Mother-of-pearl'],
    price: 8550,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/16/27/73/6/1627736.png.transform.vca-w820-2x.png',
    description:
      'Two Butterfly pendant, 18K rose gold, white mother-of-pearl, round diamond, rhodium plated 18K white gold, marquise diamond, diamond quality DEF, IF to VVS. The pendant is attached to the necklace’s chain.',
    rating: 4.5,
    numReviews: 25,
    countInStock: 10,
  },
  {
    name: 'Frivole pendant, 3 flowers, mini model',
    category: 'necklaces',
    tags: ['18K yellow gold', 'Diamond'],
    price: 5200,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/mi/YP/S-/M2/T9/Kt/gG/hP/R8/aX/gQ/miYPS-M2T9KtgGhPR8aXgQ.png',
    description:
      'Frivole pendant, 3 flowers, mini model, 18K yellow gold, round diamonds; diamond quality DEF, IF to VVS. The pendant is attached to the necklace’s chain.',
    rating: 4.0,
    numReviews: 30,
    countInStock: 5,
  },
  {
    name: 'Perlée couleurs transformable long necklace',
    category: 'necklaces',
    tags: ['18K yellow gold', 'Coral', 'Onyx', 'Turquoise'],
    price: 23500,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/19/04/65/6/1904656.png.transform.vca-w820-2x.png',
    description:
      'Perlée couleurs transformable long necklace, 18K yellow gold, coral, onyx, turquoise.',
    rating: 4.8,
    numReviews: 12,
    countInStock: 7,
  },
  {
    name: 'Zodiaque medal Geminorum (Gemini)',
    category: 'necklaces',
    tags: ['18K yellow gold'],
    price: 2510,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/22/61/85/5/2261855.png.transform.vca-w820-2x.png',
    description: 'Zodiaque medal Geminorum (Gemini), 18K yellow gold.',
    rating: 4.2,
    numReviews: 18,
    countInStock: 3,
  },
  {
    name: 'Sweet Alhambra pendant',
    category: 'necklaces',
    tags: ['18K rose gold', 'Carnelian'],
    price: 1740,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/Xo/vz/b3/HF/KU/W0/t5/VW/o6/q_/dQ/Xovzb3HFKUW0t5VWo6q_dQ.png.transform.vca-w820-2x.png',
    description: 'Sweet Alhambra pendant, 18K rose gold, carnelian.',
    rating: 4.9,
    numReviews: 20,
    countInStock: 8,
  },
  {
    name: 'Perlée diamonds ring, 1 row',
    category: 'rings',
    tags: ['18K yellow gold', 'Diamond'],
    price: 8300,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/19/04/63/7/1904637.png.transform.vca-w820-2x.png',
    description:
      'Perlée diamonds ring, 1 row, 18K yellow gold, round diamonds; diamond quality DEF, IF to VVS.',
    rating: 4.7,
    numReviews: 22,
    countInStock: 6,
  },
  {
    name: 'Perlée diamonds duo ring',
    category: 'rings',
    tags: ['18K yellow gold', 'Diamond'],
    price: 9600,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/aU/XJ/d3/oZ/Rc/2w/re/5v/lT/Os/rA/aUXJd3oZRc2wre5vlTOsrA.png.transform.vca-w820-2x.png',
    description:
      'Perlée diamonds duo ring, 18K yellow gold, round diamonds; diamond quality DEF, IF to VVS.',
    rating: 4.6,
    numReviews: 19,
    countInStock: 9,
  },
  {
    name: 'Vintage Alhambra ring',
    category: 'rings',
    tags: ['18K yellow gold', 'Diamond', 'Mother-of-pearl'],
    price: 3650,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/16/26/44/5/1626445.png.transform.vca-w820-2x.png',
    description:
      'Vintage Alhambra ring, 18K yellow gold, white mother-of-pearl, round diamond; diamond quality DEF, IF to VVS.',
    rating: 4.4,
    numReviews: 17,
    countInStock: 4,
  },
  {
    name: 'Rose de Noël earrings, small model',
    category: 'earrings',
    tags: ['18K yellow gold', 'Diamond', 'Onyx'],
    price: 26700,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/16/27/84/6/1627846.png.transform.vca-w820-2x.png',
    description:
      'Rose de Noël earrings, small model, 18K yellow gold, onyx, round diamonds; diamond quality DEF, IF to VVS.',
    rating: 4.9,
    numReviews: 15,
    countInStock: 2,
  },
  {
    name: 'Perlée clovers hoop earrings',
    category: 'earrings',
    tags: ['18K yellow gold', 'Diamond'],
    price: 15000,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/16/27/31/1/1627311.png.transform.vca-w820-2x.png',
    description:
      'Perlée clovers hoop earrings, 18K yellow gold, round diamonds; diamond quality DEF, IF to VVS.',
    rating: 4.3,
    numReviews: 21,
    countInStock: 11,
  },
  {
    name: 'Vintage Alhambra earrings',
    category: 'earrings',
    tags: ['18K yellow gold', 'Carnelian'],
    price: 4550,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/Gk/FY/8R/ou/M0/aK/1v/uC/OX/xP/uQ/GkFY8RouM0aK1vuCOXxPuQ.png.transform.vca-w820-2x.png',
    description: 'Vintage Alhambra earrings, 18K yellow gold, carnelian.',
    rating: 4.5,
    numReviews: 16,
    countInStock: 5,
  },
  {
    name: 'Perlée diamonds earrings',
    category: 'earrings',
    tags: ['18K yellow gold', 'Diamond'],
    price: 36600,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/ht/vj/0q/Hx/Qc/ii/F6/zi/gd/T_/1A/htvj0qHxQciiF6zigdT_1A.png.transform.vca-w820-2x.png',
    description:
      'Perlée diamonds earrings, 18K yellow gold, round diamonds; diamond quality DEF, IF to VVS.',
    rating: 4.7,
    numReviews: 14,
    countInStock: 3,
  },
  {
    name: 'Vintage Alhambra bracelet, 5 motifs',
    category: 'bracelets',
    tags: ['18K yellow gold', 'Mother-of-pearl'],
    price: 4600,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/16/26/45/6/1626456.png.transform.vca-w820-2x.png',
    description:
      'Vintage Alhambra bracelet, 5 motifs, 18K yellow gold, mother-of-pearl.',
    rating: 4.6,
    numReviews: 13,
    countInStock: 7,
  },
  {
    name: 'Vintage Alhambra bracelet, 5 motifs',
    category: 'bracelets',
    tags: ['18K yellow gold', 'Onyx'],
    price: 4600,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/16/26/44/9/1626449.png.transform.vca-w820-2x.png',
    description: 'Vintage Alhambra bracelet, 5 motifs, 18K yellow gold, onyx.',
    rating: 4.5,
    numReviews: 20,
    countInStock: 8,
  },
  {
    name: 'Sweet Alhambra bracelet',
    category: 'bracelets',
    tags: ['18K yellow gold', 'Mother-of-pearl'],
    price: 1420,
    imageUrl:
      'https://www.vancleefarpels.com/content/dam/rcq/vca/17/93/47/1/1793471.png.transform.vca-w820-2x.png',
    description: 'Sweet Alhambra bracelet, 18K yellow gold, mother-of-pearl.',
    rating: 4.8,
    numReviews: 25,
    countInStock: 6,
  },
];

export default products;
