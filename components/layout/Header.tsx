'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useApp } from '@/app/providers';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useApp();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => dispatch({ type: 'TOGGLE_LANGUAGE' });

  const navigation = [
    { name: 'الرئيسية', href: '/', en: 'Home' },
    { name: 'المنتجات', href: '/products', en: 'Products' },
    { name: 'من نحن', href: '/about', en: 'About' },
    { name: 'المدونة', href: '/blog', en: 'Blog' },
    { name: 'تواصل معنا', href: '/contact', en: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 space-x-reverse">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">خ</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-green-700">خير بلدنا</h1>
              <p className="text-sm text-gray-600">وإنتاج ولادنا</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {state.language === 'ar' ? item.name : item.en}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors"
              aria-label="Toggle Language"
            >
              <Globe size={20} />
              <span className="sr-only">تغيير اللغة</span>
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ShoppingCart size={20} />
              {state.cart.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.cart.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-green-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-green-600 font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  {state.language === 'ar' ? item.name : item.en}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}