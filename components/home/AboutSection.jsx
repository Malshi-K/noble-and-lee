export default function AboutSection() {
  return (
    <div className="w-full px-8 md:px-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
          ABOUT US
        </h2>

        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          WE ARE HERE TO SERVE YOU
        </h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-white/80 mb-8">
            We are your local Matamata accounting specialists. We take a unique
            approach to helping our clients achieve results. We can look after
            all your accounting, taxation and business matters. We can show you
            how to make your life simple with integrated systems including Bank
            Link, MYOB and XERO. Our team understand that a human approach built
            upon a solid relationship is the key to happy clients. At Noble &
            Lee we understand the needs of businesses owners in the Waikato
            areas – we have livestock, farming and even a dedicated bloodstock
            expert.
          </p>
        </div>

        <button
          className="mt-8 px-12 py-4 border-2 border-primary-green text-primary-green 
            hover:bg-primary-green hover:text-white transition-all duration-300 text-lg uppercase"
        >
          SERVICES
        </button>
      </div>
    </div>
  );
}
