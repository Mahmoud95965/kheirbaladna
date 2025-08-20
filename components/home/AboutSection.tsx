'use client';

import { useApp } from '@/app/providers';

export function AboutSection() {
  const { state } = useApp();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {state.language === 'ar' ? 'من نحن؟' : 'Who We Are?'}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {state.language === 'ar' 
                  ? 'شركة "خير بلدنا وإنتاج ولادنا" هي شركة مصرية رائدة في مجال توفير أحدث أدوات الزراعة وتقنياتها المتطورة. تأسست الشركة برؤية واضحة لدعم المزارع المصري وتطوير القطاع الزراعي في مصر.'
                  : '"Kheir Baladna" company is a leading Egyptian company in providing the latest agricultural tools and advanced technologies. The company was founded with a clear vision to support Egyptian farmers and develop the agricultural sector in Egypt.'
                }
              </p>
              <p>
                {state.language === 'ar' 
                  ? 'نحن نؤمن بأن الزراعة هي عماد الاقتصاد المصري، ولذلك نسعى جاهدين لتوفير أفضل الحلول الزراعية المبتكرة والبذور المعتمدة عالياً لضمان أعلى مستويات الإنتاجية والجودة.'
                  : 'We believe that agriculture is the backbone of the Egyptian economy, so we strive to provide the best innovative agricultural solutions and highly certified seeds to ensure the highest levels of productivity and quality.'
                }
              </p>
              <p>
                {state.language === 'ar' 
                  ? 'فريقنا من الخبراء والمهندسين الزراعيين يعمل باستمرار على تقديم الدعم الفني والاستشاري لعملائنا لضمان تحقيق أفضل النتائج في مشاريعهم الزراعية.'
                  : 'Our team of experts and agricultural engineers continuously works to provide technical and consulting support to our clients to ensure achieving the best results in their agricultural projects.'
                }
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
              alt="Egyptian Agriculture"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
            <div className="text-gray-600">
              {state.language === 'ar' ? 'عميل راضٍ' : 'Happy Customers'}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
            <div className="text-gray-600">
              {state.language === 'ar' ? 'منتج متنوع' : 'Products'}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600">
              {state.language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">27</div>
            <div className="text-gray-600">
              {state.language === 'ar' ? 'محافظة نخدمها' : 'Served Governorates'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}