'use client';

import Link from 'next/link';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { useApp } from '@/app/providers';

export default function BlogPage() {
  const { state } = useApp();

  const blogPosts = [
    {
      id: 1,
      title: state.language === 'ar' ? 'أفضل تقنيات الري الحديثة للمحاصيل' : 'Best Modern Irrigation Techniques for Crops',
      excerpt: state.language === 'ar' 
        ? 'تعرف على أحدث تقنيات الري التي توفر المياه وتحسن من جودة المحصول'
        : 'Learn about the latest irrigation techniques that save water and improve crop quality',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
      date: '2024-01-15',
      author: state.language === 'ar' ? 'د. أحمد محمد' : 'Dr. Ahmed Mohamed',
      category: state.language === 'ar' ? 'تقنيات الري' : 'Irrigation Techniques'
    },
    {
      id: 2,
      title: state.language === 'ar' ? 'كيفية اختيار البذور المناسبة لمناخ مصر' : 'How to Choose the Right Seeds for Egypt\'s Climate',
      excerpt: state.language === 'ar' 
        ? 'دليل شامل لاختيار أفضل أنواع البذور المناسبة للمناخ المصري'
        : 'A comprehensive guide to choosing the best seed varieties suitable for the Egyptian climate',
      image: 'https://images.pexels.com/photos/1327837/pexels-photo-1327837.jpeg',
      date: '2024-01-10',
      author: state.language === 'ar' ? 'م. فاطمة علي' : 'Eng. Fatima Ali',
      category: state.language === 'ar' ? 'البذور' : 'Seeds'
    },
    {
      id: 3,
      title: state.language === 'ar' ? 'أهمية المكافحة البيولوجية في الزراعة' : 'The Importance of Biological Control in Agriculture',
      excerpt: state.language === 'ar' 
        ? 'استخدام الأعداء الطبيعية للآفات كبديل آمن للمبيدات الكيماوية'
        : 'Using natural enemies of pests as a safe alternative to chemical pesticides',
      image: 'https://images.pexels.com/photos/4917821/pexels-photo-4917821.jpeg',
      date: '2024-01-05',
      author: state.language === 'ar' ? 'د. محمد حسن' : 'Dr. Mohamed Hassan',
      category: state.language === 'ar' ? 'مكافحة الآفات' : 'Pest Control'
    },
    {
      id: 4,
      title: state.language === 'ar' ? 'التسميد الذكي: كيفية تحسين خصوبة التربة' : 'Smart Fertilization: How to Improve Soil Fertility',
      excerpt: state.language === 'ar' 
        ? 'طرق علمية لتحليل التربة واستخدام الأسمدة بكفاءة عالية'
        : 'Scientific methods for soil analysis and efficient use of fertilizers',
      image: 'https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg',
      date: '2023-12-28',
      author: state.language === 'ar' ? 'م. سارة أحمد' : 'Eng. Sarah Ahmed',
      category: state.language === 'ar' ? 'الأسمدة' : 'Fertilizers'
    },
    {
      id: 5,
      title: state.language === 'ar' ? 'الزراعة المحمية: مستقبل الإنتاج الزراعي' : 'Protected Agriculture: The Future of Agricultural Production',
      excerpt: state.language === 'ar' 
        ? 'فوائد الزراعة في البيوت المحمية وكيفية زيادة الإنتاجية'
        : 'Benefits of greenhouse farming and how to increase productivity',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      date: '2023-12-20',
      author: state.language === 'ar' ? 'د. خالد عبدالله' : 'Dr. Khaled Abdullah',
      category: state.language === 'ar' ? 'الزراعة المحمية' : 'Protected Agriculture'
    },
    {
      id: 6,
      title: state.language === 'ar' ? 'تقنيات الحصاد الحديثة وتخزين المحاصيل' : 'Modern Harvesting Techniques and Crop Storage',
      excerpt: state.language === 'ar' 
        ? 'أفضل الطرق للحصاد والتخزين للحفاظ على جودة المحصول'
        : 'Best methods for harvesting and storage to maintain crop quality',
      image: 'https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg',
      date: '2023-12-15',
      author: state.language === 'ar' ? 'م. عمر مصطفى' : 'Eng. Omar Mostafa',
      category: state.language === 'ar' ? 'الحصاد والتخزين' : 'Harvesting & Storage'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {state.language === 'ar' ? 'مدونة النصائح الزراعية' : 'Agricultural Tips Blog'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {state.language === 'ar' 
              ? 'اكتشف أحدث النصائح والتقنيات الزراعية من خبرائنا المتخصصين'
              : 'Discover the latest agricultural tips and techniques from our specialized experts'
            }
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="flex items-center space-x-1 space-x-reverse">
                    <Calendar size={14} />
                    <span>{new Date(blogPosts[0].date).toLocaleDateString('ar-EG')}</span>
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                    <User size={14} />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center space-x-1 space-x-reverse text-green-600 hover:text-green-700 font-medium"
                  >
                    <span>{state.language === 'ar' ? 'اقرأ المزيد' : 'Read More'}</span>
                    {state.language === 'ar' ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500 mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
                  <span className="flex items-center space-x-1 space-x-reverse">
                    <Calendar size={12} />
                    <span>{new Date(post.date).toLocaleDateString('ar-EG')}</span>
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse text-xs text-gray-500">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    {state.language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2 space-x-reverse">
            <button className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              {state.language === 'ar' ? 'السابق' : 'Previous'}
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
            <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
            <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              {state.language === 'ar' ? 'التالي' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}