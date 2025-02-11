import React, { useState, useEffect } from "react";
import { Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "@/data/teamData";
import { SectionWrapper } from "./SectionWrapper";

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerSlide(2);
      } else {
        setCardsPerSlide(3);
      }
      setCurrentSlide(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(teamMembers.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <SectionWrapper>
      <div className="w-full max-w-6xl mx-auto bg-white/95 p-4 sm:p-6">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-8 sm:mb-10 flex-col md:flex-row gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-green">
              Our Leadership Team
            </h2>
            <p className="mt-1 text-primary-light text-xs sm:text-sm">
              Meet the Experts Behind Noble & Lee →
            </p>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm max-w-sm">
            Here at Noble & Lee we take our job seriously – but that doesn't
            mean we don't like to have fun. We understand that treating each
            client as an individual is important so you can trust us with your
            important accounting matters.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative px-4 sm:px-8">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
              bg-primary-green/10 text-primary-green hover:bg-primary-green/20 
              transition-all z-10 ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full 
              bg-primary-green/10 text-primary-green hover:bg-primary-green/20 
              transition-all z-10 ${currentSlide === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slider Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {teamMembers
                      .slice(
                        slideIndex * cardsPerSlide,
                        (slideIndex + 1) * cardsPerSlide
                      )
                      .map((member, index) => (
                        <div 
                          key={index} 
                          className="flex flex-col items-center"
                        >
                          {/* Photo Container */}
                          <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
                            <div
                              className={`relative w-full h-full overflow-hidden border-l-4 border-t-4 
                                ${
                                  index % 3 === 0
                                    ? "border-primary-lighter"
                                    : index % 3 === 1
                                    ? "border-primary-light"
                                    : "border-primary-green"
                                }`}
                            >
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-300 
                                  group-hover:scale-105"
                              />
                            </div>
                          </div>

                          {/* Member Info */}
                          <div className="text-center mt-4 flex-grow">
                            <h3 className="text-lg font-bold text-gray-900">
                              {member.name}
                            </h3>
                            <p className="text-primary-green font-medium text-sm mt-1">
                              {member.role}
                            </p>
                            <p className="mt-2 text-gray-600 text-sm">
                              {member.description}
                            </p>
                          </div>

                          {/* Contact Buttons */}
                          <div className="flex items-center justify-center gap-3 mt-4">
                            <a
                              href={`mailto:${member.email}`}
                              className="inline-flex items-center justify-center w-8 h-8 
                                bg-primary-light rounded-full hover:bg-green-700 transition-colors"
                              title={`Email ${member.name}`}
                            >
                              <Mail className="w-4 h-4 text-white" />
                            </a>
                            <a
                              href={member.linkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-8 h-8 
                                bg-primary-green rounded-full hover:bg-primary-green/90 transition-colors"
                              title={`${member.name}'s LinkedIn Profile`}
                            >
                              <Linkedin className="w-4 h-4 text-white" />
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-primary-green w-6"
                    : "w-2 bg-primary-green/30 hover:bg-primary-green/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;