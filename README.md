# 🌺 Carnet de Voyage Interactif — Polynésie Française

Un site web interactif, moderne et chaleureux conçu pour partager notre aventure polynésienne avec toute notre famille et nos amis en temps réel !

---

## ✨ Fonctionnalités

- **🗺️ Carte Interactive Inter-Îles (Leaflet)** :
  - Tracé du voyage entre les îles (Tahiti, Moorea, Maupiti, Raiatea & Taha'a, Rangiroa).
  - Marqueurs interactifs avec aperçus photos, dates et statuts (*Visité*, *En ce moment*, *À venir*).
- **📖 Journal de Bord & Chronologie** :
  - Récits détaillés jour par jour, anecdotes insolites, météo ressentie et humeur du jour.
  - Filtre interactif par île.
- **📸 Galerie Photos plein écran** :
  - Mosaïque d'images avec agrandissement interactif (Lightbox) et défilement au clavier ou boutons.
- **💌 Livre d'Or Familial** :
  - Vos proches peuvent laisser un mot d'encouragement et un émoji depuis leur téléphone ou ordinateur.
- **⚡ 100% Autonome & Gratuit** :
  - Fonctionne sans serveur ni base de données payante.
  - Hébergement gratuit sur **GitHub Pages**.

---

## 🚀 Tester le site immédiatement en local

Il suffit de double-cliquer sur le fichier `index.html` pour l'ouvrir dans n'importe quel navigateur web (Chrome, Edge, Firefox, Safari) !

---

## ✍️ Comment ajouter ou modifier une étape ?

Toutes les données du voyage sont centralisées dans le fichier [`js/trip-data.js`](./js/trip-data.js).

Pour ajouter une nouvelle journée ou une nouvelle île :
1. Ouvrez [`js/trip-data.js`](./js/trip-data.js).
2. Ajoutez un bloc dans `TRIP_STAGES` comme suit :

```javascript
{
    id: "nouvelle-etape",
    title: "Titre de votre journée",
    island: "Nom de l'île",
    status: "current", // 'completed', 'current', ou 'upcoming'
    dates: "12 - 14 Octobre",
    coords: [-17.5516, -149.5585], // Latitude, Longitude (facilement trouvables sur Google Maps)
    summary: "Court résumé pour la carte",
    story: "Votre récit complet...",
    coverImage: "url_de_votre_photo_ou_lien",
    gallery: [
        "url_photo_1",
        "url_photo_2"
    ],
    highlights: [
        "Activité 1",
        "Activité 2"
    ],
    mood: "🌺 Heureux",
    weather: "29°C • Grand soleil"
}
```

---

## 🌐 Déploiement sur GitHub & Mise en Ligne pour la Famille

### Étape 1 : Créer le dépôt sur votre GitHub
1. Rendez-vous sur [github.com/new](https://github.com/new).
2. Nommez votre dépôt (ex: `voyage-polynesie`).
3. Choisissez **Public** (indispensable pour que GitHub Pages soit gratuit).
4. Cliquez sur **Create repository**.

### Étape 2 : Lier et envoyer les fichiers
Dans un terminal dans ce dossier, exécutez :
```bash
git remote add origin https://github.com/<VOTRE-PSEUDO-GITHUB>/voyage-polynesie.git
git branch -M main
git push -u origin main
```

### Étape 3 : Activer l'adresse web pour la famille (GitHub Pages)
1. Sur la page de votre dépôt GitHub, cliquez sur **Settings** (Paramètres) en haut à droite.
2. Dans le menu de gauche, cliquez sur **Pages**.
3. Sous **Branch**, sélectionnez `main` et laissez `/ (root)`, puis cliquez sur **Save**.
4. Au bout d'une minute, votre site est en ligne à l'adresse :  
   `https://<VOTRE-PSEUDO-GITHUB>.github.io/voyage-polynesie/`  
   *(Vous pouvez envoyer directement ce lien WhatsApp à toute votre famille !)*
