import { SectionWrapper } from './SectionWrapper';

export default function BusinessSection() {
  return (
    <SectionWrapper>
      <div className="w-full max-w-6xl mx-auto">
        {/* Card Container */}
        <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-lg overflow-hidden">
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start lg:items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-primary-green relative inline-block pb-3">
                    THE BEST SUPPORT AROUND
                    <div className="absolute -bottom-1 left-1/2 lg:left-0 w-20 sm:w-24 md:w-28 h-0.5 bg-primary-green transform -translate-x-1/2 lg:translate-x-0"></div>
                  </h3>

                  <p className="text-sm sm:text-base md:text-md lg:text-lg text-black/90 max-w-xl mx-auto lg:mx-0 leading-relaxed pt-2">
                    Noble & Lee is loaded with useful, functional advice
                    to allow you to quickly and easily create amazing
                    results. Often what you need is a real person to
                    provide support so you can focus on whats really
                    important!
                  </p>

                  <ul className="text-left text-black/80 space-y-1 sm:space-y-2 list-none max-w-xl mx-auto lg:mx-0 pt-1 sm:pt-2">
                    <li className="flex items-start space-x-1 sm:space-x-2 text-sm md:text-base lg:text-md">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-green rounded-full mt-2"></div>
                      <span>
                        Gain back your time and leave the accounting and
                        tax to us
                      </span>
                    </li>
                    <li className="flex items-start space-x-1 sm:space-x-2 text-sm md:text-base lg:text-md">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-green rounded-full mt-2"></div>
                      <span>
                        Avoid the late nights and stress involved with
                        your accounting
                      </span>
                    </li>
                    <li className="flex items-start space-x-1 sm:space-x-2 text-sm md:text-base lg:text-md">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-green rounded-full mt-2"></div>
                      <span>
                        Save cash by getting the best advice minimizing
                        your risks
                      </span>
                    </li>
                  </ul>

                  <div className="pt-2 sm:pt-4">
                    <button
                      className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 
                      bg-transparent border-2 border-primary-green 
                      text-primary-green hover:bg-primary-green 
                      hover:text-white transition-all duration-300 
                      uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-lg
                      font-medium rounded"
                    >
                      CONTACT US
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Video Container */}
              <div className="relative w-full pt-[56.25%] mt-3 sm:mt-4 lg:mt-0">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-lg"></div>
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
                    src="https://www.youtube.com/embed/rpCaCvTZf-k"
                    title="Noble & Lee Webfile"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}