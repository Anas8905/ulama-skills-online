export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Empowering Islamic scholars with modern skills to thrive in today’s world.
          </p>

        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://via.placeholder.com/600x400"
                alt="About Us"
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At Future Scholars, we believe in blending traditional knowledge with modern tools. 
                Our mission is to equip Islamic scholars with the necessary skills to excel in the 
                digital age while staying true to their values and traditions.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                By offering tailored courses, we aim to help scholars share their knowledge with 
                the world, expand their reach, and create meaningful impacts using technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM10 17l-5-5 1.5-1.5L10 14l7.5-7.5L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl">Quality Education</h3>
              <p className="text-gray-600 mt-2">
                Our courses are designed by experts to ensure you gain practical and impactful knowledge.
              </p>
            </div>
            {/* Reason 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM10 17l-5-5 1.5-1.5L10 14l7.5-7.5L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl">Modern Skills</h3>
              <p className="text-gray-600 mt-2">
                Learn essential skills like Digital Marketing, Web Development, and using AI tools.
              </p>
            </div>
            {/* Reason 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM10 17l-5-5 1.5-1.5L10 14l7.5-7.5L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="font-semibold text-xl">Community Focus</h3>
              <p className="text-gray-600 mt-2">
                Join a supportive community of learners who share your values and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg">
            Enroll in our courses and take the first step toward a brighter future.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
