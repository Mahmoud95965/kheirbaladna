'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/products/ProductCard';
import { getProducts } from '@/lib/data/products';
import { useApp } from '@/app/providers';

export default function ProductsPage() {
  const { state } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = getProducts();
  
  const categories = [
    { value: 'all', label: 'جميع المنتجات', labelEn: 'All Products' },
    { value: 'زارعات', label: 'زارعات', labelEn: 'Planters' },
    { value: 'رشاشات', label: 'رشاشات', labelEn: 'Sprayers' },
    { value: 'مضخات', label: 'مضخات', labelEn: 'Pumps' },
    { value: 'أدوات يدوية', label: 'أدوات يدوية', labelEn: 'Hand Tools' },
    { value: 'بذور', label: 'بذور', labelEn: 'Seeds' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.descriptionEn.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {state.language === 'ar' ? 'منتجاتنا' : 'Our Products'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {state.language === 'ar' 
              ? 'اكتشف مجموعة واسعة من أحدث أدوات الزراعة والبذور المعتمدة عالية الجودة'
              : 'Discover a wide range of the latest agricultural tools and high-quality certified seeds'
            }
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          {/* Search */}
          <div className="md:w-1/3">
            <input
              type="text"
              placeholder={state.language === 'ar' ? 'ابحث عن المنتجات...' : 'Search products...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {state.language === 'ar' ? category.label : category.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          {state.language === 'ar' 
            ? `عرض ${filteredProducts.length} منتج`
            : `Showing ${filteredProducts.length} products`
          }
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              {state.language === 'ar' 
                ? 'لم يتم العثور على منتجات تطابق بحثك'
                : 'No products found matching your search'
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
}