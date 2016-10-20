# Objectif du TP:

Afficher dans les onglets correspondant la liste des films/cds/livres que vous allez récupérer :
- soit en reprenant les .json du tp jquery
- soit en clonant le repo cours-backend-rest et en le démarant en local
- soit en utilisant le serveur déployé à l'url : https://quiet-plains-77265.herokuapp.com

##
Pour afficher une barre de navigation avec des onglets il faut utiliser le code suivant :
```
<md-tab-group>
	<md-tab>
		<template md-tab-label>Livre</template>
		<template md-tab-content>
			<h1>Some tab content</h1>
		</template>
	</md-tab>
	<md-tab>
		<template md-tab-label>CD</template>
		<template md-tab-content>
			<h1>Some more tab content</h1>
		</template>
	</md-tab>
	<md-tab>
		<template md-tab-label>Film</template>
		<template md-tab-content>
			<h1>Some more tab content</h1>
		</template>
	</md-tab>
</md-tab-group>
```
## Resources exposées par l'API
### Livre
```
get http://localhost:8080/livre  => renvoi tous les livres
get http://localhost:8080/livre/1 => renvoi le livre d'Id 1
put http://localhost:8080/livre/1 => met à jour le livre d'Id 1 (les nouvelles données sont à mettre dans le champ data)
post http://localhost:8080/livre/ => ajoute une nouveau livre (les nouvelles données sont à mettre dans le champ data)
```

### Film
```
get http://localhost:8080/film  => renvoi tous les films
get http://localhost:8080/film/1 => renvoi le film d'Id 1
put http://localhost:8080/film/1 => met à jour le film d'Id 1 (les nouvelles données sont à mettre dans le champ data)
post http://localhost:8080/film/ => ajoute une nouveau film (les nouvelles données sont à mettre dans le champ data)
```

### CD
```
get http://localhost:8080/cd  => renvoi tous les cds
get http://localhost:8080/cd/1 => renvoi le cd d'Id 1
put http://localhost:8080/cd/1 => met à jour le cd d'Id 1 (les nouvelles données sont à mettre dans le champ data)
post http://localhost:8080/cd/ => ajoute une nouveau cd (les nouvelles données sont à mettre dans le champ data)
```