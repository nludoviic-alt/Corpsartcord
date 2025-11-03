import { Users, Sparkles, Heart, Award, Mail, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import image1 from "@/assets/1.webp";

const Equipe = () => {
  const teamMembers = [
    {
      name: "Sophie Martin",
      role: "Directrice artistique",
      description: "Passionnée par les arts vivants, elle dirige avec créativité et vision nos projets artistiques.",
      image: "/pics/img-20241120-wa0075-high.webp",
      email: "sophie@corpsartcord.fr",
      linkedin: "#",
    },
    {
      name: "Lucas Dubois",
      role: "Coordinateur des ateliers",
      description: "Spécialiste de la pédagogie artistique, il développe nos programmes d'ateliers participatifs.",
      image: "/pics/img-20240715-wa0049-high.webp",
      email: "lucas@corpsartcord.fr",
      linkedin: "#",
    },
    {
      name: "Amélie Rousseau",
      role: "Chargée de communication",
      description: "Elle met en lumière nos projets et construit notre présence dans le paysage culturel.",
      image: "/pics/imp-high.webp",
      email: "amelie@corpsartcord.fr",
      linkedin: "#",
    },
    {
      name: "Marc Chen",
      role: "Responsable partenariats",
      description: "Il développe nos collaborations et ouvre de nouveaux horizons pour notre compagnie.",
      image: "/pics/blanc-restaurant-vente-facebook-publication-high.webp",
      email: "marc@corpsartcord.fr",
      linkedin: "#",
    },
  ];

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
      description: "Nous visons la qualité dans chaque spectacle, atelier et événement que nous organisons",
      color: "from-primary/20 to-tertiary/5"
    }
  ];

  return (
    <main className="pt-0">
      {/* Hero Section avec image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image1}
            alt="Notre équipe"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30 shadow-xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Notre
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent">
                Équipe
              </span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Découvrez les personnes passionnées qui font vivre la Cie Corpsartcord au quotidien
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Rencontrez notre équipe
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Des professionnels dévoués au service de l'art et de la culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-3xl shadow-elegant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-border/50"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-base text-primary font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-xl bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 group/link hover:scale-110"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-primary group-hover/link:scale-110 transition-transform" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-xl bg-tertiary/10 hover:bg-tertiary/20 flex items-center justify-center transition-all duration-300 group/link hover:scale-110"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5 text-tertiary group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Design amélioré */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Nos valeurs
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre équipe au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card p-6 sm:p-8 rounded-3xl shadow-elegant hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center border border-border/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-soft rounded-2xl flex items-center justify-center mb-6 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Us Section améliorée */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 rounded-3xl p-10 sm:p-12 md:p-16 text-center border border-border/50 shadow-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Rejoignez notre équipe
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Vous partagez nos valeurs et souhaitez contribuer à notre mission ? 
              Nous sommes toujours à la recherche de talents passionnés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Nous écrire <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary-foreground text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              >
                <Link to="/adhesion">Rejoindre en tant que membre</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Equipe;
