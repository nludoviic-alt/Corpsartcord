import { useState, useEffect, useMemo, useCallback, memo, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Calendar, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import imageA from "@/assets/hero/A.jpg";
import imageB from "@/assets/hero/B.jpg";
import imageC from "@/assets/hero/C.jpeg";
import imageD from "@/assets/hero/D.jpeg";

// Composant memoïsé pour les slides
const SlideItem = memo(({ 
  slide, 
  index,
  isActive,
  shouldLoad
}: { 
  slide: any; 
  index: number;
  isActive: boolean;
  shouldLoad: boolean;
}) => {
  if (!shouldLoad) return null;

  return (
    <div className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
      isActive ? "opacity-100 z-0" : "opacity-0 z-0"
    }`}>
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover scale-105 transition-transform duration-[10000ms] ease-out"
        style={{ 
          willChange: "transform",
          contentVisibility: "auto",
          contain: "layout style paint"
        }}
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
});

SlideItem.displayName = "SlideItem";

const slides = [
  {
    image: imageA,
    title: "Cie Corpsartcord",
    subtitle: "Là où l'art rassemble et inspire",
    tag: "L'Art au Cœur de la Vie",
    description: "Nous célébrons la beauté de la création sous toutes ses formes. Spectacles, ateliers, performances : chaque projet est une invitation à ressentir et à partager.",
    genre: "Compagnie",
    location: "Notre espace",
    audience: "Tous publics",
    date: "Prochain événement à venir",
    cta: "Découvrir nos créations",
  },
  {
    image: imageB,
    title: "Ensemble, faisons vibrer",
    subtitle: "la diversité culturelle",
    tag: "L'Inclusion par la Culture",
    description: "L'art unit, dépasse les frontières et révèle l'humain. La Cie Corpsartcord œuvre pour une culture accessible et inclusive.",
    genre: "Multidisciplinaire",
    location: "Salle principale",
    audience: "Tous publics",
    date: "Programmation en cours",
    cta: "Rejoindre le mouvement",
  },
  {
    image: imageC,
    title: "Offrir aux artistes",
    subtitle: "un lieu d'expression et de liberté",
    tag: "Un Espace d'Expression Libre",
    description: "Nous créons des passerelles entre les talents et le public. Un espace vivant où la créativité s'épanouit.",
    genre: "Participatif",
    location: "Studio créatif",
    audience: "Tous âges",
    date: "Inscriptions ouvertes",
    cta: "Voir nos projets",
  },
  {
    image: imageD,
    title: "Transformons chaque rencontre",
    subtitle: "en expérience artistique",
    tag: "La Culture, une Expérience à Partager",
    description: "Plus qu'une compagnie, Corpsartcord est un concept : un lieu de vie, d'échange et de célébration.",
    genre: "Culturel",
    location: "Divers lieux",
    audience: "Tous publics",
    date: "Programme à venir",
    cta: "Découvrir nos événements",
  },
];

export const HeroSlider = () => {
  const [mobileApi, setMobileApi] = useState<any>(null);
  const [desktopApi, setDesktopApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Écouter les changements du carousel mobile
  useEffect(() => {
    if (!mobileApi) {
      return;
    }

    setCurrent(mobileApi.selectedScrollSnap());
    
    const handleSelect = () => {
      setCurrent(mobileApi.selectedScrollSnap());
    };
    
    mobileApi.on("select", handleSelect);
    
    // Réinitialiser le carousel pour s'assurer que l'autoplay démarre
    const timeout = setTimeout(() => {
      try {
        mobileApi.reInit();
      } catch (e) {
        // Ignorer les erreurs de réinitialisation
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
      mobileApi.off("select", handleSelect);
    };
  }, [mobileApi]);

  // Écouter les changements du carousel desktop
  useEffect(() => {
    if (!desktopApi) {
      return;
    }

    setCurrent(desktopApi.selectedScrollSnap());
    desktopApi.on("select", () => {
      setCurrent(desktopApi.selectedScrollSnap());
    });

    return () => {
      desktopApi.off("select");
    };
  }, [desktopApi]);

  const scrollTo = useCallback((index: number) => {
    // Utiliser l'API disponible (seulement l'une des deux est montée)
    if (mobileApi) {
      mobileApi.scrollTo(index);
    }
    if (desktopApi) {
      desktopApi.scrollTo(index);
    }
  }, [mobileApi, desktopApi]);

  const carouselOptions = useMemo(() => ({
    align: "start" as const,
    loop: true,
    slidesToScroll: 1,
    containScroll: "trimSnaps" as const,
    dragFree: false,
    watchDrag: true,
    watchResize: true,
    skipSnaps: false,
  }), []);

  // Créer les plugins d'autoplay - ne pas utiliser useMemo pour permettre la réinitialisation
  const mobileAutoplayPluginRef = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      stopOnTouch: false,
    })
  );

  const desktopAutoplayPluginRef = useRef(
    Autoplay({
      delay: 6000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  // Préchargement des images adjacentes pour améliorer les performances
  const shouldLoadImage = useCallback((index: number) => {
    return index === 0 || 
           current === index || 
           current === index - 1 || 
           current === index + 1;
  }, [current]);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Version Mobile - Design Full-Screen Harmonisé */}
      <div className="lg:hidden w-full h-screen relative overflow-hidden">
        <Carousel
          setApi={setMobileApi}
          opts={carouselOptions}
          plugins={[mobileAutoplayPluginRef.current]}
          className="w-full h-full"
        >
          <CarouselContent className="-ml-0 h-full">
              {slides.map((slide, index) => (
                <CarouselItem key={index} className="pl-0 basis-full w-full min-w-0 shrink-0 flex-shrink-0 h-full" style={{ width: '100%' }}>
                  <div className="relative h-screen w-full flex flex-col" style={{ width: '100%' }}>
                    {/* Image pleine écran sans overlay global */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none select-none"
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        style={{
                          contentVisibility: "auto",
                          contain: "layout style paint",
                          touchAction: "none"
                        }}
                      />
                      
                      {/* Contenu texte avec overlay uniquement sur le bloc texte */}
                      <div className="absolute inset-0 flex flex-col justify-end px-8 sm:px-10 md:px-12 pt-6 pb-10 z-10" style={{ pointerEvents: 'none' }}>
                        {/* Overlay uniquement derrière le texte - élargi horizontalement */}
                        <div className="absolute -left-8 -right-8 sm:-left-12 sm:-right-12 bottom-0 h-[70%] bg-gradient-to-t from-black/90 via-black/70 to-black/40 pointer-events-none"></div>
                        {/* Tag - Agrandi sur mobile */}
                        <div className="mb-4 animate-fade-in relative z-10">
                          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-full uppercase tracking-wider border border-white/30 whitespace-normal">
                            {slide.tag}
                          </span>
                        </div>

                        {/* Titre - Agrandi sur mobile */}
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-4 animate-fade-in drop-shadow-2xl relative z-10">
                          {slide.title}
                          <br />
                          <span className="text-accent text-3xl sm:text-4xl">
                            {slide.subtitle}
                          </span>
                        </h1>

                        {/* Description - Agrandie sur mobile */}
                        <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-5 line-clamp-3 drop-shadow-lg animate-fade-in relative z-10">
                          {slide.description}
                        </p>

                        {/* Stats en ligne - Agrandies sur mobile */}
                        <div className="flex gap-3 mb-6 animate-fade-in relative z-10">
                          <div className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm text-white/90 font-medium">{slide.genre}</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm text-white/90 font-medium">{slide.location}</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm text-white/90 font-medium">{slide.audience}</span>
                          </div>
                        </div>

                        {/* Boutons - Agrandis */}
                        <div className="flex flex-col gap-3 animate-fade-in relative z-10" style={{ pointerEvents: 'auto' }}>
                          <Link
                            to="/spectacles"
                            className="group flex items-center justify-center gap-2.5 bg-primary text-white px-6 py-4 rounded-xl text-base font-bold active:bg-primary/90 transition-all duration-300 shadow-xl active:scale-[0.97] touch-manipulation"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="truncate">{slide.cta}</span>
                            <ArrowRight className="w-5 h-5 flex-shrink-0 group-active:translate-x-1 transition-transform" />
                          </Link>
                          <Link
                            to="/a-propos"
                            className="flex items-center justify-center px-6 py-4 bg-white/20 backdrop-blur-md text-white border-2 border-white/30 rounded-xl text-base font-semibold active:bg-white/30 transition-all duration-300 active:scale-[0.97] touch-manipulation"
                            onClick={(e) => e.stopPropagation()}
                          >
                            En savoir plus
                          </Link>
                        </div>

                        {/* Date en bas - Agrandie sur mobile */}
                        <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/20 animate-fade-in relative z-10">
                          <div className="w-11 h-11 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-white/80 font-medium uppercase tracking-wider">Prochain événement</p>
                            <p className="text-sm sm:text-base font-semibold text-white leading-tight">
                              {slide.date}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Indicateurs de progression en bas */}
                    <div className="px-4 py-3 bg-black/30 backdrop-blur-sm relative z-20 mt-auto" style={{ pointerEvents: 'auto' }}>
                      <div className="flex items-center justify-center gap-1.5">
                        {slides.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollTo(idx);
                            }}
                            className={`transition-all duration-300 rounded-full touch-manipulation ${
                              current === idx
                                ? "w-8 h-1.5 bg-primary"
                                : "w-1.5 h-1.5 bg-white/40 active:bg-white/60"
                            }`}
                            aria-label={`Slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
        </Carousel>
      </div>

      {/* Version Desktop - Full Screen Harmonisé */}
      <div className="hidden lg:block w-full h-screen relative overflow-hidden">
        {/* Images de fond en plein écran avec overlay optimisé */}
        {slides.map((slideItem, itemIndex) => (
          <SlideItem 
            key={itemIndex}
            slide={slideItem}
            index={itemIndex}
            isActive={current === itemIndex}
            shouldLoad={shouldLoadImage(itemIndex)}
          />
        ))}
        
        <Carousel
          setApi={setDesktopApi}
          opts={carouselOptions}
          plugins={[desktopAutoplayPluginRef.current]}
          className="w-full h-full"
        >
          <div className="relative h-full flex items-center z-10">
            <div className="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 w-full max-w-[98%] lg:max-w-[96%] xl:max-w-[94%] 2xl:max-w-[92%]">
              <div className="grid grid-cols-12 gap-10 xl:gap-12 2xl:gap-14 items-center">
                {/* Colonne gauche - Contenu texte élargi (6 colonnes) avec overlay uniquement sur le bloc texte */}
                <div className="col-span-6 space-y-5 xl:space-y-6 relative z-10">
                  {/* Overlay uniquement derrière le contenu texte - élargi horizontalement */}
                  <div className="absolute -left-8 -right-8 xl:-left-12 xl:-right-12 inset-y-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 rounded-2xl pointer-events-none -z-10"></div>
                  <CarouselContent className="-ml-0">
                    {slides.map((slide, index) => (
                      <CarouselItem key={index} className="pl-0 basis-full min-w-0">
                    <div className="space-y-6 xl:space-y-7 2xl:space-y-8 px-6 xl:px-8 2xl:px-10">
                      {/* Tag */}
                      <div className="inline-block animate-fade-in">
                        <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-full uppercase tracking-wider border border-white/30 shadow-lg whitespace-normal">
                          {slide.tag}
                        </span>
                      </div>

                      {/* Titre - Tailles agrandies et harmonisées avec plus d'espace */}
                      <div className="animate-fade-in space-y-4">
                        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
                          {slide.title}
                        </h1>
                        <h2 className="text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold leading-tight">
                          <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent drop-shadow-lg">
                            {slide.subtitle}
                          </span>
                        </h2>
                      </div>

                      {/* Description - Taille agrandie avec plus de largeur */}
                      <div className="animate-fade-in">
                        <p className="text-base xl:text-lg 2xl:text-xl text-white/95 leading-relaxed max-w-2xl drop-shadow-lg">
                          {slide.description}
                        </p>
                      </div>

                          {/* Stats - Cards avec textes agrandis */}
                          <div className="grid grid-cols-3 gap-4 animate-fade-in">
                            <div className="p-4 xl:p-5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xl hover:bg-white/20 transition-all duration-300">
                              <p className="text-sm xl:text-base font-bold text-white mb-1.5 line-clamp-2 leading-tight">{slide.genre}</p>
                              <p className="text-xs xl:text-sm text-white/75">Genre</p>
                            </div>
                            <div className="p-4 xl:p-5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xl hover:bg-white/20 transition-all duration-300">
                              <p className="text-sm xl:text-base font-bold text-white mb-1.5 line-clamp-2 leading-tight">{slide.location}</p>
                              <p className="text-xs xl:text-sm text-white/75">Lieu</p>
                            </div>
                            <div className="p-4 xl:p-5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xl hover:bg-white/20 transition-all duration-300">
                              <p className="text-sm xl:text-base font-bold text-white mb-1.5 line-clamp-2 leading-tight">{slide.audience}</p>
                              <p className="text-xs xl:text-sm text-white/75">Public</p>
                            </div>
                          </div>

                          {/* Boutons - Tailles agrandies */}
                          <div className="flex flex-wrap gap-4 animate-fade-in pt-2">
                            <Link
                              to="/spectacles"
                              className="group inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
                            >
                              <span>{slide.cta}</span>
                              <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                              to="/a-propos"
                              className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-white/40 text-white rounded-xl text-base font-semibold hover:bg-white/20 hover:border-white/60 transition-all duration-300 backdrop-blur-sm hover:scale-105 active:scale-95"
                            >
                              En savoir plus
                            </Link>
                          </div>

                          {/* Date prochain événement - Agrandi */}
                          <div className="flex items-center gap-4 pt-5 border-t border-white/30 animate-fade-in">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 border border-white/30 shadow-lg">
                              <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="text-xs xl:text-sm text-white/80 font-medium">Prochain événement</p>
                              <p className="text-sm xl:text-base font-semibold text-white leading-tight">
                                {slide.date}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </div>

                {/* Colonne droite - Espace visuel et navigation (6 colonnes) */}
                <div className="col-span-6 relative h-full flex items-center justify-end">
                  {/* Navigation verticale élégante à droite */}
                  <div className="flex flex-col gap-4 z-20 mr-4">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`transition-all duration-500 rounded-full touch-manipulation ${
                          current === index
                            ? "w-3 h-16 bg-primary shadow-2xl ring-2 ring-primary/50"
                            : "w-3 h-10 bg-white/30 hover:bg-white/50 hover:h-12"
                        }`}
                        aria-label={`Aller au slide ${index + 1}`}
                      />
                    ))}
                  </div>


                  {/* Vignettes de navigation en bas */}
                  <div className="absolute bottom-8 right-8 z-20 flex gap-3">
                    {slides.map((slideItem, itemIndex) => (
                      <button
                        key={itemIndex}
                        onClick={() => scrollTo(itemIndex)}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                          current === itemIndex
                            ? "border-primary scale-110 ring-4 ring-primary/30"
                            : "border-white/40 hover:border-white/60 hover:scale-105"
                        }`}
                        aria-label={`Aller au slide ${itemIndex + 1}`}
                      >
                        <img
                          src={slideItem.image}
                          alt={slideItem.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          style={{
                            contentVisibility: "auto",
                            contain: "layout style paint"
                          }}
                        />
                        {current === itemIndex && (
                          <div className="absolute inset-0 bg-primary/30" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contrôles navigation horizontale en bas */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 z-20">
                <button
                  onClick={() => api?.scrollPrev()}
                  className="w-12 h-12 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/60 active:bg-white/30 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation shadow-xl"
                  aria-label="Précédent"
                >
                  <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
                
                {/* Indicateurs centraux */}
                <div className="flex gap-2 items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`transition-all duration-500 rounded-full touch-manipulation ${
                        current === index
                          ? "w-10 h-2.5 bg-primary shadow-lg"
                          : "w-2 h-2 bg-white/50 hover:bg-white/70 hover:w-3"
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => api?.scrollNext()}
                  className="w-12 h-12 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/60 active:bg-white/30 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation shadow-xl"
                  aria-label="Suivant"
                >
                  <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};