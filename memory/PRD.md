# PRD — Mille Pépites (maquette e-commerce React + Tailwind)

## Problème initial
Créer la maquette complète (React + Tailwind) du site e-commerce de « Mille Pépites », artisan cookies faits main en France, destinée à être reconstruite à l'identique dans WordPress avec Elementor V4 + WooCommerce. Sections 6 (compatibilité WooCommerce) et 8 (contraintes techniques Elementor) à respecter strictement.

## Personas
- Gourmand·e 18-45 ans, commande pour soi (cookies à l'unité, box)
- Chercheur d'idée cadeau (boîte métal collector, message manuscrit)
- Entreprise / événement (commandes en volume, devis)

## Choix confirmés par l'utilisateur
- Tout simulé côté navigateur, sans backend (panier + compte)
- Formulaires à confirmation visuelle simulée
- Code promo démo : PEPITES10 (-10 %)

## Architecture
- Front uniquement : React (CRA) + Tailwind, react-router-dom v7 (routes françaises à la française)
- Données 100 % centralisées dans src/mock/data.js (structure calquée WooCommerce : type simple/variable/grouped, prix normal/promo, stock, attributs Allergènes/Poids/Format, catégories, étiquettes toppings, avis)
- État global : src/context/StoreContext.jsx (panier persistant localStorage, notices WooCommerce, compte démo, code promo)
- Animations 100 % CSS (révélation au scroll, marquee, hero masqué ligne par ligne) — aucune librairie d'animation
- Icônes Lucide uniquement ; logo SVG maison (cookie croqué) intégré header/footer/404/favicon
- Tokens : design-tokens.json + tailwind.config.js (palette espresso/cookie/caramel/crème/sable/blanc cassé/brique, Fraunces + Manrope, conteneur 1280/24, 3 paliers bureau/tablette/mobile)

## Pages livrées (14) — 2026-02-11
1. Accueil `/` (hero masqué, marquee, édition du mois, best-sellers, toppings, formules/box, 3 étapes, savoir-faire sombre, avis, cadeaux, Instagram, FAQ, newsletter)
2. Boutique `/boutique/` + `/categorie-produit/:slug/` (filtres catégorie+topping, tri, compteur, pagination 13 produits)
3. Fiche produit `/produit/:slug/` (galerie 1+3, formats variables, avis, onglets, associés)
4. Composer ma box `/composer-ma-box/` (formats 4/6/12, compteur, récap collant desktop + barre fixe mobile)
5. Panier `/panier/` (quantités, PEPITES10, progression 35 €, suggestions)
6. Commande `/commande/` (coordonnées, adresse, livraison/retrait, message cadeau, 3 paiements, CGV, récap collant)
7. Confirmation `/confirmation-de-commande/`
8. Mon compte `/mon-compte/` (connexion/inscription démo + dashboard/commandes/adresses/détails)
9. Notre histoire `/notre-histoire/`
10. Cadeaux & entreprises `/cadeaux-et-entreprises/` (formulaire devis)
11. Livraison & FAQ `/livraison-et-faq/`
12. Contact `/contact/`
13. Mentions légales & CGV `/mentions-legales/`
14. 404

## Livrables
- design-tokens.json (couleurs, typos H1-H6, espacements, rayons, ombres, conteneur, paliers, motifs morsure/pépite/tampon/grain)
- SECTIONS.md (chaque page et ses sections dans l'ordre, data-section documentés)
- mock/data.js : 13 produits (cookies 3,50-4,90 €, box 16/23/42 €, boîte métal 32 €), avis, FAQ, menus, tout le copy français

## Vérifié (préview)
- Tunnel complet : compose box 6/6 → panier → PEPITES10 (-10 %) → checkout → confirmation MP-xxxx
- Notification « ajouté au panier », compteur panier, mini-panier latéral
- Filtres/tri/pagination boutique, fiche variable avec 3 formats
- Compte démo : connexion → dashboard → commandes ; 404
- Screenshots bureau 1440 + mobile 390 sans débordement

## Backlog (P1/P2)
- P1 : branchement réel WooCommerce/WordPress (les données mock sont mappées 1:1)
- P1 : validation avancée des formulaires (adresses, IBAN virement)
- P2 : page recherche dédiée, wishlist, avis vérifiés avec photos
