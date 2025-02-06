import Head from 'next/head';

export default function Home() {
  
  return (
    <>
      <div className="min-h-screen flex flex-col items-center py-8 px-4 text-right container mx-auto" dir="rtl">
        {/* Main Container */}
        <div className="w-full p-6 space-y-10">
          {/* Header Section */}
          <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
            قرآن، تجوید تعلیمی تربیت کا مثالی روحانی و اخلاقی طلبہ کے لیے کورس
          </h1>

          {/* Program Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">پروگرام کی خصوصیات</h2>
            <p className="text-lg text-gray-700 mb-6">
              جمعیت اہل حدیث پاکستان کے صدر محترم علامہ ہشام ظہیر صاحب کی رہنمائی اور سرپرستی میں، جو والدین کی توقعات اور بچوں کی روحانی، اخلاقی، اور تعلیمی ضروریات کو نبوی طریقہ تدریس اور مائنڈ سائنس کے اصولوں کے تحت پورا کرتا ہے۔ اس پروگرام کو جدید طرزِ تدریس کے مطابق مرتب کیا گیا ہے، تاکہ بچوں کی دینی تعلیم کے ساتھ ان کی شخصیت سازی اور عملی زندگی کی تیاری ممکن ہو۔
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">ہم آن لائن ناظرہ قرآن اور تجوید القرآن ایسے پڑھاتے ہیں:</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>صحیح تلاوت کی بنیاد: طلبہ کو الفاظ کو صحیح مخارج کے ساتھ پڑھنا سکھایا جاتا ہے۔</li>
              <li>اللہ کی رضا کا حصول: تجوید کے اصولوں کے ساتھ قرآن پڑھنے کی تربیت دی جاتی ہے تاکہ اللہ کی خوشنودی حاصل ہو۔</li>
              <li>قرآن کا حسن برقرار رکھنا: طلبہ کو خوبصورت اور پراثر تلاوت کی مہارت دی جاتی ہے۔</li>
              <li>معانی کی درستگی: غلطیوں سے بچنے کے لیے الفاظ کی صحیح ادائیگی پر توجہ دی جاتی ہے۔</li>
              <li>سنت نبوی پر عمل: نبی کریم ﷺ کی سنت کے مطابق تجوید کے ساتھ قرآن پڑھنا سکھایا جاتا ہے۔</li>
              <li>ثواب میں اضافہ: طلبہ کو تجوید کے ساتھ قرآن پڑھنے پر زیادہ اجر و ثواب کی اہمیت بتائی جاتی ہے۔</li>
              <li>تعلیمات قرآن کی حفاظت: طلبہ کو قرآن کے الفاظ اور ادائیگی کی درستگی کی مشق کرائی جاتی ہے۔</li>
              <li>آسان حفظ: تجوید کے ساتھ ناظرہ قرآن پڑھانے سے طلبہ کے لیے حفظ قرآن آسان بنایا جاتا ہے۔</li>
            </ul>
          </div>

          {/* Understanding the Quran */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">فہم قرآن کی مہارت</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>بچوں کو قرآن مجید کے منتخب حصوں کا ترجمہ اور تشریح سکھائی جاتی ہے۔</li>
              <li>دینی شعور میں اضافہ: قرآن کو سمجھ کر دین کی گہری معرفت حاصل ہوتی ہے۔</li>
              <li>عملی رہنمائی: زندگی کے ہر شعبے میں قرآن رہنمائی فراہم کرتا ہے۔</li>
              <li>اخلاقی تربیت: طلبہ کے کردار میں اعلیٰ اخلاق پیدا ہوتے ہیں۔</li>
              <li>دعوت کی صلاحیت: طلبہ دین کی تبلیغ بہتر انداز میں کر سکتے ہیں۔</li>
              <li>علمی ترقی: تحقیقی اور علمی صلاحیتوں میں اضافہ ہوتا ہے۔</li>
              <li>نبوی طریقہ تدریس: تعلیم کے دوران شفقت، محبت، اور مثبت رویے کو اپنایا جاتا ہے۔</li>
            </ul>
          </div>

          {/* Mind Science & Education */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">مائنڈ سائنس کے اصولوں پر مبنی تربیت</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>بچوں کی یادداشت اور سیکھنے کی صلاحیت کو بہتر بنانے کے لیے جدید تکنیکیں استعمال کی جاتی ہیں۔</li>
              <li>تعلیمی کارکردگی میں بہتری کے لیے خود اعتمادی پیدا کی جاتی ہے۔</li>
              <li>ہر طالب علم کو اس کے ذہنی اور جذباتی تقاضوں کے مطابق تربیت فراہم کی جاتی ہے۔</li>
            </ul>
          </div>

          {/* Course Details */}
          <div className="mt-6 space-y-4">
            <h3 className="text-2xl font-semibold text-blue-600">کورس کی خصوصیات</h3>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
              <li>تجوید القرآن: تجوید کے اصولوں کے مطابق قرآن مجید کی تعلیم۔</li>
              <li>نبوی تربیت: سیرت النبی ﷺ کی روشنی میں اخلاقی و روحانی تربیت۔</li>
              <li>جدید مائنڈ سائنس کے اصول: ذہنی نشوونما کے جدید اصولوں کی روشنی میں تعلیم۔</li>
              <li>جامع اسلامی تعلیمات: دینِ اسلام کے تمام اہم پہلوؤں پر تربیت۔</li>
            </ul>
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
      </div>
    </>
  );
}
