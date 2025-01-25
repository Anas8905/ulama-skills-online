'use client'; // Enables client-side interactivity

import { useState } from 'react';

export default function SubmitFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    idCard: '',
    phone: '',
    whatsapp: '',
    email: '',
    education: '',
    district: '',
    pp: '',
    na: '',
    uc: '',
    oath: '',
  });
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('براہ کرم انتظار کریں...');
    const res = await fetch('/api/send-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (result.success) setStatus('فارم کامیابی سے جمع کر دیا گیا!');
    else setStatus('فارم جمع کرنے میں ناکامی۔ دوبارہ کوشش کریں۔');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 text-right" dir='rtl'>
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">جمعیت اہلحدیث پاکستان</h1>
        <h2 className="text-xl text-center font-semibold mb-8">فارم برائے ممبرشپ</h2>
        <form className="space-y-6">
          {/* Name */}
          <div className='flex justify-between space-x-2 space-x-reverse'>
            <div className='flex-grow'>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                نام
              </label>
              <input type="text" id="name" placeholder="اپنا نام درج کریں" value={name} onChange={(e) => setName(e.target.value)} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>

            {/* Birth Date */}
            <div className='flex-grow'>
              <label htmlFor="birthDate" className="block text-gray-700 font-medium mb-2">
                تاریخ پیدائش
              </label>
              <input type="date" id="birthDate" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
          </div>

          {/* ID Card */}
          <div>
            <label htmlFor="idCard" className="block text-gray-700 font-medium mb-2">
              شناختی کارڈ نمبر
            </label>
            <input type="text" id="idCard" placeholder="شناختی کارڈ نمبر درج کریں" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
          </div>

          {/* Phone */}
          <div className='flex justify-between space-x-2 space-x-reverse'>
            <div className='flex-grow'>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                فون نمبر
              </label>
              <input type="tel" id="phone" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>

            {/* WhatsApp */}
            <div className='flex-grow'>
              <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">
                واٹس ایپ نمبر
              </label>
              <input type="tel" id="whatsapp" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              ای میل ایڈریس
            </label>
            <input type="email" id="email" placeholder="ای میل درج کریں" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
          </div>

          {/* Education */}
          <div className='flex justify-between space-x-2 space-x-reverse'>
            <div className='flex-grow'>
              <label htmlFor="education" className="block text-gray-700 font-medium mb-2">
                تعلیم
              </label>
              <input type="text" id="education" placeholder="تعلیم کی تفصیلات درج کریں" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>

            {/* District */}
            <div className='flex-grow'>
              <label htmlFor="district" className="block text-gray-700 font-medium mb-2">
                ضلع
              </label>
              <input type="text" id="district" placeholder="ضلع درج کریں" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
          </div>

          {/* PP */}
          <div className='flex justify-between space-x-2 space-x-reverse'>
            <div className='flex-grow'>
              <label htmlFor="pp" className="block text-gray-700 font-medium mb-2">
                پی پی
              </label>
              <input type="text" id="pp" placeholder="پی پی درج کریں" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>

            {/* NA */}
            <div className='flex-grow'>
              <label htmlFor="na" className="block text-gray-700 font-medium mb-2">
                این اے
              </label>
              <input type="text" id="na" placeholder="این اے درج کریں" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>

                      {/* UC */}
            <div className='flex-grow'>
              <label htmlFor="uc" className="block text-gray-700 font-medium mb-2">
                یوسی
              </label>
              <input type="text" id="uc" placeholder="یوسی درج کریں" className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
          </div>

          {/* Membership Oath */}
          <div className="text-center !mt-14">
            <h3 className="text-lg font-bold mb-4 text-red-500">حلف نامہ رکنیت</h3>
            <p className="text-gray-700 leading-relaxed">
              میں{' '}
              <span className="font-bold text-blue-600">
                {name || '۔۔۔۔۔۔۔'}
              </span>{' '}
              حلفاً بیان کرتا/کرتی ہوں کہ
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              میں جمعیت اہل حدیث پاکستان کی رکنیت اختیار کرتے ہوئے اللہ تعالی
              کو گواہ بنا کر یہ عہد کرتا/کرتی ہوں کہ شہید اسلام، مدفون جنت البقیع،
              مدینہ منورہ، علامہ احسان الہی ظہیر رحمہ اللہ کی جماعت کے منشور،
              دستور، اصول و ضوابط کا پابند اور کہ اتحاد امت حقیقی داعی رہوں گا۔
              پاکستان کو حقیقی معنوں میں پرامن، جمہوری اور اسلامی ریاست بنانے کے
              لیے کوشش کرتا رہوں گا۔
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              میں عہد کرتا ہوں کہ ممبرشپ ملنے کے بعد صوم و صلوۃ اور تلاوت قرآن کا
              پابند رہوں گا/رہوں گی۔
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
              فارم جمع کریں
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
