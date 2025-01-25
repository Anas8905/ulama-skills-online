'use client'
import { useState } from "react";

const TeacherLearning = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    email: "",
    phone: "",
    cnic: "",
    education: "",
    teachingExperience: "",
    teachingMode: "",
    currentProfession: "",
    onlineTeachingExperience: "",
    platformsUsed: "",
    toolsChallenges: "",
    trainingPrograms: "",
    spiritualTechniques: "",
    modernTechniquesInterest: "",
    idealTeacherTraits: "",
    paymentMethod: "",
    paymentDate: "",
    termsAgreement: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    // Handle form submission (API call or other logic)
  };

  return (
    <div className="min-h-screen pt-4 pb-12 container mx-auto">
      <div className="w-full p-6 text-right leading-9">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          آن لائن قرآن ٹیچنگ ٹریننگ
        </h1>
        <p className="text-lg text-gray-700 mb-4 leading-9">
          جمعیت اہل کے صدر محترم علامہ ہشام الہی ظہیر صاحب کی رہنمائی اور خصوصی ہدایات کے تحت،
          آن لائن تدریس کے ذریعے علماء کرام کو اپنے روزگار کو بہتر بنانے اور دین کی خدمت کو عام
          کرنے کے لیے ایک جامع تربیتی پروگرام ترتیب دیا گیا ہے۔ جس کا مقصد علماء کرام کو جدید
          تدریسی مہارتوں سے آراستہ کرنا ہے۔
        </p>
        <p className="text-lg text-gray-700 mb-4 leading-9">
          آن لائن تدریس ایک جدید میدان ہے، جہاں استاد کا کردار نہ صرف علم پہنچانے والے کا ہوتا ہے
          بلکہ وہ طلبہ کو ان کی روحانی، ذہنی، اور اخلاقی تربیت کے لیے بھی رہنمائی فراہم کرتا ہے۔
          اس پروگرام کے تحت، اساتذہ کو درج ذیل خصوصیات پر پورا اترنے کی ضرورت ہوگی تاکہ وہ جمعیت
          اہل حدیث کے معیار پر پورے اتر سکیں۔
        </p>
      </div>


      <main className="py-12 px-4 sm:px-6 lg:px-8 text-right" dir='rtl'>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            آن لائن تدریسی اساتذہ کی خصوصیات
          </h1>

          <section className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">1. قرآن و سنت کا گہرا علم</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>ناظرہ قرآن اور تجوید کے اصولوں میں مہارت</li>
              <li>فہم القرآن اور اس کے عملی پیغام کو سمجھنے کی صلاحیت</li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">2. جدید آن لائن تدریسی مہارتیں</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>آن لائن تدریسی پلیٹ فارمز جیسے Zoom، Google Classroom، اور Microsoft Teams کا استعمال</li>
              <li>مواد کی تیاری اور طلبہ کو متحرک رکھنے کے لیے ڈیجیٹل تکنیکوں کا استعمال</li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">3. نبوی طریقہ تدریس</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>تعلیم و تربیت میں نرمی، صبر، اور شفقت کا رویہ اپنانا</li>
              <li>طلبہ کی مختلف ذہنی استعداد اور دلچسپی کو مدنظر رکھتے ہوئے تدریسی حکمت عملی اپنانا</li>
              <li>اخلاقیات، وقت کی پابندی، اور طلبہ کی حوصلہ افزائی کرنا</li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">4. مائنڈ سائنس کے اصولوں کی مہارت</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>طلبہ کی نفسیات کو سمجھ کر ان کے ساتھ موثر انداز میں بات چیت کرنا</li>
              <li>حافظے کو بہتر بنانے کے جدید اصول اور طلبہ کی توجہ مرکوز رکھنے کی تکنیک</li>
              <li>طلبہ کو مثبت رویہ اپنانے اور خود اعتمادی پیدا کرنے میں مدد فراہم کرنا</li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">5. روحانی اور اخلاقی</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>طلبہ کی کردار سازی اور عملی زندگی میں دین کو شامل کرنے کی رہنمائی</li>
              <li>قرآن کی روشنی میں دین کی خدمت کے لیے طلبہ کو تیار کرنا</li>
              <li>طلبہ کو قرآن کے ذریعے روحانی سکون اور اخلاقی تربیت فراہم کرنا</li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">6. مواصلات کی مہارت</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>طلبہ اور والدین کے ساتھ مؤثر انداز میں رابطہ قائم کرنا</li>
              <li>تدریس کے دوران طلبہ کے سوالات کو خوش دلی سے سننا اور ان کا جواب دینا</li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">7. لچکدار رویہ اور صبر</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>تدریس کے دوران پیش آنے والی چیلنجز کو صبر اور حکمت کے ساتھ حل کرنا</li>
              <li>طلبہ کے مختلف سیکھنے کے انداز کو سمجھ کر تدریسی طریقے اپنانا</li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">8. دین کے ساتھ دنیاوی پیشہ ورانہ مہارت</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>دین کی تعلیم کو ایک مؤثر اور مستقل ذریعہ معاش میں تبدیل کرنا</li>
              <li>عالمی سطح پر طلبہ کو تعلیم فراہم کرنے کے لیے جدید ذرائع کا استعمال</li>
            </ul>
          </section>

          <section className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">9. مسلسل سیکھنے کا جذبہ</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>جدید تدریسی طریقوں اور ٹیکنالوجی کے استعمال میں مسلسل بہتری کی خواہش</li>
              <li>اپنے علم اور تدریسی انداز کو بہتر بنانے کے لیے نئے کورسز اور تربیتی پروگرامز میں شرکت کرنا</li>
            </ul>
          </section>

          <section className="p-6">
            <p className="text-gray-700">
              یہ خصوصیات اس بات کو یقینی بناتی ہیں کہ آن لائن تدریس کرنے والے اساتذہ طلبہ کو مؤثر اور معیاری تعلیم فراہم کر سکیں۔
              یہ پروگرام نہ صرف دین کی خدمت کا ذریعہ بنے گا بلکہ علماء کرام کے لیے ایک باعزت اور مستحکم ذریعہ معاش فراہم کرے گا۔
              علامہ ہشام ظہیر صاحب تربیتی پروگرام جمعیت اہل حدیث کے مشن کا ایک اہم حصہ ہے۔
            </p>
          </section>
        </div>
      </main>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 text-right" dir="rtl">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          آن لائن تدریسی پروگرام میں شمولیت کے لیے فارم
        </h1>
        <p className="text-gray-700 text-center mb-10">
          جمعیت اہل حدیث پاکستان کی جانب سے آن لائن تدریس کے پروگرام میں حصہ
          لینے کے لیے تمام معلومات فراہم کریں۔
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              ذاتی معلومات:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="نام"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                placeholder="والد کا نام"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                placeholder="تاریخ پیدائش"
                required
                className="w-full p-3 border rounded-lg"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-lg"
              >
                <option value="">جنس منتخب کریں</option>
                <option value="male">مرد</option>
                <option value="female">عورت</option>
              </select>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="رہائشی پتہ"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ای میل ایڈریس"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="موبائل نمبر"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                name="cnic"
                value={formData.cnic}
                onChange={handleInputChange}
                placeholder="قومی شناختی کارڈ نمبر"
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Educational Background */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              تعلیمی اور تدریسی پس منظر
            </h2>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              placeholder="اسلامی تعلیم کہاں سے حاصل کی؟"
              required
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              name="teachingExperience"
              value={formData.teachingExperience}
              onChange={handleInputChange}
              placeholder="تدریس کا تجربہ (اداروں کے نام لکھیں)"
              required
              className="w-full p-3 border rounded-lg mt-4"
            />
          </div>

          {/* Online Teaching Experience */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              جدید تدریسی مہارتیں اور تجربہ
            </h2>
            <div className="space-y-4">
              <textarea
                name="onlineTeachingExperience"
                value={formData.onlineTeachingExperience}
                onChange={handleInputChange}
                placeholder="آن لائن تدریس کا تجربہ"
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                name="platformsUsed"
                value={formData.platformsUsed}
                onChange={handleInputChange}
                placeholder="استعمال شدہ پلیٹ فارمز (Zoom، Google Classroom وغیرہ)"
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                name="toolsChallenges"
                value={formData.toolsChallenges}
                onChange={handleInputChange}
                placeholder="کیا ان پلیٹ فارمز کے استعمال میں مشکلات پیش آئیں؟"
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Registration Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              رجسٹریشن کی معلومات
            </h2>
            <div className="space-y-4">
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-lg"
              >
                <option value="">ادائیگی کا طریقہ منتخب کریں</option>
                <option value="bank">بینک</option>
                <option value="easypaisa">ایزی پیسہ</option>
                <option value="jazzcash">جاز کیش</option>
              </select>
              <input
                type="date"
                name="paymentDate"
                value={formData.paymentDate}
                onChange={handleInputChange}
                required
                className="w-full p-3 border rounded-lg"
              />
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start">
            <input
              type="checkbox"
              name="termsAgreement"
              checked={formData.termsAgreement}
              onChange={handleInputChange}
              required
              className="mt-1"
            />
            <label className="ml-2 text-gray-700">
              کیا آپ تمام شرائط و ضوابط سے اتفاق کرتے ہیں؟
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
            >
              فارم جمع کروائیں
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherLearning;
