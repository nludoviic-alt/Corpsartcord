import { Button } from "@/components/ui/button";
import { Users, Clock, MapPin, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import image3 from "@/assets/3.webp";

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: "Atelier Danse Contemporaine",
      category: "Danse",
      level: "Tous niveaux",
      duration: "2h",
      participants: "Max. 15 personnes",
      location: "Studio principal",
      schedule: "Mardis & Jeudis, 18h-20h",
      image: "/pics 2/dancer-4663729_1280.webp",
      description:
        "Explorez votre créativité à travers le mouvement. Technique, improvisation et expression corporelle.",
    },
    {
      id: 2,
      title: "Théâtre & Improvisation",
      category: "Théâtre",
      level: "Débutants bienvenus",
      duration: "2h30",
      participants: "Max. 12 personnes",
      location: "Salle de théâtre",
      schedule: "Mercredis, 19h-21h30",
      image: "/pics 2/different-moments-theater-class.webp",
      description:
        "Développez votre présence scénique, votre spontanéité et votre jeu d'acteur dans un environnement bienveillant.",
    },
    {
      id: 3,
      title: "Arts Visuels Collectifs",
      category: "Arts plastiques",
      level: "Tous niveaux",
      duration: "3h",
      participants: "Max. 20 personnes",
      location: "Atelier d'art",
      schedule: "Samedis, 14h-17h",
      image: "/pics 2/process-creating-stand-up-comedy.webp",
      description:
        "Peinture, dessin, collage... Créez ensemble des œuvres collaboratives dans une atmosphère conviviale.",
    },
    {
      id: 4,
      title: "Musique du Monde",
      category: "Musique",
      level: "Intermédiaire",
      duration: "2h",
      participants: "Max. 10 personnes",
      location: "Studio de musique",
      schedule: "Vendredis, 20h-22h",
      image: "/pics 2/pexels-caleboquendo-8254900.webp",
      description:
        "Découvrez et pratiquez des instruments et rythmes de différentes cultures musicales.",
    },
  ];

  return (
    <main className="pt-0">
      {/* Hero Section avec image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image3}
            alt="Ateliers"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30 shadow-xl">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Ateliers
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                Participatifs
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Rejoignez nos ateliers créatifs et découvrez vos talents artistiques dans un espace d'apprentissage et de partage
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Un espace pour tous les artistes
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Que vous soyez débutant ou expérimenté, nos ateliers sont conçus pour
              accueillir chacun dans sa singularité. Dans une ambiance bienveillante
              et inclusive, explorez différentes disciplines artistiques et
              développez votre créativité aux côtés d'autres passionnés.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Grid - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.id}
                className="group bg-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 border border-border/50"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-full shadow-lg">
                      {workshop.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">{workshop.title}</h3>
                    <p className="text-white/90 text-lg">{workshop.description}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Durée</span>
                        <p className="font-semibold">{workshop.duration} • {workshop.schedule}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-tertiary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Niveau & Participants</span>
                        <p className="font-semibold">{workshop.level} • {workshop.participants}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Lieu</span>
                        <p className="font-semibold">{workshop.location}</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="default" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-lg py-6" asChild>
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      S'inscrire <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Pourquoi rejoindre nos ateliers ?
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-card rounded-3xl p-8 text-center shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
              <div className="w-20 h-20 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Communauté bienveillante
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Rencontrez des personnes partageant votre passion dans un
                environnement inclusif et chaleureux.
              </p>
            </div>

            <div className="group bg-card rounded-3xl p-8 text-center shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
              <div className="w-20 h-20 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Horaires flexibles</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plusieurs créneaux disponibles pour s'adapter à votre emploi du
                temps et à votre rythme.
              </p>
            </div>

            <div className="group bg-card rounded-3xl p-8 text-center shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50">
              <div className="w-20 h-20 bg-gradient-soft rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Évolution continue</h3>
              <p className="text-muted-foreground leading-relaxed">
                Progressez à votre rythme avec l'accompagnement d'artistes
                professionnels expérimentés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,42,133,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Prêt à libérer votre créativité ?
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-foreground/80">
            Inscrivez-vous dès maintenant et rejoignez notre communauté d'artistes passionnés.
          </p>
          <Button variant="default" size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Workshops;
