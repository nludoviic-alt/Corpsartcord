# Instructions pour supprimer le cache de prévisualisation Lovable

## Le problème

Les services de partage de liens (Slack, Discord, Facebook, Twitter, etc.) mettent en cache les meta tags Open Graph. Même après avoir supprimé les meta tags du code, ils peuvent encore afficher l'ancienne version avec Lovable.

## Solutions

### 1. Vider le cache Netlify

Dans le dashboard Netlify :
1. Allez dans **Site settings** > **Build & deploy**
2. Cliquez sur **Clear cache and deploy site** ou **Trigger deploy** > **Clear cache and deploy site**
3. Attendez que le nouveau déploiement soit terminé

### 2. Vider les caches des services de partage

#### Facebook/Debugger :
1. Allez sur https://developers.facebook.com/tools/debug/
2. Entrez votre URL : `https://corpsartcord.netlify.app`
3. Cliquez sur **Scrape Again** pour forcer la mise à jour

#### Twitter Card Validator :
1. Allez sur https://cards-dev.twitter.com/validator
2. Entrez votre URL
3. Cliquez sur **Preview card** pour forcer la mise à jour

#### LinkedIn Post Inspector :
1. Allez sur https://www.linkedin.com/post-inspector/
2. Entrez votre URL
3. Cliquez sur **Inspect** pour forcer la mise à jour

### 3. Ajouter des headers de cache dans Netlify

Créer un fichier `public/_headers` :

```
/*
  X-Content-Type-Options: nosniff
  Cache-Control: public, max-age=3600, must-revalidate

/index.html
  Cache-Control: public, max-age=0, must-revalidate
```

Cela force les navigateurs à revalider l'index.html à chaque requête.

### 4. Vérifier que les meta tags sont bien supprimées

Vérifiez que `dist/index.html` ne contient plus :
- ❌ `<meta property="og:image" ...>`
- ❌ `<meta property="og:title" ...>`
- ❌ `<meta name="twitter:card" ...>`
- ❌ Références à `lovable.dev`

### 5. Attendre la propagation

Les caches peuvent prendre :
- **Netlify** : Immédiat après rebuild
- **Services de partage** : 24-48 heures pour certains
- **CDN** : Quelques heures

## Vérification

Testez votre URL avec ces outils :
- https://www.opengraph.xyz/url/https://corpsartcord.netlify.app
- https://developers.facebook.com/tools/debug/

Vous devriez voir :
- ✅ Titre : "Cie Corpsartcord - Art, Culture & Inclusion"
- ✅ Description : "Compagnie artistique dédiée à l'art, la culture et l'inclusion..."
- ❌ Aucune image Lovable
- ❌ Aucune référence à lovable.dev

