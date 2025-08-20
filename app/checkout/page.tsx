'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/app/providers';

export default function CheckoutPage() {
  const { state, dispatch } = useApp();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    governorate: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      ...formData,
      items: state.cart.items,
      total: state.cart.total,
      orderDate: new Date().toISOString()
    };

    // Here you would typically send the order to your API
    console.log('Order submitted:', orderData);
    
    // Clear cart and redirect to success page
    dispatch({ type: 'CLEAR_CART' });
    router.push('/order-success');
  };

  const governorates = [
    'القاهرة', 'الجيزة', 'الإسكندرية', 'الدقهلية', 'البحر الأحمر', 'البحيرة',
    'الفيوم', 'الغربية', 'الإسماعيلية', 'المنيا', 'المنوفية', 'الوادي الجديد',
    'شمال سيناء', 'جنوب سيناء', 'بور سعيد', 'القليوبية', 'قنا', 'البحر الأحمر',
    'الشرقية', 'سوهاج', 'السويس', 'أسوان', 'أسيوط', 'بني سويف', 'دمياط',
    'كفر الشيخ', 'مطروح', 'الأقصر'
  ];

  if (state.cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {state.language === 'ar' ? 'لا يمكن إتمام الطلب' : 'Cannot Complete Order'}
            </h1>
            <p className="text-gray-600">
              {state.language === 'ar' 
                ? 'سلة التسوق فارغة. أضف منتجات أولاً.'
                : 'Your cart is empty. Add products first.'
              }
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {state.language === 'ar' ? 'إتمام الطلب' : 'Checkout'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {state.language === 'ar' ? 'معلومات الشحن' : 'Shipping Information'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {state.language === 'ar' ? 'الاسم كاملاً' : 'Full Name'} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {state.language === 'ar' ? 'رقم الهاتف' : 'Phone Number'} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {state.language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {state.language === 'ar' ? 'المحافظة' : 'Governorate'} *
                  </label>
                  <select
                    name="governorate"
                    required
                    value={formData.governorate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">{state.language === 'ar' ? 'اختر المحافظة' : 'Select Governorate'}</option>
                    {governorates.map((gov) => (
                      <option key={gov} value={gov}>{gov}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {state.language === 'ar' ? 'المدينة' : 'City'} *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {state.language === 'ar' ? 'العنوان التفصيلي' : 'Detailed Address'} *
                </label>
                <textarea
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={state.language === 'ar' ? 'الشارع، المنطقة، رقم المبنى...' : 'Street, Area, Building number...'}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {state.language === 'ar' ? 'ملاحظات إضافية' : 'Additional Notes'}
                </label>
                <textarea
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder={state.language === 'ar' ? 'أي ملاحظات خاصة بالطلب...' : 'Any special notes for the order...'}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors"
              >
                {state.language === 'ar' ? 'تأكيد الطلب' : 'Confirm Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {state.language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
            </h2>
            
            <div className="space-y-4 mb-6">
              {state.cart.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-gray-500 text-xs">
                      {item.quantity} × {item.price} {state.language === 'ar' ? 'جنيه' : 'EGP'}
                    </div>
                  </div>
                  <div className="font-semibold">
                    {item.quantity * item.price} {state.language === 'ar' ? 'جنيه' : 'EGP'}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 space-y-2">
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
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                <span>{state.language === 'ar' ? 'المجموع الكلي' : 'Total'}</span>
                <span className="text-green-600">
                  {state.cart.total} {state.language === 'ar' ? 'جنيه' : 'EGP'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}