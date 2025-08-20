'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { useApp } from '@/app/providers';

export default function ContactPage() {
  const { state } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the message to your API
    console.log('Message submitted:', formData);
    alert(state.language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {state.language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {state.language === 'ar' 
              ? 'نحن هنا لمساعدتك. تواصل معنا في أي وقت وسنقوم بالرد عليك في أقرب وقت ممكن'
              : "We're here to help you. Contact us anytime and we'll respond as soon as possible"
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {state.language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {state.language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    </div>
                    <div className="text-gray-600">+20 123 456 7890</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {state.language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    </div>
                    <div className="text-gray-600">info@kheirbaladna.com</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse p-4 bg-white rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {state.language === 'ar' ? 'العنوان' : 'Address'}
                    </div>
                    <div className="text-gray-600">
                      {state.language === 'ar' 
                        ? 'شارع الزراعة، الدقي، الجيزة، مصر'
                        : 'Agriculture Street, Dokki, Giza, Egypt'
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {state.language === 'ar' ? 'تواصل سريع عبر واتساب' : 'Quick Contact via WhatsApp'}
              </h3>
              <p className="text-gray-600 mb-4">
                {state.language === 'ar' 
                  ? 'للحصول على رد سريع، يمكنك التواصل معنا مباشرة عبر واتساب'
                  : 'For a quick response, you can contact us directly via WhatsApp'
                }
              </p>
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 space-x-reverse bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={20} />
                <span>{state.language === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</span>
              </a>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0639635988473!2d31.20093081512263!3d30.03841428188393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Egypt!5e0!3m2!1sen!2seg!4v1635789012345!5m2!1sen!2seg"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {state.language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {state.language === 'ar' ? 'الاسم' : 'Name'} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={state.language === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={state.language === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={state.language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {state.language === 'ar' ? 'الرسالة' : 'Message'} *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder={state.language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Send size={20} />
                  <span>{state.language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}