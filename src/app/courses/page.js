export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-lg">
            Empower yourself with essential skills for both traditional and modern education.
          </p>
        </div>
      </section>

      {/* Courses Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Explore Our Courses</h2>
            <p className="text-gray-600 mt-4">
              Whether you're looking to enhance your understanding of Tajweed or master digital tools like ChatGPT, our courses are designed to help Islamic scholars thrive in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Tajweed */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Tajweed"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Tajweed</h3>
              <p className="text-gray-600">
                Learn the proper pronunciation and recitation of the Quran with Tajweed rules.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </div>

          {/* Online Teaching Skills */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Online Teaching Skills"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Online Teaching Skills</h3>
              <p className="text-gray-600">
                Master the art of delivering engaging and impactful lessons in a virtual setting.
              </p>
              <button className="mt-4 px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600">
                Learn More
              </button>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Digital Marketing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">
                Reach a broader audience by learning SEO, social media, and email marketing strategies.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
                Learn More
              </button>
            </div>
          </div>

          {/* How to Use ChatGPT */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="How to Use ChatGPT"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">How to Use ChatGPT</h3>
              <p className="text-gray-600">
                Learn how to leverage ChatGPT for educational content, research, and productivity.
              </p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg">
            Join our courses today and start your journey toward modern and traditional excellence.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
}
