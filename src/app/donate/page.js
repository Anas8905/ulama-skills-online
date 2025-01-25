export default function DonationPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-10 text-right">
      <div className="container mx-auto px-4 max-w-3xl bg-white shadow rounded-lg p-6">
        {/* Header */}
        <h1 className="text-2xl font-extrabold text-center text-blue-700 mb-4">
          علمی و دینی ترقی کے لیے تعاون کی اپیل
        </h1>
        <p className="text-base text-center text-gray-600 mb-6 leading-9">
          تمام علماء کرام اور عوام الناس سے گزارش ہے کہ جمیعت اہل حدیث پاکستان کے زیرِ انتظام علماء سکلز پروگرام کو کامیابی کے ساتھ جاری رکھنے کے لیے آپ کی مالی معاونت ضروری ہے۔
        </p>

        {/* Expenses Section */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6 leading-9">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">:ادارے کے اخراجات</h2>
          <p className="text-gray-700">
            یہ تمام پروگرام چلانے کے لیے ادارے کے بہت سے اخراجات ہیں۔ لہٰذا آپ سے درخواست ہے کہ اس مشن میں ہمارا ساتھ دیں۔
            ہر فرد کم از کم 100 روپے سے لے کر 500 روپے تک لازمی تعاون کرے۔
            اپنے دوستوں، عزیزوں، اور احباب کو بھی اس کارِ خیر میں حصہ ڈالنے کی ترغیب دیں۔
          </p>
        </div>

        {/* Bank Details */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-left">
          <h2 className="text-xl font-bold text-blue-700 text-center mb-6">
            Payment Information
          </h2>
          <ul className="space-y-6">
            {/* Bank Account */}
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
              <img
                src="/meezan-bank.svg"
                alt="Meezan Bank"
                className="h-12 w-12 mr-4"
              />
              <div>
                <p className="text-lg font-semibold text-gray-700">Meezan Bank</p>
                <p className="text-sm text-gray-500">Abdul Hanan (Asaan Account) - Hujra Shah Muqeem Branch</p>
                <p className="text-sm font-medium text-gray-700">Account: 26720108079530</p>
              </div>
            </li>

            {/* JazzCash */}
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
              <img
                src="/jazz-cash.svg"
                alt="JazzCash"
                className="h-12 w-12 mr-4"
              />
              <div>
                <p className="text-lg font-semibold text-gray-700">JazzCash</p>
                <p className="text-sm font-medium text-gray-700">03008842669 Abdul Hanan</p>
              </div>
            </li>

            {/* Easypaisa */}
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-600">
              <img
                src="/easypaisa.svg"
                alt="Easypaisa"
                className="h-12 w-12 mr-4"
              />
              <div>
                <p className="text-lg font-semibold text-gray-700">Easypaisa</p>
                <p className="text-sm font-medium text-gray-700">034147099088 Abdul Hanan</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Important Note */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-blue-700 mb-2">:اہم نوٹ</h4>
          <p className="text-sm text-gray-600">
            یہ معاونت صرف علماء سکلز آن لائن پروگرام کے لیے ہے۔ جمیعت اہل حدیث کے عمومی فنڈز کے لیے درج ذیل نمبر پر رابتہ کریں۔
          </p>
          <p className="mt-2">حافظ سجاد اسلم      03024705802
          </p>
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-center text-xs text-gray-500">
          اللہ تعالیٰ آپ کے تعاون کو قبول فرمائے اور آپ کو اس دنیا و آخرت میں بہترین جزا عطا فرمائے۔
        </div>
      </div>
    </div>
  );
}
