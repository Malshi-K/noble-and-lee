import React from "react";
import { Phone, Mail, Linkedin, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-white text-primary-green">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Bottom right circle */}
        <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full bg-primary-light/30" />
        {/* Bottom left circle - smaller and more transparent */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary-green" />
      </div>

      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info Section */}
            <div>
              <img
                src="/images/logo.png"
                alt="Peak Project Management"
                className="h-16 w-auto mb-4"
              />
              <p className="text-black text-sm">
                Noble & Lee have a long history of helping local businesses.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-black">
                <li>
                  <a
                    href="/services/project-management"
                    className="hover:text-primary-light"
                  >
                    ACC
                  </a>
                </li>
                <li>
                  <a
                    href="/services/safety-management"
                    className="hover:text-primary-light"
                  >
                    Administration & Record Keeping
                  </a>
                </li>
                <li>
                  <a
                    href="/services/quality-assurance"
                    className="hover:text-primary-light"
                  >
                    Asset Protection
                  </a>
                </li>
                <li>
                  <a
                    href="/services/team-coordination"
                    className="hover:text-primary-light"
                  >
                    Bloodstock Consultancy
                  </a>
                </li>
                <li>
                  <a
                    href="/services/compliance"
                    className="hover:text-primary-light"
                  >
                    Business Consultancy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <a
                  href="tel:07 888 7033"
                  className="flex items-start gap-2 text-black"
                >
                  <Phone className="w-5 h-5 mt-1" />
                  <span>(07) 888 7033</span>
                </a>

                <p className="flex items-start gap-2 text-black">
                  <MapPin className="w-5 h-5 mt-1" />
                  <span>51 Arawa St, PO Box 76, Matamata</span>
                </p>
                <a
                  href="mailto:info@noble-lee.co.nz"
                  className="flex items-center gap-2 text-black hover:text-primary-light"
                >
                  <Mail className="w-5 h-5" />
                  info@noble-lee.co.nz
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-black/20 mt-8 pt-8  text-center text-sm text-primary-green">
            <p>
              Copyright © {new Date().getFullYear()} GDC Digital Solutions. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
