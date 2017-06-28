acjvRoutes.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {

    $stateProvider

  // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
         .state('signup', {
            url: '/signup',
            templateUrl: 'views/signup.html',
            controller: 'AuthController'
        });
       

       $urlRouterProvider.otherwise('/');
       $locationProvider.html5Mode({enabled: true,requireBase: false});


       

}]);
