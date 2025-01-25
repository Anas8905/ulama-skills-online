export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen pt-12 leading-9">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto px-6 text-gray-800">
          <div className="text-center">
            <h1 className="text-lg md:text-2xl font-bold text-blue-600">
              جمعیت اہل حدیث پاکستان علماء سکلز پروگرام
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 text-right">
          <div className="p-4">
          <p className="text-lg mt-4 text-gray-700 leading-9">
              الحمد للہ، جمعیت اہل حدیث پاکستان ہمیشہ نفاذِ اسلام، دفاعِ اسلام، ختمِ نبوت، اور علماء و مساجد کے تحفظ میں قائدانہ کردار ادا کررہی ہے۔
            </p>
          </div>
          <div className="p-4">
            <p className="text-lg text-gray-800 leading-9">
              جماعت کا بنیادی مقصد دین کی سربلندی اور ان علمائے کرام کی فلاح و بہبود ہے جو اس عظیم مشن کا حصہ ہیں۔ قائد محترم علامہ ہشام الہی ظہیر صاحب کی زیرِ سرپرستی جمیعت اہل حدیث پاکستان نے علمائے کرام کی معاشی ترقی اور پیشہ ورانہ مہارتوں میں اضافہ کے لیے "علماء سکلز پروگرام" کا آغاز کیا ہے۔
            </p>
          </div>
          <div className="p-4">
            <p className="text-lg text-gray-800 leading-9">
              اس پروگرام کے تحت علمائے کرام کو تدریسی مہارت، خطابت، امامت، اور آن لائن روزگار کے مواقع فراہم کرنے کے لیے تربیت دی جا رہی ہے۔ اس کے ساتھ ساتھ علمائے کرام کو جدید تقاضوں سے ہم آہنگ کرتے ہوئے مائنڈ پاور، نفسیاتی فہم، اور نبوی طریقہ تدریس کے اصولوں پر مبنی تربیت فراہم کی جا رہی ہے۔
            </p>
          </div>
          <div className="p-4">
            <p className="text-lg text-gray-800 leading-9">
            اللہ تعالیٰ سے دعا ہے کہ اس کوشش کو قبول فرمائے اور اسے دین کی سربلندی اور امت کی خدمت کا ذریعہ بنائے۔
            یہ تمام منصوبے جمعیت اہل حدیث پاکستان علماء سکلز پروگرام کے تحت کامیابی سے جاری ہیں۔ یہ اقدام علمائے کرام کی پیشہ ورانہ اور معاشی ترقی کے ذریعے دین اور دنیا دونوں میں کامیابی کو ممکن بنانے کے لیے ہے۔
            </p>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mt-2 font-medium">
              عبدالحنان طور (کوارڈینیٹر علماء سکلز پروگرام)
              <br />
              ڈپٹی سیکرٹری اطلاعات جمعیت اہل حدیث پاکستان
            </p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-blue-600 mt-16 py-10 text-white text-center rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">ہماری کوشش کا حصہ بنیں</h2>
          <p className="text-lg font-medium mb-8">
            آپ بھی اس مشن کا حصہ بن کر دین کی خدمت اور علماء کرام کی فلاح و بہبود میں کردار ادا کریں۔
          </p>
            <a href="submit" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition-all">
              ہمارے ساتھ شامل ہوں
            </a>
        </div>
      </div>
    </div>
  );
}
