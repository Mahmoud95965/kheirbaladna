'use client';

import Link from 'next/link';
import { useApp } from '@/app/providers';

export function Hero() {
  const { state } = useApp();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 via-green-700 to-green-600">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg")'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {state.language === 'ar' 
              ? 'خير بلدنا... مستقبل زراعتنا'
              : 'Our Country\'s Best... Our Agriculture\'s Future'
            }
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
            {state.language === 'ar' 
              ? 'نوفر لك أحدث أدوات الزراعة وأفضل البذور المعتمدة لضمان نجاح محصولك'
              : 'We provide you with the latest agricultural tools and best certified seeds to ensure your crop success'
            }
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/products"
              className="bg-gold-500 hover:bg-gold-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              style={{ backgroundColor: '#FFD700' }}
            >
              {state.language === 'ar' ? 'اطلب الآن' : 'Order Now'}
            </Link>
            
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
            >
              {state.language === 'ar' ? 'تعرف علينا' : 'Learn About Us'}
            </Link>
          </div>
          
          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {state.language === 'ar' ? 'جودة عالية' : 'High Quality'}
              </h3>
              <p className="text-green-100">
                {state.language === 'ar' 
                  ? 'منتجات عالية الجودة ومعتمدة دولياً'
                  : 'High-quality, internationally certified products'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {state.language === 'ar' ? 'توصيل سريع' : 'Fast Delivery'}
              </h3>
              <p className="text-green-100">
                {state.language === 'ar' 
                  ? 'توصيل سريع لجميع أنحاء جمهورية مصر'
                  : 'Fast delivery to all parts of Egypt'
                }
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {state.language === 'ar' ? 'دعم فني' : 'Technical Support'}
              </h3>
              <p className="text-green-100">
                {state.language === 'ar' 
                  ? 'دعم فني مستمر وخدمة ما بعد البيع'
                  : 'Continuous technical support and after-sales service'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}