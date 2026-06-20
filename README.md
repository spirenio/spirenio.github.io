# Spirenio — site Astro

Site statique généré avec Astro. La coquille commune (en-tête, menu,
pied de page, couleurs) est dans `src/layouts/Layout.astro` + `src/styles/base.css`.
Chaque page est dans `src/pages/`.

## Ajouter une page (ex. quiz N2)
Créer `src/pages/quiz/niveau-2.astro` sur le modèle de `niveau-1.astro` :
elle hérite automatiquement de l'en-tête et du pied de page.

## Publication
Le site se construit et se publie tout seul via GitHub Actions
(`.github/workflows/deploy.yml`) à chaque push sur `main`.
Aucune installation locale nécessaire.
