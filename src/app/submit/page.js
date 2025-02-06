'use client';

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
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('')

  const handleChange = (e) => {
    if(e.target.name == 'name') {
      setName(e.target.value)
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('✅ فارم کامیابی سے جمع کر دیا گیا!');
        setFormData({
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
        });
      } else {
        throw new Error(data.message || 'فارم جمع کرنے میں خرابی ہوئی، دوبارہ کوشش کریں۔');
      }
    } catch (error) {
      setMessage("❌ فارم جمع کرنے میں خرابی ہوئی، دوبارہ کوشش کریں۔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 text-right" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">جمعیت اہلحدیث پاکستان</h1>
        <h2 className="text-xl text-center font-semibold mb-8">فارم برائے ممبرشپ</h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name and Birth Date */}
          <div className="flex justify-between space-x-2 space-x-reverse">
            <div className="flex-grow">
              <label className="block text-gray-700 font-medium mb-2">نام</label>
              <input type="text" name="name" placeholder="اپنا نام درج کریں" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 font-medium mb-2">تاریخ پیدائش</label>
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
          </div>

          {/* ID Card */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">شناختی کارڈ نمبر</label>
            <input type="text" name="idCard" placeholder="شناختی کارڈ نمبر درج کریں" value={formData.idCard} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
          </div>

          {/* Phone and WhatsApp */}
          <div className="flex justify-between space-x-2 space-x-reverse">
            <div className="flex-grow">
              <label className="block text-gray-700 font-medium mb-2">فون نمبر</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 font-medium mb-2">واٹس ایپ نمبر</label>
              <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">ای میل ایڈریس</label>
            <input type="email" name="email" placeholder="ای میل درج کریں" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
          </div>

          {/* Education and District */}
          <div className="flex justify-between space-x-2 space-x-reverse">
            <div className="flex-grow">
              <label className="block text-gray-700 font-medium mb-2">تعلیم</label>
              <input type="text" name="education" placeholder="تعلیم کی تفصیلات درج کریں" value={formData.education} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 font-medium mb-2">ضلع</label>
              <input type="text" name="district" placeholder="ضلع درج کریں" value={formData.district} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
          </div>

          {/* Political Info */}
          <div className="flex justify-between space-x-2 space-x-reverse">
            <div className="flex-grow">
              <label className="block text-gray-700 font-medium mb-2">پی پی</label>
              <input type="text" name="pp" placeholder="پی پی درج کریں" value={formData.pp} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 font-medium mb-2">این اے</label>
              <input type="text" name="na" placeholder="این اے درج کریں" value={formData.na} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
            </div>
            <div className="flex-grow">
              <label className="block text-gray-700 font-medium mb-2">یوسی</label>
              <input type="text" name="uc" placeholder="یوسی درج کریں" value={formData.uc} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg p-2 mt-1" />
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
            <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700" disabled={loading}>
              {loading ? 'برائے مہربانی انتظار کریں...' : 'فارم جمع کریں'}
            </button>
          </div>

          {message && (
          <div className={`text-center font-semibold p-3 mb-4 ${message.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </div>
        )}
        </form>
      </div>
    </div>
  );
}
