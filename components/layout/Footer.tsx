'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useApp } from '@/app/providers';

export function Footer() {
  const { state } = useApp();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">خ</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-green-400">خير بلدنا وإنتاج ولادنا</h2>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {state.language === 'ar' 
                ? 'شركة مصرية رائدة في توفير أحدث أدوات الزراعة وتقنياتها، نعمل على دعم المزارع المصري بأفضل الحلول الزراعية المبتكرة.'
                : 'A leading Egyptian company in providing the latest agricultural tools and technologies, working to support Egyptian farmers with the best innovative agricultural solutions.'
              }
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              {state.language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  {state.language === 'ar' ? 'المنتجات' : 'Products'}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  {state.language === 'ar' ? 'من نحن' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  {state.language === 'ar' ? 'المدونة' : 'Blog'}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {state.language === 'ar' ? 'تواصل معنا' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">
              {state.language === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 space-x-reverse">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-300">+20 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3 space-x-reverse">
                <Mail size={16} className="text-green-400" />
                <span className="text-gray-300">info@kheirbaladna.com</span>
              </li>
              <li className="flex items-start space-x-3 space-x-reverse">
                <MapPin size={16} className="text-green-400 mt-1" />
                <span className="text-gray-300">
                  {state.language === 'ar' 
                    ? 'القاهرة، مصر - شارع الزراعة، الدقي'
                    : 'Cairo, Egypt - Agriculture St., Dokki'
                  }
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {state.language === 'ar' 
              ? '© 2024 خير بلدنا وإنتاج ولادنا. جميع الحقوق محفوظة.'
              : '© 2024 Kheir Baladna. All rights reserved.'
            }
          </p>
        </div>
      </div>
    </footer>
  );
}