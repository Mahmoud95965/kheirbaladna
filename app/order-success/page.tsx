'use client';

import Link from 'next/link';
import { CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { useApp } from '@/app/providers';

export default function OrderSuccessPage() {
  const { state } = useApp();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={40} />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {state.language === 'ar' ? 'تم تأكيد طلبك بنجاح!' : 'Your Order is Confirmed!'}
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            {state.language === 'ar' 
              ? 'شكراً لك على طلبك. سنتواصل معك قريباً لتأكيد تفاصيل الطلب والتوصيل.'
              : 'Thank you for your order. We will contact you soon to confirm order details and delivery.'
            }
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {state.language === 'ar' ? 'ماذا يحدث الآن؟' : 'What happens now?'}
            </h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <p className="text-gray-700">
                  {state.language === 'ar' 
                    ? 'سنتصل بك خلال 24 ساعة لتأكيد طلبك'
                    : 'We will call you within 24 hours to confirm your order'
                  }
                </p>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <p className="text-gray-700">
                  {state.language === 'ar' 
                    ? 'سنقوم بتحضير طلبك وتعبئته بعناية'
                    : 'We will prepare and carefully package your order'
                  }
                </p>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <p className="text-gray-700">
                  {state.language === 'ar' 
                    ? 'سنرسل طلبك عبر شركة الشحن المناسبة'
                    : 'We will ship your order via the appropriate shipping company'
                  }
                </p>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <p className="text-gray-700">
                  {state.language === 'ar' 
                    ? 'ستصل إليك خلال 3-7 أيام عمل'
                    : 'You will receive it within 3-7 business days'
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {state.language === 'ar' ? 'هل تحتاج إلى مساعدة؟' : 'Need Help?'}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+201234567890"
                className="inline-flex items-center space-x-2 space-x-reverse bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone size={20} />
                <span>{state.language === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
              </a>
              
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 space-x-reverse border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={20} />
                <span>{state.language === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
              </a>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              {state.language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}