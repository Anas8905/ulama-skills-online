'use client'
import Image from 'next/image';
import React, { useState } from "react";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sections = [
    {
      title: "1-خطابت",
      content: [
        {
          heading: "پیغام کی مؤثر ترسیل:",
          description:
            "خطابت کے ذریعے قرآن و حدیث کے دلائل کو واضح اور پراثر انداز میں پہنچایا جا سکتا ہے۔",
        },
        {
          heading: "معاشرتی اصلاح:",
          description: "خطیب برائیوں کے خلاف آواز بلند کر کے مثبت تبدیلیاں لا سکتا ہے۔",
        },
        {
          heading: "عزت اور قیادت:",
          description: "اچھا خطیب معاشرے میں عزت پاتا ہے اور لوگوں کو رہنمائی فراہم کرتا ہے۔",
        },
        {
          heading: "لوگوں کو متحد کرنا:",
          description: "خطابت کے ذریعے اتحاد، محبت، اور بھائی چارہ پیدا کیا جا سکتا ہے۔",
        },
        {
          heading: "دعوت کی تیزی:",
          description:
            "ایک ماہر خطیب بیک وقت سینکڑوں لوگوں تک دین کا پیغام پہنچا سکتا ہے۔",
        },
      ],
    },
    {
      title: "2-امام مسجد",
      content: [
        {
          heading: "نمازیوں کی تعداد میں اضافہ:",
          description:
            "مؤثر قیادت اور اچھے اخلاق کے ذریعے نمازیوں کو مسجد سے  جوڑنا۔",
        },
        {
          heading: "ناظرہ قرآن کے طلبہ کی تعداد بڑھانا:",
          description: "جدید تدریسی اصولوں کے تحت بچوں کو قرآن کی تعلیم دینا۔",
        },
        {
          heading: "عوام کی اخلاقی تربیت:",
          description: "نبوی طریقے سے معاشرتی اصلاح اور اخلاقیات کا درس دینا۔",
        },
        {
          heading: "مسجد انتظامیہ سے ہم آہنگی:",
          description: "بہتر روابط اور معاملات میں حکمت عملی اپنانا۔",
        },
        {
          heading: "قیادت اور مثالی امامت:",
          description: "قرآن و حدیث کی روشنی میں مثالی امام بننے کی مکمل تربیت۔",
        },
      ],
    },
    {
      title: "3-مدرس کے طلبہ کو کتب پڑھانے کے لیے",
      content: [
        {
          heading: "دلچسپ تدریسی انداز:",
          description:
            "طلبہ کی دلچسپی بڑھانے کے لیے آسان اور عملی مثالوں کا استعمال۔",
        },
        {
          heading: "مشکل مضامین کو آسان بنانا:",
          description:
            "گرامر اور صرف جیسے مشکل موضوعات کو ایکٹیویٹیز اور کہانیوں کے ذریعے سمجھانا۔",
        },
        {
          heading: "مثبت رویہ اپنانا:",
          description: "طلبہ کے ساتھ شفقت اور حوصلہ افزائی کا ماحول پیدا کرنا۔",
        },
        {
          heading: "لیسن پلاننگ:",
          description:
            "ہر سبق کو مرحلہ وار اور سمجھنے میں آسان طریقے سے ترتیب دینا۔",
        },
        {
          heading: "عملی مشق اور سرگرمیاں:",
          description:
            "طلبہ کی توجہ برقرار رکھنے کے لیے تدریس کے دوران گروپ ایکٹیویٹیز کا انعقاد۔",
        },
      ],
    },
    {
      title: "4-شعبہ حفظ کے اساتذہ کے لیے",
      content: [
        {
          heading: "مثبت سوچ کی ترغیب:",
          description:
            "اساتذہ کو سکھایا جائے گا کہ طلبہ کو ہمیشہ مثبت سوچ رکھنے کی ترغیب دیں، تاکہ وہ قرآن کو آسانی سے یاد کر سکیں اور اعتماد پیدا ہو۔",
        },
        {
          heading: "ذہنی طاقت کا استعمال:",
          description:
            "بچوں کو یہ سکھانے کے طریقے بتائے جائیں گے کہ مائنڈ پاور کو کیسے استعمال کریں اور مشکل اسباق کو جلدی اور مؤثر طریقے سے یاد کریں۔",
        },
        {
          heading: "شفقت اور حوصلہ افزائی:",
          description:
            "اساتذہ کو تربیت دی جائے گی کہ بچوں کے ساتھ شفقت بھرا رویہ رکھیں تاکہ وہ ذہنی دباؤ کے بجائے شوق سے قرآن یاد کریں۔",
        },
        {
          heading: "نبوی اصولوں کی تربیت:",
          description:
            "نبی کریم ﷺ کے طریقوں کے ذریعے انہیں سیکھنے کے عمل میں شامل کرنے کا طریقہ سکھایا جائے گا۔",
        },
        {
          heading: "عملی مشقوں کا انعقاد:",
          description:
            "طلبہ کے لیے ایسی سرگرمیوں کا اہتمام کرنا سکھایا جائے گا، جن سے ان کا ذہن تروتازہ رہے اور وہ مؤثر طریقے سے سبق یاد کریں۔",
        },
      ],
    },
    {
      title: "5-مدارس کے ناظم اور مدیران کے لیے",
      content: [
        {
          heading: "اساتذہ اور طلبہ کی تربیت:",
          description:
            "نبوی طریقہ تدریس کے اصول سکھائے جائیں گے، جن کے ذریعے اساتذہ اور طلبہ کو مضبوط بنایا جا سکے۔",
        },
        {
          heading: "فنڈز اکٹھا کرنے کی مہارت:",
          description:
            "مدیران کو جدید دور کے تقاضوں کے مطابق فنڈ ریزنگ کے طریقے سکھائے جائیں گے۔",
        },
        {
          heading: "ادارے کی سوشل میڈیا پر پہچان:",
          description:
            "مدیران کو سوشل میڈیا پر مؤثر انداز میں ادارے کو متعارف کرانے کا طریقہ سکھایا جائے گا۔",
        },
        {
          heading: "دینی و دنیاوی تعلیم کا امتزاج:",
          description:
            "مدیران کو ایسے نصاب کی ترتیب سکھائی جائے گی، جس میں دینی اور دنیاوی تعلیم کا امتزاج ہو۔",
        },
      ],
    },
    {
      title: "6-بہترین داعی بننے کے لیے کورس",
      content: [
        {
          heading: "نبوی طریقہ تدریس کو اپنانا:",
          description:
            "نبی اکرم ﷺ کی تعلیمات کے مطابق دعوت دینے کی تربیت دی جائے گی۔",
        },
        {
          heading: "نفسیات اور مائنڈ سائنس کا استعمال:",
          description:
            "داعی کو مائنڈ سائنس اور نفسیات کی مدد سے لوگوں کے ذہنوں کو بہتر طور پر سمجھنے کی تربیت دی جائے گی۔",
        },
        {
          heading: "مثبت سوچ اور خود اعتمادی:",
          description:
            "داعی کی شخصیت میں مثبت سوچ اور خود اعتمادی کی اہمیت پر زور دیا جائے گا۔",
        },
        {
          heading: "دلائل اور قرآنی آیات کا استعمال:",
          description:
            "داعی کو قرآن و حدیث سے مضبوط دلائل فراہم کرنے کا طریقہ سکھایا جائے گا۔",
        },
      ],
    },
    {
      title: "7-مدارس اور مساجد کی انتظامیہ کے لیے تربیتی کورس",
      content: [
        {
          heading: "تعلیمی فضا کو بہتر بنانا:",
          description: "انتظامیہ کو تعلیمی ماحول بنانے کا طریقہ سکھایا جائے گا۔",
        },
        {
          heading: "نمازیوں کی تعداد بڑھانا:",
          description:
            "محافل ذکر اور نعت کا انعقاد کر کے نمازیوں کی تعداد بڑھانے کا طریقہ سکھایا جائے گا۔",
        },
        {
          heading: "ناظرہ تعلیم کا فروغ:",
          description: "ناظرہ کی تعلیم کو دلچسپ اور آسان بنانے کی تربیت دی جائے گی۔",
        },
        {
          heading: "فنڈز اکٹھا کرنے کے طریقے:",
          description: "انتظامیہ کو فنڈز اکٹھا کرنے کے جدید طریقے سکھائے جائیں گے۔",
        },
      ],
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sections.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-lg md:text-4xl font-bold mb-4">جمعیت اہل حدیث پاکستان علماء سکلز پروگرام</h1>
          <p className="text-lg mt-10">
            جمعیت اہل حدیث پاکستان ہمیشہ نفاذِ اسلام، دفاعِ اسلام، ختمِ نبوت، اور علماء و مساجد کے تحفظ میں قائدانہ کردار ادا کررہی ہے۔
          </p>
          <div className="!mt-14">
            <a href="/about" className="mt-16 px-6 pb-3 pt-1 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
              مزید جانیے
            </a>
          </div>

        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-100">
        <div className="container mx-auto px-4">
          {/* Heading Section */}
          <div className="text-center mb-12 animate-fadeIn">
            <p className="text-gray-800 text-2xl font-semibold mt-4 pb-10 leading-relaxed">
              جماعت کا بنیادی مقصد دین کی سربلندی اور ان علمائے کرام کی فلاح و بہبود
              ہے جو اس عظیم مشن کا حصہ ہیں۔
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="transform transition duration-1000 hover:scale-105 animate-slideInLeft">
              <Image
                src="/images/allam-hisham.jpeg"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="text-lg text-gray-700 leading-9 text-right space-y-6 animate-slideInRight">
              <p>
                قائد محترم علامہ ہشام الہی ظہیر صاحب کی زیرِ سرپرستی جمیعت اہل حدیث
                پاکستان نے علمائے کرام کی معاشی ترقی اور پیشہ ورانہ مہارتوں میں اضافہ کے
                لیے "علماء سکلز پروگرام" کا آغاز کیا ہے۔ اس پروگرام کے تحت علمائے کرام
                کو تدریسی مہارت، خطابت، امامت، اور آن لائن روزگار کے مواقع فراہم کرنے
                کے لیے تربیت دی جا رہی ہے۔ اس کے ساتھ ساتھ علمائے کرام کو جدید تقاضوں
                سے ہم آہنگ کرتے ہوئے مائنڈ پاور، نفسیاتی فہم، اور نبوی طریقہ تدریس کے
                اصولوں پر مبنی تربیت فراہم کی جا رہی ہے۔
              </p>
              <p>
                یہ تمام منصوبے جمعیت اہل حدیث پاکستان علماء سکلز پروگرام کے تحت کامیابی
                سے جاری ہیں۔ یہ اقدام علمائے کرام کی پیشہ ورانہ اور معاشی ترقی کے ذریعے
                دین اور دنیا دونوں میں کامیابی کو ممکن بنانے کے لیے ہے۔ اللہ تعالیٰ سے
                دعا ہے کہ اس کوشش کو قبول فرمائے اور اسے دین کی سربلندی اور امت کی
                خدمت کا ذریعہ بنائے۔
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
              علماء کرام کے لیے آن لائن ارننگ کورسز
            </h1>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-6 py-12 md:pt-16 text-right">
          <div className="">
            <p className="text-gray-700 leading-9 text-lg">
              جمیعت اہل حدیث پاکستان علماء اسکرز آن لائن کے بانی، علامہ ہشام ظہیر کی سوچ اور فکر کے تحت علماء کرام کو ان
              کی معاشی پریشانیوں سے نکالنے اور ایک خود مختار زندگی گزارنے کے لیے ان لائن ارننگ کے مختلف کورسز فراہم کیے جا رہے ہیں۔ علامہ صاحب کا مقصد
              یہ ہے کہ علماء کرام کو دین کی خدمت کے ساتھ ساتھ ایک بہتر معاشی حالت بھی حاصل ہو، تاکہ وہ اپنی زندگی کے تمام پہلوؤں میں خوشحال رہیں۔
              ہمیں یہ یقین ہے کہ ان کورسز کی مدد سے علماء
              کرام اپنی معاشی پریشانیوں کو حل کر سکتے ہیں اور دین کی خدمت کرنے کے لیے آزادانہ طور پر اپنے وقت کا انتظام کر سکیں گے۔
            </p>
            <h2 className="text-2xl font-bold text-blue-600 mb-6 mt-12">
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
        <div className="container mx-auto px-6 py-12 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white">
          <h3 className="text-3xl font-bold text-center mb-16">ہمارے کورسز</h3>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Course Card 1 */}
              <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-md max-w-sm mx-auto transform hover:scale-105 transition duration-300">
                <img src="/images/quran.jpg" alt="Course 1" className="w-full h-48 object-cover rounded-t-lg" />
                <h3 className="font-bold text-xl mt-4">سیکھیں قرآن آن لائن</h3>
                <p className="my-4 text-sm leading-8">
                  والدین کی توقعات پوری کرنے کے لیے نبوی طریقہ تدریس کا استعمال اور بچوں کی روحانی، اخلاقی اور تعلیمی ضروریات کی تکمیل۔
                </p>
                <div className="mt-4">
                  <a href='/quran-learn' className='px-4 pt-0 pb-3  bg-blue-600 text-white rounded hover:bg-blue-700 transition'>مزید پڑھیں</a>
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-md max-w-sm mx-auto transform hover:scale-105 transition duration-300">
                <img src="/images/teach.jpeg" alt="Course 2" className="w-full h-48 rounded-t-lg" />
                <h3 className="font-bold text-xl mt-4"> آن لائن قرآن ٹیچنگ ٹریننگ</h3>
                <p className="my-4 text-sm leading-8">
                  علماء کرام کے لیے تجوید اور ناظرہ تدریس کی جدید تربیت، نبوی تدریسی اصولوں اور مائنڈ سائنس کی مہارتوں پر مبنی کورس۔
                </p>
                <div className="mt-4">
                  <a href='/teacher-learning' className='px-4 pt-0 pb-3 bg-teal-500 text-white rounded hover:bg-teal-600 transition'>مزید پڑھیں</a>
                </div>
              </div>

              {/* Course Card 3 */}
              <div className="text-center bg-white text-gray-800 p-6 rounded-lg shadow-md max-w-sm mx-auto transform hover:scale-105 transition duration-300">
                <img src="/images/digital-courses.png" alt="Course 3" className="w-full h-48 rounded-t-lg" />
                <h3 className="font-bold text-xl mt-4">آن لائن ارننگ کورسز</h3>
                <p className="my-4 text-sm leading-8">
                  علماء کرام کو خود کفیل بنانے کے لیے آن لائن ارننگ کی تربیت اور معاشی خود مختاری کے لیے آن لائن کام کرنے کی مہارتیں۔
                </p>
                <div className="mt-4">
                  <a href='/courses' className='px-4 pt-0 pb-3 bg-green-600 text-white rounded hover:bg-green-700 transition'>مزید پڑھیں</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto py-12 bg-gray-50 leading-9 text-right" dir='rtl'>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Sections */}
            <div className="space-y-10">
              {/* علماء کرام کی حوصلہ افزائی */}
              <div className="pt-8">
                <p>
                  علامہ ہشام الہیٰ ظہیر، صدر جمعیت اہل حدیث پاکستان، دین اسلام کی اشاعت اور دعوت 
                  و تبلیغ کے حوالے سے ایک اہم شخصیت ہیں۔ انہوں نے ہمیشہ امت مسلمہ کو اس بات کی طرف متوجہ کیا کہ دین اسلام کی تبلیغ کے لیے نہ صرف خلوص بلکہ مہارت اور جدید تقاضوں سے ہم آہنگی بھی ضروری ہے۔
                  ان کی قیادت میں علماء سکلز آن لائن" پروگرام کا آغاز اسی مقصد کے تحت کیا جا رہا ہے کہ علماء کرام کو نہ صرف نبوی طریقت پر تربیت دی
                  جائے بلکہ جدید مائنڈ سائنس، پاور آف سب کانشیس، اور مثبت سوچ کے اصولوں کے امتزاج سے ان کی صلاحیتوں کو ایک نئی بلندی پر پہنچایا جا سکے۔
                  مدارس میں عمومی طور پر مختلف شعبہ جات میں تخصص کروایا جاتا ہے، جو اکثر محدود موضوعات جیسے گرامر، معاملات پر مبنی ہوتا ہے۔ لیکن
                  "علماء سکلز آن لائن" پروگرام ان تمام روایتی حدود سے آگے بڑھتے ہوئے علماء کرام کو سات اہم شعبوں میں ماہر اور تجربہ کار بنانے کا ہدف رکھتا ہے
                </p>
              </div>

              <div className="relative pt-8 px-4 md:px-16 container bg-white shadow-md rounded-2xl p-6 mx-auto h-[800px]">
                {/* Left Arrow */}
                <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all" aria-label="Previous Section">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                  </svg>
                </button>

                {/* Main Content */}
                <div className="text-center">
                  {/* Section Title */}
                  <h3 className="text-xl md:text-3xl font-bold text-blue-600 mb-12">
                    {sections[currentIndex].title}
                  </h3>

                  {/* Subsections */}
                  <ul className="space-y-6 text-gray-800 bg-gray-50 text-right p-6">
                    {sections[currentIndex].content.map((item, index) => (
                      <li key={index} className="border-b pb-4">
                        <span className="font-semibold">{item.heading}</span>
                        <p className="mt-2 text-gray-600">{item.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Arrow */}
                <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all" aria-label="Next Section">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </div>

              <div>
                <p>
                  اس تربیتی کورس سے مدارس اور مساجد کی انتظامیہ کو ایک ایسا موثر اور کامیاب ماڈل فراہم کیا جائے گا جس سے نہ صرف تعلیمی معیار میں بہتری آئے گی بلکہ مساجد کی انتظامیہ بھی اپنے وسائل کو
                  بہتر انداز میں استعمال کر سکے گی۔ اس کورس کی مدد سے وہ سیکھیں گے کہ کس طرح طلبہ کی تربیت اور اخلاقی نشوونما کی جائے، فنڈز اکٹھا کیے جائیں،
                  اور مسجد و مدرسہ کے ماحول کو مزید فعال اور مقبول بنایا جائے۔ یہ تربیت انہیں ایک بہتر منتظم، استاد اور داعی بننے میں مدد فراہم کرے گی۔
                  اس کورس کا مقصد ان تمام منتظمین اور اساتذہ کو ایک نئی روشنی دکھانا ہے جس سے وہ اپنی خدمات کو مزید بہتر اور مؤثر بنا کر دین و دنیا کی ترقی میں اہم کردار ادا کر سکیں۔
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mt-12 bg-blue-200 flex flex-col md:flex-row items-center md:items-start p-10 space-y-10 md:space-y-0 md:space-x-10">
              {/* Image Section */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 w-36 h-36 md:w-48 md:h-48 rounded-full bg-blue-100 blur-2xl opacity-30"></div>
                <img
                  src="/images/ab-toor.jpg"
                  alt="Coordinator"
                  className="relative rounded-full w-36 h-36 md:w-48 md:h-48 object-cover border-4 border-white shadow-lg !ml-4"
                />
              </div>

              {/* Content Section */}
              <div className="flex-grow text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  یہ پروگرام جمیعت اہل حدیث پاکستان کے زیرِ اہتمام علماء کرام اور طلبہ کی تربیت، حوصلہ افزائی، اور علمی ترقی کے لیے ایک اہم سنگِ میل ثابت ہوگا۔ یہ اقدامات امت مسلمہ کی علمی، اخلاقی، اور سماجی ترقی کے لیے ایک روشن مستقبل کی بنیاد رکھیں گے۔
                </p>
                <div className="mt-8 bg-gray-100 rounded-lg p-4">
                  <p className="font-medium text-gray-800 text-lg">
                    آپ کی دعاؤں کو طلبگار، عبدالحنان طور
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    کوارڈینیٹر "جمعیت اہل حدیث پاکستان علماء سکلز پروگرام" <br />
                    ڈپٹی سیکرٹری اطلاعات جمعیت اہل حدیث پاکستان
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
