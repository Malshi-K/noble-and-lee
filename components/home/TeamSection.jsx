import React, { useState } from "react";
import { Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { teamMembers } from "@/data/teamData";

const TeamSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
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
    <div className="py-8 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-start justify-between mb-12 flex-col md:flex-row gap-4">
          <div>
            <h2 className="text-3xl font-bold text-primary-green">
              Our Leadership Team
            </h2>
            <p className="mt-1 text-primary-light text-sm">
              Meet the Experts Behind Noble & Lee →
            </p>
          </div>
          <p className="text-gray-600 text-xs max-w-sm">
            Here at Noble & Lee we take our job seriously – but that doesn’t
            mean we don’t like to have fun. We understand that treating each
            client as an individual is important so you can trust us with your
            important accounting matters.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute -left-8 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-primary-green/10 text-primary-green hover:bg-primary-green/20 transition-all ${
              currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute -right-8 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-primary-green/10 text-primary-green hover:bg-primary-green/20 transition-all ${
              currentSlide === totalSlides - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Content */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {[...Array(totalSlides)].map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {teamMembers
                      .slice(
                        slideIndex * cardsPerSlide,
                        (slideIndex + 1) * cardsPerSlide
                      )
                      .map((member, index) => (
                        <div key={index} className="relative group">
                          <div className="relative w-48 h-48 mx-auto">
                            {/* Photo Frame */}
                            <div
                              className={`relative w-48 h-48 overflow-hidden border-l-8 border-t-8 
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
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          </div>

                          {/* Member Info */}
                          <div className="text-center mt-3">
                            <h3 className="text-xl font-bold text-gray-900">
                              {member.name}
                            </h3>
                            <p className="text-primary-green font-medium text-sm">
                              {member.role}
                            </p>
                            <p className="mt-2 text-gray-600 text-xs max-w-xs mx-auto">
                              {member.description}
                            </p>

                            {/* Contact Buttons */}
                            <div className="flex items-center justify-center gap-2 mt-3">
                              <a
                                href={`mailto:${member.email}`}
                                className="inline-flex items-center justify-center w-8 h-8 bg-primary-light rounded-full hover:bg-sky-700 transition-colors"
                                title={`Email ${member.name}`}
                              >
                                <Mail className="w-4 h-4 text-white" />
                              </a>

                              <a
                                href={member.linkedIn}
                                className="inline-flex items-center justify-center w-8 h-8 bg-primary-green rounded-full hover:bg-primary-green transition-colors"
                                title={`${member.name}'s LinkedIn Profile`}
                              >
                                <Linkedin className="w-4 h-4 text-white" />
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
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-primary-green w-4"
                    : "bg-primary-green/30 hover:bg-primary-green/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
