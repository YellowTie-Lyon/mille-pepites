# SECTIONS — Mille Pépites

Maquette React + Tailwind prête à transposer dans Elementor V4 + WooCommerce.
Chaque racine de section porte `data-section="nom-de-la-section"`. Toutes les données et textes vivent dans `src/mock/data.js`. Tokens : `design-tokens.json`.

## Composants communs (toutes les pages)
1. `promo-bar` — bandeau promo fin, fond espresso
2. `site-header` — logo SVG, menu e-commerce avec icônes (Boutique avec méga-menu : catégories, toppings, édition du mois mise en scène ; Composer ma box ; Édition du mois ; Cadeaux), recherche produits, compte, panier avec compteur ; transparent sur le hero de l'accueil puis fond crème au défilement ; pages institutionnelles reléguées au footer ; menu mobile burger (details/summary)
3. `cart-drawer` — mini-panier latéral (barre de progression livraison offerte, quantités, total)
4. `notices` — notifications WooCommerce (succès / info / erreur)
5. `site-footer` — bord croqué, menu, réseaux, newsletter, moyens de paiement, mentions (aucun titre Hn dans le footer)

## 1. Accueil `/`
- `hero` — H1 masqué ligne par ligne, sous-titre, CTA « Commander » + « Composer ma box », cookie géant SVG croqué qui tourne au défilement (animation-timeline: scroll(), CSS pur, repli animé doux), pastille photo gourmande, note moyenne des avis, réassurance livraison dès le hero
- `arguments-marquee` — bandeau défilant en boucle (CSS)
- `edition-du-mois` — l'édition du mois comme un lancement (tampon « Édition limitée »)
- `best-sellers` — 4 cartes produit (desktop 4 / tablette 2 / mobile 2)
- `nos-toppings` — grille des saveurs, chaque saveur renvoie au filtre boutique
- `formules-box` — unité, 4, 6, 12 + bandeau boîte métal collector
- `comment-ca-marche` — 3 étapes : Je choisis / On cuisine à la main / Je reçois en 48 h
- `savoir-faire` — section sombre : texte + photo d'atelier, tampon « Fait main »
- `avis-clients` — moyenne + 3 cartes notées
- `cadeaux-entreprises` — bande caramel, 2 CTA
- `instagram` — grille de 6 photos
- `faq-courte` — accordéons details/summary
- `newsletter` — inscription

## 2. Boutique `/boutique/` (et `/categorie-produit/:slug/`)
- `boutique-header` — fil d'Ariane, titre, description de catégorie
- `boutique-outils` — filtres catégories, filtres toppings, compteur de résultats, tri
- `boutique-grille` — grille de cartes produit (3/2/1) + pagination
- état vide : `shop-empty`

## 3. Fiche produit `/produit/nom-du-produit/`
- `produit-detail` — galerie (image + 3 vignettes), fil d'Ariane, nom, note, prix, badges, description courte, sélecteur de format (variations), quantité, « Ajouter au panier », réassurance, produits groupés → CTA « Composer ma box »
- `produit-onglets` — Description / Ingrédients & allergènes / Avis
- `produit-associes` — 4 cartes

## 4. Composer ma box `/composer-ma-box/`
- `compose-box-header` — titre + intro
- `compose-box` — choix du format (4/6/12), sélection des cookies avec compteur `{n}/{max}`, récapitulatif collant (aside sticky bureau, barre fixe mobile)

## 5. Panier `/panier/`
- `panier` — articles + quantités, code promo (PEPITES10 = -10 %), barre de progression livraison offerte (35 €), totaux, « Valider ma commande », suggestions
- `panier-vide` — état panier vide

## 6. Commande `/commande/`
- `commande` — coordonnées, adresse de livraison, choix livraison/retrait atelier, message cadeau, paiement (CB / PayPal / virement), case CGV, récapitulatif collant
- `commande-vide` — état panier vide

## 7. Confirmation `/confirmation-de-commande/`
- `confirmation` — numéro de commande, e-mail envoyé, tableau récapitulatif, totaux, livraison & paiement, message cadeau

## 8. Mon compte `/mon-compte/`
- `mon-compte-connexion` — connexion / inscription (maquette : tout e-mail fonctionne)
- `mon-compte` — navigation (Tableau de bord / Commandes / Adresses / Détails du compte / Déconnexion) + contenu par onglet

## 9. Notre histoire `/notre-histoire/`
- `histoire-hero` · `histoire-galerie` (4 photos atelier) · `histoire-chapitres` + tampons · `histoire-sourcing` (ingrédients sourcés + savoir-faire) · `histoire-cta`

## 10. Cadeaux & entreprises `/cadeaux-et-entreprises/`
- `cadeaux-hero` · `cadeaux-boite-metal` (carte produit boîte métal) · `cadeaux-entreprises` (bénéfices + formulaire de demande de devis)

## 11. Livraison & FAQ `/livraison-et-faq/`
- `livraison-hero` · `livraison-cartes` (livraison / retrait / emballage) · `livraison-delais` (tableau) · `livraison-faq` (accordéons par groupe)

## 12. Contact `/contact/`
- `contact` — formulaire (nom, e-mail, sujet, message) + coordonnées et horaires de l'atelier

## 13. Mentions légales & CGV `/mentions-legales/`
- `mentions-legales` — éditeur, hébergement, propriété, données personnelles, CGV (prix, livraison, rétractation, litiges)

## 14. Page 404 `*`
- `page-404` — « Oups, il manque une pépite… cette page a été croquée », logo croqué, 2 CTA

## Carte produit (composant clé, réutilisé partout)
Champs WooCommerce uniquement : image mise en avant, nom, prix (prix barré si promo), description courte d'une ligne, badges (Promo, Rupture, Nouveau, Best-seller, Édition limitée — déduits des données), catégorie, note moyenne, bouton « Ajouter » / « Choisir le format » (variable) / « Composer » (groupé) / état rupture.
Au survol : élévation, zoom de l'image (105 %) et coin croqué qui apparaît. États gérés : survol, focus, panier vide, rupture de stock, notification « Ajouté au panier ».
