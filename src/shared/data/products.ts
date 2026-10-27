interface productType {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

export const products: productType[] = [
    // Coffee
    {
        id: 'c1',
        name: "Classic Latte",
        category: "Coffee",
        description: "Rich espresso with steamed milk and a light layer of foam.",
        price: 4.500,
        image: "src/assets/images/products/coffee (1).avif",
        rating: 4.8
    },
    {
        id: 'c2',
        name: "Macchiato",
        category: "Coffee",
        description: "Espresso with vanilla syrup, milk, and caramel drizzle.",
        price: 5.200,
        image: "src/assets/images/products/coffee (2).avif",
        rating: 4.9
    },
    {
        id: 'c3',
        name: "Iced Americano",
        category: "Coffee",
        description: "Bold espresso over ice and water, perfect for hot days.",
        price: 3.500,
        image: "src/assets/images/products/coffee (3).avif",
        rating: 4.6
    },
    {
        id: 'c4',
        name: "Cappuccino",
        category: "Coffee",
        description: "Equal parts espresso, steamed milk, and milk foam.",
        price: 4.000,
        image: "src/assets/images/products/coffee (4).avif",
        rating: 4.7
    },
    {
        id: 'c5',
        name: "Mocha",
        category: "Coffee",
        description: "Espresso with chocolate syrup and steamed milk.",
        price: 5.000,
        image: "src/assets/images/products/coffee (5).avif",
        rating: 4.8
    },

    // Tea
    {
        id: 't1',
        name: "Matcha Green Tea",
        category: "Tea",
        description: "Premium Japanese matcha whisked with steamed milk.",
        price: 5.500,
        image: "src/assets/images/products/tea (1).avif",
        rating: 4.9
    },
    {
        id: 't2',
        name: "Earl Grey Reserve",
        category: "Tea",
        description: "Fragrant black tea with bergamot oil and blue cornflowers.",
        price: 4.000,
        image: "src/assets/images/products/tea (2).avif",
        rating: 4.7
    },
    {
        id: 't3',
        name: "Chai Latte",
        category: "Tea",
        description: "Spiced black tea concentrate mixed with steamed milk.",
        price: 4.800,
        image: "src/assets/images/products/tea (3).avif",
        rating: 4.9
    },
    {
        id: 't4',
        name: "Iced Peach Tea",
        category: "Tea",
        description: "Refreshing black tea infused with peach flavor and served over ice.",
        price: 4.200,
        image: "src/assets/images/products/tea (4).avif",
        rating: 4.6
    },

    // Desserts
    {
        id: 'd1',
        name: "Berry Croissant",
        category: "Desserts",
        description: "Buttery croissant filled with fresh berries and cream.",
        price: 3.800,
        image: "src/assets/images/products/desserts (1).avif",
        rating: 4.9
    },
    {
        id: 'd2',
        name: "Choco Lava Cake",
        category: "Desserts",
        description: "Decadent chocolate cake with a molten center.",
        price: 6.500,
        image: "src/assets/images/products/desserts (2).avif",
        rating: 4.8
    },
    {
        id: 'd3',
        name: "Cheesecake",
        category: "Desserts",
        description: "Creamy vanilla cheesecake with a graham cracker crust.",
        price: 5.500,
        image: "src/assets/images/products/desserts (3).avif",
        rating: 4.9
    },
    {
        id: 'd4',
        name: "Macarons",
        category: "Desserts",
        description: "Assorted french macarons with various fillings.",
        price: 6.000,
        image: "src/assets/images/products/desserts (4).avif",
        rating: 4.7
    },

    // Breakfast
    {
        id: 'b1',
        name: "Avocado Toast",
        category: "Breakfast",
        description: "Sourdough bread topped with fresh avocado, radish, and seeds.",
        price: 8.500,
        image: "src/assets/images/products/breakfast (1).avif",
        rating: 4.7
    },
    {
        id: 'b2',
        name: "Classic Pancakes",
        category: "Breakfast",
        description: "Fluffy pancakes served with maple syrup and butter.",
        price: 7.000,
        image: "src/assets/images/products/breakfast (2).avif",
        rating: 4.6
    },
    {
        id: 'b3',
        name: "Bagel with Cheese",
        category: "Breakfast",
        description: "Toasted bagel with a generous spread of cream cheese.",
        price: 3.500,
        image: "src/assets/images/products/breakfast (3).avif",
        rating: 4.5
    },
    {
        id: 'b4',
        name: "Granola Bowl",
        category: "Breakfast",
        description: "Greek yogurt topped with homemade granola and fresh fruits.",
        price: 6.000,
        image: "src/assets/images/products/breakfast (4).avif",
        rating: 4.8
    },

    // Combos
    {
        id: 'co1',
        name: "Morning Starter",
        category: "Combos",
        description: "Coffee + Croissant combo to start your day right.",
        price: 7.50,
        image: "src/assets/images/products/combos (1).avif",
        rating: 4.9
    },
    {
        id: 'co2',
        name: "Lunch Break",
        category: "Combos",
        description: "Sandwich + Iced Tea combo for a refreshing midday meal.",
        price: 12.00,
        image: "src/assets/images/products/combos (2).avif",
        rating: 4.8
    }

];


