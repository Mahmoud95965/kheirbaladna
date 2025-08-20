'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { ShoppingCart, ArrowRight, ArrowLeft, Star } from 'lucide-react';
import { getProduct } from '@/lib/data/products';
import { useApp } from '@/app/providers';

export default function ProductDetailPage() {
  const params = useParams();
  const { state, dispatch } = useApp();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const product = getProduct(params.id as string);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {state.language === 'ar' ? 'المنتج غير موجود' : 'Product Not Found'}
          </h1>
          <p className="text-gray-600">
            {state.language === 'ar' ? 'لم يتم العثور على المنتج المطلوب' : 'The requested product was not found'}
          </p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          id: product.id,
          name: state.language === 'ar' ? product.name : product.nameEn,
          price: product.price,
          image: product.image
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <a href="/" className="hover:text-green-600">
            {state.language === 'ar' ? 'الرئيسية' : 'Home'}
          </a>
          {state.language === 'ar' ? <ArrowLeft size={16} className="mx-2" /> : <ArrowRight size={16} className="mx-2" />}
          <a href="/products" className="hover:text-green-600">
            {state.language === 'ar' ? 'المنتجات' : 'Products'}
          </a>
          {state.language === 'ar' ? <ArrowLeft size={16} className="mx-2" /> : <ArrowRight size={16} className="mx-2" />}
          <span className="text-gray-400">
            {state.language === 'ar' ? product.name : product.nameEn}
          </span>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.images[selectedImage] || product.image}
                  alt={state.language === 'ar' ? product.name : product.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {product.images.length > 1 && (
                <div className="flex space-x-2 space-x-reverse">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === index ? 'border-green-600' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${state.language === 'ar' ? product.name : product.nameEn} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {state.language === 'ar' ? product.name : product.nameEn}
                </h1>
                <div className="flex items-center space-x-2 space-x-reverse mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {state.language === 'ar' ? '(150 تقييم)' : '(150 reviews)'}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {state.language === 'ar' ? product.description : product.descriptionEn}
                </p>
              </div>

              {/* Price */}
              <div className="border-t border-b border-gray-200 py-6">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {product.price} 
                  <span className="text-lg font-normal text-gray-500 mr-2">
                    {state.language === 'ar' ? 'جنيه مصري' : 'EGP'}
                  </span>
                </div>
                <div className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock 
                    ? (state.language === 'ar' ? 'متوفر في المخزن' : 'In Stock')
                    : (state.language === 'ar' ? 'غير متوفر' : 'Out of Stock')
                  }
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <label className="text-gray-700 font-medium">
                    {state.language === 'ar' ? 'الكمية:' : 'Quantity:'}
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <ShoppingCart size={20} />
                  <span>
                    {state.language === 'ar' ? 'أضف إلى السلة' : 'Add to Cart'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t border-gray-200 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {state.language === 'ar' ? 'المواصفات' : 'Specifications'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(state.language === 'ar' ? product.specifications : product.specificationsEn).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}