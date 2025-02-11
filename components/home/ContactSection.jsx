import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <SectionWrapper>
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Content - Information (Hidden on mobile) */}
          <div className="hidden md:block space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                GET IN TOUCH
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary-green" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-white">Address</h2>
                  <div className="text-sm text-white/90">
                    <p>51 Arawa St</p>
                    <p>PO Box 76, Matamata</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-primary-green" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-white">Contact</h2>
                  <div className="space-y-1 text-sm">
                    <p className="text-white/90">
                      Phone: <span className="text-white">(07) 888 7033</span>
                    </p>
                    <p className="text-white/90">
                      Email: <span className="text-white">info@noble-lee.co.nz</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-primary-green" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-white">Hours</h2>
                  <div className="text-sm text-white/90">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Heading (Visible only on mobile) */}
          <div className="md:hidden mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">
              GET IN TOUCH
            </h1>
            <p className="text-sm text-white/90">
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl lg:col-start-2">
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 flex flex-col">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm 
                      focus:border-primary-green focus:ring-primary-green 
                      text-sm py-2 px-3"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm 
                      focus:border-primary-green focus:ring-primary-green 
                      text-sm py-2 px-3"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm 
                      focus:border-primary-green focus:ring-primary-green 
                      text-sm py-2 px-3"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-green text-white px-6 py-2.5 
                  rounded-md hover:bg-primary-green/90 transition-colors 
                  duration-300 uppercase text-sm font-medium mt-4
                  focus:outline-none focus:ring-2 
                  focus:ring-offset-2 focus:ring-primary-green"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;