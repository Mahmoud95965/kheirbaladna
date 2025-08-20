'use client';

import Link from 'next/link';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/lib/data/products';
import { useApp } from '@/app/providers';

export function FeaturedProducts() {
  const { state } = useApp();
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {state.language === 'ar' ? 'منتجاتنا المميزة' : 'Our Featured Products'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {state.language === 'ar' 
              ? 'اكتشف مجموعة متنوعة من أحدث أدوات الزراعة والبذور المعتمدة التي تلبي جميع احتياجاتك الزراعية'
              : 'Discover a diverse range of the latest agricultural tools and certified seeds that meet all your farming needs'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
          >
            {state.language === 'ar' ? 'عرض جميع المنتجات' : 'View All Products'}
          </Link>
        </div>
      </div>
    </section>
  );
}