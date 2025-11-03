/**
 * Utilitaire pour le scroll fluide
 */

/**
 * Scroll fluide optimisé avec requestAnimationFrame
 */
export const smoothScrollTo = (targetY: number, duration: number = 500) => {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Scroll vers un élément avec offset
 */
export const scrollToElement = (
  elementId: string,
  offset: number = 0,
  duration: number = 500
) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  smoothScrollTo(offsetPosition, duration);
};

