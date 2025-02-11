import { SectionWrapper } from "./SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-4 sm:mb-6">
          ABOUT US
        </h2>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 sm:mb-8">
          WE ARE HERE TO SERVE YOU
        </h1>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              We are your local Matamata accounting specialists. We take a unique
              approach to helping our clients achieve results. We can look after
              all your accounting, taxation and business matters. We can show you
              how to make your life simple with integrated systems including Bank
              Link, MYOB and XERO.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
              Our team understand that a human approach built
              upon a solid relationship is the key to happy clients. At Noble &
              Lee we understand the needs of businesses owners in the Waikato
              areas – we have livestock, farming and even a dedicated bloodstock
              expert.
            </p>
          </div>

          <button
            className="mt-6 sm:mt-8 md:mt-10
              px-6 sm:px-8 md:px-10 
              py-2 sm:py-2.5 md:py-3
              border-2 border-primary-green 
              text-primary-green 
              text-sm sm:text-base md:text-lg
              font-medium uppercase
              hover:bg-primary-green 
              hover:text-white 
              transition-all duration-300
              focus:outline-none focus:ring-2 
              focus:ring-primary-green"
          >
            SERVICES
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}