import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, FileText, Shield, 
         DollarSign, BarChart3, Zap, Building2, Scale, Wallet, 
         ClipboardCheck, TrendingUp, BadgeDollarSign } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const ServicesSlider = () => {
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      title: "ACC",
      desc: "Employers and employees regulations and advice",
      icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Administration & Record Keeping",
      desc: "Keeping you books in order",
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Asset Protection",
      desc: "Personal asset risk management",
      icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Bloodstock Consultancy",
      desc: "specialised taxation financial & business issues",
      icon: <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Business Consultancy",
      desc: "planning, forecasting to increase efficiencies",
      icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Business Structuring",
      desc: "what type of business structure is right for you?",
      icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Company Formation",
      desc: "annual returns and incorporation of a company",
      icon: <Building2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Farm Consultancy",
      desc: "farm budgeting, Cash flows, ownership structures",
      icon: <Scale className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "KiwiSaver",
      desc: "management of KiwiSaver for your business",
      icon: <Wallet className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Tax Compliance",
      desc: "all your tax complaint requirements",
      icon: <ClipboardCheck className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Taxation Planning",
      desc: "plan out your tax situation and minimise your tax",
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
    {
      title: "Wages",
      desc: "we offer a full payroll service through MYOB EXO software",
      icon: <BadgeDollarSign className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
    },
  ];

  const totalSlides = Math.ceil(services.length / cardsPerSlide);

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <SectionWrapper>
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            WE DO
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 bg-white mx-auto" />
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-2 sm:px-4 md:px-6">
            <button
              onClick={prevSlide}
              className={`pointer-events-auto transform 
                p-1.5 sm:p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-all
                ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>

            <button
              onClick={nextSlide}
              className={`pointer-events-auto transform
                p-1.5 sm:p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-all
                ${currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>
          </div>

          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
                >
                  {services
                    .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                    .map((service, index) => (
                      <div
                        key={index}
                        className="group relative p-4 sm:p-6 md:p-8 rounded-lg bg-black/30 backdrop-blur-sm 
                          hover:bg-black/40 transition-all h-full"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 
                          rounded-full bg-primary-green flex items-center justify-center text-white 
                          group-hover:scale-110 transition-transform"
                        >
                          {service.icon}
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold text-white text-center mb-2 sm:mb-3">
                          {service.title}
                        </h3>

                        <p className="text-white/70 text-xs sm:text-sm text-center">
                          {service.desc}
                        </p>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-primary-green w-6 sm:w-8' 
                    : 'bg-white/50 w-1.5 sm:w-2 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSlider;