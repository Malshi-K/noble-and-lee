"use client";

import { useState, useEffect, useRef } from "react";
import {
  Home,
  User,
  Layout,
  FileText,
  Award,
  Mail,
  X,
  Menu,
  ChevronDown,
  Users,
  Building2,
  Briefcase,
  Users2,
  PhoneCall
} from "lucide-react";
import Link from "next/link";
import ServicesSlider from "./ServicesSlider";
import ContactSection from "./ContactSection";
import BusinessSection from "./BusinessSection";
import AboutSection from "./AboutSection";
import TeamSection from "./TeamSection";

// Navigation for the side menu
const menuItems = [
  { id: "home", icon: Home, label: "Home"},
  { id: "services", icon: Layout, label: "Services", hasDropdown: true },
  { id: "bloodstock", icon: FileText, label: "Bloodstock" },
  { id: "about", icon: User, label: "About Us" },
  { id: "news", icon: Award, label: "News" },
  { id: "blog", icon: Award, label: "Blog" },
  { id: "contact", icon: Mail, label: "Contact Us" },
];

// Sections for vertical slider
const sections = [
  {
    id: "home",
    title: "DON'T LET YOUR ACCOUNTING",
    subtitle: "Drive you underground",
    icon: Home,
  },
  {
    id: "about",
    title: "WE ARE EFFICIENT",
    subtitle: "Building Better Together",
    icon: Users,  // Changed from User to Users for team/group context
  },
  {
    id: "business",
    icon: Building2,  // Changed from Layout to Building2 for business context
  },
  {
    id: "services",
    title: "OUR SERVICES",
    subtitle: "What We Offer",
    icon: Briefcase,  // Changed from Layout to Briefcase for services
  },
  {
    id: "team",
    icon: Users2,  // Changed from FileText to Users2 for team representation
  },
  {
    id: "contact",
    title: "GET IN TOUCH",
    subtitle: "Contact Us Today",
    icon: PhoneCall,  // Changed from Mail to PhoneCall for contact
  },
];

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const sliderRef = useRef(null);
  const touchStartY = useRef(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" && activeSection < sections.length - 1) {
        e.preventDefault();
        changeSection(activeSection + 1);
      } else if (e.key === "ArrowUp" && activeSection > 0) {
        e.preventDefault();
        changeSection(activeSection - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, isScrolling]);

  // Handle scroll events
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      setIsScrolling(true);
      if (e.deltaY > 0 && activeSection < sections.length - 1) {
        changeSection(activeSection + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        changeSection(activeSection - 1);
      }

      setTimeout(() => setIsScrolling(false), 1000);
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("wheel", handleWheel, { passive: false });
      return () => slider.removeEventListener("wheel", handleWheel);
    }
  }, [activeSection, isScrolling]);

  // Handle touch events
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!touchStartY.current || isScrolling) return;

      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) > 50) {
        setIsScrolling(true);
        if (diff > 0 && activeSection < sections.length - 1) {
          changeSection(activeSection + 1);
        } else if (diff < 0 && activeSection > 0) {
          changeSection(activeSection - 1);
        }
        touchStartY.current = null;
        setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
      return () => {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [activeSection, isScrolling]);

  const changeSection = (index) => {
    setActiveSection(index);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" ref={sliderRef}>
      {/* Menu Icon */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-12 z-50 text-custom-white hover:text-primary-lighter transition-colors"
      >
        <Menu size={32} />
      </button>

      {/* Side Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Navigation Panel */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Logo Section */}
        <div className="p-8 border-b border-gray-100">
          <div className="w-48 mx-auto">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full object-contain"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="pt-6">
          {menuItems.map(({ id, icon: Icon, label, color, hasDropdown }) => (
            <Link
              key={id}
              href={`/${id}`}
              className="flex items-center px-8 py-4 text-gray-600 hover:text-primary transition-colors group relative"
            >
              <Icon
                size={20}
                className="mr-4"
                style={{ color: id === "home" ? color : "currentColor" }}
              />
              <span className="text-base">{label}</span>
              {hasDropdown && (
                <ChevronDown className="ml-auto w-4 h-4 transition-transform group-hover:rotate-180" />
              )}
            </Link>
          ))}
        </nav>
      </div>

      {/* Vertical Navigation - Icons for home, dots for others */}
      {activeSection === 0 ? (
        <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
          <div className="flex flex-col space-y-6 bg-primary-lighter/10 backdrop-blur-sm rounded-full p-4">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isHome = section.id === "home";
              return (
                <button
                  key={section.id}
                  onClick={() => changeSection(index)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    activeSection === index
                      ? isHome
                        ? "bg-primary-green text-white" // Green background with white icon
                        : "bg-primary text-custom-white"
                      : "text-custom-white hover:bg-primary-lighter/20"
                  }`}
                >
                  <Icon size={20} />
                </button>
              );
            })}
          </div>
        </nav>
      ) : (
        <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30">
          <div className="relative flex flex-col items-center">
            <div className="absolute w-px h-full bg-white/20 -z-10" />
            <div className="space-y-6">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSection(index)}
                  className="group relative flex items-center justify-center w-6 h-6"
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeSection
                        ? "bg-white scale-150"
                        : "bg-white/50 hover:scale-125"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* Background Image with Overlay */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/global-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-custom-black opacity-50" />
      </div>

      {/* Main Content - Vertical Sliding Sections */}
      <main className="relative z-10">
        {sections.map((section, index) => (
          <section
            key={section.id}
            className={`min-h-screen flex items-center absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === activeSection
                ? "translate-y-0"
                : index < activeSection
                ? "-translate-y-full"
                : "translate-y-full"
            }`}
          >
            {section.id === "home" ? (
              // Home Section
              <div className="min-h-screen flex items-center px-8 md:px-16">
                <div className="max-w-4xl">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-6 bg-white/10 backdrop-blur-md shadow-lg">
                        <div className="w-56 h-16 flex items-center justify-center">
                          <img
                            src="/images/logo-white.png"
                            alt="Meteor Agency Logo"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-custom-white leading-tight">
                      DON'T LET YOUR ACCOUNTING
                    </h1>

                    <p className="text-primary-light text-xl max-w-2xl font-bold">
                      Drive you underground
                    </p>

                    <button
                      className="px-8 py-3 bg-transparent border-2 border-primary-light text-primary-light 
                hover:bg-primary hover:border-primary hover:text-custom-white transition-all duration-30"
                    >
                      CONTACT US
                    </button>
                  </div>
                </div>
              </div>
            ) : section.id === "about" ? (
              // About Section
              <AboutSection />
            ) : section.id === "business" ? (
              // Business Section
              <BusinessSection />
            ) : section.id === "services" ? (
              // Services Section
              <ServicesSlider />
            ) : section.id === "team" ? (
              // Work Section
              <div className="w-full px-8 md:px-16">
                <TeamSection />
              </div>
            ) : section.id === "contact" ? (
              // Contact Section
              <ContactSection />
            ) : (
              // Default Section (fallback)
              <div className="max-w-4xl px-8 md:px-16">
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-8xl font-bold text-custom-white leading-tight">
                    {section.title}
                  </h1>
                  <p className="text-primary-lighter text-xl max-w-2xl font-bold">
                    {section.subtitle}
                  </p>
                </div>
              </div>
            )}
          </section>
        ))}
      </main>

      {/* Scroll Down Indicator */}
      {activeSection < sections.length - 1 && (
        <button
          onClick={() => changeSection(activeSection + 1)}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 text-white animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      )}
    </div>
  );
}
