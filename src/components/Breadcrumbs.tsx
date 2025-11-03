import { Link, useLocation } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Breadcrumbs = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<{ name: string; path: string }>>([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    
    const routeNames: Record<string, string> = {
      "a-propos": "À Propos",
      "spectacles": "Spectacles",
      "ateliers": "Ateliers",
      "galerie": "Galerie",
      "contact": "Contact",
      "adhesion": "Adhésion",
      "don": "Don",
      "rendez-vous": "Rendez-vous",
      "equipe": "Équipe",
      "mentions-legales": "Mentions légales",
      "confidentialite": "Politique de confidentialité",
    };

    const crumbs = pathnames.map((pathname, index) => {
      const routeToMatch = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        name: routeNames[pathname] || pathname,
        path: routeToMatch,
      };
    });

    setBreadcrumbs(crumbs);
  }, [location]);

  if (location.pathname === "/") return null;

  return (
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link
            to="/"
            className="hover:text-primary transition-colors flex items-center gap-1"
            aria-label="Accueil"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <li key={crumb.path} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-foreground font-medium" aria-current="page">
                {crumb.name}
              </span>
            ) : (
              <Link
                to={crumb.path}
                className="hover:text-primary transition-colors"
              >
                {crumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;




