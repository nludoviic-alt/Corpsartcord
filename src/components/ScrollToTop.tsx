import { useState, useEffect, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { throttle } from "@/utils/performance";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Utilisation de useCallback pour éviter les re-rendus inutiles
  const toggleVisibility = useCallback(throttle(() => {
    setIsVisible(window.scrollY > 300);
  }, 100), []);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [toggleVisibility]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl z-40 transition-all duration-300 hover:scale-110 touch-manipulation"
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default ScrollToTop;