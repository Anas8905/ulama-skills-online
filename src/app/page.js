import Image from 'next/image';
export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">جمعیت اہل حدیث پاکستان علماء سکلز پروگرام</h1>
          <p className="text-lg mt-10">
            جمعیت اہل حدیث پاکستان ہمیشہ نفاذِ اسلام، دفاعِ اسلام، ختمِ نبوت، اور علماء و مساجد کے تحفظ میں قائدانہ کردار ادا کررہی ہے۔
          </p>
          <button className="mt-16 px-6 pb-3 pt-1 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
            مزید جانیے
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-800 text-2xl mt-4 pb-10">
              جماعت کا بنیادی مقصد دین کی سربلندی اور ان علمائے کرام کی فلاح و بہبود ہے جو اس عظیم مشن کا حصہ ہیں۔
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/allam-hisham.jpeg"
                alt="About Us"
                width={600} // Set desired width
                height={400} // Set desired height
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="text-lg text-gray-700 leading-9 text-right space-y-4">
              <p>
                قائد محترم علامہ ہشام الہی ظہیر صاحب کی زیرِ سرپرستی جمیعت اہل حدیث پاکستان نے علمائے کرام کی معاشی ترقی اور پیشہ ورانہ مہارتوں میں اضافہ کے لیے "علماء سکلز پروگرام" کا آغاز کیا ہے۔ اس پروگرام کے تحت علمائے کرام کو تدریسی مہارت، خطابت، امامت، اور آن لائن روزگار کے مواقع فراہم کرنے کے لیے تربیت دی جا رہی ہے۔ اس کے ساتھ ساتھ علمائے کرام کو جدید تقاضوں سے ہم آہنگ کرتے ہوئے مائنڈ پاور، نفسیاتی فہم، اور نبوی طریقہ تدریس کے اصولوں پر مبنی تربیت فراہم کی جا رہی ہے۔
              </p>
              <p>
              یہ تمام منصوبے جمعیت اہل حدیث پاکستان علماء سکلز پروگرام کے تحت کامیابی سے جاری ہیں۔ یہ اقدام علمائے کرام کی پیشہ ورانہ اور معاشی ترقی کے ذریعے دین اور دنیا دونوں میں کامیابی کو ممکن بنانے کے لیے ہے۔ اللہ تعالیٰ سے دعا ہے کہ اس کوشش کو قبول فرمائے اور اسے دین کی سربلندی اور امت کی خدمت کا ذریعہ بنائے۔
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 leading-9">
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white py-8 md:py-10">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
              علماء کرام کے لیے ان لائن ارننگ کورسز
            </h1>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-6 py-12 md:pt-16 text-right">
          <div className="">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              علماء کرام کے لیے آن لائن ارننگ کے جدید مواقع
            </h2>
            <p className="text-gray-700 leading-9 text-lg">
            علماء کرام کو آن لائن ارننگ کے حوالے سے کورسز، خود کفیل بنانے کے لیے ترتیب دیے گئے ہیں۔

              جمیعت اہل حدیث پاکستان علماء اسکرز آن لائن کے بانی، علامہ ہشام ظہیر کی سوچ اور فکر کے تحت علماء
              کرام کو ان کی معاشی پریشانیوں سے نکالنے اور ایک خود مختار زندگی گزارنے کے لیے ان لائن ارننگ کے
              مختلف کورسز فراہم کیے جا رہے ہیں۔
              علامہ صاحب کا مقصد یہ ہے کہ علماء کرام کو دین کی خدمت کے ساتھ ساتھ ایک بہتر معاشی حالت بھی حاصل
              ہو، تاکہ وہ اپنی زندگی کے تمام پہلوؤں میں خوشحال رہیں۔
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:pt-2">
          <div className="container mx-auto px-6 text-right">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              ان کورسز کے فوائد
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-9">
              ان کورسز کی مدد سے علماء کرام اپنی معاشی پریشانیوں کو حل کر سکتے ہیں اور دین کی خدمت کرنے کے لیے
              آزادانہ طور پر اپنے وقت کا انتظام کر سکیں گے۔
            </p>
            <ul className="mr-10 list-disc text-right text-gray-800 text-lg leading-9" style={{ direction: 'rtl' }}>
              {[
                'معاشی آزادی',
                'جدید مہارتیں',
                'دین کی خدمت میں آسانی',
              ].map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Courses Section */}
        <div className="container mx-auto px-6 py-12">
            <h3 className="text-3xl font-bold text-center text-blue-600 mb-16">دستیاب کورسز</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" dir="rtl">
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
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 text-center md:hover:shadow-xl md:hover:scale-105 md:transition-all"
                >
                  <div className="text-4xl mb-4">{course.icon}</div>
                  <p className="text-gray-800 font-medium">{course.name}</p>
                </div>
              ))}
            </div>
          </div>

        {/* Closing Section */}
        <section className="bg-blue-600 text-white py-16 text-center">
          <h3 className="text-3xl font-bold mb-4">آپ کی دعاؤں کو طلبگار</h3>
          <p className="text-lg leading-9">
            عبدالحنان طور (کوارڈینیٹر "جمعیت اہل حدیث پاکستان علماء سکلز پروگرام" ڈپٹی سیکرٹری اطلاعات
            جمعیت اہل حدیث پاکستان)
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200">
            مزید معلومات حاصل کریں
          </button>
        </section>
      </div>


      {/* Latest News Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="News 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Event 1</h3>
                <p className="text-gray-600 mt-2">
                  Join us for an upcoming webinar on how to integrate technology into Islamic
                  education.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="News 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Event 2</h3>
                <p className="text-gray-600 mt-2">
                  Learn about the impact of digital marketing on Islamic outreach initiatives.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://via.placeholder.com/300x200"
                alt="News 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Event 3</h3>
                <p className="text-gray-600 mt-2">
                  Discover the latest tools for creating educational content online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl">Web Development</h3>
                <p className="mt-2">
                  Learn how to build websites and share your knowledge online.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-teal-500 text-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl">Digital Marketing</h3>
                <p className="mt-2">
                  Reach a wider audience through social media and marketing strategies.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl">Content Creation</h3>
                <p className="mt-2">
                  Master the art of creating engaging and educational content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
