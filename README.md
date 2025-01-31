# PokeShop

PokeShop est une application permettant de voir tous les Pokémon existants, d'afficher leurs informations, et de créer ou supprimer des articles à leur sujet. On peut ajouter des Pokémon à son panier, mais attention, un même Pokémon ne peut être ajouté qu'une seule fois!

## Voir le projet en ligne

Vous pouvez consulter la version déployée de l'application sur https://codeuzz.github.io/PokeShop/

### Installation

Pour installer les dépendances du projet, utilisez la commande suivante :

```bash
npm install
```

### Lancer le projet

Pour démarrer l'application en mode développement, exécutez la commande suivante :

```bash
npm run dev
```

l'application sera disponible à l'adresse suivante : http://localhost:5173/PokeShop/

## Routes disponibles

- `/PokeShop/` : Page d'accueil.
- `/PokeShop/pokemon-list` : Liste de tous les Pokémon.
- `/PokeShop/pokemon-list/:name` : Détails d'un Pokémon spécifique.
- `/PokeShop/articles` : Liste des articles écrits sur les Pokémon.
- `/PokeShop/articles/:id` : Détails d'un article spécifique.

### Contribuer

Si vous souhaitez contribuer à ce projet, n'hésitez pas à forker le repository et à soumettre une PR.
