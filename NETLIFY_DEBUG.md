# Guide de Diagnostic Netlify

## ✅ Ce qui a été fait :

1. ✅ Configuration `netlify.toml` mise à jour
2. ✅ Fichier `_redirects` présent dans `dist/`
3. ✅ Code poussé sur GitHub
4. ✅ Configuration améliorée avec `npm install` explicite

## 🔍 Vérifications dans Netlify

### 1. Vérifier les Build Settings
Allez dans **Netlify Dashboard** > **Site settings** > **Build & deploy**

Vérifiez que :
- **Build command** : `npm install && npm run build`
- **Publish directory** : `dist`
- **Node version** : `18` (ou laissez Netlify le détecter automatiquement)

### 2. Vérifier les Build Logs
Allez dans **Netlify Dashboard** > **Deploys** > Cliquez sur le dernier déploiement

**Recherchez les erreurs** :
- ❌ `npm: command not found` → Problème de Node.js
- ❌ `Module not found` → Dépendances manquantes
- ❌ `Build failed` → Erreur de compilation
- ❌ `404` sur les routes → Problème avec `_redirects`

### 3. Vérifier que le Repository est bien connecté
**Site settings** > **Build & deploy** > **Continuous Deployment**

Vérifiez que :
- ✅ Le repository GitHub est connecté
- ✅ La branche est `main`
- ✅ Le build se déclenche à chaque push

## 🛠️ Solutions aux problèmes courants

### Problème 1 : Build échoue
```
Solution : Vérifiez les logs d'erreur
- Si erreur de dépendances : Netlify devrait installer automatiquement
- Si erreur de build : Vérifiez que tous les fichiers sont commités
```

### Problème 2 : Site 404 ou blanc
```
Solution : 
1. Vérifiez que dist/_redirects existe
2. Vérifiez que dist/index.html existe
3. Vérifiez les chemins des assets (doivent être /assets/...)
```

### Problème 3 : Routes React ne fonctionnent pas
```
Solution :
1. Vérifiez que _redirects contient : /*    /index.html   200
2. Dans Netlify, vérifiez que les redirects sont bien configurés
```

### Problème 4 : Assets non chargés (images, CSS, JS)
```
Solution :
1. Vérifiez que tous les fichiers sont dans dist/assets/
2. Vérifiez que les chemins commencent par / (pas ./)
3. Vérifiez les CORS si nécessaire
```

## 📋 Checklist de déploiement

Avant de déployer, vérifiez :
- [ ] Le dossier `dist` existe et contient les fichiers
- [ ] `dist/index.html` existe
- [ ] `dist/_redirects` existe avec le bon contenu
- [ ] `netlify.toml` est à la racine du projet
- [ ] Les changements sont commités et poussés sur GitHub
- [ ] Le repository est connecté à Netlify

## 🚀 Déploiement manuel (si besoin)

Si le déploiement automatique ne fonctionne pas :

1. **Rebuild manuel** :
   - Allez dans **Netlify Dashboard** > **Deploys**
   - Cliquez sur **Trigger deploy** > **Clear cache and deploy site**

2. **Vérifier les fichiers** :
   - Le build doit créer un dossier `dist/`
   - Le dossier `dist/` doit contenir `index.html` et `_redirects`

## 📞 Informations à fournir pour le support

Si le problème persiste, notez :
1. Les **logs de build complets** (copiez depuis Netlify)
2. L'**URL de votre site Netlify**
3. Les **erreurs spécifiques** que vous voyez
4. La **version de Node.js** utilisée

## ✅ Vérification finale

Une fois déployé, testez :
- [ ] La page d'accueil charge (URL principale)
- [ ] Les routes fonctionnent (/a-propos, /spectacles, etc.)
- [ ] Les images se chargent
- [ ] Le slider fonctionne
- [ ] La barre de cookies s'affiche

