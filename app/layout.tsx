import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'خير بلدنا وإنتاج ولادنا - أدوات زراعية مصرية',
  description: 'شركة مصرية رائدة في توفير أدوات الزراعة الحديثة - زارعات، رشاشات كهربائية، مضخات ري، مقصات تقليم وبذور معتمدة',
  keywords: 'أدوات زراعية، زراعة مصرية، زارعات، رشاشات كهربائية، مضخات ري، بذور معتمدة',
  openGraph: {
    title: 'خير بلدنا وإنتاج ولادنا - أدوات زراعية مصرية',
    description: 'شركة مصرية رائدة في توفير أدوات الزراعة الحديثة',
    type: 'website',
    locale: 'ar_EG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}