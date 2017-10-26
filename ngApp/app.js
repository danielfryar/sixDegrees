let app = angular.module("sixDegrees",['ngResource','ui.router']);


app.config(($stateProvider) => {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/app/views/lists.html'
    })
    .state('actors', {
      url: '/actors',
      templateUrl: '/app/views/actors.html'
    })
    .state('movies', {
      url: '/movies',
      templateUrl: '/app/views/movies.html'
    })
    .state('link', {
      url: '/link',
      templateUrl: '/app/views/link.html'
    });
  // $routerProvider.otherwise('/');
  // $locationProvider.html5Mode(true);
});
