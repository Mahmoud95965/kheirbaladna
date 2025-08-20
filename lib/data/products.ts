export interface Product {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  categoryEn: string;
  specifications: { [key: string]: string };
  specificationsEn: { [key: string]: string };
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'زارعة بذور أوتوماتيكية',
    nameEn: 'Automatic Seed Planter',
    description: 'زارعة بذور أوتوماتيكية عالية الكفاءة مناسبة لجميع أنواع البذور. تتميز بسهولة الاستخدام ودقة التوزيع المثالية للبذور في التربة.',
    descriptionEn: 'High-efficiency automatic seed planter suitable for all types of seeds. Features ease of use and perfect seed distribution accuracy in soil.',
    shortDescription: 'زارعة بذور أوتوماتيكية عالية الكفاءة',
    shortDescriptionEn: 'High-efficiency automatic seed planter',
    price: 2500,
    image: 'https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg',
    images: [
      'https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg',
      'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    ],
    category: 'زارعات',
    categoryEn: 'Planters',
    specifications: {
      'المواد': 'معدن مقاوم للصدأ',
      'السعة': '50 كيلو بذور',
      'الوزن': '25 كيلو',
      'الأبعاد': '120 × 80 × 60 سم'
    },
    specificationsEn: {
      'Material': 'Stainless steel',
      'Capacity': '50kg seeds',
      'Weight': '25kg',
      'Dimensions': '120 × 80 × 60 cm'
    },
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'رشاش كهربائي 16 لتر',
    nameEn: 'Electric Sprayer 16L',
    description: 'رشاش كهربائي بسعة 16 لتر مع بطارية قابلة للشحن. يوفر ضغط ثابت ورش متجانس للمبيدات والأسمدة السائلة.',
    descriptionEn: 'Electric sprayer with 16L capacity and rechargeable battery. Provides consistent pressure and uniform spray for pesticides and liquid fertilizers.',
    shortDescription: 'رشاش كهربائي بسعة 16 لتر مع بطارية',
    shortDescriptionEn: 'Electric sprayer 16L with battery',
    price: 850,
    image: 'https://images.pexels.com/photos/4917821/pexels-photo-4917821.jpeg',
    images: [
      'https://images.pexels.com/photos/4917821/pexels-photo-4917821.jpeg',
      'https://images.pexels.com/photos/4917825/pexels-photo-4917825.jpeg',
    ],
    category: 'رشاشات',
    categoryEn: 'Sprayers',
    specifications: {
      'السعة': '16 لتر',
      'البطارية': '12 فولت',
      'مدة التشغيل': '6-8 ساعات',
      'الوزن': '5 كيلو'
    },
    specificationsEn: {
      'Capacity': '16L',
      'Battery': '12V',
      'Operating Time': '6-8 hours',
      'Weight': '5kg'
    },
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'مضخة ري طرد مركزي',
    nameEn: 'Centrifugal Irrigation Pump',
    description: 'مضخة ري بقوة 2 حصان مناسبة للآبار والمصادر المائية المختلفة. تتميز بالكفاءة العالية والتشغيل الصامت.',
    descriptionEn: '2HP irrigation pump suitable for wells and various water sources. Features high efficiency and quiet operation.',
    shortDescription: 'مضخة ري بقوة 2 حصان عالية الكفاءة',
    shortDescriptionEn: 'High-efficiency 2HP irrigation pump',
    price: 3200,
    image: 'https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg',
    images: [
      'https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg',
      'https://images.pexels.com/photos/4772875/pexels-photo-4772875.jpeg',
    ],
    category: 'مضخات',
    categoryEn: 'Pumps',
    specifications: {
      'القوة': '2 حصان',
      'التدفق': '60 متر مكعب/ساعة',
      'الارتفاع': '30 متر',
      'المواد': 'حديد زهر'
    },
    specificationsEn: {
      'Power': '2HP',
      'Flow Rate': '60 m³/hour',
      'Head': '30m',
      'Material': 'Cast iron'
    },
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'مقص تقليم احترافي',
    nameEn: 'Professional Pruning Shears',
    description: 'مقص تقليم احترافي بشفرات من الفولاذ الياباني عالي الجودة. مقبض مريح ونظام قطع دقيق للأشجار والنباتات.',
    descriptionEn: 'Professional pruning shears with high-quality Japanese steel blades. Comfortable handle and precise cutting system for trees and plants.',
    shortDescription: 'مقص تقليم احترافي بشفرات يابانية',
    shortDescriptionEn: 'Professional pruning shears with Japanese blades',
    price: 180,
    image: 'https://images.pexels.com/photos/4917756/pexels-photo-4917756.jpeg',
    images: [
      'https://images.pexels.com/photos/4917756/pexels-photo-4917756.jpeg',
      'https://images.pexels.com/photos/4917758/pexels-photo-4917758.jpeg',
    ],
    category: 'أدوات يدوية',
    categoryEn: 'Hand Tools',
    specifications: {
      'طول الشفرة': '20 سم',
      'المواد': 'فولاذ ياباني',
      'الوزن': '250 جرام',
      'الضمان': 'سنتان'
    },
    specificationsEn: {
      'Blade Length': '20cm',
      'Material': 'Japanese steel',
      'Weight': '250g',
      'Warranty': '2 years'
    },
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'بذور طماطم معتمدة',
    nameEn: 'Certified Tomato Seeds',
    description: 'بذور طماطم معتمدة عالية الإنتاجية مقاومة للأمراض. مناسبة للزراعة في الحقول المفتوحة والصوب الزراعية.',
    descriptionEn: 'High-yield certified tomato seeds resistant to diseases. Suitable for cultivation in open fields and greenhouses.',
    shortDescription: 'بذور طماطم معتمدة عالية الإنتاجية',
    shortDescriptionEn: 'High-yield certified tomato seeds',
    price: 45,
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
    images: [
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
      'https://images.pexels.com/photos/1327837/pexels-photo-1327837.jpeg',
    ],
    category: 'بذور',
    categoryEn: 'Seeds',
    specifications: {
      'الكمية': '100 جرام',
      'نسبة الإنبات': '95%',
      'مدة الصلاحية': 'سنتان',
      'المنشأ': 'هولندا'
    },
    specificationsEn: {
      'Quantity': '100g',
      'Germination Rate': '95%',
      'Shelf Life': '2 years',
      'Origin': 'Netherlands'
    },
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'بذور خيار هجين',
    nameEn: 'Hybrid Cucumber Seeds',
    description: 'بذور خيار هجين عالية الإنتاجية ومقاومة للفيروسات. تنتج ثمار خيار طويلة ومستقيمة ذات جودة تجارية عالية.',
    descriptionEn: 'High-yield hybrid cucumber seeds resistant to viruses. Produces long, straight cucumber fruits of high commercial quality.',
    shortDescription: 'بذور خيار هجين مقاومة للفيروسات',
    shortDescriptionEn: 'Virus-resistant hybrid cucumber seeds',
    price: 65,
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
    images: [
      'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
    ],
    category: 'بذور',
    categoryEn: 'Seeds',
    specifications: {
      'الكمية': '50 جرام',
      'نسبة الإنبات': '92%',
      'مدة الصلاحية': 'سنتان',
      'المنشأ': 'إسرائيل'
    },
    specificationsEn: {
      'Quantity': '50g',
      'Germination Rate': '92%',
      'Shelf Life': '2 years',
      'Origin': 'Israel'
    },
    inStock: true,
    featured: false
  }
];

export function getProducts() {
  return products;
}

export function getProduct(id: string) {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category: string) {
  return products.filter(product => product.category === category || product.categoryEn === category);
}