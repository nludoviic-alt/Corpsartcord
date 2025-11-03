import { Sparkles, Target, Eye, ArrowRight, Users, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import image1 from "@/assets/1.webp";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Créativité",
      description: "Nous encourageons l'innovation et l'expression artistique sous toutes ses formes",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Nous travaillons ensemble pour créer des projets artistiques exceptionnels",
      color: "from-tertiary/20 to-tertiary/5"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Notre amour pour l'art et la culture se reflète dans chaque projet que nous menons",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons la qualité dans chaque spectacle, atelier et événement",
      color: "from-primary/20 to-tertiary/5"
    }
  ];

  return (
    <main className="pt-0">
      {/* Hero Section avec image en arrière-plan */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={image1}
            alt="Corpsartcord"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          {/* Overlay dégradé pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
        </div>
        
        {/* Contenu du hero */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30 shadow-xl">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              À propos de
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                Corpsartcord
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Une compagnie artistique dédiée à la création, au partage et à l'inclusion culturelle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="default" 
                size="lg" 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              >
                <Link to="/spectacles" className="flex items-center gap-2">
                  Découvrir nos spectacles <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-2 border-white/40 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/60 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              >
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre histoire avec image */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={image1}
                    alt="Notre histoire"
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Texte */}
              <div className="order-1 lg:order-2">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                    Notre histoire
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                    L'art au cœur de notre mission
                  </h2>
                  <div className="w-24 h-1 bg-gradient-primary rounded-full mb-6"></div>
                </div>
                <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  <p className="text-lg sm:text-xl font-medium text-foreground">
                    Fondée avec la conviction que l'art est un langage universel qui rassemble et inspire, 
                    la Compagnie Corpsartcord est née du désir de créer des espaces où la créativité s'épanouit 
                    sans frontières.
                  </p>
                  <p>
                    Depuis nos débuts, nous avons cherché à démocratiser l'accès à la culture et aux arts vivants. 
                    Notre mission est de proposer des expériences artistiques variées, accessibles à tous les publics, 
                    et qui favorisent la rencontre, l'échange et l'enrichissement mutuel.
                  </p>
                  <p>
                    Nous croyons fermement que l'art transforme, éduque et unit. À travers nos spectacles, 
                    nos ateliers et nos événements culturels, nous créons des passerelles entre les artistes 
                    et le public, entre les différentes disciplines artistiques, et entre les différentes communautés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Mission & Vision avec design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Notre engagement
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Deux piliers fondamentaux qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="group relative bg-card rounded-3xl p-8 sm:p-10 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-soft rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Notre mission
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Créer et promouvoir des expériences artistiques de qualité qui favorisent l'inclusion, 
                  la diversité culturelle et l'épanouissement personnel. Nous nous engageons à rendre 
                  l'art accessible à tous, sans distinction d'âge, de culture ou de situation sociale.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group relative bg-card rounded-3xl p-8 sm:p-10 shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-soft rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Notre vision
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Devenir un acteur majeur du paysage culturel, reconnu pour notre créativité, notre 
                  engagement en faveur de l'inclusion et notre capacité à créer des expériences artistiques 
                  transformatrices qui inspirent et rassemblent les communautés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Nos valeurs avec design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Nos valeurs
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action et notre engagement quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl p-6 sm:p-8 shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section améliorée */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,42,133,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8">
            Rejoignez notre aventure artistique
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-foreground/80">
            Que vous soyez artiste, passionné d'art ou simplement curieux, 
            il y a une place pour vous dans notre communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-lg px-8 py-6"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Nous contacter <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <Link to="/adhesion">Devenir membre</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              <Link to="/spectacles">Voir nos spectacles</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
