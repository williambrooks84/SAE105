Ci-dessous, l'arborescence du projet. Comprenez bien comment sont organisées les choses pour pouvoir
garder cette organisation ensuite.

/index.html  
page principale 

/assets
répertoire contenant toutes les ressources utiles comme les images par exemple

/component
répertoire contenant tous les composants (un répertoire par composant)

/component/hero
répertoire du composant Hero. Contient 3 fichiers : 
    . style.css : le css spécifique au composant Hero
    . template.html : le template HTML (avec ses tags) décrivant le composant Hero
    . scripts.js : le module JS du composant Hero avec le code qui permet d'afficher un ou des composants Hero à partie de données JSON

/css
répertoire qui contient le css global à l'application (css commun au site et aux composants)

/data
répertoire qui contient les fichiers JSON contenant les données à utiliser pour afficher les composants. Ici s'y trouve : 
    . hero.json un fichier JSON contenant les données pour 3 composants Hero

/js
répertoire qui contient loader.js, un fichier avec 2 fonctions outils pour vous aider à charger des fichiers JSON 
ou des templates HTML


####################################################
# PRINCIPE GENERAL POUR AJOUTER UN AUTRE COMPOSANT #
####################################################

Pour l'exemple, imaginons vouloir ajouter un composant Recipe pour afficher une recette comme dans les exercices du dernier TD.

1. dupliquez le répertoire /component/Hero et renommez le en /component/Recipe

2. éditez et modifiez les fichiers style.css, template.html et script.js en cohérence avec le composant Recipe 
  (note : dans le cas d'une recette avec liste d'ingrédients, il faudrait aussi ajouter un template pour les ingrédients, 
   par exemple template-ingredient.html)

3. éditez le fichier /css/base.css pour y importer le css propre au composant Recipe.
  Dans notre exemple, cela reviendrait à ajouter l'instruction @import '../component/Recipe/style.css'; dans /css/base.css

4. Ajouter un fichier /data/recipes.json qui contient les données des recettes en JSON

5. Dans /index.html, importez le composant Recipe et afficher où vous le voulez les recettes décrites dans /data/recipes.json

La procédure est valable pour n'importe quel composant !