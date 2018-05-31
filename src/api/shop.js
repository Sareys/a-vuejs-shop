/**
 * Mocking client-server processing
 */
// const _products = [
//   {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
//   {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
//   {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
// ]
const _products = [
  {
    id: 1,
    title: 'Adidas Jacket',
    price: 50.00,
    category: 'menApparel',
    subcategory: 'upper',
    sale: false,
    img: 'planter1.jpg',
    inventory: 2,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 2,
    title: 'Adidas Sweatpants',
    price: 29.99,
    category: 'menApparel',
    subcategory: 'lower',
    sale: false,
    img: 'daybed1.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 3,
    title: 'Adidas Sneakers',
    price: 129.99,
    category: 'menApparel',
    subcategory: 'shoes',
    sale: true,
    img: 'basket-table.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 4,
    title: 'Nike T-shirt',
    price: 49.00,
    category: 'menApparel',
    subcategory: 'upper',
    sale: true,
    img: 'sofa1.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 5,
    title: 'Nike Running Shoes',
    price: 29.99,
    category: 'menApparel',
    subcategory: 'shoes',
    sale: false,
    img: 'rack.jpg',
    inventory: 5,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 6,
    title: 'Adidas Running Shoes',
    price: 58.99,
    category: 'menApparel',
    subcategory: 'shoes',
    sale: true,
    img: 'planter2.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 7,
    title: 'Chocolate Whey',
    price: 998.00,
    category: 'supplements',
    subcategory: 'whey',
    sale: false,
    img: 'credenza.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 8,
    title: 'Strawberry Whey',
    price: 139.90,
    category: 'supplements',
    subcategory: 'whey',
    sale: false,
    img: 'mirror1.jpg',
    inventory: 0,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 9,
    title: 'Protein Chocolate Bar',
    price: 899.00,
    category: 'supplements',
    subcategory: 'protein bar',
    sale: true,
    img: 'dining.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 10,
    title: 'Yoga Carpet',
    price: 4.99,
    category: 'equipment',
    subcategory: '',
    sale: false,
    img: 'bunting.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 11,
    title: 'Creatine: Nature Taste',
    price: 80.99,
    category: 'supplements',
    subcategory: 'creatine',
    sale: false,
    img: 'sofa2.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 12,
    title: 'Jumping Rope',
    price: 1179.89,
    category: 'equipment',
    subcategory: '',
    sale: true,
    img: 'daybed2.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 13,
    title: 'Weighted Ball',
    price: 69.00,
    category: 'equipment',
    subcategory: '',
    sale: false,
    img: 'wicker.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdfdafdasfaaaaaaaaaaaaaaaflljdslfjiodsjaoifjsdojfodjsoifjweojfoijseofijweojfiowejfoijweoifjwoijfoiwejfoijweoifjweoifjoiwejfoijweiofjweoijfoiewjoifejofjowejfoqjewofi'
  },
  {
    id: 14,
    title: 'Rubber Bands',
    price: 29.99,
    category: 'equipment',
    subcategory: '',
    sale: true,
    img: 'rag.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 15,
    title: 'Ab Roller',
    price: 1820.90,
    category: 'equipment',
    subcategory: '',
    sale: false,
    img: 'bed.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 16,
    title: 'Foam Roller',
    price: 159.00,
    category: 'equipment',
    subcategory: '',
    sale: true,
    img: 'vanity.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 17,
    title: 'Adidas Jacket',
    price: 100.00,
    category: 'womenApparel',
    subcategory: 'upper',
    sale: false,
    img: 'planter1.jpg',
    inventory: 2,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 18,
    title: 'Nike Running Shoes',
    price: 179.99,
    category: 'womenApparel',
    subcategory: 'shoes',
    sale: true,
    img: 'basket-table.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 19,
    title: 'Adidas Running Shoes',
    price: 549.00,
    category: 'womenApparel',
    subcategory: 'shoes',
    sale: true,
    img: 'sofa1.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 20,
    title: 'Adidas Sweatpants',
    price: 29.99,
    category: 'womenApparel',
    subcategory: 'lower',
    sale: false,
    img: 'rack.jpg',
    inventory: 5,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 21,
    title: 'Nike Sport Bra',
    price: 58.99,
    category: 'womenApparel',
    subcategory: 'upper',
    sale: true,
    img: 'planter2.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 22,
    title: 'Adidas Sport Bra',
    price: 998.00,
    category: 'womenApparel',
    subcategory: 'upper',
    sale: false,
    img: 'credenza.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 23,
    title: 'Nike Legging',
    price: 139.90,
    category: 'womenApparel',
    subcategory: 'lower',
    sale: false,
    img: 'mirror1.jpg',
    inventory: 0,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 24,
    title: 'Adidas Short',
    price: 899.00,
    category: 'menApparel',
    subcategory: 'lower',
    sale: true,
    img: 'dining.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 25,
    title: 'BCAA My Protein',
    price: 129.99,
    category: 'supplements',
    subcategory: 'bcaa',
    sale: false,
    img: 'bunting.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 26,
    title: 'Multivitamins pills',
    price: 80.99,
    category: 'supplements',
    subcategory: 'vitamins',
    sale: false,
    img: 'sofa2.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 27,
    title: 'Protein Bar: SugarFree',
    price: 1179.89,
    category: 'supplements',
    subcategory: 'protein bar',
    sale: true,
    img: 'daybed2.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 28,
    title: 'BCAA Cola Taste',
    price: 69.00,
    category: 'supplements',
    subcategory: 'bcaa',
    sale: false,
    img: 'wicker.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 29,
    title: 'Underarmour Legging Black',
    price: 29.99,
    category: 'womenApparel',
    subcategory: 'lower',
    sale: true,
    img: 'rag.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 30,
    title: 'Underarmour Legging White',
    price: 1820.90,
    category: 'womenApparel',
    subcategory: 'lower',
    sale: false,
    img: 'bed.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 31,
    title: 'Space theme Legging',
    price: 159.00,
    category: 'womenApparel',
    subcategory: 'lower',
    sale: true,
    img: 'vanity.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  },
  {
    id: 32,
    title: 'Nike Jacket',
    price: 1119.99,
    category: 'womenApparel',
    subcategory: 'upper',
    sale: false,
    img: 'daybed1.jpg',
    inventory: 20,
    description: 'sdfdsfsfsfsfsfsdfs fsfsfsdfsdfsdfsf sdfsfsdfsdfsdfsdfsdf'
  }
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
