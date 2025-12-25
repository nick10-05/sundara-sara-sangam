import { useParams, useNavigate } from "react-router-dom";
import { slokas, languages, LanguageCode } from "@/data/slokas";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play, Pause, Volume2, RotateCcw, Loader2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { SummaryAudioPlayer } from "@/components/SummaryAudioPlayer";
import { ThemeToggle } from "@/components/ThemeToggle";
// Background images removed for cleaner sloka view

const SlokaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>("english");
  
  const slokaId = parseInt(id || "11");
  const sloka = slokas.find((s) => s.id === slokaId);
  const currentIndex = slokas.findIndex((s) => s.id === slokaId);
  const prevSloka = currentIndex > 0 ? slokas[currentIndex - 1] : null;
  const nextSloka = currentIndex < slokas.length - 1 ? slokas[currentIndex + 1] : null;
  // background image removed — using neutral background
  
  const {
    isPlaying,
    isLoading,
    progress,
    duration,
    currentTime,
    hasAudio,
    togglePlayback,
    resetPlayback,
    seekTo,
    formatTime,
  } = useAudioPlayer({ slokaId });

  // no-op: removed background image preloading

  if (!sloka) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-display text-2xl text-foreground mb-4">Sloka not found</h2>
          <Button onClick={() => navigate("/slokas")}>Return to Slokas</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Single background image for all slokas */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat sloka-background"
        style={{
          backgroundImage: "url('/images/sloka-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-gradient-header text-cream backdrop-blur-md border-b border-gold/20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/slokas")}
            className="text-foreground hover:text-primary hover:bg-gold/10"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            All Slokas
          </Button>
          <div className="text-center">
            <h1 className="font-display text-lg sm:text-xl text-foreground">
              Sloka {sloka.slokaNumber}
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-10 max-w-4xl relative z-10">
        {/* Sanskrit Section */}
        <section className="animate-fade-in-up opacity-0 mb-8">
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-gold/30 shadow-elevated">
            {/* Sloka image (optional) */}
            {sloka.image && (
              <div className="mb-6 flex items-center justify-center">
                <img
                  src={sloka.image}
                  alt={`Image for Sloka ${sloka.slokaNumber}`}
                  className="w-full max-w-2xl h-auto rounded-xl object-cover shadow-md"
                />
              </div>
            )}

            <div className="text-center mb-6">
              <span className="inline-block bg-gradient-sacred text-cream text-sm font-display px-4 py-1 rounded-full mb-4">
                Sanskrit
              </span>
              <p className="font-body text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed">
                {sloka.sanskrit}
              </p>
            </div>
            <div className="text-center">
              <p className="font-body italic text-muted-foreground text-sm sm:text-base">
                {sloka.transliteration}
              </p>
            </div>
          </div>
        </section>

        {/* Audio Player */}
        <section className="animate-fade-in-up opacity-0 animation-delay-100 mb-8">
          <div className="bg-saffron-light-soft backdrop-blur-md rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <Volume2 className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg text-foreground">Audio Narration</h3>
            </div>
            
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
                <span className="ml-2 text-muted-foreground">Loading audio...</span>
              </div>
            ) : hasAudio ? (
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={resetPlayback}
                  className="rounded-full border-gold/30 hover:bg-gold/10"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
                
                <Button
                  onClick={togglePlayback}
                  size="icon"
                  className="w-14 h-14 rounded-full bg-gradient-sacred text-cream hover:opacity-90 shadow-sacred"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                </Button>

                <div className="flex-1">
                  <Slider
                    value={[progress]}
                    max={100}
                    step={0.1}
                    onValueChange={(value) => seekTo(value[0])}
                    className="cursor-pointer"
                  />
                </div>
                
                <span className="text-sm text-muted-foreground min-w-[80px] text-right">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Volume2 className="w-8 h-8 text-primary/50 mb-3" />
                <p className="text-sm text-foreground mb-2">
                  Audio file not found
                </p>
                <p className="text-xs text-muted-foreground">
                  Please add audio file: <code className="bg-muted px-2 py-1 rounded">public/audio/sloka-{slokaId}.mp3</code>
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Language Tabs */}
        <section className="animate-fade-in-up opacity-0 animation-delay-200 mb-8">
          <Tabs defaultValue="english" onValueChange={(v) => setSelectedLanguage(v as LanguageCode)}>
            <div className="mb-4">
              <h3 className="font-display text-lg text-foreground mb-3">Translation & Summary</h3>
              <TabsList className="flex flex-wrap gap-1 bg-muted/50 p-1 rounded-xl h-auto">
                {languages.map((lang) => (
                  <TabsTrigger
                    key={lang.code}
                    value={lang.code}
                    className="data-[state=active]:bg-gradient-sacred data-[state=active]:text-cream rounded-lg px-3 py-2 text-sm font-display transition-all"
                  >
                    <span className="hidden sm:inline">{lang.name}</span>
                    <span className="sm:hidden">{lang.nativeName}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {languages.map((lang) => (
              <TabsContent key={lang.code} value={lang.code} className="mt-0">
                <div className="space-y-4">
                  {/* Translation */}
                  <div className="bg-saffron-light-soft backdrop-blur-md rounded-xl p-5 border border-border">
                    <h4 className="font-display text-sm text-primary mb-3 uppercase tracking-wide">
                      Translation ({lang.nativeName})
                    </h4>
                    <p className="font-body text-foreground leading-relaxed">
                      {sloka.translations[lang.code]}
                    </p>
                  </div>

                  {/* Word by Word Explanation */}
                  <div className="bg-saffron-light-soft backdrop-blur-md rounded-xl p-5 border border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-4 h-4 text-primary" />
                      <h4 className="font-display text-sm text-primary uppercase tracking-wide">
                        Word by Word Meaning
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sloka.wordByWord.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-2 p-3 bg-muted/30 rounded-lg border border-border/50"
                        >
                          <span className="font-body text-primary font-medium whitespace-nowrap">
                            {item.word}
                          </span>
                          <span className="text-muted-foreground">—</span>
                          <span className="font-body text-foreground">
                            {item.meaning}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary with Audio */}
                  <div className="bg-gradient-to-br from-gold/5 to-gold/10 rounded-xl p-5 border border-gold/20">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-display text-sm text-primary uppercase tracking-wide">
                        Summary ({lang.nativeName})
                      </h4>
                      <SummaryAudioPlayer 
                        text={sloka.summary[lang.code]} 
                        language={lang.code} 
                      />
                    </div>
                    <p className="font-body text-foreground leading-relaxed">
                      {sloka.summary[lang.code]}
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Navigation */}
        <section className="animate-fade-in-up opacity-0 animation-delay-300">
          <div className="flex justify-between items-center gap-4 pt-6 border-t border-border">
            {prevSloka ? (
              <Button
                variant="outline"
                onClick={() => navigate(`/sloka/${prevSloka.id}`)}
                className="flex-1 sm:flex-none border-gold/30 hover:bg-gold/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Sloka {prevSloka.slokaNumber}</span>
                <span className="sm:hidden">Prev</span>
              </Button>
            ) : (
              <div />
            )}

            <Button
              variant="ghost"
              onClick={() => navigate("/slokas")}
              className="text-muted-foreground hover:text-foreground"
            >
              View All
            </Button>

            {nextSloka ? (
              <Button
                onClick={() => navigate(`/sloka/${nextSloka.id}`)}
                className="flex-1 sm:flex-none bg-gradient-sacred text-cream hover:opacity-90"
              >
                <span className="hidden sm:inline">Sloka {nextSloka.slokaNumber}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <div />
            )}
          </div>
        </section>
      </main>

        {/* Footer */}
        <footer className="border-t border-gold/20 py-6 mt-8 bg-gradient-header text-cream backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <p className="text-cream text-sm">
              जय बजरंग बली
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SlokaDetail;
