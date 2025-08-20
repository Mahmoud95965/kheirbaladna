'use client';

import { useApp } from '@/app/providers';
import { Users, Award, Truck, Shield } from 'lucide-react';

export default function AboutPage() {
  const { state } = useApp();

  const values = [
    {
      icon: Award,
      title: state.language === 'ar' ? 'الجودة' : 'Quality',
      titleEn: 'Quality',
      description: state.language === 'ar' 
        ? 'نلتزم بتوفير أعلى مستويات الجودة في جميع منتجاتنا'
        : 'We are committed to providing the highest quality standards in all our products'
    },
    {
      icon: Users,
      title: state.language === 'ar' ? 'خدمة العملاء' : 'Customer Service',
      titleEn: 'Customer Service',
      description: state.language === 'ar' 
        ? 'نضع عملائنا في المقدمة ونسعى لتجاوز توقعاتهم'
        : 'We put our customers first and strive to exceed their expectations'
    },
    {
      icon: Truck,
      title: state.language === 'ar' ? 'التوصيل السريع' : 'Fast Delivery',
      titleEn: 'Fast Delivery',
      description: state.language === 'ar' 
        ? 'نوفر خدمة توصيل سريعة وآمنة لجميع أنحاء مصر'
        : 'We provide fast and secure delivery service throughout Egypt'
    },
    {
      icon: Shield,
      title: state.language === 'ar' ? 'الضمان' : 'Warranty',
      titleEn: 'Warranty',
      description: state.language === 'ar' 
        ? 'نقدم ضمان شامل على جميع منتجاتنا'
        : 'We provide comprehensive warranty on all our products'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-800 to-green-600">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg")'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {state.language === 'ar' ? 'من نحن؟' : 'About Us'}
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            {state.language === 'ar' 
              ? 'قصة نجاح مصرية في خدمة القطاع الزراعي'
              : 'An Egyptian success story serving the agricultural sector'
            }
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {state.language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {state.language === 'ar' 
                    ? 'بدأت "خير بلدنا وإنتاج ولادنا" كحلم بسيط من مجموعة من المهندسين الزراعيين المصريين الذين آمنوا بقدرة الأرض المصرية على العطاء والإنتاج.'
                    : '"Kheir Baladna" started as a simple dream of a group of Egyptian agricultural engineers who believed in the ability of Egyptian land to give and produce.'
                  }
                </p>
                <p>
                  {state.language === 'ar' 
                    ? 'في عام 2014، تأسست الشركة برؤية واضحة: توفير أحدث أدوات الزراعة والتقنيات المتطورة للمزارع المصري بأسعار مناسبة وجودة عالمية.'
                    : 'In 2014, the company was founded with a clear vision: to provide the latest agricultural tools and advanced technologies to Egyptian farmers at reasonable prices and world-class quality.'
                  }
                </p>
                <p>
                  {state.language === 'ar' 
                    ? 'اليوم، نفخر بأننا نخدم أكثر من 5000 عميل في جميع أنحاء مصر، ونساهم في تطوير القطاع الزراعي المصري من خلال توفير أفضل الحلول والأدوات.'
                    : 'Today, we are proud to serve more than 5,000 customers throughout Egypt, and we contribute to the development of the Egyptian agricultural sector by providing the best solutions and tools.'
                  }
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2680270/pexels-photo-2680270.jpeg"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {state.language === 'ar' ? 'رسالتنا' : 'Our Mission'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {state.language === 'ar' 
                  ? 'نسعى لتمكين المزارع المصري من خلال توفير أحدث أدوات الزراعة والبذور المعتمدة عالية الجودة، مع تقديم خدمة عملاء متميزة ودعم فني شامل.'
                  : 'We strive to empower Egyptian farmers by providing the latest agricultural tools and high-quality certified seeds, while delivering exceptional customer service and comprehensive technical support.'
                }
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                {state.language === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {state.language === 'ar' 
                  ? 'أن نكون الشركة الرائدة في مصر والشرق الأوسط في توفير حلول الزراعة الحديثة، ونساهم في تحقيق الأمن الغذائي وازدهار القطاع الزراعي.'
                  : 'To be the leading company in Egypt and the Middle East in providing modern agricultural solutions, and contribute to achieving food security and prosperity of the agricultural sector.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {state.language === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-xl text-gray-600">
              {state.language === 'ar' 
                ? 'المبادئ التي نلتزم بها في كل ما نقوم به'
                : 'The principles we adhere to in everything we do'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {state.language === 'ar' ? 'فريق العمل' : 'Our Team'}
            </h2>
            <p className="text-xl text-gray-600">
              {state.language === 'ar' 
                ? 'خبراء متخصصون في خدمتك'
                : 'Specialized experts at your service'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/${4772874 + index}/pexels-photo-${4772874 + index}.jpeg`}
                  alt="Team Member"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {state.language === 'ar' ? `د. أحمد محمد ${index + 1}` : `Dr. Ahmed Mohamed ${index + 1}`}
                  </h3>
                  <p className="text-green-600 font-medium mb-2">
                    {state.language === 'ar' ? 'مهندس زراعي' : 'Agricultural Engineer'}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {state.language === 'ar' 
                      ? 'خبرة تزيد عن 15 عام في مجال الزراعة الحديثة'
                      : 'Over 15 years of experience in modern agriculture'
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              {state.language === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-green-100">
                {state.language === 'ar' ? 'عميل راضٍ' : 'Happy Customers'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-green-100">
                {state.language === 'ar' ? 'منتج متنوع' : 'Diverse Products'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10</div>
              <div className="text-green-100">
                {state.language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">27</div>
              <div className="text-green-100">
                {state.language === 'ar' ? 'محافظة نخدمها' : 'Served Governorates'}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}