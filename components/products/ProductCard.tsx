'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/data/products';
import { useApp } from '@/app/providers';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { state, dispatch } = useApp();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: state.language === 'ar' ? product.name : product.nameEn,
        price: product.price,
        image: product.image
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      <Link href={`/products/${product.id}`}>
        <div className="relative">
          <img
            src={product.image}
            alt={state.language === 'ar' ? product.name : product.nameEn}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold">
                {state.language === 'ar' ? 'غير متوفر' : 'Out of Stock'}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {state.language === 'ar' ? product.name : product.nameEn}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {state.language === 'ar' ? product.shortDescription : product.shortDescriptionEn}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-600">
              {product.price} 
              <span className="text-sm font-normal text-gray-500 mr-1">
                {state.language === 'ar' ? 'جنيه' : 'EGP'}
              </span>
            </span>
            
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
              title={state.language === 'ar' ? 'أضف للسلة' : 'Add to Cart'}
            >
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}