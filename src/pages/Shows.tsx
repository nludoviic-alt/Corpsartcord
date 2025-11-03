import { Calendar, MapPin, Clock, ArrowRight, Star, Ticket, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EventCalendar, { Event } from "@/components/EventCalendar";
import { useState } from "react";
import image2 from "@/assets/2.webp";
import image28 from "@/assets/28.webp";
import image31 from "@/assets/31.webp";
import image5 from "@/assets/5.webp";
import image7 from "@/assets/7.webp";

const Shows = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [filterType, setFilterType] = useState<string>("all");
  
  // Image par défaut ou image de l'événement sélectionné
  const getEventImage = () => {
    if (selectedEvent?.image) {
      return selectedEvent.image;
    }
    // Mapping des événements aux images
    const eventImageMap: { [key: string]: string } = {
      "Corps en mouvement": image28,
      "Voix croisées": image31,
      "Atelier Danse Contemporaine": image5,
      "Harmonie urbaine": image7,
    };
    return eventImageMap[selectedEvent?.title || ""] || image28;
  };

  const getEventTitle = () => {
    return selectedEvent?.title || "Nos événements";
  };

  const getEventDescription = () => {
    if (selectedEvent) {
      return selectedEvent.description || "Découvrez cet événement sur le calendrier";
    }
    return "Découvrez tous nos spectacles et ateliers directement sur le calendrier";
  };

  const upcomingShows = [
    {
      id: 1,
      title: "Corps en mouvement",
      type: "Danse contemporaine",
      category: "spectacle",
      date: "15 Mars 2025",
      time: "20h00",
      location: "Théâtre Municipal",
      image: "/pics 2/dancer-4663729_1280.webp",
      description:
        "Une performance de danse contemporaine explorant les thèmes de l'identité et du mouvement.",
      featured: true,
    },
    {
      id: 2,
      title: "Voix croisées",
      type: "Théâtre",
      category: "spectacle",
      date: "22 Mars 2025",
      time: "19h30",
      location: "Espace Culturel",
      image: "/pics 2/two-mime-artist-reading-manuscript-stage.webp",
      description:
        "Une pièce théâtrale collaborative célébrant la diversité des voix et des histoires.",
      featured: false,
    },
    {
      id: 3,
      title: "Harmonie urbaine",
      type: "Musique & Performance",
      category: "spectacle",
      date: "5 Avril 2025",
      time: "21h00",
      location: "Salle des Fêtes",
      image: "/pics 2/pexels-caleboquendo-8254900.webp",
      description:
        "Un concert mêlant musiques du monde et créations originales dans une ambiance festive.",
      featured: false,
    },
    {
      id: 4,
      title: "Rythmes ancestraux",
      type: "Danse traditionnelle",
      category: "spectacle",
      date: "12 Avril 2025",
      time: "19h00",
      location: "Centre Culturel",
      image: image28,
      description:
        "Un voyage dans les traditions à travers la danse et la musique du monde entier.",
      featured: false,
    },
    {
      id: 5,
      title: "Poésie en scène",
      type: "Littérature & Performance",
      category: "spectacle",
      date: "18 Avril 2025",
      time: "20h30",
      location: "Bibliothèque Municipale",
      image: image31,
      description:
        "Une soirée poétique où les mots prennent vie sur scène avec musique et danse.",
      featured: false,
    },
    {
      id: 6,
      title: "Lumières urbaines",
      type: "Multimédia & Arts visuels",
      category: "spectacle",
      date: "25 Avril 2025",
      time: "21h30",
      location: "Espace d'art contemporain",
      image: image5,
      description:
        "Une installation immersive mêlant projections vidéo, lumière et performance.",
      featured: false,
    },
  ];

  const filteredShows = filterType === "all" 
    ? upcomingShows 
    : upcomingShows.filter(show => show.category === filterType);

  const featuredShow = upcomingShows.find(show => show.featured) || upcomingShows[0];

  return (
    <main className="pt-0">
      {/* Hero Section avec image - CONSERVÉ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image2}
            alt="Spectacles"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30 shadow-xl">
              <Ticket className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Spectacles & 
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                Événements
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Découvrez nos performances artistiques uniques et participez à des moments culturels inoubliables
            </p>
          </div>
        </div>
      </section>

      {/* Spectacle à l'affiche - Section mise en avant */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                Spectacle à l'affiche
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Prochainement
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50">
              <div className="relative h-[500px] sm:h-[600px] overflow-hidden group">
                <img
                  src={featuredShow.image}
                  alt={featuredShow.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full shadow-lg">
                    {featuredShow.type}
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{featuredShow.title}</h3>
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
                  {featuredShow.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground block">Date & Heure</span>
                      <p className="font-semibold text-base">{featuredShow.date} - {featuredShow.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-tertiary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground block">Lieu</span>
                      <p className="font-semibold text-base">{featuredShow.location}</p>
                    </div>
                  </div>
                </div>

                <Button variant="default" size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Réserver maintenant <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendrier avec image */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Calendrier des événements
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4"></div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Cliquez sur une date pour voir les événements prévus
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Image à gauche */}
              <div className="relative h-[450px] sm:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={getEventImage()}
                  alt={getEventTitle()}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 transition-all duration-300">
                    {getEventTitle()}
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base transition-all duration-300">
                    {getEventDescription()}
                  </p>
                  {selectedEvent && (
                    <div className="mt-4 flex items-center gap-4 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{selectedEvent.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedEvent.location}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Calendrier à droite */}
              <div className="lg:sticky lg:top-24">
                <EventCalendar onEventSelect={setSelectedEvent} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tous les spectacles - Grille de cartes */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Tous nos spectacles
                </h2>
                <div className="w-24 h-1 bg-gradient-primary rounded-full mb-4"></div>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                  Explorez notre programmation complète et découvrez tous nos événements à venir
                </p>
              </div>
            </div>

            {/* Filtres */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center sm:justify-start">
              <button
                onClick={() => setFilterType("all")}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filterType === "all"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Tous
              </button>
              <button
                onClick={() => setFilterType("spectacle")}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filterType === "spectacle"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Spectacles
              </button>
              <button
                onClick={() => setFilterType("atelier")}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filterType === "atelier"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Ateliers
              </button>
            </div>

            {/* Grille de spectacles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredShows.map((show) => (
                <div
                  key={show.id}
                  className="group bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
                >
                  <div className="relative h-[300px] sm:h-[350px] overflow-hidden">
                    <img
                      src={show.image}
                      alt={show.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                        {show.type}
                      </span>
                    </div>
                    {show.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-full shadow-lg">
                          <Star className="w-3 h-3 fill-current" />
                          À l'affiche
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 line-clamp-2">{show.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {show.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{show.date} - {show.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{show.location}</span>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        En savoir plus <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,42,133,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
              Restez informé de nos événements
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-foreground/80">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et ne manquer aucun spectacle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                <Link to="/contact">S'inscrire à la newsletter</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                <Link to="/galerie">Voir nos réalisations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shows;
