# Cie Corpsartcord - Site Web

Site web de la Compagnie Corpsartcord - Art, Culture & Inclusion

## Technologies utilisées

- **Vite** - Build tool et serveur de développement
- **React** - Bibliothèque JavaScript
- **TypeScript** - Typage statique
- **shadcn-ui** - Composants UI
- **Tailwind CSS** - Framework CSS
- **React Router** - Routage

## Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## Déploiement

Le site est configuré pour être déployé sur **Netlify**.

Configuration automatique via `netlify.toml` :
- Build command: `npm ci && npm run build`
- Publish directory: `dist`

## Structure du projet

```
├── src/
│   ├── components/    # Composants réutilisables
│   ├── pages/         # Pages de l'application
│   ├── assets/        # Images et ressources
│   ├── hooks/         # React hooks personnalisés
│   └── lib/           # Utilitaires
├── public/            # Fichiers statiques
└── dist/              # Build de production
```

## Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Builder pour la production
- `npm run preview` - Prévisualiser le build
- `npm run lint` - Linter le code
- `npm run convert-images` - Convertir les images en WebP
