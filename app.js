var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
  // HOME STATES & NESTED VIEWS
    .state('home', {
      url: '/home',
      templateUrl: 'partial-home.html'
    })

    .state('home.list', {
      url: '/list',
      templateUrl: 'partial-home-list.html',
      controller: function($scope) {
        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
      }
    })

    .state('home.paragraph', {
      url: 'paragraph',
      template: 'I could sure use a drink right now'
    })

  // ABOUT STATES & NESTED VIEWS
    .state('about', {
      // url: '/about',
      // templateUrl: 'partial-about.html'
    });
});




