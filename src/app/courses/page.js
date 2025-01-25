export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-400 text-white py-16">
        <div className="container mx-auto text-center">
          <p className="text-lg leading-9">
            جمیعت اہل حدیث پاکستان علماء اسکرز آن لائن کے بانی، علامہ ہشام ظہیر کی سوچ اور فکر کے تحت علماء کرام کو ان کی معاشی پریشانیوں سے نکالنے اور ایک خود مختار زندگی گزارنے کے لیے ان لائن ارننگ کے مختلف کورسز فراہم کیے جا رہے ہیں۔
            علامہ صاحب کا مقصد یہ ہے کہ علماء کرام کو دین کی خدمت کے ساتھ ساتھ ایک بہتر معاشی حالت بھی حاصل ہو، تاکہ وہ اپنی زندگی کے تمام پہلوؤں میں خوشحال رہیں۔
            ہمیں یہ یقین ہے کہ ان کورسز کی مدد سے علماء کرام اپنی معاشی پریشانیوں کو حل کر سکتے ہیں اور دین کی خدمت کرنے کے لیے آزادانہ طور پر اپنے وقت کا انتظام کر سکیں گے۔
          </p>
          <p>
            علماء کرام کی تلاش جو تجربہ کار ٹرینرزہے آن لائن ارننگ سکھا سکیں
            جمعیت اہل حدیث پاکستان کے صدر محترم علامہ ہشام الہی ظہیر صاحب کی زیر قیادت، علمائے کرام کے لیے ایک منفرد تربیتی پروگرام ترتیب دیا جا رہا ہے، جس کا مقصد انہیں آن لائن ارننگ کے حوالے سے جدید مہارتیں سکھانا اور روزگار کے نئے مواقع فراہم کرنا ہے۔
            اس مقصد کے لیے ہم ایسے ماہر اور تجربہ کار ٹرینرز کی تلاش میں ہیں جو علمائے کرام کو آن لائن ارننگ کے مختلف شعبوں میں تربیت فراہم کر سکیں۔ آپ کن مہارتوں میں ٹریننگ دے سکتے ہیں؟ ہم آپ کی تجاویز اور تعاون کے منتظر ہیں تاکہ یہ پروگرام زیادہ کامیاب اور مؤثر بنایا جا سکے۔
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12 container mx-auto" dir="rtl">
        {[
          { name: 'گرافک ڈیزائننگ', icon: '🎨' },
          { name: 'ویڈیو ایڈیٹنگ', icon: '🎥' },
          { name: 'ڈیجیٹل مارکیٹنگ', icon: '📈' },
          { name: 'فری لانسنگ', icon: '💼' },
          { name: 'ویب ڈویلپمنٹ', icon: '💻' },
          { name: 'یوٹیوب ویڈیو کریئشن', icon: '🎬' },
          { name: 'ویب سائٹ ڈیزائننگ', icon: '🖌️' },
          { name: 'ای کامرس', icon: '🛒' },
          { name: 'کنٹینٹ رائٹنگ', icon: '✍️' },
          { name: 'واٹس ایپ مارکیٹنگ', icon: '📱' },
          { name: 'سوشل میڈیا مینجمنٹ', icon: '📲' },
          { name: 'آن لائن تدریس', icon: '🎓' },
          { name: 'ای میل مارکیٹنگ', icon: '✉️' },
          { name: 'آن لائن اسٹورز سیٹ اپ کرنا', icon: '🛍️' },
          { name: 'پریزنٹیشن اور پوڈکاسٹ بنانا', icon: '🎤' },
        ].map((course, index) => (
          <div key={index} className="flex items-center justify-center space-x-4 space-x-reverse bg-white shadow-md rounded-lg p-4 text-center">
            <div className="text-4xl mb-4">{course.icon}</div>
            <p className="text-gray-800 font-medium">{course.name}</p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg">
            Join our courses today and start your journey toward modern and traditional excellence.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
}
