angular.module('appRoutes', []).config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {

    $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
         .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup.html',
            controller: 'AuthController'
        });
       

       $urlRouterProvider.otherwise('/');
       $locationProvider.html5Mode({enabled: true,requireBase: false});


       

}]);