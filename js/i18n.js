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
		'Hello, what\'s your name ?' : 'Bonjour, comment vous appelez-vous ?',
		'Send' : 'Envoyer',
		'And your email adress ?' : 'Quel est votre adresse mail ?',
		'What\'s your message ?' : 'Et votre message ?',
		'Webdesign / Front-end development' : 'Webdesign / Développement front-end',
		'A smooth and acoustic site for this indie-rock/heavy-pop music band from Lille, France.' : 'Un site tout en douceur qui vous permet de jouer avec les sons composés spécialement par ce groupe d\'indie-rock/heavy-pop originaire de Lille.',
		'A series of interactive spaceship plans made by Louise Humbert for her graphic design diploma in ESADHaR.' : 'Une série de plans intéractifs de capsules spatiales dessinées par Louise Humbert pour son diplôme national d\'art plastique (DNAP) à l\'ESADHaR.',
		'Design your own spaceship with this random generator, in collaboration with Louise Humbert.' : 'Concevez votre propre vaisseau spatial avec ce générator aléatoire. En collaboration avec Louise Humbert.',
		'Let the user create his own layout on the graphic design festival site from Le Havre, France.' : 'Laissons l\'utilisateur créer sa propre mise en page sur le site d\'Une Saison Graphique, le festival de design graphique du Havre.',
		'Find the hidden links in this Toulouse based music band site. With Thomas Schencker.' : 'Trouvez les liens cachés dans le site d\'Alpaga, groupe de musique Toulousain. En collaboration avec Thomas Schencker.'
	});

	$translateProvider.translations('en', {
		'CONTACT': 'Contact me',
		'Application web': 'Web application',
		'Diplomé en design graphique et interactivité à l’école supérieur d’art et design Le Havre Rouen. Je suis passionné par la création et l’intégration d’interfaces et plus largement par la réalisation de projets numériques.' : '',
		'Mes formations et expériences professionnelles m\'ont permis de maitriser les outils de maquettage UI/UX ainsi que le développement front-end.' : '',
		'Toujours curieux de découvrir  les dernières possibilités  du web en terme d’interactivité. J’aime me lancer des défis afin de créer des expériences utilsateurs uniques.' : '',
	});

	$translateProvider.preferredLanguage('fr');
}]);