export default function CoursesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">نئے کورسز برائے علماء کرام</h1>
          <p className="text-gray-700 leading-relaxed">
            جمیعت اہل حدیث پاکستان کے صدر محترم علامہ ہشام الہی ظہیر صاحب کی زیر قیادت، علمائے کرام کے لیے جدید مہارتوں پر مبنی آن لائن ارننگ کورسز فراہم کیے جا رہے ہیں۔
            اس کا مقصد انہیں خودمختاری دینا اور بہتر معاشی مواقع فراہم کرنا ہے۔
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          دستیاب کورسز
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" dir="rtl">
          {[
            "گرافک ڈیزائننگ",
            "ویڈیو ایڈیٹنگ",
            "ڈیجیٹل مارکیٹنگ",
            "فری لانسنگ",
            "ویب ڈویلپمنٹ",
            "یوٹیوب ویڈیو کریئشن",
            "ویب سائٹ ڈیزائننگ",
            "ای کامرس",
            "کنٹینٹ رائٹنگ",
            "واٹس ایپ مارکیٹنگ",
            "سوشل میڈیا مینجمنٹ",
            "آن لائن تدریس",
            "ای میل مارکیٹنگ",
            "آن لائن اسٹورز سیٹ اپ کرنا",
            "پریزنٹیشن اور پوڈکاسٹ بنانا",
          ].map((course, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
              <p className="text-gray-800 font-medium">{course}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">ابھی شامل ہوں!</h2>
          <p className="text-lg mb-6">
            ہمارے کورسز جوائن کریں اور جدید دور کے تقاضوں سے ہم آہنگ ہو کر اپنی صلاحیتوں میں نکھار لائیں۔
          </p>
          <a href="course-form" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300 text-center inline-block">
            ابھی رجسٹر کریں
          </a>
        </div>
      </section>
    </div>
  );
}
