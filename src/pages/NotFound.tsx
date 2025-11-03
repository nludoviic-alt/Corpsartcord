import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <main className="pt-24 min-h-screen bg-gradient-to-br from-background via-background to-muted/30 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Illustration */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="w-16 h-16 sm:w-20 sm:h-20 text-primary" />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent/20 rounded-full blur-xl animate-pulse" />
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-foreground mb-4 animate-fade-in">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Page introuvable
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed animate-fade-in">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée. 
            Retournez à l'accueil ou explorez notre site.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              variant="default" 
              size="lg" 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl"
            >
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary-foreground"
            >
              <Link to="/galerie" className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Explorer la galerie
              </Link>
            </Button>
          </div>

          {/* Liens rapides */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border/50 animate-fade-in">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Pages populaires
            </h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link 
                to="/spectacles" 
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              >
                Spectacles
              </Link>
              <Link 
                to="/ateliers" 
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              >
                Ateliers
              </Link>
              <Link 
                to="/a-propos" 
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              >
                À propos
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              >
                Contact
              </Link>
              <Link 
                to="/equipe" 
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
              >
                Équipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
