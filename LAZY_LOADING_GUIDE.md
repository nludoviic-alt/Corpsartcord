# Guide du Lazy Loading

## Qu'est-ce que le Lazy Loading ?

Le **lazy loading** (chargement paresseux) est une technique d'optimisation qui consiste à charger les ressources (images, composants, etc.) uniquement lorsqu'elles sont nécessaires, plutôt qu'au chargement initial de la page.

## Avantages

✅ **Amélioration des performances** : Réduction du temps de chargement initial  
✅ **Économie de bande passante** : Images chargées uniquement si visibles  
✅ **Meilleure expérience utilisateur** : Page plus réactive  
✅ **Optimisation mobile** : Particulièrement important sur connexions lentes  

## Implémentation Actuelle

### 1. Routes Lazy-Loaded
Toutes les pages sont chargées de manière asynchrone :

```tsx
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
// etc.
```

### 2. Images avec `loading="lazy"`
La plupart des images utilisent l'attribut natif HTML :

```tsx
<img 
  src={image}
  alt="Description"
  loading="lazy"      // Chargement différé
  decoding="async"    // Décodage asynchrone
/>
```

### 3. Composant LazyImage (Avancé)
Un composant avec Intersection Observer pour un contrôle plus précis :

```tsx
import { LazyImage } from "@/components/LazyImage";

<LazyImage
  src={image}
  alt="Description"
  loading="lazy"
  priority={false}  // true pour images above-the-fold
  className="..."
/>
```

**Avantages du composant LazyImage :**
- Détection précise de la visibilité
- Placeholder pendant le chargement
- Transition fluide à l'apparition
- Préchargement intelligent (50px avant le viewport)

## Utilisation Recommandée

### Images Above-the-Fold (Visibles immédiatement)
```tsx
<img 
  src={image}
  loading="eager"  // Chargement immédiat
  decoding="async"
/>
```

### Images Below-the-Fold (Hors écran)
```tsx
<LazyImage
  src={image}
  loading="lazy"
  priority={false}
/>
```

### Images dans un Carousel
```tsx
// HeroSlider : chargement conditionnel
const shouldLoad = itemIndex === 0 || 
                   current === itemIndex || 
                   current === itemIndex - 1 || 
                   current === itemIndex + 1;
```

## Héros du Slider

Le HeroSlider charge intelligemment :
- **1ère image** : `loading="eager"` (immédiat)
- **Images adjacentes** : Préchargées pour transition fluide
- **Autres images** : Chargement différé

## Bonnes Pratiques

1. ✅ Utiliser `loading="lazy"` pour toutes les images hors écran
2. ✅ Utiliser `loading="eager"` uniquement pour les images critiques
3. ✅ Toujours spécifier `decoding="async"`
4. ✅ Utiliser `LazyImage` pour les images dans les grilles/listes
5. ✅ Précharger les images adjacentes dans les carousels

## Métriques Impactées

- **LCP (Largest Contentful Paint)** : ⬇️ Amélioré
- **FCP (First Contentful Paint)** : ⬇️ Amélioré
- **TTI (Time to Interactive)** : ⬇️ Amélioré
- **Bandwidth Usage** : ⬇️ Réduit de 30-50%

