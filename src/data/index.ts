export type CarCategory = 'Sedan' | 'SUV' | 'MUV' | 'Luxury Sedan' | 'Luxury SUV';
export type Transmission = 'Manual' | 'Automatic';
export type FuelType = 'Petrol' | 'Diesel' | 'Hybrid';

export type CarPolicy = {
  mileageLimit: string;
  fuelPolicy: string;
  securityDeposit: string;
  cancellationPolicy: string;
};

export type Car = {
  id: string;
  name: string;
  category: CarCategory;
  transmission: Transmission;
  fuelType: FuelType;
  seats: number;
  luggage: string;
  pricePerDay: number;
  pricePerKm?: number;
  image: string;
  gallery: string[];
  features: string[];
  policy: CarPolicy;
};

export const contactInfo = {
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'info@dhruvatour.in',
  address: 'Koregaon Park, Pune, Maharashtra 411001',
  workingHours: '24/7 Dispatch',
  socials: {
    instagram: 'https://instagram.com/dhruvatour',
    facebook: 'https://facebook.com/dhruvatour',
    twitter: 'https://twitter.com/dhruvatour',
  },
};

export const cars: Car[] = [
  {
    id: 'swift-dzire',
    name: 'Swift Dzire',
    category: 'Sedan',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seats: 4,
    luggage: '3 Bags',
    pricePerDay: 2400,
    pricePerKm: 13,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&auto=format&fit=crop',
    ],
    features: ['AC', 'Music System', 'Comfortable Seating', 'USB Charging'],
    policy: {
      mileageLimit: '300 km per day',
      fuelPolicy: 'Return with same fuel level',
      securityDeposit: '₹2,000 refundable deposit',
      cancellationPolicy: 'Free cancellation up to 24 hours before pickup',
    },
  },
  {
    id: 'city',
    name: 'Honda City',
    category: 'Luxury Sedan',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    seats: 4,
    luggage: '3 Bags',
    pricePerDay: 3200,
    pricePerKm: 15,
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&auto=format&fit=crop',
    ],
    features: ['Premium Interiors', 'Extra Legroom', 'Quiet Cabin', 'Android Auto'],
    policy: {
      mileageLimit: '300 km per day',
      fuelPolicy: 'Return with same fuel level',
      securityDeposit: '₹3,000 refundable deposit',
      cancellationPolicy: 'Free cancellation up to 24 hours before pickup',
    },
  },
  {
    id: 'ertiga',
    name: 'Ertiga',
    category: 'MUV',
    transmission: 'Manual',
    fuelType: 'Diesel',
    seats: 6,
    luggage: '4 Bags',
    pricePerDay: 3400,
    pricePerKm: 15,
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&auto=format&fit=crop',
    ],
    features: ['Spacious', 'Roof Carrier', 'Dual AC', 'Family Friendly'],
    policy: {
      mileageLimit: '300 km per day',
      fuelPolicy: 'Return with same fuel level',
      securityDeposit: '₹3,500 refundable deposit',
      cancellationPolicy: 'Free cancellation up to 24 hours before pickup',
    },
  },
  {
    id: 'carens',
    name: 'Kia Carens',
    category: 'SUV',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seats: 6,
    luggage: '4 Bags',
    pricePerDay: 3600,
    pricePerKm: 16,
    image: 'https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518081461904-9d8f136351c2?w=1400&auto=format&fit=crop',
    ],
    features: ['Luxury Seating', 'Air Purifier', 'Sunroof', 'Fast Charging'],
    policy: {
      mileageLimit: '300 km per day',
      fuelPolicy: 'Return with same fuel level',
      securityDeposit: '₹4,000 refundable deposit',
      cancellationPolicy: 'Free cancellation up to 24 hours before pickup',
    },
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    category: 'Luxury SUV',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    seats: 7,
    luggage: '5 Bags',
    pricePerDay: 4800,
    pricePerKm: 20,
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583267746897-2cf415887172?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&auto=format&fit=crop',
    ],
    features: ['Captain Seats', 'Ultimate Comfort', 'High Safety', 'Reclining Row'],
    policy: {
      mileageLimit: '300 km per day',
      fuelPolicy: 'Return with same fuel level',
      securityDeposit: '₹5,000 refundable deposit',
      cancellationPolicy: 'Free cancellation up to 24 hours before pickup',
    },
  },
];

export const packages = [
  {
    slug: 'pune-mumbai',
    title: 'Pune to Mumbai',
    duration: '~3 hrs',
    startingPrice: '₹2,500',
    image:
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop',
    description:
      'Seamless city-to-city transfer. Express expressway route for maximum time efficiency.',
    inclusions: ['Toll Taxes', 'Professional Driver', 'Fuel', 'AC Vehicle'],
    exclusions: ['Parking (if any)', 'Driver Allowance', 'Extra Detours'],
    itinerary: [
      {
        day: 'Pick Up',
        description: 'Prompt arrival at your specified location in Pune.',
      },
      {
        day: 'Journey',
        description:
          'Smooth ride via the Mumbai-Pune Expressway with a designated halt at food malls if requested.',
      },
      {
        day: 'Drop Off',
        description:
          'Direct drop to your Mumbai destination, be it airport or office.',
      },
    ],
  },
  {
    slug: 'pune-shirdi',
    title: 'Pune to Shirdi',
    duration: '~4 hrs',
    startingPrice: '₹3,200',
    image:
      'https://images.unsplash.com/photo-1623888365612-40e13bc30e4b?w=1200&auto=format&fit=crop',
    description: 'Comfortable pilgrimage journey with our experienced drivers.',
    inclusions: ['Toll Taxes', 'Professional Driver', 'Fuel', 'AC Vehicle'],
    exclusions: ['Parking (if any)', 'Driver Allowance', 'VIP Darshan Tickets'],
    itinerary: [
      {
        day: 'Pick Up',
        description: 'Early morning pick-up recommended from Pune.',
      },
      {
        day: 'Journey',
        description: 'Scenic route through rural Maharashtra.',
      },
      {
        day: 'Arrival',
        description:
          'Drop at your hotel in Shirdi or close to the temple premises.',
      },
    ],
  },
  {
    slug: 'pune-nashik',
    title: 'Pune to Nashik',
    duration: '~4.5 hrs',
    startingPrice: '₹3,500',
    image:
      'https://images.unsplash.com/photo-1596568359543-98782a20b22a?w=1200&auto=format&fit=crop',
    description: 'Wine country visits or corporate travel to Nashik.',
    inclusions: ['Toll Taxes', 'Professional Driver', 'Fuel', 'AC Vehicle'],
    exclusions: ['Parking (if any)', 'Driver Allowance', 'Vineyard Entry Fees'],
    itinerary: [
      { day: 'Pick Up', description: 'Pick-up from your Pune location.' },
      { day: 'Journey', description: 'Travel via the NH60 highway.' },
      { day: 'Arrival', description: 'Drop anywhere in Nashik city limits.' },
    ],
  },
  {
    slug: 'pune-mahabaleshwar',
    title: 'Pune to Mahabaleshwar',
    duration: '~3.5 hrs',
    startingPrice: '₹3,000',
    image:
      'https://images.unsplash.com/photo-1593693397690-362bc174275d?w=1200&auto=format&fit=crop',
    description: 'Weekend getaway to the misty hills.',
    inclusions: ['Toll Taxes', 'Professional Driver', 'Fuel', 'AC Vehicle'],
    exclusions: [
      'Parking (if any)',
      'Driver Allowance',
      'Local Sightseeing Fees',
    ],
    itinerary: [
      { day: 'Pick Up', description: 'Morning departure from Pune.' },
      {
        day: 'Journey',
        description: 'Ascent through the beautiful Surur & Pasarni Ghats.',
      },
      {
        day: 'Arrival',
        description: 'Drop at your resort in Mahabaleshwar or Panchgani.',
      },
    ],
  },
  {
    slug: 'mumbai-nashik',
    title: 'Mumbai to Nashik',
    duration: '~3.5 hrs',
    startingPrice: '₹3,400',
    image:
      'https://images.unsplash.com/photo-1616053351336-e8d1c7d2bd54?w=1200&auto=format&fit=crop',
    description: 'Direct connection from Mumbai to Nashik.',
    inclusions: ['Toll Taxes', 'Professional Driver', 'Fuel', 'AC Vehicle'],
    exclusions: ['Parking (if any)', 'Driver Allowance'],
    itinerary: [
      {
        day: 'Pick Up',
        description: 'Pick-up from Mumbai Airport or city limits.',
      },
      { day: 'Journey', description: 'Journey via Kasara Ghat.' },
      { day: 'Arrival', description: 'Arrival in Nashik.' },
    ],
  },
  {
    slug: 'pune-lonavala',
    title: 'Pune to Lonavala',
    duration: '~1.5 hrs',
    startingPrice: '₹1,800',
    image:
      'https://images.unsplash.com/photo-1598444733470-3d8426090ee5?w=1200&auto=format&fit=crop',
    description: 'Quick escape to the nearest hill station.',
    inclusions: ['Toll Taxes', 'Professional Driver', 'Fuel', 'AC Vehicle'],
    exclusions: ['Parking (if any)', 'Driver Allowance'],
    itinerary: [
      {
        day: 'Pick Up',
        description: 'Convenient start from anywhere in Pune.',
      },
      {
        day: 'Journey',
        description: 'Short ride via Old Highway or Expressway.',
      },
      {
        day: 'Arrival',
        description: 'Drop at your Lonavala villa or resort.',
      },
    ],
  },
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518081461904-9d8f136351c2?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1464851707681-73934dc9b8e8?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520114886657-36e2f1e6b8a8?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&auto=format&fit=crop',
];

export const testimonials = [
  {
    name: 'Vikram S.',
    rating: 5,
    text: "The most professional car service I've used in Pune. The driver was 15 minutes early, the Innova was spotless, and the driving was exceptionally safe.",
  },
  {
    name: 'Priya Desai',
    rating: 5,
    text: "Booked them for my parents' trip to Shirdi. They were extremely respectful and handled everything. Gave me complete peace of mind.",
  },
  {
    name: 'Rahul Mehta',
    rating: 5,
    text: 'Zero hidden charges. What they quoted is exactly what I paid, which is rare these days. Our corporate team only uses Dhruva Tour now.',
  },
  {
    name: 'Anjali K.',
    rating: 4.9,
    text: 'Mumbai airport transfer was seamless. Highly recommend their premium sedans for absolute comfort.',
  },
];

export const faqs = [
  {
    q: 'How does your pricing work?',
    a: 'We operate on a transparent per-km basis depending on the vehicle selected. The starting rate is applied for the total distance from garage to garage. Tolls, parking, and state border taxes are extra.',
  },
  {
    q: 'Is there a minimum daily charge?',
    a: 'Yes, outstation trips require a minimum billing of 300 km per calendar day. For Mumbai return trips starting from Pune, a 350 km per day minimum applies.',
  },
  {
    q: 'Do you offer one-way drops?',
    a: "Absolutely. We offer dedicated one-way pricing for popular routes like Pune-Mumbai, ensuring you don't pay for the return journey of the vehicle.",
  },
  {
    q: 'Are your drivers verified?',
    a: 'Every Dhruva Tour driver undergoes a strict background check, holds a commercial license, and has a minimum of 5 years of highway driving experience. We prioritize safety and professionalism.',
  },
  {
    q: 'What about driver allowance?',
    a: 'A standard driver allowance of ₹500 is applicable per day to cover their meals. For driving between 10 PM and 6 AM, a night allowance of ₹500 is applied.',
  },
];
