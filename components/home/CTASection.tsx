'use client';

import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { useApp } from '@/app/providers';

export function CTASection() {
  const { state } = useApp();

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {state.language === 'ar' 
            ? 'هل أنت مستعد لتطوير مشروعك الزراعي؟'
            : 'Ready to Develop Your Agricultural Project?'
          }
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
          {state.language === 'ar' 
            ? 'تواصل معنا اليوم واحصل على استشارة مجانية من خبرائنا لاختيار أفضل الأدوات والبذور المناسبة لمشروعك'
            : 'Contact us today and get a free consultation from our experts to choose the best tools and seeds suitable for your project'
          }
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
          >
            <Phone size={20} />
            {state.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </Link>
          
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
          >
            <MessageCircle size={20} />
            {state.language === 'ar' ? 'واتساب' : 'WhatsApp'}
          </a>
        </div>
      </div>
    </section>
  );
}