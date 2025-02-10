import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content - Information */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                GET IN TOUCH
              </h1>
              <p className="text-lg text-white/90">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Address</h2>
                <div className="text-white/90">
                  <p>51 Arawa St</p>
                  <p>PO Box 76, Matamata</p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Contact</h2>
                <div className="space-y-2">
                  <p className="text-white/90">
                    Phone: <span className="text-white">(07) 888 7033</span>
                  </p>
                  <p className="text-white/90">
                    Email: <span className="text-white">info@noble-lee.co.nz</span>
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Hours</h2>
                <div className="text-white/90">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-light text-white px-8 py-3 hover:bg-primary-lighter transition-colors duration-300 uppercase font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;