'use client'; // Enables client-side interactivity

import { useState } from 'react';

export default function SubmitFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    career: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    const res = await fetch('/api/send-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (result.success) setStatus('Form submitted successfully!');
    else setStatus('Failed to submit form. Try again.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-lg bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Submit Your Information</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium">
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            />
          </div>

          {/* Career Information */}
          <div>
            <label htmlFor="career" className="block text-gray-700 font-medium">
              Career Information
            </label>
            <textarea
              id="career"
              placeholder="Share your career details or background"
              value={formData.career}
              onChange={(e) => setFormData({ ...formData, career: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            ></textarea>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2 mt-1"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
        {/* Status Message */}
        <p className="text-center mt-4 text-gray-600">{status}</p>
      </div>
    </div>
  );
}
