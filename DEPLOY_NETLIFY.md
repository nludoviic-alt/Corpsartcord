# Guide de déploiement Netlify

## Méthode 1 : Déploiement du dossier DIST (Recommandé - Simple)

### Étape 1 : Préparer le dossier dist
Le dossier `dist/` contient déjà tous les fichiers nécessaires après le build.

### Étape 2 : Déployer sur Netlify
1. Allez sur [Netlify](https://app.netlify.com)
2. Connectez-vous ou créez un compte
3. Cliquez sur **"Sites"** dans le menu
4. Cliquez sur **"Add new site"** > **"Deploy manually"**
5. **Glissez-déposez** le dossier `dist/` entier dans la zone de drop
6. Attendez que le déploiement se termine

### ⚠️ Important pour le déploiement manuel du dossier dist :
- Le fichier `_redirects` est déjà dans le dossier dist
- Les routes React Router fonctionneront automatiquement
- Vous devrez re-déployer manuellement à chaque mise à jour

---

## Méthode 2 : Déploiement avec Git (Automatique)

### Si vous voulez automatiser les déploiements :

1. **Initialiser Git dans votre projet** :
```bash
cd "/Users/ludovic/Desktop/ACHILLE CORPS/DIST"
git init
git add .
git commit -m "Initial commit"
```

2. **Créer un repository sur GitHub/GitLab/Bitbucket**

3. **Pousser le code** :
```bash
git remote add origin VOTRE_URL_REPO
git push -u origin main
```

4. **Dans Netlify** :
   - Connectez votre compte Git
   - Sélectionnez votre repository
   - Netlify détectera automatiquement `netlify.toml`
   - Configuration automatique :
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Cliquez sur "Deploy"

5. **Résultat** : À chaque `git push`, Netlify rebuildera et déploiera automatiquement !

---

## ⚠️ Vérifications importantes

### Avant de déployer le dossier dist :

✅ Le fichier `dist/_redirects` existe (pour les routes React Router)
✅ Le fichier `dist/index.html` existe
✅ Tous les assets sont dans `dist/assets/`
✅ Le build s'est terminé sans erreur

### Après le déploiement :

✅ Testez toutes les routes (/, /a-propos, /spectacles, etc.)
✅ Vérifiez que les images se chargent
✅ Vérifiez que le slider fonctionne
✅ Vérifiez que la barre de cookies s'affiche

---

## En cas de problème :

1. **Routes 404** : Vérifiez que `_redirects` est dans le dossier dist
2. **Build échoue** : Vérifiez les logs dans Netlify
3. **Assets manquants** : Vérifiez que le build a bien copié tous les fichiers

