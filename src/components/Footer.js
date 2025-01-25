export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 text-right">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">رابطہ کریں</h3>
            <ul dir="rtl">
              <li className="mb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2 -mb-1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span>
                  <a href="mailto:info@example.com" className="hover:text-blue-400">
                    info@example.com
                  </a>
                </span>
              </li>
              <li className="mb-2 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2 -mb-1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>
                  <p>04235190848</p>
                </span>
              </li>
              <li className="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-2 -mb-1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
                <span>
                  <p>0300-8790478/ 0301-1389890/ 0326-1845690</p>
                </span>
              </li>
              <li className="text-gray-400 mt-4">
                <p>
                  قرآن و سنت اسلامک سنٹر، -B 121 ، بلاک، UET ہاؤسنگ سوسائٹی، لاہور
                </p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl mb-4 !font-sans">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-blue-400 tracking-widest">
                  ہوم پیج
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">
                  تعارف
                </a>
              </li>
              <li>
                <a href="/courses" className="hover:text-blue-400">
                  کورسز
                </a>
              </li>
              <li>
                <a href="/submit" className="hover:text-blue-400">
                  شامل ہوں
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col space-y-3 text-center">
            <h3 className="text-xl font-bold mb-4">آج ہی شامل ہوں</h3>
            <p className="mb-4 text-white text-sm">
              ایک ایسی کمیونٹی کا حصہ بنیں جو جدید مہارتوں کے ساتھ طلباء کو بااختیار بنانے کے لیے وقف ہے۔
            </p>
            <div className="flex justify-center space-x-2">
              <a href="/submit" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                شمولیت کریں
              </a>
              <a href="/donate" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700">
                تعاون کریں
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 قرآن و سنت اسلامک سنٹر۔ جملہ حقوق محفوظ ہیں۔
          </p>
        </div>
      </div>
    </footer>
  );
}
