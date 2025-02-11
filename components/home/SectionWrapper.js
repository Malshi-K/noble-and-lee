export const SectionWrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`relative w-full h-screen flex items-center justify-center overflow-y-auto ${className}`}
    >
      <div className="w-full h-full max-h-screen flex items-center overflow-y-auto no-scrollbar">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
          {children}
        </div>
      </div>
    </div>
  );
};
