import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-green-700 mb-4">تسجيل حساب جديد</h1>
      <p className="text-gray-600 mb-8">قم بإنشاء حساب للمتابعة.</p>

      <div className="rounded-lg border border-gray-200 p-6 bg-white">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
            <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="محمد أحمد" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
            <input type="email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="name@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">كلمة المرور</label>
            <input type="password" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">إنشاء حساب</button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          لديك حساب بالفعل؟{' '}
          <Link href="/login" className="text-green-700 hover:underline">تسجيل الدخول</Link>
        </p>
      </div>
    </div>
  );
}