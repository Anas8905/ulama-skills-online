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

          {/* Contact Form Section */}
          <div className="mt-8 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">ذاتی معلومات</h3>
            <form className="space-y-4">
              {/* Name */}
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div className="w-full sm:w-1/2">
                  <label htmlFor="fullName" className="text-lg text-gray-700">نام</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="آپ کا نام"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label htmlFor="guardianName" className="text-lg text-gray-700">والد/سرپرست کا نام</label>
                  <input
                    type="text"
                    id="guardianName"
                    name="guardianName"
                    required
                    className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                    placeholder="والد/سرپرست کا نام"
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dob" className="text-lg text-gray-700">تاریخ پیدائش</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                />
              </div>

              {/* National ID */}
              <div>
                <label htmlFor="idCard" className="text-lg text-gray-700">شناختی کارڈ نمبر</label>
                <input
                  type="text"
                  id="idCard"
                  name="idCard"
                  required
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="شناختی کارڈ نمبر"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="text-lg text-gray-700">مکمل پتہ</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="مکمل پتہ"
                />
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="contactNumber" className="text-lg text-gray-700">رابطہ نمبر</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  required
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="رابطہ نمبر"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-lg text-gray-700">ای میل (اگر موجود ہو یا سرپرست کا)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="ای میل ایڈریس"
                />
              </div>

              {/* Educational Qualification */}
              <div>
                <label htmlFor="education" className="text-lg text-gray-700">تعلیمی قابلیت</label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="تعلیمی قابلیت"
                />
              </div>

              {/* Current Institution */}
              <div>
                <label htmlFor="institution" className="text-lg text-gray-700">موجودہ تعلیمی ادارہ</label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="موجودہ تعلیمی ادارہ"
                />
              </div>

              {/* Quran Memorization */}
              <div className="flex space-x-4 items-center">
                <div>
                  <label htmlFor="quranComplete" className="text-lg text-gray-700">قرآن کی ناظرہ تعلیم مکمل کی ہے؟</label>
                </div>
                <div className="flex space-x-4">
                  <div>
                    <label htmlFor="quranCompleteYes" className="inline-flex items-center">
                      <input
                        type="radio"
                        id="quranCompleteYes"
                        name="quranComplete"
                        value="yes"
                        className="mr-2"
                      />
                      ہاں
                    </label>
                  </div>
                  <div>
                    <label htmlFor="quranCompleteNo" className="inline-flex items-center">
                      <input
                        type="radio"
                        id="quranCompleteNo"
                        name="quranComplete"
                        value="no"
                        className="mr-2"
                      />
                      نہیں
                    </label>
                  </div>
                </div>
              </div>

              {/* Tajweed Course Participation */}
              <div className="flex space-x-4 items-center">
                <div>
                  <label htmlFor="tajweedCourse" className="text-lg text-gray-700">پہلے کسی تجوید کورس میں حصہ لیا؟</label>
                </div>
                <div className="flex space-x-4">
                  <div>
                    <label htmlFor="tajweedCourseYes" className="inline-flex items-center">
                      <input
                        type="radio"
                        id="tajweedCourseYes"
                        name="tajweedCourse"
                        value="yes"
                        className="mr-2"
                      />
                      ہاں
                    </label>
                  </div>
                  <div>
                    <label htmlFor="tajweedCourseNo" className="inline-flex items-center">
                      <input
                        type="radio"
                        id="tajweedCourseNo"
                        name="tajweedCourse"
                        value="no"
                        className="mr-2"
                      />
                      نہیں
                    </label>
                  </div>
                </div>
              </div>

              {/* Time Availability */}
              <div>
                <label htmlFor="studyTime" className="text-lg text-gray-700">روزانہ کتنا وقت تعلیم کے لیے دے سکتے ہیں؟</label>
                <input
                  type="text"
                  id="studyTime"
                  name="studyTime"
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  placeholder="مثلاً 1 گھنٹہ"
                />
              </div>

              {/* Interests */}
              <div>
                <label htmlFor="interests" className="text-lg text-gray-700">دیگر دینی و دنیاوی دلچسپیاں</label>
                <textarea
                  id="interests"
                  name="interests"
                  className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  rows="4"
                  placeholder="دینی و دنیاوی دلچسپیاں"
                />
              </div>

              {/* Agreement */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="h-5 w-5"
                  required
                />
                <label htmlFor="terms" className="text-gray-700 text-lg">
                  میں نے تمام شرائط و ضوابط پڑھ لیے ہیں اور قبول کرتا ہوں۔
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                  درخواست جمع کریں
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>



    </>
  );
}
