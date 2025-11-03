# Optimisations de Performance

Ce document décrit toutes les optimisations de performance implémentées sur le site.

## Optimisations Générales

### 1. Code Splitting
- **Routes lazy-loaded** : Toutes les pages sont chargées de manière asynchrone
- **Vendor chunks séparés** : 
  - React/React-DOM/React-Router dans un chunk séparé
  - Composants UI (@radix-ui) dans un chunk séparé
  - Carousel (embla) dans un chunk séparé
  - Icônes (lucide-react) dans un chunk séparé
  - Query (@tanstack) dans un chunk séparé
  - Toast (sonner) dans un chunk séparé
  - Pages individuelles dans leurs propres chunks

### 2. Optimisation des Images
- **Lazy loading** : Toutes les images (sauf celles above-the-fold) utilisent `loading="lazy"`
- **Decoding asynchrone** : Toutes les images utilisent `decoding="async"`
- **Intersection Observer** : Composant `LazyImage` avec détection de visibilité
- **HeroSlider optimisé** : Seule la première image est chargée immédiatement, les autres sont chargées à la demande

### 3. Optimisation du Build
- **Minification** : Esbuild pour JavaScript et CSS
- **CSS Code Splitting** : CSS séparé par route
- **Compression** : Assets optimisés automatiquement
- **Tree Shaking** : Imports non utilisés supprimés automatiquement

### 4. Resource Hints
- **DNS Prefetch** : Pré-résolution DNS pour Google Fonts
- **Preconnect** : Connexion précoce aux domaines externes
- **Preload** : CSS critique préchargé

### 5. Composants Optimisés
- **LazyImage** : Composant avec lazy loading et placeholder
- **HeroSlider** : Chargement conditionnel des images du carousel
- **EventCalendar** : Rendu optimisé avec memo

## Recommandations Futures

1. **Service Worker** : Mettre en place un service worker pour la mise en cache
2. **Image Optimization** : Convertir toutes les images en WebP avec différentes tailles
3. **Font Loading** : Utiliser `font-display: swap` pour les polices
4. **Critical CSS** : Extraire le CSS critique pour le placer inline
5. **Preload Routes** : Précharger les routes les plus visitées

## Métriques à Surveiller

- **First Contentful Paint (FCP)** : < 1.8s
- **Largest Contentful Paint (LCP)** : < 2.5s
- **Time to Interactive (TTI)** : < 3.8s
- **Cumulative Layout Shift (CLS)** : < 0.1
- **First Input Delay (FID)** : < 100ms

