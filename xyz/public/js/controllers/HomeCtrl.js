acjvCtrl.controller('HomeController', ['$scope','constants','$rootScope', function($scope,constants,$rootScope) {

	$scope.tagline = 'acjv started...';
	//console.log(constants.messages);
	$rootScope.$on('SOME_TAG', function(response) {
		alert('ima here');
		console.log(response);
      // ....
})


}]);

