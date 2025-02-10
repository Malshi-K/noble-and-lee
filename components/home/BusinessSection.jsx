export default function BusinessSection() {
    return(
        <div className="min-h-screen flex items-center justify-center px-8 md:px-16 py-20">
        <div className="w-full max-w-8xl mx-auto">
          {/* Card Container */}
          <div className="bg-white backdrop-blur-md p-8 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8">
                <h3 className="text-4xl md:text-5xl font-bold text-primary-green relative inline-block">
                  THE BEST SUPPORT AROUND
                  <div className="absolute -bottom-4 left-1/2 lg:left-0 w-36 h-0.5 bg-white transform -translate-x-1/2 lg:translate-x-0"></div>
                </h3>

                <div className="space-y-2">
                  <p className="text-lg text-black/90 max-w-2xl mx-auto lg:mx-0">
                    Noble & Lee is loaded with useful, functional advice
                    to allow you to quickly and easily create amazing
                    results. Often what you need is a real person to
                    provide support so you can focus on whats really
                    important!
                  </p>

                  <ul className="text-black/80 space-y-2 list-none">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-green rounded-full"></div>
                      <span>
                        Gain back your time and leave the accounting and
                        tax to us
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-green rounded-full"></div>
                      <span>
                        Avoid the late nights and stress involved with
                        your accounting
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-green rounded-full"></div>
                      <span>
                        Save cash by getting the best advice minimizing
                        your risks
                      </span>
                    </li>
                  </ul>

                  <button
                    className="mt-8 px-8 py-3 bg-transparent border-2 border-primary-green text-primary-green 
        hover:bg-primary-green hover:text-white transition-all duration-300 uppercase tracking-wider
        font-medium"
                  >
                    CONTACT US
                  </button>
                </div>
              </div>

              {/* Right Video */}
              <div className="relative aspect-video w-full h-full">
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
    )
}