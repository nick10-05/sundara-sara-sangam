import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Volume2, Globe } from "lucide-react";
import hanumanHero from "@/assets/hanuman-hero.jpg";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hanumanHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
      </div>

      {/* Mandala Pattern Overlay */}
      <div className="absolute inset-0 mandala-pattern opacity-20" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Theme Toggle */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
          <ThemeToggle />
        </div>
        
        {/* Title Section */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up opacity-0">
          {/* Om Symbol */}
          <div className="mb-6 text-6xl text-gold animate-float">ॐ</div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream tracking-wider mb-4">
            सुन्दरकाण्ड
          </h1>
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-gold-light mb-2">
            SUNDARA KANDA
          </p>
          <div className="w-32 h-1 bg-gradient-sacred mx-auto my-6 rounded-full" />
          <p className="font-body text-lg sm:text-xl text-cream/90 max-w-2xl mx-auto mb-4">
            The Beautiful Chapter of Ramayana
          </p>
          <p className="font-body text-base sm:text-lg text-cream/70 max-w-xl mx-auto">
            Explore Slokas 11-20 with audio narration and multilingual summaries
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-3xl w-full px-4 animate-fade-in-up opacity-0 animation-delay-200">
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-gold/20">
            <BookOpen className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-display text-cream text-sm">10 Sacred Slokas</h3>
            <p className="text-cream/60 text-xs mt-1">Verses 11-20</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-gold/20">
            <Volume2 className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-display text-cream text-sm">Audio Narration</h3>
            <p className="text-cream/60 text-xs mt-1">Divine Chanting</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-gold/20">
            <Globe className="w-8 h-8 text-gold mb-3" />
            <h3 className="font-display text-cream text-sm">6 Languages</h3>
            <p className="text-cream/60 text-xs mt-1">Regional Summaries</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 animate-fade-in-up opacity-0 animation-delay-400">
          <Button
            onClick={() => navigate("/slokas")}
            size="lg"
            className="group bg-gradient-sacred text-cream hover:opacity-90 font-display text-lg px-10 py-7 rounded-full shadow-sacred transition-all duration-300 hover:scale-105 animate-glow"
          >
            Begin Journey
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up opacity-0 animation-delay-500">
          <p className="font-body text-cream/50 text-sm text-center">
            जय श्री राम
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
