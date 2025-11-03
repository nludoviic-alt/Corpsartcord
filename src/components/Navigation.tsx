import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { useState, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

// Composant de lien de navigation memoïsé
const NavLink = memo(({ 
  to, 
  children, 
  isActive,
  onClick
}: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 relative ${
      isActive
        ? "text-white bg-white/20 font-semibold"
        : "text-white/90 hover:text-white hover:bg-white/10"
    }`}
  >
    {children}
    {isActive && (
      <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-white" />
    )}
  </Link>
));

NavLink.displayName = "NavLink";

// Composant de navigation mobile memoïsé
const MobileNavLink = memo(({ 
  to, 
  children, 
  isActive,
  onClick
}: { 
  to: string; 
  children: React.ReactNode; 
  isActive: boolean;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-4 py-3.5 rounded-md text-sm font-medium transition-colors touch-manipulation ${
      isActive
        ? "text-white bg-white/20 font-semibold"
        : "text-white/80 active:text-white active:bg-white/10"
    }`}
  >
    {children}
  </Link>
));

MobileNavLink.displayName = "MobileNavLink";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Utilisation de useCallback pour éviter les re-rendus inutiles
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navLinks = [
    { name: "À Propos", path: "/a-propos" },
    { name: "Rendez-vous", path: "/rendez-vous" },
    { name: "Spectacles", path: "/spectacles" },
    { name: "Ateliers", path: "/ateliers" },
    { name: "Galerie", path: "/galerie" },
    { name: "Equipe", path: "/equipe" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md shadow-lg border-b border-primary/30"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
          >
            <div className="h-12 sm:h-14 w-auto group-hover:scale-105 transition-transform duration-300 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
              <img 
                src={logo} 
                alt="Corpsartcord Logo" 
                className="h-full w-auto"
                loading="eager"
                decoding="async"
                style={{
                  contentVisibility: "auto",
                  contain: "layout style paint"
                }}
              />
            </div>
          </Link>

          {/* Navigation horizontale - Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  isActive={active}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </div>

          {/* Actions à droite */}
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="hidden lg:flex border-white/30 text-white hover:text-white hover:bg-white/10 hover:border-white/50 bg-white/10 backdrop-blur-sm"
            >
              <Link to="/adhesion">Adhésion</Link>
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              asChild
              className="bg-accent text-white hover:bg-accent/90 shadow-sm"
            >
              <Link to="/don" className="flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" />
                DON
              </Link>
            </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors hover:bg-white/10 text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          </div>
        </div>

        {/* Mobile Navigation - Sidebar style */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-primary/30 animate-slide-in-right max-h-[calc(100vh-4rem)] overflow-y-auto bg-primary/95 backdrop-blur-md">
            <div className="space-y-1 pt-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <MobileNavLink
                    key={link.path}
                    to={link.path}
                    isActive={active}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </MobileNavLink>
                );
              })}
              <div className="pt-3 pb-2 space-y-2 border-t border-white/10 mt-2">
                <Link
                  to="/adhesion"
                  onClick={closeMenu}
                  className="block px-4 py-3.5 rounded-md text-sm font-medium border border-white/30 text-white hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors text-center touch-manipulation"
                >
                  Adhésion
                </Link>
                <Link
                  to="/don"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-md text-sm font-semibold bg-accent text-white active:bg-accent/90 transition-colors touch-manipulation"
                >
                  <Heart className="w-4 h-4" />
                  DON
              </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default memo(Navigation);