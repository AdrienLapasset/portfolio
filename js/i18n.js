portfolio.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.translations('fr', {
		'CONTACT': 'Contactez moi',
		'Graphic design' : 'Design graphique',
		'Music' : 'Musique',
		'Launch site' : 'Lancer le site',
		'Hello, I am a' : 'Bonjour, je suis',
		'freelance webdesigner' : 'un webdesigner freelance',
		'and' : 'et',
		'front-developer' : 'développeur front',
		'living in Montpellier, France.' : 'vivant à Montpellier',
		'I can help you in your project !' : 'Je peux vous aider sur vos projet web !',
		'Here is a preview of my work.' : 'Voici un apperçu de mon travail.',
		'Here is my CV.' : 'Voici mon CV.',
		'Webdesign / Data visualization / Front-development' : 'Webdesign / Data visualization / Développement front',
		'A smooth and acoustic site for this indie-rock/heavy-pop music band from Lille, France.' : 'Un site tout en douceur qui vous permet de jouer avec les sons composés spécialement par ce groupe de indie-rock/heavy-pop originaire de Lille.',
		'A series of interactive spaceship plans made by Louise Humbert for her graphic design diploma in ESADHaR.' : 'Une série de plans intéractifs de capsules spatiales dessinées par Louise Humbert pour son diplôme national d\'art plastique (DNAP) à l\'ESADHaR.',
		'Design your own spaceship with this random generator, in collaboration with Louise Humbert.' : 'Concevez votre propre vaisseau spatial avec ce générator aléatoire. En collaboration avec Louise Humbert.',
		'Let the user create his own layout on the graphic design festival site from Le Havre, France.' : 'Laissons l\'utilisateur créer sa propre mise en page sur le site d\'Une Saison Graphique, le festival de design graphique du Havre.',
		'Find the hidden links in this Toulouse based music band site. With Thomas Schencker.' : 'Trouvez les liens cachés dans le site d\'Alpaga, groupe de musique Toulousain. En collaboration avec Thomas Schencker.'
	});

	$translateProvider.translations('en', {
		'CONTACT': 'Contact me'
	});

	$translateProvider.preferredLanguage('fr');
}]);