import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      ...cookies,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
  };

  const toggleCookie = (type: "analytics" | "marketing") => {
    setCookies({ ...cookies, [type]: !cookies[type] });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in-right">
      {/* Version Mobile - Simple */}
      <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
        {!showSettings ? (
          <div className="px-4 py-3">
            <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
              Ce site utilise des cookies pour améliorer votre expérience.
            </p>
            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                onClick={handleAcceptAll}
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 text-xs py-2 h-8"
              >
                Accepter
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRejectAll}
                className="flex-1 text-xs py-2 h-8"
              >
                Refuser
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="px-3 text-xs py-2 h-8"
                aria-label="Paramètres"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="px-4 py-4 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-foreground">Paramètres des cookies</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-xs font-semibold text-foreground mb-1">Nécessaires</h4>
                  <p className="text-xs text-muted-foreground">Obligatoires</p>
                </div>
                <input
                  type="checkbox"
                  checked={cookies.necessary}
                  disabled
                  className="w-4 h-4 rounded border-border text-primary cursor-not-allowed"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-xs font-semibold text-foreground mb-1">Analytiques</h4>
                  <p className="text-xs text-muted-foreground">Statistiques</p>
                </div>
                <input
                  type="checkbox"
                  checked={cookies.analytics}
                  onChange={() => toggleCookie("analytics")}
                  className="w-4 h-4 rounded border-border text-primary cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="text-xs font-semibold text-foreground mb-1">Marketing</h4>
                  <p className="text-xs text-muted-foreground">Publicités</p>
                </div>
                <input
                  type="checkbox"
                  checked={cookies.marketing}
                  onChange={() => toggleCookie("marketing")}
                  className="w-4 h-4 rounded border-border text-primary cursor-pointer"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                onClick={handleAcceptSelected}
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 text-xs py-2 h-8"
              >
                Enregistrer
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="flex-1 text-xs py-2 h-8"
              >
                Annuler
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Version Desktop - Design original */}
      <div className="hidden lg:block p-4 sm:p-6">
        <div className="max-w-4xl mx-auto bg-card border-2 border-border rounded-xl shadow-2xl p-6 sm:p-8">
          {!showSettings ? (
            <>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    Gestion des cookies
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
                    Certains cookies sont nécessaires au fonctionnement du site, d'autres nous aident à analyser 
                    l'utilisation du site. Vous pouvez accepter tous les cookies ou les personnaliser.
                  </p>
                  <Link 
                    to="/confidentialite" 
                    className="text-xs sm:text-sm text-primary hover:underline inline-block mb-4"
                  >
                    En savoir plus sur notre politique de confidentialité
                  </Link>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleAcceptAll}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 sm:flex-none"
                >
                  Tout accepter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  className="border-tertiary text-tertiary hover:bg-tertiary hover:text-tertiary-foreground flex-1 sm:flex-none flex items-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Personnaliser
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-none"
                >
                  Refuser tous
                </Button>
              </div>
            </>
          ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Paramètres des cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Cookies nécessaires</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Essentiels au fonctionnement du site (obligatoires)
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookies.necessary}
                  disabled
                  className="w-5 h-5 rounded border-border text-primary cursor-not-allowed"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Cookies analytiques</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Nous aident à comprendre comment vous utilisez notre site
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookies.analytics}
                  onChange={() => toggleCookie("analytics")}
                  className="w-5 h-5 rounded border-border text-primary cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">Cookies marketing</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Utilisés pour personnaliser les publicités et mesurer leur efficacité
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookies.marketing}
                  onChange={() => toggleCookie("marketing")}
                  className="w-5 h-5 rounded border-border text-primary cursor-pointer"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="default"
                size="sm"
                onClick={handleAcceptSelected}
                className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1 sm:flex-none"
              >
                Enregistrer mes préférences
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(false)}
                className="flex-1 sm:flex-none"
              >
                Annuler
              </Button>
            </div>
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

