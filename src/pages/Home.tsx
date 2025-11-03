import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Sparkles, ArrowRight, Clock, MapPin, Ticket, Star } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import image28 from "@/assets/28.webp";
import image31 from "@/assets/31.webp";
import image82 from "@/assets/82.jpg";
import dancePerformance from "@/assets/dance-performance.webp";

const Home = () => {
  return (
    <main className="bg-background">
      {/* Hero Section style moderne */}
      <HeroSlider />

      {/* Section Introduction avec Statistiques */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              L'art au cœur de la vie
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Corpsartcord est une compagnie artistique qui célèbre la créativité sous toutes ses formes. 
              Nous créons des espaces de rencontre où l'art devient un langage universel, accessible à tous 
              et source d'inspiration pour chacun.
            </p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">
                8-10
              </div>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                Spectacles par an
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-tertiary mb-2">
                6
              </div>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                Ateliers mensuels
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-accent mb-2">
                180
              </div>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                Participants actifs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">
                6
              </div>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">
                Artistes collaborateurs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Design avec images */}
      <section className="py-0">
        {/* Trois grandes cartes avec images */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Spectacles vivants */}
          <Link 
            to="/spectacles" 
            className="group relative h-[400px] sm:h-[450px] overflow-hidden cursor-pointer block"
            aria-label="Découvrir nos spectacles vivants"
          >
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img
                src={image31}
                alt="Spectacles vivants"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Overlay coloré primary - réduit */}
            <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors duration-300"></div>
            
            {/* Contenu */}
            <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 md:p-12 text-white">
              <div>
                <div className="mb-4">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 mb-3" />
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Spectacles</h3>
                <p className="text-lg sm:text-xl text-white/90 uppercase tracking-wider">vivants</p>
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-white font-semibold text-base sm:text-lg hover:gap-3 transition-all duration-300">
                  Plus d'informations <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          {/* Ateliers artistiques */}
          <Link 
            to="/ateliers" 
            className="group relative h-[400px] sm:h-[450px] overflow-hidden cursor-pointer block"
            aria-label="Découvrir nos ateliers artistiques"
          >
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img
                src={image28}
                alt="Ateliers artistiques"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Overlay coloré tertiary - réduit */}
            <div className="absolute inset-0 bg-tertiary/30 group-hover:bg-tertiary/40 transition-colors duration-300"></div>
            
            {/* Contenu */}
            <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 md:p-12 text-white">
              <div>
                <div className="mb-4">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 mb-3" />
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Ateliers</h3>
                <p className="text-lg sm:text-xl text-white/90 uppercase tracking-wider">artistiques</p>
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-white font-semibold text-base sm:text-lg hover:gap-3 transition-all duration-300">
                  Plus d'informations <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          {/* Événements culturels */}
          <Link 
            to="/spectacles" 
            className="group relative h-[400px] sm:h-[450px] overflow-hidden cursor-pointer block"
            aria-label="Découvrir nos événements culturels"
          >
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img
                src={image82}
                alt="Événements culturels"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Overlay coloré accent - réduit */}
            <div className="absolute inset-0 bg-accent/30 group-hover:bg-accent/40 transition-colors duration-300"></div>
            
            {/* Contenu */}
            <div className="relative h-full flex flex-col justify-between p-8 sm:p-10 md:p-12 text-white">
              <div>
                <div className="mb-4">
                  <Calendar className="w-8 h-8 sm:w-10 sm:h-10 mb-3" />
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">Événements</h3>
                <p className="text-lg sm:text-xl text-white/90 uppercase tracking-wider">culturels</p>
              </div>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-white font-semibold text-base sm:text-lg hover:gap-3 transition-all duration-300">
                  Plus d'informations <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
        
        {/* Section About en bas avec fond coloré */}
        <div className="bg-primary text-white py-16 sm:py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  À propos de Corpsartcord
          </h2>
              </div>
              <div>
                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                  Une compagnie artistique dédiée à la création, au partage et à l'inclusion culturelle. 
                  Nous proposons des spectacles variés, des ateliers accessibles et des événements qui 
                  favorisent la rencontre et l'échange.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-white/80 flex-shrink-0" />
                    <span className="text-white/90">Toute l'année avec 50+ événements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-white/80 flex-shrink-0" />
                    <span className="text-white/90">France et international</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Événements à venir - Design Compact Moderne */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Prochains événements
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ne manquez pas nos prochaines créations artistiques et performances
            </p>
          </div>
          
          {/* Grille de cartes verticales compactes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Événement 1 */}
            <Link to="/spectacles" className="group relative h-[500px] sm:h-[550px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img
                  src="/pics 2/clapperboard-front-mime-couple-standing-red-curtain.webp"
                  alt="Spectacle de danse contemporaine - Rêves Urbains"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              
              {/* Contenu en overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                      Spectacle
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                    Rêves Urbains
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed line-clamp-3 mb-4">
                    Une performance contemporaine mêlant danse et théâtre dans une exploration poétique de la ville moderne.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>15 Mars 2025 - 20h00</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Théâtre Municipal</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>Durée : 1h30</span>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:text-primary transition-colors">
                      Réserver <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Événement 2 */}
            <Link to="/ateliers" className="group relative h-[500px] sm:h-[550px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img
                  src="/pics 2/pexels-caleboquendo-8254900.webp"
                  alt="Atelier de théâtre et improvisation"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1.5 bg-tertiary text-white text-xs font-bold rounded-full shadow-lg">
                      Atelier
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-tertiary transition-colors leading-tight">
                    Atelier Théâtre Improvisation
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed line-clamp-3 mb-4">
                    Découvrez l'art de l'improvisation théâtrale dans un cadre bienveillant, accessible à tous les niveaux.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>22 Mars 2025 - 14h00</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Studio créatif</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>Durée : 2h30</span>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:text-tertiary transition-colors">
                      S'inscrire <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Événement 3 */}
            <Link to="/spectacles" className="group relative h-[500px] sm:h-[550px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0">
                <img
                  src="/pics 2/two-mime-artist-reading-manuscript-stage.webp"
                  alt="Nouveau spectacle - Métamorphoses"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1.5 bg-accent text-foreground text-xs font-bold rounded-full shadow-lg">
                      Performance
            </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-accent transition-colors leading-tight">
                    Métamorphoses
                  </h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed line-clamp-3 mb-4">
                    Une création originale explorant les transformations et les changements à travers les arts vivants.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>5 Avril 2025 - 19h30</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Salle des Fêtes</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>Durée : 1h15</span>
                  </div>
                  <div className="pt-3 border-t border-white/20">
                    <span className="inline-flex items-center gap-2 text-white font-semibold text-sm group-hover:text-accent transition-colors">
                      En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button variant="outline" asChild size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base w-full sm:w-auto">
              <Link to="/spectacles" className="flex items-center gap-2">
                Voir tous les événements <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 sm:py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Ce qu'ils en disent
          </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Les témoignages de notre communauté
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            <div className="group relative bg-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:translate-y-0 border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg sm:rounded-xl" />
              <div className="relative z-10">
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 italic leading-relaxed">
                  "Une expérience artistique extraordinaire ! Les ateliers m'ont permis de découvrir 
                  des talents que je ne soupçonnais pas. L'équipe est incroyablement bienveillante."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/30">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-soft flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    M
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base truncate">Marie L.</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Participante</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:translate-y-0 border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg sm:rounded-xl" />
              <div className="relative z-10">
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 italic leading-relaxed">
                  "Les spectacles sont d'une qualité remarquable. Chaque représentation est unique 
                  et nous transporte dans des univers artistiques surprenants."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/30">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-soft flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    J
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base truncate">Jean-Pierre D.</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Spectateur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-300 hover:-translate-y-2 active:translate-y-0 border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 italic leading-relaxed">
                  "Un lieu de création exceptionnel qui rassemble des artistes de tous horizons. 
                  L'ambiance est inspirante et la programmation toujours riche."
                </p>
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border/30">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-soft flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                    S
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm sm:text-base truncate">Sophie R.</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Artiste</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-20 md:mb-24">
            <div className="animate-fade-in order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                Des spectacles qui inspirent
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Plongez dans des performances artistiques uniques mêlant danse,
                théâtre, musique et arts visuels. Chaque spectacle est une
                célébration de la diversité et de la créativité humaine.
              </p>
              <Button variant="default" asChild className="group/btn relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg active:bg-primary/95 text-sm sm:text-base touch-manipulation">
                <Link to="/spectacles">
                  <span className="relative z-10 flex items-center">
                    Découvrir nos spectacles <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-accent/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
            </div>
            <div className="group relative h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-elegant animate-fade-in-scale cursor-pointer order-1 lg:order-2">
                    <img
                      src={dancePerformance}
                      alt="Performance de danse contemporaine inspirante"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
              />
              {/* Bordure animée */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-all duration-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <div className="group relative h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-elegant order-2 lg:order-1 animate-fade-in-scale cursor-pointer">
                      <img
                        src="/pics 2/pexels-caleboquendo-8254900.webp"
                        alt="Atelier artistique participatif pour tous les âges"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                        decoding="async"
                        width={800}
                        height={600}
              />
              {/* Bordure animée */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-all duration-500" />
            </div>
            <div className="order-1 lg:order-2 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                Des ateliers pour tous
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Participez à nos ateliers créatifs et découvrez vos talents
                artistiques. Danse, théâtre, arts visuels, musique... un espace
                d'apprentissage et de partage pour tous les âges.
              </p>
              <Button variant="default" asChild className="group/btn relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg active:bg-primary/95 text-sm sm:text-base touch-manipulation">
                <Link to="/ateliers">
                  <span className="relative z-10 flex items-center">
                    Rejoindre un atelier <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-accent/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-tertiary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,42,133,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
            Rejoignez notre communauté artistique
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-2xl mx-auto text-foreground/80">
            Que vous soyez artiste, passionné d'art ou simplement curieux,
            nous vous invitons à faire partie de cette aventure culturelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button 
              variant="default" 
              size="lg" 
              asChild 
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-xl active:bg-primary/95 uppercase tracking-wider text-sm sm:text-base transition-all duration-300"
            >
              <Link to="/contact">
                <span className="relative z-10">Nous contacter</span>
                <span className="absolute inset-0 bg-accent/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground uppercase tracking-wider text-sm sm:text-base transition-all duration-300"
            >
              <Link to="/spectacles">Voir les événements</Link>
          </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
