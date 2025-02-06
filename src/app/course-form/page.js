"use client";
import { useState } from "react";

export default function DonationPage() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    age: "",
    gender: "",
    contact: "",
    address: "",
    education: "",
    studentCourse: "",
    trainerCourse: "",
  });

  const [message, setMessage] = useState("");
  const [courseType, setCourseType] = useState("student");
  const [loading, setLoading] = useState(false);

  const courses = [
    "خطابت",
    "امامت",
    "شعبہ کتب مدرس",
    "شعبہ حفظ مدرس",
    "مدارس ناظم یا مدیر",
    "بہترین داعی اللہ کے لیے",
    "مدارس و مساجد انتظامیہ",
    "آن لائن ارننگ سیکھنے والے کورسز",
    "آن لائن ارننگ سکھانے والے ٹرینرز",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        setMessage("✅ فارم کامیابی سے جمع کر دیا گیا!");
        setFormData({
          name: "",
          fatherName: "",
          age: "",
          gender: "",
          contact: "",
          address: "",
          education: "",
          studentCourse: "",
          trainerCourse: "",
        });
      } else {
        setMessage("❌ فارم جمع کرنے میں خرابی ہوئی، دوبارہ کوشش کریں۔");
      }
    } catch(error) {
      setMessage("❌ فارم جمع کرنے میں خرابی ہوئی، دوبارہ کوشش کریں۔");
      console.error(error.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-right leading-9" dir="rtl">
      <div className="container mx-auto bg-white rounded-lg p-6">
        
        {/* Courses Section */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
          دستیاب کورسز
        </h2>
        <ul className="space-y-3 text-lg text-gray-800 font-medium bg-gray-50 p-4 rounded-md">
          {courses.map((course, index) => (
            <li key={index} className="flex space-x-2 space-x-reverse items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4 text-blue-800 ml-2 -mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
              {course}
            </li>
          ))}
        </ul>

        {/* Form Section */}
        <div className="bg-white rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            فارم برائے کورسز
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name & Father's Name */}
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" name="name" placeholder="نام" value={formData.name} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-right focus:outline-blue-500 shadow-sm" />
              <input type="text" name="fatherName" placeholder="والد کا نام" value={formData.fatherName} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-right focus:outline-blue-500 shadow-sm" />
            </div>

            {/* Age & Gender */}
            <div className="flex flex-col md:flex-row gap-4">
              <input type="number" name="age" placeholder="عمر" value={formData.age} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-right focus:outline-blue-500 shadow-sm leading-9" />
              <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-right focus:outline-blue-500 shadow-sm">
                <option value="">جنس منتخب کریں</option>
                <option value="Male">مرد</option>
                <option value="Female">عورت</option>
              </select>
            </div>

            {/* Contact, Address, Education */}
            <input type="text" name="contact" placeholder="رابطہ نمبر" value={formData.contact} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-right focus:outline-blue-500 shadow-sm" />
            <input type="text" name="address" placeholder="پتہ" value={formData.address} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-right focus:outline-blue-500 shadow-sm" />
            <input type="text" name="education" placeholder="تعلیم" value={formData.education} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-right focus:outline-blue-500 shadow-sm" />

            {/* Course Selection Type */}
            <div className="flex flex-col text-right mb-4">
              <label className="text-gray-700 font-medium mb-2">کورس کی قسم منتخب کریں:</label>
              <div className="flex space-x-4 justify-start">
                <label className="flex items-center">
                  <input type="radio" name="courseType" value="student" checked={courseType === "student"} onChange={() => setCourseType("student")} className="ml-2" />
                  بطور طالب علم
                </label>
                <label className="flex items-center">
                  <input type="radio" name="courseType" value="trainer" checked={courseType === "trainer"} onChange={() => setCourseType("trainer")} className="ml-2" />
                  بطور ٹرینر
                </label>
              </div>
            </div>

            {/* Conditionally Show Course Selection */}
            {courseType === "student" ? (
              <select name="studentCourse" value={formData.studentCourse} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-right focus:outline-blue-500 shadow-sm leading-9">
                <option value="">بطور طالب علم کورس منتخب کریں</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            ) : (
              <select name="trainerCourse" value={formData.trainerCourse} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-right focus:outline-blue-500 shadow-sm leading-9">
                <option value="">بطور ٹرینر کورس منتخب کریں</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            )}

            {/* Submit Button */}
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-md">
              {loading ? 'برائے مہربانی انتظار کریں...' : 'فارم جمع کریں'}
            </button>

            {/* Message */}
            {message && (
              <p className="text-center text-green-600 font-semibold mt-2">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
