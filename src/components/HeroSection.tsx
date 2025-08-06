import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 hero-mesh opacity-30"></div>
        {/* Code Snippet Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 text-primary/10 font-mono text-lg animate-pulse">
            {"function solve() {"}
          </div>
          <div className="absolute top-1/3 right-1/4 text-primary/10 font-mono text-sm animate-pulse delay-1000">
            {"return community.build();"}
          </div>
          <div className="absolute bottom-1/3 left-1/3 text-primary/10 font-mono text-lg animate-pulse delay-2000">
            {"} // HackerRank"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          About{" "}
          <span className="text-primary-foreground bg-primary px-3 py-1 rounded-lg inline-block transform hover:scale-105 transition-transform">
            HackerRank
          </span>
          <br />
          <br>
        Developer's  Community
            </br>
        </h1>
        
        <p className={`font-inter text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Connecting the world's developers through code, competition, and community.
          Building the future of technology, one challenge at a time.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
