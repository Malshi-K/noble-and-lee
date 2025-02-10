import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, FileText, Shield, DollarSign, BarChart3, Zap, Building2, Scale, Wallet, ClipboardCheck, TrendingUp, BadgeDollarSign } from 'lucide-react';

const ServicesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "ACC",
      desc: "Employers and employees regulations and advice",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "Administration & Record Keeping",
      desc: "Keeping you books in order",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "Asset Protection",
      desc: "Personal asset risk management",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Bloodstock Consultancy",
      desc: "specialised taxation financial & business issues",
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      title: "Business Consultancy",
      desc: "planning, forecasting to increase efficiencies",
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: "Business Structuring",
      desc: "what type of business structure is right for you?",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: "Company Formation",
      desc: "annual returns and incorporation of a company",
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      title: "Farm Consultancy",
      desc: "farm budgeting, Cash flows, ownership structures",
      icon: <Scale className="w-8 h-8" />,
    },
    {
      title: "KiwiSaver",
      desc: "management of KiwiSaver for your business",
      icon: <Wallet className="w-8 h-8" />,
    },
    {
      title: "Tax Compliance",
      desc: "all your tax complaint requirements",
      icon: <ClipboardCheck className="w-8 h-8" />,
    },
    {
      title: "Taxation Planning",
      desc: "plan out your tax situation and minimise your tax",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: "Wages",
      desc: "we offer a full payroll service through MYOB EXO software",
      icon: <BadgeDollarSign className="w-8 h-8" />,
    },
  ];

  const cardsPerSlide = 3;
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
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 w-full px-8 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            WE DO
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-all ${
              currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/30 transition-all ${
              currentSlide === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {services.slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide).map((service, index) => (
                    <div
                      key={index}
                      className="group relative p-8 rounded-lg bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary-green flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {service.icon}
                      </div>

                      <h3 className="text-xl font-semibold text-white text-center mb-3">
                        {service.title}
                      </h3>

                      <p className="text-white/70 text-sm text-center">
                        {service.desc}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-primary-green w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;