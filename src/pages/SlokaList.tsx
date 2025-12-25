import { useNavigate } from "react-router-dom";
import { slokas } from "@/data/slokas";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const SlokaList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background mandala-pattern">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-header text-cream backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-foreground hover:text-primary hover:bg-gold/10"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Home
          </Button>
          <div className="text-center">
            <h1 className="font-display text-xl sm:text-2xl text-foreground">
              सुन्दरकाण्ड
            </h1>
            <p className="text-sm text-muted-foreground">Slokas 11-20</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-10 animate-fade-in-up opacity-0">
            <div className="inline-flex items-center gap-2 bg-gradient-sacred text-cream px-4 py-2 rounded-full text-sm font-display mb-4">
              <BookOpen className="w-4 h-4" />
              Select a Sloka to Explore
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These verses describe Hanuman's entry into Lanka and his first observations of the magnificent demon city.
            </p>
          </div>

          {/* Sloka Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {slokas.map((sloka, index) => (
              <button
                key={sloka.id}
                onClick={() => navigate(`/sloka/${sloka.id}`)}
                className={`group relative text-left p-6 rounded-2xl bg-card border border-border hover:border-gold/50 shadow-sm hover:shadow-gold transition-all duration-300 hover:-translate-y-1 animate-fade-in-up opacity-0`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail */}
                {sloka.image && (
                  <div className="mb-4 h-40 w-full overflow-hidden rounded-lg">
                    <img
                      src={sloka.image}
                      alt={`Thumbnail for Sloka ${sloka.slokaNumber}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {/* Sloka Number Badge */}
                <div className="absolute -top-3 -left-1 bg-gradient-sacred text-cream text-xs font-display px-3 py-1 rounded-full shadow-sacred">
                  Sloka {sloka.slokaNumber}
                </div>

                {/* Sanskrit Text */}
                <div className="mt-3 mb-4">
                  <p className="font-body text-lg text-foreground leading-relaxed line-clamp-2">
                    {sloka.sanskrit}
                  </p>
                </div>

                {/* Transliteration */}
                <p className="text-sm text-muted-foreground italic line-clamp-1 mb-3">
                  {sloka.transliteration}
                </p>

                {/* Summary Preview */}
                <p className="text-sm text-accent-foreground bg-accent/30 p-3 rounded-lg line-clamp-2">
                  {sloka.summary.english}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold/20 py-8 mt-12 bg-gradient-header text-cream backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-cream text-sm">
            ॐ श्री हनुमते नमः
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SlokaList;
