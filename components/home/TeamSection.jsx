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
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(teamMembers.length / cardsPerSlide);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <SectionWrapper>
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-6 sm:mb-8 flex-col md:flex-row gap-4">
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
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-2 sm:px-4">
            <button
              onClick={prevSlide}
              className={`pointer-events-auto p-1.5 sm:p-2 rounded-full 
                bg-primary-green/10 text-primary-green hover:bg-primary-green/20 
                transition-all ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className={`pointer-events-auto p-1.5 sm:p-2 rounded-full 
                bg-primary-green/10 text-primary-green hover:bg-primary-green/20 
                transition-all ${currentSlide === totalSlides - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Slider Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {teamMembers
                      .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                      .map((member, index) => (
                        <div key={index} className="relative group bg-white/95 p-4 rounded-lg">
                          <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto">
                            {/* Photo Frame */}
                            <div
                              className={`relative w-full h-full overflow-hidden border-l-4 sm:border-l-6 
                                border-t-4 sm:border-t-6 ${
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
                          <div className="text-center mt-3">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">
                              {member.name}
                            </h3>
                            <p className="text-primary-green font-medium text-xs sm:text-sm">
                              {member.role}
                            </p>
                            <p className="mt-2 text-gray-600 text-xs">
                              {member.description}
                            </p>

                            {/* Contact Buttons */}
                            <div className="flex items-center justify-center gap-2 mt-3">
                              <a
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center justify-center w-7 h-7 
                                  bg-primary-light rounded-full hover:bg-sky-700 transition-colors"
                                title={`Email ${member.name}`}
                              >
                                <Mail className="w-3.5 h-3.5 text-white" />
                              </a>

                              <a
                                href={member.linkedIn}
                                className="inline-flex items-center justify-center w-7 h-7 
                                  bg-primary-green rounded-full hover:bg-primary-green/90 transition-colors"
                                title={`${member.name}'s LinkedIn Profile`}
                              >
                                <Linkedin className="w-3.5 h-3.5 text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-1.5">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-primary-green w-4 sm:w-6"
                    : "w-1.5 sm:w-2 bg-primary-green/30 hover:bg-primary-green/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;