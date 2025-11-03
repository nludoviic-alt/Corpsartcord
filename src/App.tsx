import { lazy, Suspense, useMemo } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

// Lazy load toutes les pages pour réduire le bundle initial
// Gestion des erreurs améliorée pour le lazy loading
const Home = lazy(() => 
  import("./pages/Home").catch(() => {
    console.error("Failed to load Home page");
    return import("./pages/NotFound");
  })
);

const About = lazy(() => 
  import("./pages/About").catch(() => {
    console.error("Failed to load About page");
    return import("./pages/NotFound");
  })
);

const Shows = lazy(() => 
  import("./pages/Shows").catch(() => {
    console.error("Failed to load Shows page");
    return import("./pages/NotFound");
  })
);

const Workshops = lazy(() => 
  import("./pages/Workshops").catch(() => {
    console.error("Failed to load Workshops page");
    return import("./pages/NotFound");
  })
);

const Gallery = lazy(() => 
  import("./pages/Gallery").catch(() => {
    console.error("Failed to load Gallery page");
    return import("./pages/NotFound");
  })
);

const Contact = lazy(() => 
  import("./pages/Contact").catch(() => {
    console.error("Failed to load Contact page");
    return import("./pages/NotFound");
  })
);

const Adhesion = lazy(() => 
  import("./pages/Adhesion").catch(() => {
    console.error("Failed to load Adhesion page");
    return import("./pages/NotFound");
  })
);

const Don = lazy(() => 
  import("./pages/Don").catch(() => {
    console.error("Failed to load Don page");
    return import("./pages/NotFound");
  })
);

const RendezVous = lazy(() => 
  import("./pages/RendezVous").catch(() => {
    console.error("Failed to load RendezVous page");
    return import("./pages/NotFound");
  })
);

const Equipe = lazy(() => 
  import("./pages/Equipe").catch(() => {
    console.error("Failed to load Equipe page");
    return import("./pages/NotFound");
  })
);

const MentionsLegales = lazy(() => 
  import("./pages/MentionsLegales").catch(() => {
    console.error("Failed to load MentionsLegales page");
    return import("./pages/NotFound");
  })
);

const Confidentialite = lazy(() => 
  import("./pages/Confidentialite").catch(() => {
    console.error("Failed to load Confidentialite page");
    return import("./pages/NotFound");
  })
);

const NotFound = lazy(() => 
  import("./pages/NotFound").catch(() => {
    console.error("Failed to load NotFound page");
    return Promise.resolve({ default: () => <div>Page non trouvée</div> });
  })
);

// Composant de chargement minimal
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Composant d'erreur fallback
const ErrorFallback = () => (
  <div className="flex items-center justify-center min-h-[60vh] bg-background">
    <div className="text-center p-8 bg-card rounded-lg shadow-lg max-w-md">
      <h2 className="text-2xl font-bold text-foreground mb-4">Erreur de chargement</h2>
      <p className="text-muted-foreground mb-6">
        Une erreur s'est produite lors du chargement de la page. Veuillez réessayer.
      </p>
      <button 
        onClick={() => window.location.reload()} 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Recharger la page
      </button>
    </div>
  </div>
);

// Configuration optimisée de QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
});

// Memoïsation du composant principal pour éviter les re-rendus inutiles
const AppContent = () => (
  <div className="flex flex-col min-h-screen">
    <Navigation />
    <Breadcrumbs />
    <div className="flex-1">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/spectacles" element={<Shows />} />
          <Route path="/ateliers" element={<Workshops />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adhesion" element={<Adhesion />} />
          <Route path="/don" element={<Don />} />
          <Route path="/rendez-vous" element={<RendezVous />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
    <Footer />
    <ScrollToTop />
    <CookieConsent />
  </div>
);

const App = () => {
  // Memoïsation du QueryClientProvider pour éviter les re-rendus inutiles
  const queryClientProvider = useMemo(() => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  ), []);

  return queryClientProvider;
};

export default App;