'use client';

import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useApp } from '@/app/providers';

export default function CartPage() {
  const { state, dispatch } = useApp();

  const updateQuantity = (id: string, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: newQuantity }
    });
  };

  const removeFromCart = (id: string) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    });
  };

  if (state.cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {state.language === 'ar' ? 'السلة فارغة' : 'Your Cart is Empty'}
            </h1>
            <p className="text-gray-600 mb-8">
              {state.language === 'ar' 
                ? 'لم تقم بإضافة أي منتجات إلى سلة التسوق بعد'
                : "You haven't added any products to your cart yet"
              }
            </p>
            <Link
              href="/products"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {state.language === 'ar' ? 'تصفح المنتجات' : 'Browse Products'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {state.language === 'ar' ? 'سلة التسوق' : 'Shopping Cart'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.cart.items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-green-600 font-bold">
                      {item.price} {state.language === 'ar' ? 'جنيه' : 'EGP'}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3 space-x-reverse">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-lg font-bold text-gray-900">
                    {item.price * item.quantity} {state.language === 'ar' ? 'جنيه' : 'EGP'}
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {state.language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
            </h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">
                  {state.language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}
                </span>
                <span className="font-semibold">
                  {state.cart.total} {state.language === 'ar' ? 'جنيه' : 'EGP'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">
                  {state.language === 'ar' ? 'الشحن' : 'Shipping'}
                </span>
                <span className="font-semibold text-green-600">
                  {state.language === 'ar' ? 'مجاني' : 'Free'}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>{state.language === 'ar' ? 'المجموع الكلي' : 'Total'}</span>
                  <span className="text-green-600">
                    {state.cart.total} {state.language === 'ar' ? 'جنيه' : 'EGP'}
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors block text-center"
            >
              {state.language === 'ar' ? 'متابعة الدفع' : 'Proceed to Checkout'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}