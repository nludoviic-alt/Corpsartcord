import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* About Section */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-gradient mb-3 sm:mb-4">
              Cie Corpsartcord
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              L'art comme lien, la culture comme langage universel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="group relative inline-block text-muted-foreground hover:text-primary transition-smooth"
                >
                  <span className="relative">Accueil</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="group relative inline-block text-muted-foreground hover:text-primary transition-smooth"
                >
                  <span className="relative">À propos</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/spectacles"
                  className="group relative inline-block text-muted-foreground hover:text-primary transition-smooth"
                >
                  <span className="relative">Spectacles</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
              <li>
                <Link
                  to="/ateliers"
                  className="group relative inline-block text-muted-foreground hover:text-primary transition-smooth"
                >
                  <span className="relative">Ateliers</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="break-words">Paris, France</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="tel:+33123456789" className="break-all hover:text-primary transition-colors">+33 (0)1 23 45 67 89</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <a href="mailto:contact@corpsartcord.fr" className="break-all hover:text-primary transition-colors">contact@corpsartcord.fr</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4">Suivez-nous</h4>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-muted flex items-center justify-center active:bg-primary active:text-primary-foreground transition-all duration-300 active:scale-110 active:shadow-lg active:shadow-primary/30 touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-active:scale-110" />
                <span className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-active:opacity-100 blur-md transition-opacity duration-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-muted flex items-center justify-center active:bg-secondary active:text-secondary-foreground transition-all duration-300 active:scale-110 active:shadow-lg active:shadow-secondary/30 touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-active:scale-110" />
                <span className="absolute inset-0 bg-secondary/20 rounded-full opacity-0 group-active:opacity-100 blur-md transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p className="mb-2 sm:mb-3">
            &copy; {new Date().getFullYear()} Cie Corpsartcord. Tous droits
            réservés.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1 sm:space-x-4 text-xs">
            <Link
              to="/mentions-legales"
              className="group relative inline-block active:text-primary transition-smooth touch-manipulation px-2"
            >
              <span className="relative">Mentions légales</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link
              to="/confidentialite"
              className="group relative inline-block active:text-primary transition-smooth touch-manipulation px-2"
            >
              <span className="relative">Politique de confidentialité</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
          <p className="mt-4 sm:mt-5 pt-4 border-t border-border/50 text-xs text-muted-foreground/80">
            PROPULSÉ PAR{" "}
            <span className="font-semibold text-foreground/70">Logisme inc.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
