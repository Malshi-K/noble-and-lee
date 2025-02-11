import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-primary-green w-full">
      {/* Decorative circles - Responsive sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-24 sm:-bottom-32 lg:-bottom-48 -right-24 sm:-right-32 lg:-right-48 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 rounded-full bg-primary-light/30" />
        <div className="absolute -bottom-12 sm:-bottom-16 lg:-bottom-24 -left-12 sm:-left-16 lg:-left-24 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full bg-primary-green/20" />
      </div>

      <div className="relative z-10 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info Section */}
            <div className="text-center sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <img
                  src="/images/logo.png"
                  alt="Peak Project Management"
                  className="h-12 sm:h-16 w-auto mb-4"
                />
              </div>
              <p className="text-black text-sm max-w-md mx-auto sm:mx-0">
                Noble & Lee have a long history of helping local businesses.
              </p>
            </div>

            {/* Services Section */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-4 text-lg">Our Services</h3>
              <ul className="space-y-2 text-black">
                {[
                  { name: "ACC", href: "/services/project-management" },
                  { name: "Administration & Record Keeping", href: "/services/safety-management" },
                  { name: "Asset Protection", href: "/services/quality-assurance" },
                  { name: "Bloodstock Consultancy", href: "/services/team-coordination" },
                  { name: "Business Consultancy", href: "/services/compliance" },
                ].map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="hover:text-primary-light transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
              <div className="space-y-4">
                <a
                  href="tel:07 888 7033"
                  className="flex items-center justify-center sm:justify-start gap-2 text-black hover:text-primary-light transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>(07) 888 7033</span>
                </a>

                <div className="flex items-start justify-center sm:justify-start gap-2 text-black">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-left">51 Arawa St, PO Box 76, Matamata</span>
                </div>

                <a
                  href="mailto:info@noble-lee.co.nz"
                  className="flex items-center justify-center sm:justify-start gap-2 text-black hover:text-primary-light transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@noble-lee.co.nz</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-black/20 mt-8 pt-6 text-center text-sm text-primary-green">
            <p>
              Copyright © {currentYear} GDC Digital Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;