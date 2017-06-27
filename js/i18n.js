portfolio.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('fr', {
    'CONTACT': 'Contactez moi',
    'Graphic design' : 'Design graphique',
    'Music' : 'Musique',
    'Launch site' : 'Lancer le site',
    'A smooth and acoustic site for this indie-rock/heavy-pop music band from Lille, France.' : 'Un site tout en douceur qui vous permet de jouer avec les sons composés spécialement par ce groupe de indie-rock/heavy-pop originaire de Lille.',
    'A series of interactive spaceship plans made by Louise Humbert for her graphic design diploma in ESADHaR.' : ''
  });
 
  $translateProvider.translations('en', {
    'CONTACT': 'Contact me'
  });
 
  $translateProvider.preferredLanguage('fr');
}]);