import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { X, Filter, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import image5 from "@/assets/5.webp";

const ITEMS_PER_PAGE = 12;

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const categories = ["Tous", "Spectacle", "Atelier", "Performance"];

  const galleryItems = [
    {
      id: 1,
      image: "/pics 2/clapperboard-front-mime-couple-standing-red-curtain.webp",
      title: "Performance collective",
      category: "Spectacle",
    },
    {
      id: 2,
      image: "/pics 2/dancer-4663729_1280.webp",
      title: "Danse contemporaine",
      category: "Performance",
    },
    {
      id: 3,
      image: "/pics 2/two-mime-artist-reading-manuscript-stage.webp",
      title: "Théâtre immersif",
      category: "Spectacle",
    },
    {
      id: 4,
      image: "/pics 2/different-moments-theater-class.webp",
      title: "Atelier arts visuels",
      category: "Atelier",
    },
    {
      id: 5,
      image: "/pics 2/pexels-caleboquendo-8254900.webp",
      title: "Session musicale",
      category: "Atelier",
    },
    {
      id: 6,
      image: "/pics 2/dancer-4663733_1280.webp",
      title: "Expression corporelle",
      category: "Performance",
    },
    {
      id: 7,
      image: "/pics 2/close-up-view-mysterious-woman-with-carnival-mask.webp",
      title: "Masque théâtral",
      category: "Spectacle",
    },
    {
      id: 8,
      image: "/pics 2/process-creating-stand-up-comedy.webp",
      title: "Création comédie",
      category: "Atelier",
    },
    {
      id: 9,
      image: "/pics 2/abstract-dadaism-concept.webp",
      title: "Performance abstraite",
      category: "Performance",
    },
    {
      id: 10,
      image: "/pics 2/50mm-18.webp",
      title: "Portrait artistique",
      category: "Performance",
    },
    {
      id: 11,
      image: "/pics 2/7n.webp",
      title: "Scène artistique",
      category: "Spectacle",
    },
    {
      id: 12,
      image: "/pics 2/IMG-20211121-WA0009.webp",
      title: "Moment de spectacle",
      category: "Spectacle",
    },
    {
      id: 13,
      image: "/pics 2/IMG-20211121-WA0010~2.webp",
      title: "Performance live",
      category: "Performance",
    },
    {
      id: 14,
      image: "/pics 2/IMG-20211121-WA0013.webp",
      title: "Événement culturel",
      category: "Spectacle",
    },
    {
      id: 15,
      image: "/pics 2/IMG-20220808-WA0046.webp",
      title: "Création collective",
      category: "Atelier",
    },
    {
      id: 16,
      image: "/pics 2/IMG-20230302-WA0053.webp",
      title: "Atelier de théâtre",
      category: "Atelier",
    },
    {
      id: 17,
      image: "/pics 2/IMG-20230302-WA0063.webp",
      title: "Session de travail",
      category: "Atelier",
    },
    {
      id: 18,
      image: "/pics 2/IMG-20230302-WA0080.webp",
      title: "Répétition",
      category: "Atelier",
    },
    {
      id: 19,
      image: "/pics 2/IMG-20240312-WA0010.webp",
      title: "Présentation artistique",
      category: "Spectacle",
    },
    {
      id: 20,
      image: "/pics 2/IMG-20240517-WA0052.webp",
      title: "Spectacle 2024",
      category: "Spectacle",
    },
    {
      id: 21,
      image: "/pics 2/IMG_4742.webp",
      title: "Portrait professionnel",
      category: "Performance",
    },
    {
      id: 22,
      image: "/pics 2/MUS04315.webp",
      title: "Performance musicale",
      category: "Performance",
    },
    {
      id: 23,
      image: "/pics 2/REN1.webp",
      title: "Rendez-vous artistique",
      category: "Spectacle",
    },
    {
      id: 24,
      image: "/pics 2/REN2.webp",
      title: "Rencontre culturelle",
      category: "Spectacle",
    },
  ];

  const filteredItems = useMemo(
    () =>
      selectedCategory === "Tous"
        ? galleryItems
        : galleryItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  const visibleItems = useMemo(
    () => filteredItems.slice(0, visibleCount),
    [filteredItems, visibleCount]
  );

  const hasMore = visibleCount < filteredItems.length;

  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [selectedCategory]);

  useEffect(() => {
    if (!hasMore || !loadMoreRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + ITEMS_PER_PAGE, filteredItems.length));
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(loadMoreRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, filteredItems.length]);

  const currentImage = selectedImage !== null ? filteredItems.find(item => item.id === selectedImage) : null;
  const currentIndex = selectedImage !== null ? filteredItems.findIndex(item => item.id === selectedImage) : -1;

  const nextImage = useCallback(() => {
    if (selectedImage !== null && currentIndex < filteredItems.length - 1) {
      const nextItem = filteredItems[currentIndex + 1];
      if (nextItem) setSelectedImage(nextItem.id);
    }
  }, [selectedImage, currentIndex, filteredItems]);

  const prevImage = useCallback(() => {
    if (selectedImage !== null && currentIndex > 0) {
      const prevItem = filteredItems[currentIndex - 1];
      if (prevItem) setSelectedImage(prevItem.id);
    }
  }, [selectedImage, currentIndex, filteredItems]);

  return (
    <main className="pt-0">
      {/* Hero Section avec image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image5}
            alt="Galerie"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Galerie
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Découvrez en images nos spectacles, ateliers et moments partagés
            </p>
          </div>
        </div>
      </section>

      {/* Filters - Design amélioré */}
      <section className="py-8 sm:py-10 bg-card/80 backdrop-blur-sm border-b border-border sticky top-[64px] z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Filter className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-base font-semibold text-foreground">Filtrer par :</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Aucune image trouvée dans cette catégorie.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
                  onClick={() => setSelectedImage(item.id)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-sm font-semibold text-primary mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {hasMore && (
            <div ref={loadMoreRef} className="h-20 flex items-center justify-center mt-8">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal amélioré */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
          {currentImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white shadow-xl"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative">
                <img
                  src={currentImage.image}
                  alt={currentImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                {currentIndex > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white z-10 shadow-xl"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="w-7 h-7" />
                  </button>
                )}
                {currentIndex < filteredItems.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white z-10 shadow-xl"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="w-7 h-7" />
                  </button>
                )}
              </div>

              <div className="p-6 sm:p-8 bg-black/50 backdrop-blur-sm">
                <div className="text-sm font-semibold text-primary mb-2">
                  {currentImage.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {currentImage.title}
                </h3>
                <p className="text-sm text-white/70">
                  Image {currentIndex + 1} sur {filteredItems.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Testimonials Section améliorée */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Témoignages
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div className="bg-card p-6 sm:p-8 rounded-3xl shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 italic leading-relaxed">
                "Une expérience artistique inoubliable ! L'atmosphère inclusive et
                créative m'a permis de m'exprimer librement."
              </p>
              <div className="font-bold text-foreground">Marie D.</div>
              <div className="text-sm text-muted-foreground">
                Participante atelier danse
              </div>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-3xl shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 italic leading-relaxed">
                "Les spectacles de Corpsartcord sont toujours surprenants et
                émouvants. Une vraie célébration de la diversité culturelle."
              </p>
              <div className="font-bold text-foreground">Thomas L.</div>
              <div className="text-sm text-muted-foreground">Spectateur</div>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-3xl shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 italic leading-relaxed">
                "J'ai découvert ma passion pour le théâtre grâce aux ateliers.
                L'équipe est bienveillante et inspirante."
              </p>
              <div className="font-bold text-foreground">Aisha K.</div>
              <div className="text-sm text-muted-foreground">
                Participante atelier théâtre
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
